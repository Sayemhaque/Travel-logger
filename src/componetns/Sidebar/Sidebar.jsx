import { useEffect, useState } from "react";

const Sidebar = () => {
    const [category, setCategory] = useState([])
    // get categories
    useEffect(() => {
        const getData = async () => {
            const res = await fetch("places.json")
            const data = await res.json()
            setCategory(data)
        }
        getData()
    }, [])
    return (
        <div className="shadow-lg bg-white border border-gray-300 md:sticky top-0 md:h-[600px] p-5 ">
            {/* category options */}
            <p className="mb-1">Filter by Category</p>
            <select className="select w-full max-w-md border border-green-500">
                <option disabled selected>Category</option>
                {category.map((item) => (
                    <option value={item.category} key={item.image} className="text-slate-800">
                        {item.category}
                    </option>
                ))}
            </select>
            {/* district options */}
            <div className="form-control w-full max-w-md mt-6">
                <p className="mb-1">Filter by District</p>
                <select className="select w-full max-w-md border border-green-500 ">
                    <option disabled selected>location</option>
                    {category.map((item) => (
                        <option value={item.category} key={item.image} className="text-slate-800">
                            {item.location}
                        </option>
                    ))}
                </select>
            </div>
        </div>

    );
};

export default Sidebar;