import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export async function getMarkdownContent(locale: string, page: string) {
  const filePath = path.join(process.cwd(), 'content', page, `${locale}.md`);

  if (!fs.existsSync(filePath)) {
    throw new Error(`Markdown file for ${locale} not found.`);
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    metadata: data,
    contentHtml,
  };
}
