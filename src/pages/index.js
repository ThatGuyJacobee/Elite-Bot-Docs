import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Feature-packed',
    imageUrl: 'img/elite-text.png',
    description: (
      <>
        Elite Bot includes tons of essential commands and features that are
		easy to use and documented in detail, including unique features exlusive
    to Elite Bot!
      </>
    ),
  },
  {
    title: 'Fully customisable',
    imageUrl: 'img/elitegaming.png',
    description: (
      <>
        Elite Bot allows you to customise the majority of features and commands
      to your own desires and likings!
      </>
    ),
  },
  {
    title: 'Easy to setup',
    imageUrl: 'img/bot-text.png',
    description: (
      <>
        Elite Bot is extremely simple to setup with very clear and in-depth
		documentation to configure everything you want!
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
	  <p>‎ </p>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Home`}
      //title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
			<Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('https://discord.com/oauth2/authorize?client_id=723275350922100840&permissions=1376969370742&scope=bot%20applications.commands')}>
              Invite Elite Bot
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
