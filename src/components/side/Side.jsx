import Category from "./Category";
import Profile from "./Profile";
import Info from "./Info";


const Side = (profile) => {
  return (
    <div className="max-w-full">
      <Profile {...profile} />
      <hr className="my-10"/> 
      <Category />
      <Info />
    </div>
  )
}

export default Side;