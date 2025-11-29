import { Link } from "react-router-dom"
import { ArrowBigLeft } from "lucide-react"

const BackButton = () => {
  return (
    <Link to ="/" className="btn btn-ghost">
      <ArrowBigLeft/>
      <span> Back </span>
    </Link>
  )
}

export default BackButton
