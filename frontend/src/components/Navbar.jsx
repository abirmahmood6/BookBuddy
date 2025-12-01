import { PlusIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-black border-b border-base-content/10">
        {/* Title |----| + Create Book btn */}
        <div className="mx-auto max-w-6xl p-4">
            <div className="flex items-center justify-between">
                <h1 className="text-primary text-2xl font-bold font-mono tracking-tight"> Book Titles </h1>
                <div className="flex items-center gap-4">
                    <Link to = {"/books/create"} className="btn btn-primary">
                    <PlusIcon/>
                    <span> New Book </span>
                    </Link>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Navbar;
