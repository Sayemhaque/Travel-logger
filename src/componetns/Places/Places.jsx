import { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Card from "./Card";

const Places = () => {
    const [places,setPlaces] = useState([])
    //get places data
    useEffect(() => {
        const getData = async () => {
            const res = await fetch("places.json")
            const data = await res.json()
            setPlaces(data)
        }
        getData()
    } , [])
    return (
        <div className="bg-base-200 py-5">
        <div className="grid grid-cols-1 md:grid-cols-4  px-5 md:px-12 gap-5">
            <Sidebar/>
          <div className="md:col-span-3 space-y-12">
            {places.map(place => <Card key={place.category} place={place}/>)}
          </div>
        </div> 
      </div>
      
    );
};

export default Places;