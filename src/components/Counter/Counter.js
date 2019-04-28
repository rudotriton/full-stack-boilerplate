import React, { useState } from 'react';
import { useActions, useSelector } from 'react-redux';
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
  const [value, setValue] = useState(0);
  // This is similar to mapStateToProps
  // takes a function that has state as its argument
  const { count } = useSelector(({ counter }) => ({
    count: counter.count,
  }));
  // This is similar to mapDispatchToProps
  // it can take either just 1 action creator, an array of them or obj
  // const incrementCount = useActions(increment);
  const [
    incCount,
    decCount,
    setCount,
    resetCount,
  ] = useActions([
    increment,
    decrement,
    set,
    reset,
  ], []);
  // writing just increment there returns a function that needs
  // to be called in a function like () => inc(99)
  // alternative is:
  // inc: () => increment(99)
  // which results in onClick(inc)
  const { inc } = useActions({ inc: () => increment(99) });
  const onSubmit = (event) => {
    event.preventDefault();
    setCount(Number.parseInt(value, 10));
  };
  return (
    <Wrapper>
      <p>Redux Demo</p>
      <button
        type="button"
        onClick={inc}
      >
        Increment
      </button>
      <button
        type="button"
        onClick={() => incCount(5)}
      >
        Increment by 5
      </button>
      <p>{count}</p>
      <button
        type="button"
        onClick={() => decCount(1)}
      >
        Decrement
      </button>
      <button
        type="button"
        onClick={() => decCount(5)}
      >
        Decrement by 5
      </button>
      <button type="button" onClick={resetCount}>Reset</button>
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
