import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';

import { beforeRunStretches } from './beforeRunStretches';
import { afterRunStretches } from './afterRunStretches';
import {
  Container,
  ImageWrapper,
  Button,
  StretchWrapper,
  ButtonContainer,
} from '../styles/layout';

const Before = () => {
  const [instructions, setInstructions] = useState('');
  const [image, setImage] = useState(null);
  const [color, setColor] = useState('');
  const [stretching, setStretching] = useState(false);
  const [clock, setClock] = useState(0)
  // const [stopStretching, setStopStretching] = useState(false);

  const beginStretches = async (index, time, sequence) => {
    setStretching(true);
    let timerId = updateTime(time)
    if (sequence.length > index) {
      setInstructions(sequence[index].instructions);
      setImage(sequence[index].image);
      setColor(sequence[index].color);
      const result = await setTimeout(stretchMe, time * 1000);

      function stretchMe() {
        setInstructions(sequence[index].instructions);
        setImage(sequence[index].image);
        beginStretches(index + 1, sequence[index].duration, sequence);
        console.log(sequence[index].instructions);
      }
    } else {
      setStretching(false);
      setColor('');
      setImage('');
      setInstructions(
        'Good job you got through them all, now all you have to do is jog 😭😭😭'
      );
    }
  };

  const updateTime = (time) => {
    console.log(time)
    for (let i = 0; i < time; i++) {
      setTimeout(() => {
        console.log(i + 1);
        setClock(i + 1)
      }, i * 1000);
    }
  };

  // StretchOne = StretchTwo

  return (
    <Container style={{ background: color }}>
      {stretching ? (
        <StretchWrapper>
            <h1>{clock}</h1>
          <Fade top>
            <ImageWrapper>{image}</ImageWrapper>
          </Fade>
          <Fade bottom>
            <p>{instructions}</p>
          </Fade>
          {/* <Button onClick={() => setStopStretching(true)}>Stop</Button> */}
        </StretchWrapper>
      ) : (
        <ButtonContainer>
          <Button
            className="before"
            onClick={() =>
              beginStretches(
                0,
                beforeRunStretches[0].duration,
                beforeRunStretches
              )
            }
          >
            Before Run
          </Button>
          <Button
            className="after"
            onClick={() =>
              beginStretches(
                0,
                afterRunStretches[0].duration,
                afterRunStretches
              )
            }
          >
            After Run
          </Button>
        </ButtonContainer>
      )}
    </Container>
  );
};

export default Before;
