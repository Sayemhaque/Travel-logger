import { useContext } from "react";
import { getUserPosts } from "../../utils";
import { useQuery } from "@tanstack/react-query";
import { AUTH_CONTEXT } from "../../context/AuthProvider";
import Card from "./Card";

const Posts = () => {
    const {user} = useContext(AUTH_CONTEXT)
    const {data : userPosts = [] , isLoading,isError} = useQuery({
        queryKey:['user-posts'],
        queryFn: () => getUserPosts(user?.email),
      })
      console.log(userPosts)

      if(isError) return <p>Error</p>

    return (
        <div className="space-y-9">
            {isLoading ? <p className="text-center">Loading...</p> :
            userPosts.map((post) =>
             <Card key={post._id}  place={post}/>)}
        </div>
    );
};

export default Posts;