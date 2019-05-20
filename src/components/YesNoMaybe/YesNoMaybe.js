import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {
  startFetchAnswer,
} from '../../actions/answer';

const Wrapper = styled.div`
  border: 2px solid white;
  width: 40vw;
  height: 25vh;
  display: flex;
  flex-direction: column;
`;

const YesNoMaybe = () => {
  const { isLoading, hasErrored, answer } = useSelector(
    ({ answer: state }) => ({
      isLoading: state.isLoading,
      hasErrored: state.hasErrored,
      answer: state.answer,
    }),
  );
  const dispatch = useDispatch();
  if (isLoading || hasErrored) {
    return (
      <Wrapper>
        <p>{isLoading ? 'Loading...' : 'Error'}</p>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <p>Async updates to redux store</p>
      {
        answer
      }
      <button
        type="button"
        onClick={() => dispatch(startFetchAnswer())}
      >
        Fetch Answer
      </button>
    </Wrapper>
  );
};

export default YesNoMaybe;
