import logo from './logo.svg';
import './App.css';
import Hootsuite from './Hootsuite/Hootsuite';

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <div className='left'>
          <h4>Logo</h4>
        </div>
        <div className='right'>
          <navbar>
            <span id="home">HOME</span>
            <span id="other">ABOUT</span>
            <span id="other">MENU</span>
            <span id="other">ORDER</span>
            <span id="other">CONTACT</span>
          </navbar>
        </div>
      </div>
      <div className="bottom">
         <h3>HOME PAGE</h3>
      </div>
      {/* <Hootsuite /> */}
    </div>
  );
}

export default App;
