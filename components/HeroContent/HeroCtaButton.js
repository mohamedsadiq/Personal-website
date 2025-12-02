import Link from "next/link";

const baseButtonClasses = "inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

const variantClasses = {
  primary: "bg-black text-white hover:bg-black/80 focus-visible:outline-black dark:bg-white dark:text-black dark:hover:bg-white/80 dark:focus-visible:outline-white",
  secondary: "border border-black text-black hover:bg-black/5 focus-visible:outline-black dark:border-white dark:text-white dark:hover:bg-white/10 dark:focus-visible:outline-white",
};

const handleSpaceActivation = (event) => {
  if (event.key !== " ") {
    return;
  }

  event.preventDefault();
  event.currentTarget.click();
};

export const HeroCtaButton = ({
  href,
  label,
  ariaLabel,
  variant = "primary",
  target,
  rel,
}) => {
  if (!href || !label) {
    return null;
  }

  const resolvedVariant = variantClasses[variant] ?? variantClasses.primary;
  const className = `${baseButtonClasses} ${resolvedVariant}`;
  const isInternal = href.startsWith("/");
  const resolvedTarget = target ?? (isInternal ? undefined : "_blank");
  const resolvedRel = rel ?? (resolvedTarget === "_blank" ? "noopener noreferrer" : undefined);
  const sharedProps = {
    className,
    "aria-label": ariaLabel ?? label,
    onKeyDown: handleSpaceActivation,
  };

  if (isInternal) {
    return (
      <Link href={href} {...sharedProps}>
        {label}
      </Link>
    );
  }

  return (
    <a href={href} target={resolvedTarget} rel={resolvedRel} {...sharedProps}>
      {label}
    </a>
  );
};
