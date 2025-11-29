import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import LoadingUI from '../components/LoadingUI'
import axios from 'axios'
import BackButton from "../components/BackButton"

const ShowBook = () => {
  const [loading, setLoading] = useState(false)
  const [book, setBook] = useState([])
  const { id } = useParams() // IMPORTANT: useParams() is reads the URL parameters. If your route is like: /books/123 Then id will be "123". then pass the id in the PATH of axios.get to get info of the specic book

  useEffect(() => {
    setLoading(true)
    axios.get(`http://localhost:5002/${id}`).then((response) => {
      setBook(response.data)
      setLoading(false)
    })
    .catch((error) => {
      console.log("Error fetching Note: ", error)
      setLoading(false)
    })
  },[])

  return (
    <div className='min-h-screen border border-black p-4  bg-gray-100'>
      <BackButton />
      {loading ? <LoadingUI/> : 
      <div className='flex flex-col items-center'>
        <h1 className='my-4'> Show Book </h1>
        <div className='flex flex-col  border-2 border-sky-400 rounded-xl w-fit  p-4 bg-white'>
          <div className='my-4'>
            <span className='mr-4 text-xl text-gray-500'> ID </span>
            <span> {book._id} </span>
          </div>
          <div className='my-4'>
            <span className='mr-4 text-xl text-gray-500'> Title </span>
            <span> {book.title} </span>
          </div>
          <div className='my-4'>
            <span className='mr-4 text-xl text-gray-500'> Author </span>
            <span> {book.author} </span>
          </div>
          <div className='my-4'>
            <span className='mr-4 text-xl text-gray-500'> Publish Year: </span>
            <span> {book.publishYear} </span>
          </div>
          <div className='my-4'>
            <span className='mr-4 text-xl text-gray-500'> Create Time </span>
            <span> {new Date(book.createdAt).toString()}</span>
          </div>
          <div className='my-4'>
            <span className='mr-4 text-xl text-gray-500'> Last Updated Time </span>
            <span> {new Date(book.updatedAt).toString()}</span>
          </div>
        </div>
      </div>
    }
    </div>
  )
}

export default ShowBook
