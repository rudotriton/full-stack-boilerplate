import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Counter from '../Counter/Counter';
import YesNoMaybe from '../YesNoMaybe/YesNoMaybe';

const Wrapper = styled.div`
  text-align: center;
`;

const Header = styled.header`
  background-color: black;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: white;
`;

const A = styled(Link)`
  color: ${props => props.theme.primaryColor};
  margin-bottom: 2rem;
`;

const App = () => {
  const [username, setUsername] = useState('');
  useEffect(() => {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => setUsername(user.username));
  });
  return (
    <Wrapper>
      <Header>
        {username ? (
          <h4>{`Hello ${username}`}</h4>
        ) : (
          <h1>Loading.. please wait!</h1>
        )}
        <A
          to="/nowhere"
        >
        Front end routing
        </A>
        <Counter />
        <YesNoMaybe />
      </Header>
    </Wrapper>
  );
};

export default App;
