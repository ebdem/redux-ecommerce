import React from 'react';
import { Container } from 'semantic-ui-react';
import Navi from '../navi/Navi';
import Dashboard from './Dashboard';



function App() {
  return (
    <Container style={{width: "100%"}}>
      <Navi/>
      <Dashboard/>
    </Container>
  );
}

export default App;
