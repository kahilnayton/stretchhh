import React, { useState, useEffect, useRef } from 'react';
import Fade from 'react-reveal/Fade';
import useSound from 'use-sound';

import { beforeRunStretches } from './beforeRunStretches';
import { afterRunStretches } from './afterRunStretches';
import {
  Container,
  ImageWrapper,
  Button,
  StretchWrapper,
  ButtonContainer,
  Count
} from '../styles/layout';

// import chime from '../public/Chimes.wav';
import completeSound from '../public/sound.mp3';

export default function Stretch({ selectedStretch, setSelectedStretch }) {
  const [instructions, setInstructions] = useState('');
  const [image, setImage] = useState(null);
  const [color, setColor] = useState('');
  const [stretching, setStretching] = useState(false);
  const [clock, setClock] = useState(0);
  const [currentStretchIndex, setCurrentStretchIndex] = useState(0);
  const [currentStretch, setCurrentStretch] = useState(null);
  const [buttonText, setButtonText] = useState('');
  const [playing, setPlaying] = useState(false);
  const [buttonState, setButtonState] = useState(false);

  const myAudio = useRef();

  useEffect(() => {
      setCurrentStretch(selectedStretch);
      setImage(selectedStretch[0]?.image);
      setInstructions('Get ready!');
      setButtonText('Go!');
  }, [selectedStretch]);

  const beginStretches = (index, time, sequence) => {
    setInstructions('Get Ready!');
    setStretching(true);
    setButtonText('');
    setButtonState(true);
    
    if (myAudio.current !== null) {
      myAudio.current.pause();
      myAudio.current.currentTime = 0.0;
    }
    
    setInstructions(sequence[index].instructions);
    setColor(sequence[index].color);
    setImage(sequence[index].image);
    
    let timerId = updateTime(time);
    
    function timeout(ms) {
      return new Promise((res) => setTimeout(res, ms));
    }
    
    async function fireEvents() {
      await timeout(time * 1000);
      console.log('done');
      if (myAudio.current !== null) {
        myAudio.current.play();
      }
      setButtonState(false);
      setButtonText('Next');
      setCurrentStretchIndex(index + 1);
      setStretching(false);
    }

    fireEvents();
  };

  var clockTime;

  const updateTime = (time) => {
    console.log(time);
    for (let i = 0; i < time + 1; i++) {
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
      {selectedStretch && (
        <StretchWrapper>
          <Count>{clock}</Count>
          <Fade top>
            <ImageWrapper>{image}</ImageWrapper>
          </Fade>
          <Fade bottom>
            <p>{instructions}</p>
          </Fade>
          <Button
            className={`${stretching ? 'stop' : 'start'}`}
            disabled={buttonState}
            onClick={() =>
              beginStretches(
                currentStretchIndex,
                selectedStretch[currentStretchIndex].duration,
                selectedStretch
              )
            }
          >
            <p>{buttonText}</p>
          </Button>
        </StretchWrapper>
      )}
      <audio id="chime" ref={myAudio} src={completeSound} type="audio" />
     
    </Container>
  );
}
