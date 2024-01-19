'use client'
import Link from 'next/link';
import initTranslations from '../../i18n';
import AboutUs from '@/components/AboutUs';
import TranslationsProvider from '@/components/TranslationsProvider';

const About = async ({ params: { locale } }) => {
  const { t, resources } = await initTranslations(locale, ['about']);
  return (
    <TranslationsProvider
      namespaces={['about']}
      locale={locale}
      resources={resources}>
        <AboutUs/>
      </TranslationsProvider>
  )
}

export default About