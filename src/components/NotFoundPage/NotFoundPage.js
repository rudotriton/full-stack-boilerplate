import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Message = styled.div`
  width: 40vw;
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  border: 2px solid white;
  color: white;
  font-size: 2rem;
  text-align: center;
`;

const index = () => (
  <Wrapper>
    <Message>
      This is another page.
      This page is rendered on any url that is not /.
    </Message>
  </Wrapper>
);

export default index;
