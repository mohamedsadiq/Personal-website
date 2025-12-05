import { HeroInlineLink } from "./HeroInlineLink";

const defaultParagraphClassName = "mb-1 last:mb-0 leading-relaxed";

export const createHeroMdxComponents = ({
  paragraphClassName = defaultParagraphClassName,
  onHoverStart,
  onHoverEnd,
} = {}) => {
  const handleHoverStart = (hoverId) => {
    if (!hoverId) {
      return undefined;
    }

    return () => {
      onHoverStart?.(hoverId);
    };
  };

  const handleHoverEnd = (hoverId) => {
    if (!hoverId) {
      return undefined;
    }

    return () => {
      onHoverEnd?.(hoverId);
    };
  };

  const Paragraph = ({ children }) => (
    <p className={paragraphClassName}>{children}</p>
  );

  const Anchor = ({ children, ...props }) => (
    <HeroInlineLink {...props}>{children}</HeroInlineLink>
  );

  const HoverLink = ({ hoverId, ...props }) => (
    <HeroInlineLink
      {...props}
      onHoverStart={handleHoverStart(hoverId)}
      onHoverEnd={handleHoverEnd(hoverId)}
    />
  );

  return {
    a: Anchor,
    p: Paragraph,
    HoverLink,
  };
};
