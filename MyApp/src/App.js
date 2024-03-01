// import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {
  return (
    <div className="App">
      <nav className='App-navbar'>
      <><Header /></>
      </nav>
      <header className="App-header">
        <h1>Welcome Back!</h1>
        <h1>Learning App</h1>
      </header>
      <footer className="App-footer">
        <><Footer/></>
      </footer>
    </div>
  );
}

export default App;
