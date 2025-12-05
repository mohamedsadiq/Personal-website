const baseTextClass = "text-[#000] dark:text-[#d5d5d5]";

export const HeroIdentityPanel = ({
  name,
  location,
  clockLabel,
  timezoneLabel,
}) => {
  if (!name) {
    return null;
  }

  return (
    <div id="name" className={`${baseTextClass} text-sm leading-relaxed`}>
      <p className=" tracking-tight">{name}</p>
      <div className="mt-1 text-xs text-black/60 dark:text-white/60">
        {location && <p>{location}</p>}
        {clockLabel && (
          <p
            aria-label={`Current Mediterranean time ${clockLabel} ${timezoneLabel ?? "UTC"}`}
            className="mt-0.5"
          >
            {clockLabel}
            {timezoneLabel ? (
              <>
                {" "}
                <span className="text-black/50 dark:text-white/50">·</span>
                {" "}
                {timezoneLabel}
              </>
            ) : null}
          </p>
        )}
      </div>
    </div>
  );
};
