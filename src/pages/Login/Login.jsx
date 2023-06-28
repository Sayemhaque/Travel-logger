import { useForm } from "react-hook-form";
import Button from "../../componetns/Button/Button";
import loginImage from "../../assets/tablet-login-concept-illustration_114360-7893.avif"
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AUTH_CONTEXT } from "../../context/AuthProvider";
import googleIcon from "../../assets/google.png"
import { addUser } from "../../utils";
const Login = () => {
  const {logInWithGoogle,logInFirebase} = useContext(AUTH_CONTEXT)
  const navigate = useNavigate()
  const [error,setError] = useState("")
    const { register, handleSubmit } = useForm();
      const onSubmit = async (data) => {
       console.log(data)
     try {
      await logInFirebase(data.email,data.password)
      navigate("/")
     } catch (error) {
      setError(error.message)
     }
     }
     const handleLoginWithGoogle = async () => {
    try {
      const result = await logInWithGoogle()
      console.log(result)
      const data = {name:result.user?.displayName,email:result.user?.email,
        image:result.user?.photoURL,role:"admin"}
      console.log(data)
      navigate("/")
      await addUser({data})
    } catch (error) {
      console.log(error)
    }
     }
    return (
        <div className="flex flex-col
         md:flex-row items-center 
         h-screen w-full justify-center">
       <div className="w-1/2">
       <img src={loginImage} alt="" />
       </div>
       <form 
        onSubmit={handleSubmit(onSubmit)}
        className="bg-base-200
         max-w-3xl w-[600px] 
         mx-auto min-h-[600px]
         rounded-lg
         flex flex-col space-y-8 py-12 justify-center  items-center">
           <button 
          onClick={handleLoginWithGoogle}
             className="rounded-md
              bg-black text-white
               cursor-pointer w-10/12 py-2 px-5 mt-4
               flex items-center gap-3 justify-center
              focus:outline-none">
                  <img src={googleIcon} className="w-6 h-6" alt="" />
                  Log in with google
              </button>
            <input type="email"
             required
             placeholder="Email" 
             {...register("email")}
             className="rounded-md w-10/12 py-2 px-5 mt-4
              focus:outline-none"/>
            <input type="password"
             required 
             placeholder="password" 
             {...register("password")}
             className="rounded-md w-10/12 py-2 px-5 mt-4
              focus:outline-none"/>
               <p className="text-red-400">{error}</p>
              <Button title={'Login'} bgColor={'bg-green-300  w-10/12 py-2'}/>
              <p className="text-start">Do not have an account?please
               <Link to="/register" className="underline ml-2">Register</Link></p>
        </form>
    </div>
    );
};

export default Login;