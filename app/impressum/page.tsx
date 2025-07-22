import { useTranslations } from 'next-intl';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations();
  return {
    title: t('impress.headline'),
    description: t('impress.desc'),
    robots: 'noindex, nofollow',
  };
}

export default function Impressum() {
  const t = useTranslations();

  return (
    <div className="my-12">
      <h1 className="hightlight underline">{t('impress.headline')}</h1>
      <h2>{t('impress.info')}</h2>
      <p>
        {t('core.full_name')} <br />
        {t('core.street')} <br />
        {t('core.adress_city')} <br />
      </p>
      <h2 className="hightlight underline">{t('contact.headline')}</h2>
      <p>
        <b>E-Mail: </b>{" "}
        <a href={`mailto:${t('core.email')}`}>{t('core.email')}</a>
      </p>
    </div>
  );
}
