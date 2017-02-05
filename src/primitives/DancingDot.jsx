/* eslint-disable */

import React from 'react';
import styled, { keyframes } from 'styled-components';

const dance = keyframes`
  from {
    transform: none;
  }

  to {
    transform: translateY(-.2rem);
  }
`;

const DancingDot = styled.span`
  color: black;
  display: inline-block;
  color: white;

  &:nth-child(1) {
    animation: ${dance} 350ms linear 0ms infinite alternate-reverse;
  }

  &:nth-child(2) {
    animation: ${dance} 350ms linear 200ms infinite alternate-reverse;
  }

  &:nth-child(3) {
    animation: ${dance} 350ms linear 400ms infinite alternate-reverse;
  }
`;

export default DancingDot;
