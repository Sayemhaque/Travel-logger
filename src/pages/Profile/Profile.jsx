import { FaEnvelope } from "react-icons/fa";
import locationImage from "../../assets/placeholder.png"
import { useContext } from "react";
import { AUTH_CONTEXT } from "../../context/AuthProvider";
import Posts from "./Posts";
const Profile = () => {
  const {user} = useContext(AUTH_CONTEXT)
    return (
        <div className="md:max-w-4xl mx-auto py-12">
           <div>
              {/* information about the person */}
           <div className="px-2 flex flex-col md:flex-row md:items-center justify-between">
             <div className="flex items-center">
            {user ? <img className="rounded-full w-36 h-36" 
            src={user?.photoURL} alt="" /> :
             <img className="rounded-full w-36 h-36" 
            src="https://www.w3schools.com/w3images/avatar2.png" alt="" />}
              <div className="ml-4">
              <p className="mt-2 text-2xl font-bold">{user?.displayName}</p>
               <p className="text-sm flex items-center gap-1 mt-3">
                <FaEnvelope/>{user ? user?.email : "noemail@gmail.com"}</p>
               <p className="text-sm flex  items-center gap-1 mt-3">
                <img className="w-5 h-5" src={locationImage} alt="" />
                Dhaka,Bangladesh</p>
              </div>
             </div>
                 {/* post information */}
              <div className="mt-3 md:mt-0  pl-3 md:px-0">
                <p className="font-bold">Total Post:10</p>
                <p className="font-bold mt-2">Likes:30</p>
              </div>
           </div>
           <div className="divider"></div>
            <div>
                <h3 className="text-2xl text-center py-5 font bold">Posts</h3>
            </div>
            <Posts />
           </div>
        </div>
    );
};

export default Profile;