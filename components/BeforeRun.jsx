
// PACKAGES
import React, { useState, useEffect } from "react"
import { keyframes } from "styled-components"
import styled from "styled-components"
import Fade from "react-reveal/Fade"


// VECTORS
import one from "../vectors/before/stretch-one.svg"
import two from "../vectors/before/stretch-two.svg"
import three from "../vectors/before/stretch-three.svg"
import four from "../vectors/before/stretch-four.svg"
import five from "../vectors/before/stretch-five.svg"
import six from "../vectors/before/stretch-six.svg"
import seven from "../vectors/before/stretch-seven.svg"
import eight from "../vectors/before/stretch-eight.svg"
import nine from "../vectors/before/stretch-nine.svg"
import ten from "../vectors/before/stretch-ten.svg"
import eleven from "../vectors/before/stretch-eleven.svg"
import twelve from "../vectors/before/stretch-12.svg"

const rotate = keyframes`
 from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const move = keyframes`
 from {
    transform: translateX(0deg);
  }
  to {
    transform: translateX(150%);
  }
`

const fade = (primaryColor, secondaryColor) => keyframes`
0% {
fill:${primaryColor};
}
50% {
 fill:${secondaryColor};
}
100%{
  fill:${primaryColor};
}
`


const StretchOne = styled(one)`
  display: block;
  margin: auto;
  width: 25rem;
  height: 25rem;
  /* animation: ${props => props.seconds > 28 && move} 1s linear 0s infinite; */
  .lines {
    animation: ${props => fade(props.primaryColor, props.secondaryColor)}
      infinite 1s linear;
  }
  .slide {
    animation: ${rotate} infinite 20s linear;
    border: solid;
  }
`

const StretchTwo = styled(two)`
  display: block;
  margin: auto;
  width: 25rem;
  height: 25rem;
  /* animation: ${props => props.seconds > 43 && move} 1s linear 0s infinite; */
`

const StretchThree = styled(three)`
  display: block;
  margin: auto;
  width: 25rem;
  height: 25rem;
  /* animation: ${props => props.seconds > 63 && move} 1s linear 0s infinite; */
  .lines {
    animation: ${props => fade(props.primaryColor, props.secondaryColor)}
      infinite 1s linear;
  }
`

const StretchFour = styled(four)`
  display: block;
  margin: auto;
  width: 25rem;
  height: 25rem;
  /* animation: ${props => props.seconds > 78 && move} 2s linear 0s; */
  .lines {
    animation: ${props => fade(props.primaryColor, props.secondaryColor)}
      infinite 1s linear;
  }
`
const StretchFive = styled(five)`
  display: block;
  margin: auto;
  width: 25rem;
  height: 25rem;
  /* animation: ${props => props.seconds > 98 && move} 2s linear 0s; */
  .lines {
    animation: ${props => fade(props.primaryColor, props.secondaryColor)}
      infinite 1s linear;
  }
`
const StretchSix = styled(six)`
  display: block;
  margin: auto;
  width: 25rem;
  height: 25rem;
  /* animation: ${props => props.seconds > 118 && move} 2s linear 0s; */
  .lines {
    animation: ${props => fade(props.primaryColor, props.secondaryColor)}
      infinite 1s linear;
  }
`
const StretchSeven = styled(seven)`
  display: block;
  margin: auto;
  width: 25rem;
  height: 25rem;
  /* animation: ${props => props.seconds > 147 && move} 2s linear 0s; */
  .lines {
    animation: ${props => fade(props.primaryColor, props.secondaryColor)}
      infinite 1s linear;
  }
`
const StretchEight = styled(eight)`
  display: block;
  margin: auto;
  width: 25rem;
  height: 25rem;
  /* animation: ${props => props.seconds > 177 && move} 2s linear 0s; */
  .lines {
    animation: ${props => fade(props.primaryColor, props.secondaryColor)}
      infinite 1s linear;
  }
`
const StretchNine = styled(nine)`
  display: block;
  margin: auto;
  width: 25rem;
  height: 25rem;
  /* animation: ${props => props.seconds > 193 && move} 2s linear 0s; */
  .lines {
    animation: ${props => fade(props.primaryColor, props.secondaryColor)}
      infinite 1s linear;
  }
