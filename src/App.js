import './App.css';
import Drafts from './Drafts/Drafts';
import Header from './Header/Header';

function App() {
  return (
    <div className="App">
      <div className="Content">
        <Header/>
        <Drafts/>
      </div>
    </div>
  );
}

export default App;
