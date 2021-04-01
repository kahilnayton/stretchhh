import React, { useState } from 'react';

import { beforeRunStretches } from './beforeRunStretches';
import { Container, ImageWrapper, Button } from '../styles/layout';

const Before = () => {
  const [instructions, setInstructions] = useState('');
  const [image, setImage] = useState(null);
  const [color, setColor] = useState('');
  const [stretching, setStretching] = useState(false);

  const beginStretches = async (index, time) => {
    setStretching(true);
    setInstructions(beforeRunStretches[index].instructions);
    setColor(beforeRunStretches[index].color);
    setImage(beforeRunStretches[index].image);
    if (beforeRunStretches.length > index + 1) {
      const result = await setTimeout(stretchMe, time * 1000);
      
      function stretchMe() {
        setInstructions(beforeRunStretches[index].instructions);
        setImage(beforeRunStretches[index].image);
        beginStretches(index + 1, beforeRunStretches[index].duration);
        console.log(beforeRunStretches[index].instructions);
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

  // StretchOne = StretchTwo

  return (
    <Container style={{ background: color }}>
      <Button onClick={() => beginStretches(0, beforeRunStretches[0].duration)}>
        {!stretching ? <h1>Start</h1> : <h1>Stop</h1>}
      </Button>
      {instructions}
      <ImageWrapper>
          {image}
      </ImageWrapper>
    </Container>
  );
};

export default Before;
