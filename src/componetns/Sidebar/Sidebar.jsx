import { useEffect, useState } from "react";

const Sidebar = () => {
    const [category,setCategory] = useState([])
    // get categories
    useEffect(() => {
        const getData = async () => {
          const res = await fetch("places.json")
          const data  = await res.json()
          setCategory(data)
        }
        getData()
    } ,[])
    return (
        <div className="hidden md:inline-flex shadow-lg border border-gray-300  sticky top-0 h-screen">
           <ul className="flex flex-col gap-5 text-md font-bold pl-12 py-12">
              {category.map(item => 
             <div className="flex items-center gap-5" key={item.image}>
              <input type="checkbox"  name="" id="" />
              <li className="text-slate-800">{item.category}</li>
             </div>
              )}
           </ul>
        </div>
    );
};

export default Sidebar;