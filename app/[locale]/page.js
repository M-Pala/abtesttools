// 'use client'
import Image from 'next/image'
import styles from '../page.module.css'
import { GrowthBook } from "@growthbook/growthbook";
import initTranslations from '../i18n';
import Link from 'next/link';

export default async function Home({ params: { locale } }) {
  const { t } = await initTranslations(locale, ['Home']);
  return (
    <main className={styles.main}>
      
      <div className={styles.description}>
        <p>
          {t('home-top-left')}&nbsp;
          <code className={styles.code}>app/page.js</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('home-top-right')}{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
          {t('home-bottom-col1-title')} <span>-&gt;</span>
          </h2>
          <p>{t('home-bottom-col1-desc')}</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
          {t('home-bottom-col2-title')} <span>-&gt;</span>
          </h2>
          <p>{t('home-bottom-col2-desc')}</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
          {t('home-bottom-col3-title')} <span>-&gt;</span>
          </h2>
          <p>{t('home-bottom-col3-desc')}</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
          {t('home-bottom-col4-title')} <span>-&gt;</span>
          </h2>
          <p>
          {t('home-bottom-col4-desc')}
          </p>
        </a>
      </div>
      <Link href={'/about'}>About</Link>
    </main>
  )
}
