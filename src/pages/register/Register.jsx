import { useForm } from "react-hook-form";
import Button from "../../componetns/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import registerImage from "../../assets/placeholder-concept-illustration_114360-4847.avif"
import { useContext, useState } from "react";
import { AUTH_CONTEXT } from "../../context/AuthProvider";
import { addUser, uploadImage } from "../../utils";

const Register = () => {
    const {createUserFirebase,updateProfileFirbase,logOut} = useContext(AUTH_CONTEXT)
    const [error,setError] = useState("")
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
     //creating user
   try {
     const url = await uploadImage(data.photo[0])
    await createUserFirebase(data.email,data.password)
    await updateProfileFirbase(data.name,url)
    await addUser({name:data.name,email:data.email,image:url,location:data.location,role:"user"})
    await logOut()
    navigate("/login")
    console.log(data)
   } catch (error) {
    setError(error.message)
   }
   }
   
    return (
        <div className="flex items-center h-screen w-full justify-center">
             <div className="w-1/2">
       <img src={registerImage}  alt="" />
       </div>
        <form 
        onSubmit={handleSubmit(onSubmit)}
        className="bg-base-200
         max-w-3xl w-[600px] mx-auto min-h-[600px]
         flex flex-col space-y-8 py-12 justify-center  items-center">
            <input type="text"
             required 
             placeholder="name"
             {...register("name")} 
             className="rounded-md w-10/12 py-2 px-5 
              focus:outline-none"/>
                <input type="text"
             required 
             placeholder="your location"
             {...register("location")} 
             className="rounded-md w-10/12 py-2 px-5 
              focus:outline-none"/>
            <input type="email"
             required 
             placeholder="email" 
             {...register("email")} 
             className="rounded-md w-10/12 py-2 px-5 mt-4
              focus:outline-none"/>
            <input type="password"
             required
             placeholder="password" 
             {...register("password")}
             className="rounded-md w-10/12 py-2 px-5 mt-4
              focus:outline-none"/>
            <input type="file"
             {...register("photo")}
             className="file-input
             file-input-bordered file-input-success w-10/12" />
             <p className="text-red-400">{error}</p>
              <Button 
              title={'Register'}
               bgColor={'bg-green-500 text-white w-10/12 py-2'}/>
               <p className="text-start">Already have an account?please
               <Link to="/login" className="underline ml-2">Login</Link></p>
        </form>
    </div>
    );
};

export default Register;