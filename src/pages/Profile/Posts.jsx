import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AUTH_CONTEXT } from "../../context/AuthProvider";
import Card from "../../componetns/Places/Card";

const Posts = () => {
    const [posts,setPosts] = useState([])
    const {user} = useContext(AUTH_CONTEXT)

    useEffect(() => {
        const getData = async () => {
            const res = await axios.get(`http://localhost:3000/posts/email?email=${user?.email}`)
            setPosts(res.data)
        }
        getData()
    } ,[])
    return (
        <div className="space-y-9">
            {posts.map((post) => <Card key={post._id} place={post}/>)}
        </div>
    );
};

export default Posts;