import Link from "next/link";

const linkClasses =
  "underline decoration-dotted underline-offset-2 text-black dark:text-[#d5d5d5] hover:!text-black dark:hover:!text-[#d5d5d5] focus-visible:!text-black dark:focus-visible:!text-[#d5d5d5] decoration-[rgba(208,208,208,0.53)] hover:decoration-current focus-visible:decoration-current transition-[text-decoration-color] duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black dark:focus-visible:outline-white";

const handleSpaceActivation = (event) => {
  if (event.key !== " ") {
    return;
  }

  event.preventDefault();
  event.currentTarget.click();
};

export const HeroInlineLink = ({
  href,
  children,
  ariaLabel,
  title,
  target,
  rel,
  onHoverStart,
  onHoverEnd,
}) => {
  if (!href) {
    return <span>{children}</span>;
  }

  const isInternal = href.startsWith("/");
  const resolvedTarget = target ?? (isInternal ? undefined : "_blank");
  const resolvedRel = rel ?? (resolvedTarget === "_blank" ? "noopener noreferrer" : undefined);

  const handleMouseEnter = () => {
    onHoverStart?.();
  };

  const handleMouseLeave = () => {
    onHoverEnd?.();
  };

  const sharedProps = {
    className: linkClasses,
    "aria-label": ariaLabel,
    title,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onFocus: handleMouseEnter,
    onBlur: handleMouseLeave,
    onKeyDown: handleSpaceActivation,
  };

  if (isInternal) {
    return (
      <Link
        href={href}
        {...sharedProps}
      >
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      target={resolvedTarget}
      rel={resolvedRel}
      {...sharedProps}
    >
      {children}
    </a>
  );
};
