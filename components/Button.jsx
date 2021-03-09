import React from 'react';
import styled from 'styled-components';
import colors from '../styles/colors';
/*import dimensions from "styles/dimensions";*/

const ButtonContainer = styled.button`
  position: relative;
  display: inline-block;
  padding: 2rem 3.33vw 1.8rem;
  background-color: transparent;
  border: 1px solid ${colors.red600};
  color: ${colors.red600};
  font-size: 1.8rem;
  font-weight: 500;
  text-align: center;
  outline: none;
  transition: background 0.08s ease-in-out, color 0.08s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: ${colors.red600};
    color: #fff;

    span {
      color: #fff;
    }

    svg {
      fill: #fff;
    }
  }
`;

export const Button = () => {
  const { children, ...props } = this.props;

  return (
    <ButtonContainer
      className={this.props.variant ? `Button--${this.props.variant}` : ''}
      onClick={this.props.onClick}
      {...props}
    >
      <span>{children}</span>
    </ButtonContainer>
  );
};

