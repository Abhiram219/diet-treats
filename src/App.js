import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hey User,
          <div className="heart" /> 
            <svg id="color" enable-background="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m11.466 22.776c.141.144.333.224.534.224s.393-.08.534-.224l9.594-9.721c4.001-4.053 1.158-11.055-4.532-11.055-3.417 0-4.985 2.511-5.596 2.98-.614-.471-2.172-2.98-5.596-2.98-5.672 0-8.55 6.984-4.531 11.055z" fill="#f44336"/></svg>  
          <div /> 
         from Diety Treats
        </p>

      </header>
    </div>
  );
}

export default App;
