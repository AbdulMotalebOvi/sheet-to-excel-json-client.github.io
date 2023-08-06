import { Link } from "react-router-dom";


export const NavLinks =
    <>
        <li>
            <Link
                to="/"
                aria-label="Home"
                title="Home"
                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
                Home
            </Link>
        </li>
        <li>
            <Link
                to="/"

                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
                About
            </Link>
        </li>
        <li>
            <Link
                to="/"

                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
                Contacr Us
            </Link>
        </li>
        <li>
            <Link
                to="/dashboard"

                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
                Dashboard
            </Link>
        </li>

    </>
