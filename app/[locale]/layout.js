import ContextWrapper from '@/components/contextWrapper'
import '../globals.css'
import { Inter } from 'next/font/google'
import LanguageChanger from '@/components/LanguageChanger'
import i18nConfig from '@/i18nConfig';
import { dir } from 'i18next';

const inter = Inter({ subsets: ['latin'] })


export function generateStaticParams() {
  return i18nConfig.locales.map(locale => ({ locale }));
}

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children , params: { locale } }) {
  return (
    <html lang={locale} dir={dir(locale)}>
      <body className={inter.className}>
        <ContextWrapper>
          <LanguageChanger/>
          {children}
        </ContextWrapper>
      </body>
    </html>
  )
}