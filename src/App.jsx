// import logo from './logo.svg';
import Header from "./components/Header";
import Side from "./components/side/Side";
import Main from "./components/main/Main";
import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [contents, setContents] = useState([])
  const [profile, setProfile] = useState('');
  useEffect(() => {
    axios.get("http://localhost:3001/content")
      .then(res => {
        setContents(res.data)
    })
    axios.get("http://localhost:3001/profile")
      .then(res => {
        setProfile(res.data[0]);
    })
  }, [])
  return (
    <div className="mx-auto max-w-screen-xl bg-gray-100">
      <header className="py-10">
        <Header />
      </header>
      <div className='mx-auto my-2 bg-gray-300 flex'>
        <Side {...profile} />
        <Main contents={contents} />
      </div>
      
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
    </div>
  );
}

export default App;
