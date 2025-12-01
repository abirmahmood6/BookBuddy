import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import BackButton from "../components/BackButton";
import LoadingUI from "../components/LoadingUI";

const CreateBook = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [author, setAuthor] = useState("")
  const [publishYear, setPublishYear] = useState("")
  const [title, setTitle] = useState("") //

  const handleSubmit = () => {
    const data = {
      title,
      author,
      publishYear
    }
    setLoading(true) // screen loads until the try or catch block executes
    axios.post("http://localhost:5002/",data)
    .then(()=>{
      setLoading(false)
      toast.success("Book Created Successfully!");
      navigate("/")
    })
    .catch((error) => {
      setLoading(false)
      toast.error("Error creating a new book!")
      console.log("Error to create a new book: ", error)
    })
  }

  return (
    <div className="min-h-screen p-4">
      <BackButton />
      {loading ? (<LoadingUI/>) :
      <div className="flex flex-col items-center">
        <h1 className="my-4"> Create a New Book</h1>
        <div className="flex flex-col  border-2 border-sky-400 rounded-xl w-fit  p-4 bg-white">
          {/* structure and repeat */}
          <div className="my-4 flex justify-between">
            <label className="mr-4 text-xl text-gray-500"> Title </label>
            <input 
            type="text" 
            value = {title} // shows the input what the user typed
            onChange={(e) => setTitle(e.target.value)} // `e.target.value` sets it
            className="border-2 border-slate-500 px-4 py-2"
            />
          </div>
          <div className="my-4 flex justify-between">
            <label className="mr-4 text-xl text-gray-500"> Author </label>
            <input 
            type="text" 
            value={author} // shows the input what the user typed
            onChange={(e)=> setAuthor(e.target.value)} // `e.target.value` sets it
            className="border-2 border-slate-500 px-4 py-2"
            />
          </div>
          <div className="my-4 flex justify-between">
            <label className="mr-4 text-xl text-gray-500"> Publish Year</label>
            <input 
            type="number" 
            value={publishYear} // shows the input what the user typed
            onChange={(e) => setPublishYear(e.target.value)} // `e.target.value` sets it
            className="border-2 border-slate-500 px-4 py-2"
            />
          </div>
          <button onClick={handleSubmit} className="p-2 bg-sky-300 rounded-xl hover:bg-sky-500 transition duration-200" > 
            <span> Save </span>
          </button>
        </div> 

      </div>
      }
    </div>
  )
}

export default CreateBook;
