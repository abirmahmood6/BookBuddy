import BackButton from '../components/BackButton'
import axios from "axios"
import toast from "react-hot-toast"
import LoadingUI from "../components/LoadingUI"
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const EditBook = () => {
  const [loading, setLoading] = useState(false)
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [publishYear, setPublishYear] = useState("")
  const navigate = useNavigate()
  const { id } = useParams()

  //  useEffect to fetch book data and handleBookEdit() to update the book
  useEffect(() => {
    setLoading(true)
    axios.get(`http://localhost:5002/books/${id}`)
      .then((response) => {
        setTitle(response.data.title)
        setAuthor(response.data.author)
        setPublishYear(response.data.publishYear)
        setLoading(false)
        console.log(response.data)
      })
      .catch((error) => {
        toast.error("Error fetching book")
        console.log("Error fetching book: ", error)
        setLoading(false)
      })
  }, [id])

  const handleBookEdit = () => {
    setLoading(true)
    const data = {
      title,
      author,
      publishYear
    }
    axios.put(`http://localhost:5002/books/${id}`, data)
      .then(() => {
        toast.success("Book edited successfully!")
        setLoading(false)
        navigate('/')
      })
      .catch((error) => {
        toast.error("Error editing the book")
        console.log("Error editing the book: ", error)
        setLoading(false)
      })
  }

  return (
    <div className='min-h-screen p-4'>
      <BackButton />
      {loading ? (<LoadingUI />) :
        <div className='flex flex-col items-center'>
          <h1 className='my-4 font-mono'> Edit Book </h1>
          <div className='flex flex-col border-2 border-sky-300 rounded-xl w-fit p-4'>
            {/* structure and repeat*/}
            <div className='my-4 flex justify-between'>
              <label className='mr-2 text-xl text-gray-500'> Title: </label>
              <input
                type="text"
                placeholder="Enter Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className='border-2 border-slate-500 px-4 py-2'
              />
            </div>
            <div className='my-4 flex justify-between'>
              <label className='mr-2 text-xl text-gray-500'> Author </label>
              <input
                type="text"
                placeholder="Enter Author Name"
                value={author}
                onChange={(e) => { setAuthor(e.target.value) }}
                className='border-2 border-slate-500 px-4 py-2'
              />
            </div>
            <div className='my-4 flex justify-between'>
              <label className='mr-2 text-xl text-gray-500'> Publish Year </label>
              <input
                type="number"
                placeholder="Enter Publish Year"
                value={publishYear}
                onChange={(e) => setPublishYear(e.target.value)}
                className='border-2 border-slate-500 px-4 py-2'
              />
            </div>
            <button onClick={handleBookEdit} disabled={loading} className='bg-sky-300 mt-2 p-2 rounded-xl hover:bg-sky-500 transition duration-200'>
              {loading ? "Updating..." : "Update"}
            </button>
          </div>
        </div>
      }
    </div>
  )
}

export default EditBook
