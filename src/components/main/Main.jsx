// import axios from "axios"
// import { useEffect, useState } from "react"
import Content from "./Content"

const Main = ({contents}) => {
  
  return (
    <div className="m-2 bg-blue-200 w-full">
      {console.log(contents)}
      {
        contents.map((content) => <Content content={content} />)
      }      
    </div>
  )
}

export default Main