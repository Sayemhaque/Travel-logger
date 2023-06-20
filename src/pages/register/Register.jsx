import { useForm } from "react-hook-form";
import Button from "../../componetns/Button/Button";
import { Link } from "react-router-dom";

const Register = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
     console.log(data)
   }
    return (
        <div className="flex items-center h-screen w-full justify-center">
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
            <input type="email"
             required placeholder="email" 
             className="rounded-md w-10/12 py-2 px-5 mt-4
              focus:outline-none"/>
            <input type="text"
             required
             placeholder="password" 
             {...register("password")}
             className="rounded-md w-10/12 py-2 px-5 mt-4
              focus:outline-none"/>
            <input type="file"
             {...register("photo")}
             className="file-input
             file-input-bordered file-input-success w-10/12" />
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