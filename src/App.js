
import './App.css';
import Contador from './components/Contador';
import Lista from './components/Lista';
import Textos from './components/Textos';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Contador/>
        <Textos/>
        <Lista/>
      </header>
    </div>
  );
}

export default App;
