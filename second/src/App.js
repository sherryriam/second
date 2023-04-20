import logo from './logo.svg';
import './App.css';
import Main from './Main';
import Footer from './Footer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2 className='float'>
          <code>My first react project practice</code>
        </h2>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Main />
      <Footer />
    </div>
  );
}

export default App;
