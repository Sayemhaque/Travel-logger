import axios from "axios"
//get all the posts
const getPosts = async () => {
  const res = await axios.get(`http://localhost:3000/posts`)
  return res.data
}

// get specific user posts
const getUserPosts = async (email) => {
  const res = await axios.get(`http://localhost:3000/posts/email?email=${email}`)
  console.log(res.data)
  return res.data
}

const addPlace = async (data) =>{
    const res = await axios.post("http://localhost:3000/posts",data)
    return res
}

// add user mongoData base
const addUser = async (data) => {
  const res = await axios.post("http://localhost:3000/user",data)
  return res.data;
}



const uploadImage = async image => {
    const formData = new FormData()
    formData.append('image', image)
    const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imgbbApiKey}`
    const response = await fetch(url, {
      method: 'POST',
      body: formData,
    })
    const data = await response.json()
    console.log(data)
    return data.data.display_url
  }

  export {uploadImage,addPlace,addUser,getPosts,getUserPosts}