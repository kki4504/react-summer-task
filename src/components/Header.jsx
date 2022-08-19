// import { MdAddBox } from "react-icons/md"
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="flex relative">
      <Link to="/">
        <div className='text-3xl font-bold grow'>
          Blog
        </div>
      </Link>
      
      <Link to="/write">
        <div className="absolute bottom-0 right-0 hover:scale-110 transition cursor-pointer">
          Write
        </div>
      </Link>
    </div>
  )
}

export default Header;  