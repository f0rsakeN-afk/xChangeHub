import { Link } from 'react-router-dom'

const Logo = () => {
    return (
        <Link to='home' className="no-underline hover:scale-105 transition-all duration-300">
            <h2 className=" text-4xl bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 bg-clip-text text-transparent">
                <span className="font-light">x</span>
                <span className="font-semibold">Change</span>
                <span className="font-light">Hub</span>
            </h2>
        </Link>
    )
}

export default Logo