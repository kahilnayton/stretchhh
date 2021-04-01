import Head from 'next/head';
// import { Link } from 'next/link';
import styles from '../styles/Home.module.css';
// import styled from 'styled-components';
// import BeforeRun from '../components/BeforeRun';
import Stretch from '../components/Stretch';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Stretchhh</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stretch />
    </div>
  );
}
