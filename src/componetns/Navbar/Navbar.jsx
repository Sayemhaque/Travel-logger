import { useContext } from "react";
import { Link } from "react-router-dom";
import { AUTH_CONTEXT } from "../../context/AuthProvider";

const Navbar = () => {
    const {user,logOut} = useContext(AUTH_CONTEXT) 
    const handleLogOut = async () => {
        await logOut()
    }
    return (
        <div className="flex justify-between items-center shadow-lg py-3 px-5 md:px-12">
            {/* LOGO */}
            <div>
            <h1 className="font-serif text-2xl md:text-4xl font-bold italic">
                Beautiful<span className="text-green-500">BD</span></h1></div>
            {/* links */}
            <ul className="hidden font-semibold text-md  md:flex gap-3 items-center">
                <li><Link to="/">Home</Link></li>
                <li>{user && <Link to="/profile">Profile</Link>}</li>
                <li>{user && <Link to="/add">Add a place</Link>}</li>
                {user ?   <li onClick={handleLogOut}><p>Logout</p></li> :
                 <li><Link to="/login">Login</Link></li>
                }
            </ul>
        </div>
    );
};

export default Navbar;