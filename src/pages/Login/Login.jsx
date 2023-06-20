import { useForm } from "react-hook-form";
import Button from "../../componetns/Button/Button";
import loginImage from "../../assets/tablet-login-concept-illustration_114360-7893.avif"
import { Link } from "react-router-dom";

const Login = () => {
    const { register, handleSubmit } = useForm();
      const onSubmit = async (data) => {
       console.log(data)
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
            <input type="email"
             required
             placeholder="Email" 
             {...register("email")}
             className="rounded-md w-10/12 py-2 px-5 mt-4
              focus:outline-none"/>
            <input type="password"
             required 
             placeholder="password" 
             {...register("email")}
             className="rounded-md w-10/12 py-2 px-5 mt-4
              focus:outline-none"/>
              <Button title={'Login'} bgColor={'bg-green-300  w-10/12 py-2'}/>
              <p className="text-start">Do not have an account?please
               <Link to="/register" className="underline ml-2">Register</Link></p>
        </form>
    </div>
    );
};

export default Login;