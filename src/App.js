import './App.css';
import { Container, Row } from 'react-bootstrap';
import Drafts from './Drafts/Drafts';
import Header from './Header/Header';

function App() {
  return (
    <Container className="App">
      <Container className="Content">
          <Header/>
          <Drafts/>
      </Container>
    </Container>
  );
}

export default App;
