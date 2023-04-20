import logo from './logo.svg';
import './App.css';
import Main from './Main';
import Footer from './Footer';
import ContactForm from './ContactForm'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2 className='float'>
          <code>My first react project practice</code>
        </h2>
        <a
          id="contact"
          className="App-link"
          href="#contact"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact
        </a>
      </header>
      <Main />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
