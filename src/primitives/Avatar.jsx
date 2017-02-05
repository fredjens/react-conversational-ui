/* eslint-disable */

import React from 'react';
import styled from 'styled-components';

const Avatar = styled.div`
  display: inline-block;
  top: 0;
  margin-right: .25rem;
  font-size: 1.5rem;
  float: ${props => props.right ? 'right' : 'left'};
  line-height: 1;
`;

export default Avatar;
