import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Write = () => {
  const selectList = ["diary", "devnote"];
  const navigate = useNavigate();
  const now = new Date()
  const [disabled, setDisabled] = useState(false);
  const [contents, setContents] = useState({
    date: `${now.getFullYear()}-${(("00"+(now.getMonth()+1).toString()).slice(-2))}-${(("00"+now.getDate().toString()).slice(-2))}`,
    category: "diary",
    title: "",
    content: ""
  })

  const handleChange = (e) => {
    const { value, name } = e.target;
    setContents({
      ...contents,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    setDisabled(true);
    e.preventDefault();

    axios.post(`http://localhost:3001/${contents.category}`, contents)
      .then(res => {
        console.log(res)
        alert("Write Complete")
      }).catch(err => {
        console.error(err)
      })
    setDisabled(false);
    navigate("/");
  };

  return (
    <>
      <div className="flex">
        {/* category_select */}
        <div>
          <label htmlFor="countries" className="block mb-2 text-sm font-medium">Category</label>
          <select name="category" id="category" onChange={handleChange} value={contents.category}
            className="border text-sm rounded-lg focus:ring-gray-300 focus:border-gray-300 p-2.5 mr-2">
            {
              selectList.map((v, index) => {
                return (
                  <option className="hover:bg-gray-500" value={v} key={index}>{v.charAt(0).toUpperCase()+v.slice(1)}</option>
                )
              })
            }
          </select>
        </div>
        {/* title */}
        <div className="flex-1">
          <label htmlFor="title" className="block mb-2 text-sm font-medium">Title</label>
          <input value={contents.title} onChange={handleChange} name="title" id="title" type="text"
            className="w-full border text-sm rounded-lg focus:ring-gray-300 focus:border-gray-300 p-2.5" required />
        </div>
      </div>

      {/* content */}
      <div className="w-full h-32 mt-4">
        <div className="mb-4 w-full bg-gray-50 rounded-lg border border-gray-200">
          <div className="py-2 px-4 bg-white rounded-b-lg">
            <label htmlFor="content" className="sr-only">Publish post</label>
            <textarea contentEditable="true" name="content" id="content" value={contents.content} onChange={handleChange} rows="8" className="block px-0 w-full text-sm bg-white border-0 resize-none" placeholder="Write an article..." required></textarea>
          </div>
        </div>
        <button disabled={disabled} type="button" onClick={handleSubmit} className="border inline-flex items-center px-5 py-2.5 text-sm font-medium text-center rounded-lg focus:ring-4 focus:ring-gray-900 hover:bg-gray-300 transition">
          Publish post
        </button>
      </div>
    </>
  )
}

export default Write;