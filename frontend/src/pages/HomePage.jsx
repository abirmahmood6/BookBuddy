import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from "axios"
import { Brain, Info, SquarePen, Trash2 } from "lucide-react"
import LoadingUI from "../components/LoadingUI"
import create from '../components/BackButton'
import Navbar from "../components/Navbar"
/*
  * align the row to data
  * setup the 3 operations icon
*/


// !! error: with CORS, why no try catch?, response.data.data vs response.data, understand books.map
const HomePage = () => {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false) // set spinner when loading,
  useEffect(()=>{
    setLoading(true)
      axios.get("http://localhost:5002/").then((response) => {
        setBooks(response.data)
        setLoading(false)
      })
      .catch ((error) => {
      console.log("Error getting all books: ", error)
      setLoading(false)
    })

  },[])
  
  return (
    <div className='min-h-screen border border-red-600'>
        <Navbar/>
      {/* + New Book btn here */}
        {loading ? (<LoadingUI/>) : (
        <table className='w-full border-separate border-spacing-2 border border-blue-500'>
        <thead>
          <tr>
          <th className='border border-slate-700'> No </th>
          <th className='border border-slate-700'> Book </th>
          <th className='border border-slate-700'> Author </th>
          <th className='border border-slate-700'> Publish Year </th>
          <th className='border border-slate-700'> Description </th>
          <th className='border border-slate-700'> Operation </th>
          </tr>
        </thead>

        <tbody>
          {books.map((book,index) =>(
          <tr key={book._id}>
            <td className='text-center border border-slate-700'> {index = index + 1} </td>
            <td className='text-center border border-slate-700'> {book.title}</td>
            <td className='text-center border border-slate-700'> {book.author}</td>
            <td className='text-center border border-slate-700'> {book.publishYear}</td>
            <td className='text-center border border-slate-700'> Description here </td>
            <div className='flex justify-center gap-1'> 
              <Link to =""> <Brain/></Link> 
              <Link to ={`/books/details/${book._id}`}> <Info/> </Link>
              <Link to ={`/books/edit/${book._id}`}> <SquarePen/></Link> 
              <Link to ={`/books/delete/${book._id}`}> <Trash2/></Link>
            </div>
          </tr>
          ))}
        </tbody>
        </table>
        )}
    </div>
  )
}

export default HomePage
