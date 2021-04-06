import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #aae0ff;
  transition: all 0.2s;
`;

export const ImageWrapper = styled.div`
  svg {
    stroke: black;
  }
`;

export const ButtonContainer = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Button = styled.button`
  cursor: pointer;
  height: 100px;
  width: 100px;
  border-radius: 50px;
  background: #fff;
  transition: 0.4s;
  border: none;

  &:focus {
    outline: none;
    border: none;
  }

  &:hover {
    color: #fff;
    transition: 0.2s;
  }

  &.before {
    background: rgba(78, 201, 78, 0.308);
    &:hover {
      background: #4ec94e;
    }
  }
  &.after {
    background: rgba(255, 135, 65, 0.466);
    &:hover {
      background: #ff8741;
    }
  }
  &.start {
    background: rgba(255, 135, 65, 0.466);
    &:hover {
      background: #ff8741;
    }
  }
  &.stop {
    background: rgba(78, 201, 78, 0.308);
    &:hover {
      background: #4ec94e;
    }
  }
  &.change {
    position: absolute;
    bottom: 0;
    right: 0;
    background: rgba(78, 84, 201, 0.308);
    &:hover {
      background: #4e58c9;
    }
  }
`;

export const StretchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    padding: 10px 20px;
    margin: auto;
    text-align: center;
    font-size: 1.6rem;
  }
`;

export const Count = styled.h1`
  color: #fff;
  margin: 0;
  font-size: 36px;
  position: absolute;
  top: 10px;
  left: 10px;
`;