`
const StretchTen = styled(ten)`
  display: block;
  margin: auto;
  width: 25rem;
  height: 25rem;
  /* animation: ${props => props.seconds > 213 && move} 2s linear 0s; */
  .lines {
    animation: ${props => fade(props.primaryColor, props.secondaryColor)}
      infinite 1s linear;
  }
`
const StretchEleven = styled(eleven)`
  display: block;
  margin: auto;
  width: 25rem;
  height: 25rem;
  /* animation: ${props => props.seconds > 228 && move} 2s linear 0s; */
  .lines {
    animation: ${props => fade(props.primaryColor, props.secondaryColor)}
      infinite 1s linear;
  }
`
const StretchTwelve = styled(twelve)`
  display: block;
  margin: auto;
  width: 25rem;
  height: 25rem;
  /* animation: ${props => props.seconds > 243 && move} 2s linear 0s; */
  .lines {
    animation: ${props => fade(props.primaryColor, props.secondaryColor)}
      infinite 1s linear;
  }
`

const BeforeRun = () => {
  const [seconds, setSeconds] = useState(0)
  const [isActive, setIsActive] = useState(false)

  const toggle = () => {
    setIsActive(!isActive)
  }

  const reset = () => {
    setSeconds(0)
  }

  useEffect(() => {
    if (isActive) {
      const id = setInterval(() => {
        setSeconds(seconds => seconds + 1)
      }, 1000)
      return () => clearInterval(id)
    }
  }, [isActive])

  return (
    <div className="app">
      <Button onClick={toggle}>
        {!isActive ? <h1>Press to start</h1> : <h1>Press to pause</h1>}
      </Button>
      {seconds < 30 && seconds !== 0 && (
        <>
          <Fade left>
            <StretchOne
              seconds={seconds}
              primaryColor="#61DAFB"
              secondaryColor="violet"
            />
          </Fade>
          <span>{seconds} seconds (30)</span>
        </>
      )}
      {seconds > 30 && seconds < 60 && (
        <>
          <Fade right>
            <StretchOne
              seconds={seconds}
              primaryColor="#61DAFB"
              secondaryColor="violet"
            />
          </Fade>
          <span>{seconds - 30} seconds (30) -- Other leg</span>
        </>
      )}
      {seconds > 60 && seconds < 75 && (
        <>
          <Fade left>
            <StretchTwo
              seconds={seconds}
              primaryColor="#6b5b95"
              secondaryColor="#feb236"
            />
          </Fade>
          <span>{seconds - 60} seconds (15)</span>
        </>
      )}
      {seconds > 75 && seconds < 90 && (
        <>
          <Fade right>
            <StretchTwo
              seconds={seconds}
              primaryColor="#6b5b95"
              secondaryColor="#feb236"
            />
          </Fade>
          <span>{seconds - 75} seconds (15) -- other leg</span>
        </>
      )}
      {seconds > 90 && seconds < 110 && (
        <>
          <Fade left>
            <StretchThree
              seconds={seconds}
              primaryColor="#d64161"
              secondaryColor="#ff7b25"
            />
          </Fade>
          <span>{seconds - 90} seconds (20)</span>
        </>
      )}
      {seconds > 110 && seconds < 130 && (
        <>
          <Fade right>
            <StretchThree
              seconds={seconds}
              primaryColor="#d64161"
              secondaryColor="#ff7b25"
            />
          </Fade>
          <span>{seconds - 110} seconds (20) -- Other leg</span>
        </>
      )}
      {seconds > 130 && seconds < 150 && (
        <>
          <Fade left>
            <StretchFour
              seconds={seconds}
              primaryColor="#b5e7a0"
              secondaryColor="#86af49"
            />
          </Fade>
          <span>{seconds - 130} seconds (20)</span>
        </>
      )}
      {seconds > 150 && seconds < 170 && (
        <>
          <Fade right>
            <StretchFour
              seconds={seconds}
              primaryColor="#b5e7a0"
              secondaryColor="#86af49"
            />
          </Fade>
          <span>{seconds - 150} seconds (20) Other leg</span>
        </>
      )}
      {seconds > 170 && seconds < 190 && (
        <>
          <Fade left>
            <StretchFive
              seconds={seconds}
              primaryColor="#b5e7a0"
              secondaryColor="#86af49"
            />
          </Fade>
          <span>{seconds - 170} seconds (20)</span>
        </>
      )}
      {seconds > 190 && seconds < 210 && (
        <>
          <Fade left>
            <StretchFive
              seconds={seconds}
              primaryColor="#b5e7a0"
              secondaryColor="#86af49"
            />
          </Fade>
          <span>{seconds - 190} seconds (20) -- Other leg</span>
        </>
      )}
      {seconds > 210 && seconds < 230 && (
        <>
          <Fade left>
            <StretchSix
              seconds={seconds}
              primaryColor="#b5e7a0"
              secondaryColor="#86af49"
            />
            <span>{seconds - 210} seconds (20)</span>
          </Fade>
        </>
      )}
      {seconds > 230 && seconds < 250 && (
        <>
          <Fade right>
            <StretchSix
              seconds={seconds}
              primaryColor="#b5e7a0"
              secondaryColor="#86af49"
            />
            <span>{seconds - 230} seconds (20) -- Other leg</span>
          </Fade>
        </>
      )}
      {seconds > 250 && seconds < 280 && (
        <>
          <Fade left>
            <StretchSeven
              seconds={seconds}
              primaryColor="#b5e7a0"
              secondaryColor="#86af49"
            />
          </Fade>
          <span>{seconds - 250} seconds (30)</span>
        </>
      )}
      {seconds > 280 && seconds < 310 && (
        <>
          <Fade left>
            <StretchEight
              seconds={seconds}
              primaryColor="#b5e7a0"
              secondaryColor="#86af49"
            />
          </Fade>
          <span>{seconds - 280} seconds (30)</span>
        </>
      )}
      {seconds > 310 && seconds < 325 && (
        <>
          <Fade left>
            <StretchNine
              seconds={seconds}
              primaryColor="#b5e7a0"
              secondaryColor="#86af49"
            />
          </Fade>
          <span>{seconds - 310} seconds (15)</span>
        </>
      )}
      {seconds > 325 && seconds < 340 && (
        <>
          <Fade right>
            <StretchNine
              seconds={seconds}
              primaryColor="#b5e7a0"
              secondaryColor="#86af49"
            />
          </Fade>
          <span>{seconds - 325} seconds (15) -- Other leg</span>
        </>
      )}
      {seconds > 340 && seconds < 360 && (
        <>
          <Fade left>
            <StretchTen
              seconds={seconds}
              primaryColor="#b5e7a0"
              secondaryColor="#86af49"
            />
          </Fade>
          <span>{seconds - 340} seconds (20)</span>
        </>
      )}
      {seconds > 360 && seconds < 380 && (
        <>
          <Fade right>
            <StretchTen
              seconds={seconds}
              primaryColor="#b5e7a0"
              secondaryColor="#86af49"
            />
          </Fade>
          <span>{seconds - 360} seconds (20) -- Other leg </span>
        </>
      )}
      {seconds > 380 && seconds < 395 && (
        <>
          <Fade left>
            <StretchEleven
              seconds={seconds}
              primaryColor="#b5e7a0"
              secondaryColor="#86af49"
            />
          </Fade>
          <span>{seconds - 380} seconds (15)</span>
        </>
      )}
      {seconds > 395 && seconds < 410 && (
        <>
          <Fade right>
            <StretchEleven
              seconds={seconds}
              primaryColor="#b5e7a0"
              secondaryColor="#86af49"
            />
          </Fade>
          <span>{seconds - 395} seconds (15)</span>
        </>
      )}
      {seconds > 410 && seconds < 430 && (
        <>
          <Fade left>
            <StretchTwelve
              seconds={seconds}
              primaryColor="#b5e7a0"
              secondaryColor="#86af49"
            />
          </Fade>
          <span>{seconds - 410} seconds (20)</span>
        </>
      )}
      {seconds > 430 && <h1>You're done ... now go for a run you sloth 🦥</h1>}
    </div>
  )
}

export default BeforeRun
