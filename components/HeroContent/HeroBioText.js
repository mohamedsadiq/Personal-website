import { MDXRemote } from "next-mdx-remote";

const textClassName = "text-sm leading-relaxed text-black/70 dark:text-white/70 text-left";

export const HeroBioText = ({ mdxSource, components }) => {
  if (!mdxSource) {
    return null;
  }

  return (
    <div className={textClassName}>
      <MDXRemote {...mdxSource} components={components} />
    </div>
  );
};
