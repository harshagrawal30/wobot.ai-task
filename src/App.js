// import logo from './logo.svg';
import './App.css';
import logo from  './assests/wobot-logo_blue 1.png'
import LoginComponent from './components/loginComponet';
import rect from './assests/Rectangle 381.png'
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <img src={logo} id='companyLogo'/>
      <div id='rectBox1'>
        <img src={rect}/>
      </div>
      <div id='rectBox2'>
        <img src={rect}/>
      </div>
      <div id='loginComp'>

      <LoginComponent/>
      </div>
      
      <h6>Terms of Use | Privacy Policy</h6>
    </div>
  );
}

export default App;
