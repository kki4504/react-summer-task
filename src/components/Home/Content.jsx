import axios from "axios"
import { AiTwotoneDelete, AiTwotoneEdit } from "react-icons/ai"
import { Link, useNavigate } from "react-router-dom"

const Content = ({content}) => {
  const navigate = useNavigate();
  const onClickDel = () => {
    axios.delete(`http://localhost:3001/${content.category}/${content.id}`)
    .then(res => {
      console.log(res)
      alert("Delete Complete")
      navigate("/")
    })
    .catch(err => console.error(err))
  }
  return (
    <div className="ml-10 mt-6 mb-20 pr-4">
      {/* 날짜 */}
      {/* 제목 / 삭제수정 버튼*/}
      <div className="flex flex-row">
        <div className="grow font-medium text-xl items-center">
          {content.title}
        </div>
        <div className="flex flex-col w-20">
          <div className="text-sm">
            {content.date}
          </div>
          <div className="flex justify-end">
            <Link to={`/edit/${content.category}/${content.id}`}><AiTwotoneEdit size={"20"} className="cursor-pointer" /></Link>
            <AiTwotoneDelete size={"20"} className="cursor-pointer" onClick={onClickDel}/>
          </div>
        </div>
      </div>
      <hr className="mt-5 mb-3"/>
      {/* 내용 */}
      <div className="ml-2 h-full">
        <img className="max-h-96" src={content.image} alt="" />
        {content.content}
      </div>
      <hr className="mt-5 mb-3"/>
    </div>
  )
}

export default Content