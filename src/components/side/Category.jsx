import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./side.css";
const Category = () => {
  const location = useLocation();
  const locationStyle = {
    color:"black", 
    background:"#d1d5db"
  }
  const linkList = ["/", "/diary", "/devnote", "/todos"];

  return (
    <div className="text-sm">
      <p className="font-semibold">Category</p>
      <div className="grid grid-rows-4 grid-cols-1 gap-3 mt-5 text-gray-500">
        {
          linkList.map((v, i) => {
            return (
              <Link key={i} to={v} className="category" style={location.pathname === v ? locationStyle : {}}>
                {v === '/' ? "Home" : (v.charAt(1).toUpperCase() + v.slice(2))}    
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}

export default Category;