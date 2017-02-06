/* eslint-disable */

import React from 'react';
import styled from 'styled-components';

const SubmitButton = styled.button`
  display: inline-block;
  font-size: 1.2rem;
  position: absolute;
  right: 5%;
  bottom: 7%;
  background: none;
  border: 0;
  color: ${props => props.theme.baseColor};

  &:focus {
    outline: 0;
  }
`;

export default SubmitButton;
