import { Brain, Info, SquarePen } from "lucide-react";
import { Link } from 'react-router-dom';
import { BookOpenText, CircleUserRound, Calendar } from "lucide-react";

const BookCard = ({ book }) => {
    return (
        <div className="max-w-xl p-4">
            <div className="border border-slate-500 p-4 rounded-xl relative">
                <div className="flex items-center top-1 right-2 bg-slate-300 p-2 absolute rounded-xl">
                    <Calendar />
                    <span> {book.publishYear} </span>
                </div>
                <div className="flex items-center">
                    <span> {book._id} </span>
                </div>
                <div className="flex items-center">
                    <BookOpenText />
                    <span> {book.title} </span>
                </div>
                <div className="flex items-center">
                    <CircleUserRound />
                    <span> {book.author} </span>
                </div>
                <div className="flex justify-around">
                    <Link to="" className="btn btn-ghost"> <Brain /> </Link>
                    <Link to={`/books/details/${book._id}`} className="btn btn-ghost"> <Info /> </Link>
                    <Link to={`/books/edit/${book._id}`} className="btn btn-ghost"> <SquarePen /> </Link>
                </div>
            </div>
        </div>
    )
}

export default BookCard;
