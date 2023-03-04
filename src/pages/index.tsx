import Head from 'next/head';
// import Image from 'next/image';

// import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | GlamPronto</title>
      </Head>
      <div>
        <h3>Welcome to Home Page</h3>
        {/* <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        /> */}
      </div>
    </>
  );
}
