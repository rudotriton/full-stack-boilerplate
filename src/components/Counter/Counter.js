import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import {
  increment, decrement, reset, set,
} from '../../actions/counter';

const Wrapper = styled.div`
  height: 40vh;
  width: 40vw;
  border: 2px solid white;
`;

const Counter = ({
  count,
  incrementCount,
  incrementCountByFive,
  decrementCount,
  decrementCountByFive,
  setCount,
  resetCount,
}) => {
  const [value, setValue] = useState(0);
  const onSubmit = (event) => {
    event.preventDefault();
    setCount(Number.parseInt(value, 10));
  };
  return (
    <Wrapper>
      <p>Redux Demo</p>
      <button type="button" onClick={incrementCount}>Increment</button>
      <button type="button" onClick={incrementCountByFive}>Increment by 5</button>
      <p>{count}</p>
      <button type="button" onClick={decrementCount}>Decrement</button>
      <button type="button" onClick={decrementCountByFive}>Decrement by 5</button>
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

// PropTypes for type checking
Counter.propTypes = {
  count: PropTypes.number.isRequired,
  incrementCount: PropTypes.func.isRequired,
  incrementCountByFive: PropTypes.func.isRequired,
  decrementCount: PropTypes.func.isRequired,
  decrementCountByFive: PropTypes.func.isRequired,
  setCount: PropTypes.func.isRequired,
  resetCount: PropTypes.func.isRequired,
};

// this maps the state object directly to props so that it can be accessed with props.state
// if the Component does not need access to the full state it is better to use something like
// count: state.count which gives only the access to the count
const mapStateToProps = state => ({
  count: state.counter.count,
});

// this maps the actions to our dashboard component's props
const mapDispatchToProps = dispatch => ({
  incrementCount: () => dispatch(increment()),
  incrementCountByFive: () => dispatch(increment(5)),
  decrementCount: () => dispatch(decrement()),
  decrementCountByFive: () => dispatch(decrement(5)),
  resetCount: () => dispatch(reset()),
  setCount: newCount => dispatch(set(newCount)),
});

// connect returns a higher order component to which we pass our dashboard component.
//
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);
