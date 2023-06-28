import Sidebar from "../Sidebar/Sidebar";
import Card from "./Card";
import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../../utils";

const Places = () => {
  const {data : places = [] , isLoading,isError} = useQuery({
    queryKey:['posts'],
    queryFn: getPosts,
    cacheTime:Places
  })



  if(isError) return <p>Error</p>

 console.log(places)
  return (
    <div className="bg-base-200 py-5">
      <div className="grid grid-cols-1 md:grid-cols-4  px-5 md:px-12 gap-5">
        <Sidebar />
        <div className="md:col-span-3 space-y-12">
          {isLoading ? <p className="text-center">Loading...</p> :places.map(place => <Card key={place.category} place={place} />)}
          <div className="text-center space-x-2">
            <p>{places.length}</p>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Places;