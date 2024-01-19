'use client'

import Link from "next/link"
import { useTranslation } from "react-i18next";

const AboutUs = () => {
    const { t } = useTranslation();
  return (
    <div>
        <h1>{t('abt-us-title')}</h1>
        <p>{t('abt-us-desc')}</p>
        <Link href={'/'}>Home</Link>
    </div>
  )
}

export default AboutUs