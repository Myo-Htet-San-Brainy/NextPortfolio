// lib/markdown.js
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content");

export function getNamesOfMdFiles() {
  const filenames = fs.readdirSync(contentDirectory);
  // Filter for .md files (or any specific format you want)
  const mdFilenames = filenames.filter((filename) => filename.endsWith(".md"));
  return mdFilenames;
}

export function getMarkdownContent(fileName) {
  const modifiedFilename = fileName.endsWith(".md")
    ? fileName
    : `${fileName}.md`;
  const fullPath = path.join(contentDirectory, modifiedFilename);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  return { frontmatter: data, content };
}
