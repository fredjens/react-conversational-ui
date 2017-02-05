/* eslint-disable */

import React from 'react';
import styled from 'styled-components';
import vars from '../variables';

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  max-width: ${vars.width};
  height: ${vars.height};
  margin: 2rem;
  padding: 1rem;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid ${vars.baseColor};
  overflow: hidden;
`;

export default Container;
