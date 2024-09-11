import React from 'react';
import styled from '@emotion/styled/macro';
const ContainerStyle = styled.div`
  width: 100%;
  max-width: 430px;
  justify-content: center;
  align-items: center;
  margin: 0;
  :focus {
    outline: none;
  }
`;
function Container({ children }) {
  return <ContainerStyle>{children}</ContainerStyle>;
}
export default Container;
