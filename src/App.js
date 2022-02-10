import logo from './circle-logo.png';
import './App.css';
import { startMessage, setCookie, resetCookie } from './functions'

setCookie('pageLoad')

const message = 'Hello world'
const delay = 10000

startMessage(message, delay)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi Circle Team, thank you for considering me! <code></code>
        </p>
        <a
          className="App-link"
          href="https://github.com/TheUnseen12/circle-project"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Project Repository
        </a>
      </header>
    </div>
  )
}

export default App;
