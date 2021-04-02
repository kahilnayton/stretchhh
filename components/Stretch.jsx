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
  const [clock, setClock] = useState(0);
  const [keepGoing, setKeepGoing] = useState(true);
  // const [stopStretching, setStopStretching] = useState(false);

  const beginStretches = async (index, time, sequence) => {
    setInstructions('Get Ready!');
    setStretching(true);

    if (sequence.length > index) {
      setInstructions(sequence[index].instructions);
      setColor(sequence[index].color);
      setImage(sequence[index].image);
      let timerId = updateTime(time);
      const result = await setTimeout(stretchMe, time * 1000);

      function stretchMe() {
        setInstructions(sequence[index].instructions);
        setImage(sequence[index].image);
        beginStretches(index + 1, sequence[index].duration, sequence);
        // console.log(sequence[index].instructions);
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

  var clockTime;

  const updateTime = (time) => {
    console.log(time);
    for (let i = 0; i < time; i++) {
      clockTime = setTimeout(() => {
        console.log(time - i);
        setClock(time - i);
      }, i * 1000);
    }
  };

  function myStopFunction() {
    setKeepGoing(false);
    console.log('stop');
    clearTimeout(clockTime);
    // throw new Error('Something went badly wrong!');
  }

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
          {/* <Button className="stop" onClick={myStopFunction}>
            Stop
          </Button> */}
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
