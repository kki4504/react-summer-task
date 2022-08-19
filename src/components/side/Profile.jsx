import { FaGithub } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import "./side.css"
const Profile = (profile) => {
  return ( 
    <div className="w-56">
      {/* image */}
      <div className='w-full'>
        <img className='' src={profile.image} alt="" />
      </div>
      {/* text */}
      <div className="mt-10 text-sm">
        <div className="font-semibold">
          {profile.name}
        </div>
        <div className="mt-1">
          {profile.introduction}
        </div>
      </div>
      {/* icons */}
      <div className='flex mt-7 gap-2'>
        <a href="https://github.com/kki4504">
          <FaGithub size={"20"} className="icon"/>
        </a>
        <a href="https://www.instagram.com/ppang_1">
          <AiFillInstagram size={"24"} className="icon"/>
        </a>
      </div>
    </div>
  );
}

export default Profile;