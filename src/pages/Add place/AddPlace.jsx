import { useForm } from "react-hook-form";
import Button from "../../componetns/Button/Button";

const AddPlace = () => {
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
                 placeholder="Title"
                 {...register("title")} 
                 className="rounded-md w-10/12 py-2 px-5 
                  focus:outline-none"/>
                <input type="text"
                 required placeholder="Location" 
                 className="rounded-md w-10/12 py-2 px-5 mt-4
                  focus:outline-none"/>
                <input type="text"
                 required
                 placeholder="Author" 
                 {...register("author")}
                 className="rounded-md w-10/12 py-2 px-5 mt-4
                  focus:outline-none"/>
                <input type="text"
                 required 
                 placeholder="Email" 
                 {...register("email")}
                 className="rounded-md w-10/12 py-2 px-5 mt-4
                  focus:outline-none"/>
                <input type="file"
                 {...register("photo")}
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
                 required placeholder="Categroy" 
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
                  <Button title={'Add'} bgColor={'bg-green-500 text-white w-10/12 py-2'}/>
            </form>
        </div>
    );
};

export default AddPlace;