import { getMarkdownContent } from '../lib/markdown';
import { getLocale } from 'next-intl/server';

export default async function Datenschutz() {
  const locale = await getLocale();
  const { metadata, contentHtml } = await getMarkdownContent(locale, 'datenschutz');

  return (
    <div className="md_content my-12">
      <h1>{metadata.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </div>
  );
}
