import {FaSearch} from "react-icons/fa"
const Navbar = () => {
    return (
        <div className="flex justify-between items-center shadow-lg py-3 px-5 md:px-12">
            {/* LOGO */}
            <div><h1 className="font-serif text-2xl md:text-4xl font-bold italic">BeautifulBD</h1></div>
            {/* serchbar */}
            <div className="flex-1 px-12 relative">
                <input type="text" 
                placeholder="search place"
                className=" border border-gray-300 px-4 py-2 w-full rounded-full" />
                <FaSearch className="absolute top-4 text-gray-300 right-16 cursor-pointer"/>
                </div>
            {/* links */}
            <ul className="hidden font-semibold text-sm uppercase md:flex gap-3 items-center">
                <li><a href="/">Home</a></li>
                <li><a href="/destinations">Destinations</a></li>
                <li><a href="/reviews">Reviews</a></li>
                <li><a href="/login">Login</a></li>
                <li><a href="/register">Register</a></li>
            </ul>
        </div>
    );
};

export default Navbar;