import Head from 'next/head';
import { Link } from 'next/link';
import styles from '../styles/Home.module.css';
import styled from 'styled-components';
import BeforeRun from '../components/BeforeRun';
import Before from '../components/Before';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>yo</h1>

      {/* <BeforeRun /> */}
      <Before />
    </div>
  );
}
