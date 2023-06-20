import { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Card from "./Card";

const Places = () => {
  const [places, setPlaces] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const [totalPlaces, setTotaPlaces] = useState(0)


 

  const totalItemsPerPage = parseInt(6); // TODO: will make it dynamic
  const totalPages = Math.ceil(totalPlaces / totalItemsPerPage)
  const pages = [...Array(totalPages).keys()]

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`http://localhost:3000/posts`)
      const data = await res.json()
      setPlaces(data)
      console.log(data)
    }
    getData()
   
  }, [currentPage, totalItemsPerPage])
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`http://localhost:5000/totalPlaces`)
      const data = await res.json()
      setTotaPlaces(data.totalPlaces)
      console.log(data)
    }
    getData()
   
  }, [])

  //get places data
  const handleCurrentPage = (number) => {
    console.log(typeof number)
      setCurrentPage(number);
    
  }

 console.log(places)
  return (
    <div className="bg-base-200 py-5">
      <div className="grid grid-cols-1 md:grid-cols-4  px-5 md:px-12 gap-5">
        <Sidebar />
        <div className="md:col-span-3 space-y-12">
          {places.map(place => <Card key={place.category} place={place} />)}
          <div className="text-center space-x-2">
            <p>{places.length}</p>
            {pages.map(number =>
              <button
                onClick={() => handleCurrentPage(number)}
                className={`p-2 rounded-md  ${currentPage === number ? "bg-green-500" : "bg-gray-300"}`} key={number}>{number}
              </button>)}
          </div>
        </div>
      </div>
    </div>

  );
};

export default Places;