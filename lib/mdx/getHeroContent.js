import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

const HERO_CONTENT_DIRECTORY = path.join(process.cwd(), "content", "hero");

const readMdxFile = async (fileName) => {
  const filePath = path.join(HERO_CONTENT_DIRECTORY, fileName);
  return fs.readFile(filePath, "utf8");
};

const parseMdxFile = async (fileName) => {
  const fileContent = await readMdxFile(fileName);
  const { content, data } = matter(fileContent);
  const mdxSource = await serialize(content, { scope: data });

  return {
    frontmatter: data,
    mdxSource,
  };
};

/**
 * Reads the hero MDX files and returns structured data for the Hero section.
 */
export const getHeroContent = async () => {
  const [intro, bio] = await Promise.all([
    parseMdxFile("intro.mdx"),
    parseMdxFile("bio.mdx"),
  ]);

  return {
    intro,
    bio,
  };
};
