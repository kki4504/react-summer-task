// import { useEffect, useState } from "react";
// import axios from "axios";
import { FaGithub } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
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
        <FaGithub size={"20"} />
        <AiFillInstagram size={"20"} />
      </div>
    </div>
  );
}

export default Profile;