// import axios from "axios"
// import { useEffect, useState } from "react"
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import ContentList from "./ContentList";
import { HiPlus } from "react-icons/hi"
const Home = () => {
  const [diary, setDiary] = useState([]);
  const [devNote, setDevNote] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/Diary")
      .then(res => setDiary(res.data))
      .catch(err => console.error(err))

    axios.get("http://localhost:3001/DevNote")
      .then(res => setDevNote(res.data))
      .catch(err => console.error(err))
  }, [diary, devNote])
  return (
    <div className="flex flex-col">
      <div className="">
        <div className="flex">
          <div className="grow text-xl font-semibold">
            Diary
          </div>
          <Link className="mr-5" to="/diary">
            <HiPlus size={"24"} />
          </Link>
        </div>
        <hr />
        <div className="w-full h-72 overflow-y-auto mt-2">
          {
            diary.map((content) => <ContentList content={content} key={content.id}/>)
          }      
        </div>  
      </div>
      <div className="mt-24">
        <div className="flex">
          <div className="grow text-xl font-semibold">
            Devnote
          </div>
          <Link className="mr-5" to="/devnote">
            <HiPlus size={"24"} />
          </Link>
        </div>
        <hr />
        <div className="w-full h-72 overflow-y-auto mt-2">
          {
            devNote.map((content) => <ContentList content={content} key={content.id} />)
          }      
        </div>  
      </div>
    </div>
  )
}

export default Home