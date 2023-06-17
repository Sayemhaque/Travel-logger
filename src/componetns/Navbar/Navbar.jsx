
const Navbar = () => {
    return (
        <div className="flex justify-between items-center shadow-lg py-3 px-5 md:px-12">
            <ul className="hidden font-semibold text-sm uppercase md:flex gap-3 items-center">
                <li><a href="/login">Login</a></li>
                <li><a href="/reviews">Add a place</a></li>
            </ul>
            {/* LOGO */}
            <div>
            <h1 className="font-serif text-2xl md:text-4xl font-bold italic">
                Beautiful<span className="text-green-500">BD</span></h1></div>
            {/* links */}
            <ul className="hidden font-semibold text-sm uppercase md:flex gap-3 items-center">
                <li><a href="/">Home</a></li>
                <li><a href="/destinations">Profile</a></li>
            </ul>
        </div>
    );
};

export default Navbar;