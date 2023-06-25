import { useForm } from "react-hook-form";
import Button from "../../componetns/Button/Button";
import { addPlace, uploadImage } from "../../utils";
import { Toaster, toast } from "react-hot-toast";
import { useContext, useState } from "react";
import { AUTH_CONTEXT } from "../../context/AuthProvider";

const AddPlace = () => {
  const {user} = useContext(AUTH_CONTEXT)
  const [loading,setLoading] = useState(false)
    const { register, handleSubmit ,reset} = useForm();
      const onSubmit = async (data) => {
        setLoading(true)
        const url = await uploadImage(data.image[0])
        console.log(url)
        const {title,location,category,rating,details} = data;
        const placeData = {
          title,
          location,
          author:user.displayName,
          email:user.email,
          category,
          image:url,
          rating,
          details,
        }
        const res = await addPlace(placeData)
        if(res.statusText === "Created"){
          toast.success('Successfully posted!')
          reset()
        }
        setLoading(false)
        console.log()
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
                 placeholder="Title"
                 {...register("title")} 
                 className="rounded-md w-10/12 py-2 px-5 
                  focus:outline-none"/>
                <input type="text"
                 required placeholder="Location" 
                 {...register("location")} 
                 className="rounded-md w-10/12 py-2 px-5 mt-4
                  focus:outline-none"/>
                <input type="text"
                 required
                 placeholder="Author" 
                 {...register("author")}
                 defaultValue={user?.displayName}
                 readOnly
                 className="rounded-md w-10/12 py-2 px-5 mt-4
                  focus:outline-none"/>
                <input type="text"
                 required 
                 placeholder="Email" 
                 {...register("email")}
                 defaultValue={user?.email}
                 readOnly
                 className="rounded-md w-10/12 py-2 px-5 mt-4
                  focus:outline-none"/>
                <input type="file"
                 {...register("image")}
                 className="file-input
                 file-input-bordered file-input-success w-10/12" />
              <div className="grid grid-cols-2 gap-2 w-10/12">
              <input type="number"
                 required 
                 placeholder="Rating" 
                 {...register("rating")}
                 className=" rounded-md px-2   py-2  
                  focus:outline-none"/>
                <input type="text"
                 required 
                 placeholder="Categroy" 
                 {...register("category")}
                 className=" rounded-md px-2  py-2  
                  focus:outline-none"/>
              </div>
              <textarea
               name="Details" 
               placeholder="Details"
               {...register("details")}
                id="" 
                className="p-2 w-10/12"
                cols="55" rows="5">
                </textarea>
                  <Button disable={loading} title={'Add'} bgColor={'bg-green-500 text-white w-10/12 py-2'}/>
            </form>
            <Toaster
         position="top-center"
       reverseOrder={false}
    />
        </div>
    );
};

export default AddPlace;