'use client'
import Image from 'next/image'
import styles from './page.module.css'
import { GrowthBook } from "@growthbook/growthbook";
import { useContext } from 'react';
import HeaderContext from '@/context/headerContext';
// import { useEffect } from 'react';

// const getUserId = async () => {
//   console.log('here in user id');
//   return Math.floor(Math.random()*1000000 + Date.now())
// }
export default function Home() {
  // let userId = await getUserId()
  // const growthbook = new GrowthBook({
  //   apiHost: "https://cdn.growthbook.io",
  //   clientKey: "sdk-iIVUBuxMKHASTaOM",
  //   enableDevMode: true,
  //   subscribeToChanges: true,
  //   attributes: {
  //     id: userId,
  //     country: "US"
  //   },
  //   trackingCallback: (experiment, result) => {
  //     // TODO: Use your real analytics tracking system
  //     console.log("Viewed Experiment", {
  //       experimentId: experiment.key,
  //       variationId: result.key,
  //     });
  //   },
  // });

  // useEffect(()=>{
  //   growthbook.setAttributes({
  //     id: Math.floor(Math.random()*1000000),
  //   })
  //   console.log(growthbook.getAttributes('id'))
  // },[])
  // growthbook.setAttributes({
  //   id: Math.floor(Math.random()*1000000),
  // })
  // console.log(Math.floor(Math.random()*1000000));
  // await growthbook.loadFeatures();

  // const isWelcomeBannerOn = growthbook.isOn("welcome-banner-01");
  // console.log(isWelcomeBannerOn);
  const {userLoc} = useContext(HeaderContext)
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>app/page.js</code>
        </p>
        <p>{userLoc}</p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
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
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  )
}
