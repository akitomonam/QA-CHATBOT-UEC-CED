import './App.css';
import Header from './components/header';
import QAWindow from './components/qa_window';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App-body">
        <QAWindow />
      </div>
    </div>
  );
}

export default App;
