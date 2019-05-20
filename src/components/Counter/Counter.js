import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import {
  increment, decrement, reset, set,
} from '../../actions/counter';

const Wrapper = styled.div`
  height: 40vh;
  width: 40vw;
  border: 2px solid white;
`;

const Counter = () => {
  const [value, setValue] = useState('');
  // This is similar to mapStateToProps
  // takes a function that has state as its argument
  const { count } = useSelector(({ counter }) => ({
    count: counter.count,
  }));
  const dispatch = useDispatch();
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(set(Number.parseInt(value, 10)));
  };
  return (
    <Wrapper>
      <p>Redux Demo</p>
      <button
        type="button"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <button
        type="button"
        onClick={() => dispatch(increment(5))}
      >
        Increment by 5
      </button>
      <p>{count}</p>
      <button
        type="button"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
      <button
        type="button"
        onClick={() => dispatch(decrement(5))}
      >
        Decrement by 5
      </button>
      <button type="button" onClick={() => dispatch(reset())}>Reset</button>
      <form onSubmit={onSubmit}>
        <input
          type="number"
          placeholder="count"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button type="submit">Update Count</button>
      </form>
    </Wrapper>
  );
};

export default Counter;
