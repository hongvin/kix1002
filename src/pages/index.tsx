import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const BMC = 'https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png'

function HeroPage() {
  return (
    <div className={styles.myHeroContainer}>
      <div className={styles.leftContainer}>
        <h1 className={styles.leftContainer_h1}>
          <span className={styles.title}>KIX1002:</span> <br /> Engineering Mathematics 2
        </h1>
        <p className={styles.leftContainer_p}>
          A complementary website for KIX1002 💨
          <br />
          Semester 2, Session 2023/2024.
          <br />
          Maintained by <a href="https://www.linkedin.com/in/koayhv/">Hong Vin</a>
          <br />
          <b>Found it useful? Give me a star on <a href="https://github.com/hongvin/kix1002/">Github</a> or share with your friends!</b>
        </p>
        <div className={styles.buttonContainer}>
          <Link
            className="button button--secondary button--lg"
            to="tutorial1-2">
            🚀 Explore Now!
          </Link>
          <Link 
            to="https://www.buymeacoffee.com/hongvin">
            <img src={BMC} alt="Buy Me A Coffee" className={styles.bmc}>
            </img>
          </Link>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <img src='/img/hero.png' alt='Hero Image' />
      </div>
    </div>
  )
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="KIX1001 Complementary website">
      <main>
        <HeroPage />
      </main>
    </Layout>
  );
}