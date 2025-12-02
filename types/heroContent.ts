import type { MDXRemoteSerializeResult } from "next-mdx-remote";

export interface HeroContentSection {
  frontmatter: Record<string, unknown>;
  mdxSource: MDXRemoteSerializeResult<Record<string, unknown>, Record<string, unknown>>;
}

export interface HeroContentData {
  intro: HeroContentSection;
  bio: HeroContentSection;
}
