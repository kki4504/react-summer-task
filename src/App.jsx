// import logo from './logo.svg';
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

import Header from "./components/Header";
import Home from "./components/Home/Home";
import Side from "./components/side/Side";
import Write from "./components/write/Write";
import Diary from "./components/diary/Diary";
import DevNote from "./components/devNote/DevNote";
import Edit from "./components/write/Edit"


const App = () => {
  // const [contents, setContents] = useState([])
  const [profile, setProfile] = useState('');
  useEffect(() => {
    axios.get("http://localhost:3001/profile")
      .then(res => {
        setProfile(res.data[0]);
    })
  }, [])
  return (
    <div className="mx-auto max-w-screen-xl">
      <header className="py-10">
        <Header />
      </header>
      <div className='mx-auto my-2 flex'>
        <Side {...profile} />
        <div className="m-2 p-4 w-full">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/write" element={<Write />} />
            <Route path="/diary" element={<Diary />} />
            <Route path="/devnote" element={<DevNote />} />
            <Route path="/edit/:category/:id" element={<Edit />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
