import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect, useMemo, useState } from 'react'
import { GlassCard } from '@developer-hub/liquid-glass'

export type VideoPreview = {
  src: string
  caption?: string
  aspectRatio?: number
}

type VideoViewerOverlayProps = {
  video: VideoPreview | null
  onClose: () => void
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

export const VideoViewerOverlay: React.FC<VideoViewerOverlayProps> = ({ video, onClose }) => {
  const viewportSize = useViewportSize(!!video)
  const [intrinsicDimensions, setIntrinsicDimensions] = useState<{ width: number; height: number } | null>(null)

  useEffect(() => {
    if (!video?.src) {
      setIntrinsicDimensions(null)
      return
    }

    if (video.aspectRatio) {
      return
    }

    setIntrinsicDimensions(null)
  }, [video?.src, video?.aspectRatio])

  useEffect(() => {
    if (!video) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [video, onClose])

  const viewerDimensions = useMemo(() => {
    if (!video) {
      return null
    }

    const fallbackWidth = 900
    const fallbackHeight = 700
    const viewportWidth = viewportSize.width || fallbackWidth
    const viewportHeight = viewportSize.height || fallbackHeight

    const maxWidth = Math.min(viewportWidth * 0.9, 1200) // Slightly larger for video
    const maxHeight = Math.min(viewportHeight * 0.85, 1000)
    const aspectRatio = intrinsicDimensions
      ? intrinsicDimensions.width / intrinsicDimensions.height
      : video.aspectRatio || 16 / 9 // Default to 16:9 for video

    let width = maxWidth
    let height = width / aspectRatio

    if (height > maxHeight) {
      height = maxHeight
      width = height * aspectRatio
    }

    return { width, height }
  }, [video, viewportSize, intrinsicDimensions])

  return (
    <AnimatePresence>
      {video && (
        <div
          className="fixed inset-0 flex items-center justify-center px-4"
          style={{ zIndex: 50 }}
          role="dialog"
          aria-modal="true"
          aria-label="Expanded project video"
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
            style={{ zIndex: 51 }}
            onClick={(event) => event.stopPropagation()}
            layout="position"
            transition={{ type: 'spring', stiffness: 140, damping: 22, mass: 0.85 }}
          >
            <motion.div 
             initial={{ scale: 0.5, opacity: 0, }}
              animate={{ opacity: 1, scale: 1,  }}
               exit={{ opacity: 0,  scale: 0.5, }}
                transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="glass-circle absolute right-[-16px] top-[-16px] h-10 w-10 z-[60]">
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
                    style={{ zIndex: 52 }}
                    onClick={onClose}
                    aria-label="Close video viewer"
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
              className="relative overflow-hidden rounded-[24px] bg-black shadow-2xl"
              style={{
                width: viewerDimensions?.width || 900,
                height: viewerDimensions?.height || 506, // 16:9 approx
                zIndex: 51,
              }}
              transition={{ type: 'spring', stiffness: 150, damping: 20, mass: 0.8 }}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <div className="relative h-full w-full flex items-center justify-center bg-black">
                <video
                  src={video.src}
                  controls
                  autoPlay
                  className="h-full w-full object-contain"
                  style={{ opacity: 1 }}
                  onLoadedMetadata={(event) => {
                    const { videoWidth, videoHeight } = event.currentTarget
                    if (!videoWidth || !videoHeight) {
                      return
                    }
                    setIntrinsicDimensions({ width: videoWidth, height: videoHeight })
                  }}
                />
              </div>
            </motion.div>
            {video.caption && (
              <motion.figcaption
                className="mt-3 text-center text-sm text-neutral-200"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2, ease: 'easeInOut' }}
              >
                {video.caption}
              </motion.figcaption>
            )}
          </motion.figure>
        </div>
      )}
    </AnimatePresence>
  )
}

export default VideoViewerOverlay
