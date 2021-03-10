import React, { useState } from 'react';

import { beforeRunStretches } from './beforeRunStretches';
import { Container, ImageWrapper } from '../styles/layout';

function loopDone() {
  console.log('The loop is done!');
}

// setTimeout(function(){ alert("Hello"); }, 3000);

const Before = () => {
  const [instructions, setInstructions] = useState('');
  const [image, setImage] = useState({});
  const [color, setColor] = useState('');
  const beginStretches = () => {
    beforeRunStretches.map((stretch, i) => {
      setTimeout(() => {
        setInstructions(stretch.instructions);
        setImage(stretch.image);
        setColor(stretch.color);
      }, stretch.duration * 1000);
    });
  };
  return (
    <Container style={{ background: color }}>
      <button onClick={beginStretches}>Start</button>
      {instructions}
      <ImageWrapper>{image}</ImageWrapper>
    </Container>
  );
};

export default Before;
