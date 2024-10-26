import logo from './logo.svg';
import './App.css';
import Terminal from './Components/Terminal';
import name from './assets/Images/output-onlinetools-removebg-preview.png'

function App() {
  return (
    <div >
      <header>
        <img src={name} alt="name" />
      </header>
      <div className='text-container'>
        <h3 className='message-text'>
          Pleased to have you here, fellow homo sapiens.
        </h3>
        <h3 className='message-text'>
          Type
          <span className='help-text'>'help'</span>
          to view a list of available
          commands.
        </h3>
      </div>
      <Terminal />
    </div>
  );
}

export default App;
