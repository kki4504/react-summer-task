import axios from "axios";
import { useEffect, useState } from "react";
import Content from "../Home/Content";
const Diary = () => {
  const [dirList, setDirList] = useState([])
  useEffect(() => {
    axios.get("http://localhost:3001/Diary?_sort=id&_order=DESC")
      .then(res => {
        setDirList(res.data);
      }).catch(err => {
        console.error(err)
      })
  }, [])
  return (
    <>
      <div className="text-xl font-semibold">
        Diary
      </div>
      {
        dirList.map(content => <Content content={content} key={content.id} />)
      }
    </>
  )
}

export default Diary;