import { MDXRemote } from "next-mdx-remote";

const textClassName = "text-sm leading-7 text-[#000] dark:text-[#d5d5d5]";

export const HeroIntroText = ({ mdxSource, components }) => {
  if (!mdxSource) {
    return null;
  }

  return (
    <div className={textClassName}>
      <MDXRemote {...mdxSource} components={components} />
    </div>
  );
};
