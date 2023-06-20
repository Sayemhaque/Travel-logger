import axios from "axios"


const addPlace = async (data) =>{
    const res = await axios.post("http://localhost:3000/posts",data)
    return res
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

  export {uploadImage,addPlace}