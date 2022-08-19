import axios from "axios";
import { useEffect, useState } from "react";
import Content from "../Home/Content";
const DevNote = () => {
  const [DevNote, setNoteList] = useState([])
  useEffect(() => {
    axios.get("http://localhost:3001/DevNote?_sort=id&_order=DESC")
      .then(res => {
        setNoteList(res.data);
      }).catch(err => {
        console.error(err)
      })
  }, [])
  return (
    <div className="flex flex-col">
      <div className="text-xl font-semibold">
        Devnote
      </div>
      <div className="overflow-y-auto">
        {
          DevNote.map(content => <Content content={content} key={content.id} />)
        }
      </div>
    </div>
  )
}

export default DevNote;