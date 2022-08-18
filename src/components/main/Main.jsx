// import axios from "axios"
// import { useEffect, useState } from "react"
import Content from "./Content"

const Main = ({contents}) => {
  
  return (
    <div className="m-2 p-4 w-full">
      {
        contents.map((content) => <Content content={content} key={content.id}/>)
      }      
    </div>
  )
}

export default Main