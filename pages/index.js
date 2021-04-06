import { useState } from 'react';

import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { beforeRunStretches } from '../components/beforeRunStretches';
import { afterRunStretches } from '../components/afterRunStretches';
// import styled from 'styled-components';
// import BeforeRun from '../components/BeforeRun';
import Stretch from '../components/Stretch';
import {
  Container,
  ImageWrapper,
  Button,
  StretchWrapper,
  ButtonContainer,
} from '../styles/layout';

export default function Home() {
  const [selectedStretch, setSelectedStretch] = useState(null);
  return (
    <div className={styles.container}>
      <Head>
        <title>Stretchhh</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!selectedStretch && (
        <ButtonContainer>
          <Button
            className="before"
            onClick={() => setSelectedStretch(beforeRunStretches)}
          >
            Before Run
          </Button>
          <Button
            className="after"
            onClick={() => setSelectedStretch(afterRunStretches)}
          >
            After Run
          </Button>
        </ButtonContainer>
      )}
      {selectedStretch && (
        <Stretch
          selectedStretch={selectedStretch}
          setSelectedStretch={setSelectedStretch}
        />
      )}
      {/* <Button className="change" onClick={() => setSelectedStretch({})}>
        Change stretch
      </Button> */}
    </div>
  );
}
