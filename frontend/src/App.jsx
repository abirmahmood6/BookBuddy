import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage"
import CreateBook from "./pages/CreateBook"
import EditBook from "./pages/EditBook"
import ShowBook from "./pages/ShowBook"
import DeleteBook from "./pages/DeleteBook"
// { } = specific things you pick from a library
// No braces { } = one main thing 

const App = () => {
  return (
    <div> {/* Add the DaisyUI theme here */}
      <Routes>
        <Route path="/" element={<HomePage/>}/> 
        <Route path="/books/create" element={<CreateBook/>}/> 
        <Route path="/books/details/:id" element={<ShowBook/>}/> 
        <Route path="/books/edit/:id" element={<EditBook/>}/> 
        <Route path="/books/delete/:id" element={<DeleteBook/>}/> 
      </Routes>
    </div>
  )
}

export default App;

// justify-center → centers content horizontally.
// items-center → centers content vertically.
