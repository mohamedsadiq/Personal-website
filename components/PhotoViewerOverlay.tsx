import Image, { type StaticImageData } from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useMemo, useState } from 'react'
import { GlassCard } from '@developer-hub/liquid-glass'

export type PhotoPreview = {
  id: string
  src: StaticImageData | string
  alt: string
  caption?: string
  aspectRatio?: number
}

type PhotoViewerOverlayProps = {
  photo: PhotoPreview | null
  onClose: () => void
  zIndex?: number
}

const useViewportSize = (isActive: boolean) => {
  const [size, setSize] = useState(() => {
    if (typeof window !== 'undefined') {
      return { width: window.innerWidth, height: window.innerHeight }
    }
    return { width: 0, height: 0 }
  })

  useEffect(() => {
    if (!isActive) {
      return
    }

    const updateSize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight })
    }

    updateSize()
    window.addEventListener('resize', updateSize)
    return () => window.removeEventListener('resize', updateSize)
  }, [isActive])

  return size
}

export const PhotoViewerOverlay: React.FC<PhotoViewerOverlayProps> = ({ photo, onClose, zIndex = 50 }) => {
  const viewportSize = useViewportSize(!!photo)
  const [intrinsicDimensions, setIntrinsicDimensions] = useState<{ width: number; height: number } | null>(null)

  useEffect(() => {
    if (!photo?.id) {
      setIntrinsicDimensions(null)
      return
    }

    if (photo.aspectRatio) {
      return
    }

    setIntrinsicDimensions(null)
  }, [photo?.id, photo?.aspectRatio])

  useEffect(() => {
    if (!photo) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [photo, onClose])

  const viewerDimensions = useMemo(() => {
    if (!photo) {
      return null
    }

    const fallbackWidth = 900
    const fallbackHeight = 700
    const viewportWidth = viewportSize.width || fallbackWidth
    const viewportHeight = viewportSize.height || fallbackHeight

    const maxWidth = Math.min(viewportWidth * 0.9, 900)
    const maxHeight = Math.min(viewportHeight * 0.85, 900)
    const aspectRatio = intrinsicDimensions
      ? intrinsicDimensions.height / intrinsicDimensions.width
      : photo.aspectRatio || 9 / 16

    let width = maxWidth
    let height = width * aspectRatio

    if (height > maxHeight) {
      height = maxHeight
      width = height / aspectRatio
    }

    return { width, height }
  }, [photo, viewportSize, intrinsicDimensions])

  return (
    <AnimatePresence>
      {photo && (
        <div
          className="fixed inset-0 flex items-center justify-center px-4"
          style={{ zIndex }}
          role="dialog"
          aria-modal="true"
          aria-label="Expanded project photo"
          onClick={onClose}
        >
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm dark:bg-neutral-900/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
          />
          <motion.figure
            className="relative pointer-events-auto flex flex-col items-center"
            style={{ zIndex: zIndex + 1 }}
            onClick={(event) => event.stopPropagation()}
            layout="position"
            transition={{ type: 'spring', stiffness: 140, damping: 22, mass: 0.85 }}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
              className="glass-circle absolute right-[-16px] top-[-16px] h-10 w-10 z-[60]"
            >
              <GlassCard
                className="h-10 w-10 !p-0 flex items-center justify-center"
                style={{ borderRadius: '50%' }}
              >
                <div
                  className="h-10 w-10 flex items-center justify-center"
                  style={{ borderRadius: '50%' }}
                >
                  <motion.button
                    type="button"
                    className="relative h-full w-full flex items-center justify-center text-black dark:text-white text-base focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-full"
                    style={{ zIndex: zIndex + 2 }}
                    onClick={onClose}
                    aria-label="Close photo viewer"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 220, damping: 16 }}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.92 }}
                  >
                    ✕
                  </motion.button>
                </div>
              </GlassCard>
            </motion.div>
            <motion.div
              layoutId={photo.id}
              className="relative overflow-hidden rounded-[24px] bg-white shadow-2xl"
              style={{
                width: viewerDimensions?.width || 900,
                height: viewerDimensions?.height || 600,
                zIndex: zIndex + 1,
              }}
              transition={{ type: 'spring', stiffness: 150, damping: 20, mass: 0.8 }}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <div className="relative h-full w-full">
                <Image
                  src={typeof photo.src === 'string' ? photo.src : photo.src}
                  alt={photo.alt}
                  fill
                  className="h-full w-full object-contain"
                  sizes="(max-width: 768px) 100vw, 80vw"
                  priority
                  {...(typeof photo.src !== 'string' && photo.src.blurDataURL
                    ? { placeholder: 'blur' as const, blurDataURL: photo.src.blurDataURL }
                    : { placeholder: 'empty' as const })}
                  onLoadingComplete={(img) => {
                    const { naturalWidth, naturalHeight } = img
                    if (!naturalWidth || !naturalHeight) {
                      return
                    }
                    setIntrinsicDimensions((current) =>
                      current ? current : { width: naturalWidth, height: naturalHeight }
                    )
                  }}
                />
              </div>
            </motion.div>
            {photo.caption && (
              <motion.figcaption
                className="mt-3 text-center text-sm text-neutral-200"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2, ease: 'easeInOut' }}
              >
                {photo.caption}
              </motion.figcaption>
            )}
          </motion.figure>
        </div>
      )}
    </AnimatePresence>
  )
}

export default PhotoViewerOverlay
