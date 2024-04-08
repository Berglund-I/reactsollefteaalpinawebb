import logo from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-container">
          <img src={process.env.PUBLIC_URL + '/solleftealogo.png'} className="App-logo" alt="logo"/>
          <h1>
            Sollefteå alpina
          </h1>
        </div>
      </header>

      <nav className="mainnav">
        <ul>
          <li><a href="startsida">Hem</a></li>
          <li><a href="traning">Träning</a></li>
          <li><a href="competing">Tävling</a></li>
          <li><a href="member">Bli medlem</a></li>
          <li><a href="traning">Om föreningen</a></li>
          <li><a href="traning">Kontakta oss</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
