import logo from './logo.svg';
import './App.css';

function App() {

async function probar () {
  const res = await fetch('https://epi-production.vercel.app/api/users')
  //http://localhost:8083/api/users
  const data = await res.json()
console.log(data)
  return data
} 

let data = probar()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        {data.users}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
