import { FaSearch } from "react-icons/fa";
import Button from "../Button/Button";
const Hero = () => {
    return (
        <div className="hero min-h-[80vh]" style={{backgroundImage:'url(https://images.unsplash.com/photo-1519712467346-8a7cb04d66b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)'}}>
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content">
            <div className="max-w-full">
                <h1 className="mb-5  font-serif text-3xl md:text-5xl font-bold">
                Journey into the Heart of  <span className="text-green-500">Bangladesh</span></h1>
                <p className="mb-5 text-sm md:text-md font-semibold">Find the Best Places to Visit and Uncover Extraordinary Experiences.</p>
                {/* serchbar */}
                <div className="flex-1 px-12 relative">
                <input type="text" 
                placeholder="Search place"
                className="font-bold border border-gray-300 bg-gray-300 bg-opacity-10 px-4 py-2 w-full rounded-full" />
                <FaSearch className="absolute top-4 text-gray-300 right-16 cursor-pointer"/>
                </div>
                <Button  title={`Find Now`} bgColor={'text-gray-200 bg-green-500 mt-5'}/>
            </div>
        </div>
    </div>
    );
};

export default Hero;