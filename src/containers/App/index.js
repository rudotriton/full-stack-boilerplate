import React from 'react';
import styled, { keyframes } from 'styled-components';
import logo from './logo.svg';
import Counter from '../../components/Counter';

const AppLogoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.div`
  text-align: center;
`;

const Header = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Img = styled.img`
  animation: ${AppLogoSpin} infinite 20s linear;
  height: 40vmin;
`;

const A = styled.a`
  color: #61dafb;
`;

class App extends React.Component {
  state ={ username: null }

  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
  }

  render() {
    const { username } = this.state;
    return (
      <Wrapper className="App">
        <Header>
          <Img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit
            {' '}
            <code>src/App.js</code>
            {' '}
and save to reload.
          </p>
          {username ? (
            <h1>{`Hello ${username}`}</h1>
          ) : (
            <h1>Loading.. please wait!</h1>
          )}
          <A
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </A>
          <Counter />
        </Header>
      </Wrapper>
    );
  }
}

export default App;
