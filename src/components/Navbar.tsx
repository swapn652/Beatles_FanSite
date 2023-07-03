import { useState } from 'react'
import { Link } from 'react-router-dom'

const Search = () => (
  <div className="flex max-sm:flex-col">
    <input
      type="text"
      placeholder="Search"
      className="px-4 py-2 mt-14 border border-gray-300 rounded-md"
    />
    <a
      href="https://github.com/swapn652/Beatles_FanSite"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-600 hover:text-gray-800 px-4 mt-14 rounded-md flex items-center text-sm sm:text-xl lg:text-2xl"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 mr-1"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 0C4.477 0 0 4.477 0 10c0 4.418 2.865 8.166 6.839 9.494.5.09.682-.218.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.365-1.338-3.365-1.338C3.08 15.325 2.5 14.92 2.5 14.92c-.905-.617.07-.605.07-.605 1.002.07 1.53 1.03 1.53 1.03.892 1.526 2.34 1.085 2.91.829.09-.645.348-1.085.633-1.335-2.22-.25-4.555-1.11-4.555-4.943 0-1.09.39-1.984 1.03-2.68-.103-.25-.446-1.27.097-2.647 0 0 .84-.268 2.75 1.025A9.7 9.7 0 0110 5.86c.86 0 1.72.116 2.53.34 1.91-1.293 2.75-1.025 2.75-1.025.543 1.377.2 2.397.1 2.647.64.696 1.03 1.59 1.03 2.68 0 3.842-2.337 4.692-4.56 4.94.36.31.68.918.68 1.847 0 1.334-.012 2.41-.012 2.737 0 .267.18.578.688.48C17.135 18.166 20 14.418 20 10c0-5.523-4.477-10-10-10z"
          clipRule="evenodd"
        />
      </svg>
      GitHub
    </a>
  </div>
)
export default function Navbar() {
  const [navOpen, setNavOpen] = useState<boolean>(false)
  return (
    <>
      <nav className="bg-white ">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between -mt-10 h-50">
            <div className="flex items-center">
              <div className="">
                <img
                  className="mt-10 md:h-24 lg:h-32 lg:w-60 max-sm:h-20 max-sm:w-30"
                  src="/logo.jpeg"
                  alt="Logo"
                />
              </div>

              <div className="max-sm:hidden mx-auto mt-12 flex items-baseline">
                {/* <Link to='/'>yo</Link> */}
                <Link
                  to="/"
                  className="text-gray-600 hover:text-gray-800 px-8 py-2 rounded-md md:text-xl lg:text-2xl"
                >
                  Home
                </Link>
                <Link
                  to="/albums"
                  className="text-gray-600 hover:text-gray-800 px-8 py-2 rounded-md md:text-xl lg:text-2xl"
                >
                  Albums
                </Link>
                <Link
                  to="/journey"
                  className="text-gray-600 hover:text-gray-800 px-8 py-2 rounded-md md:text-xl lg:text-2xl"
                >
                  Journey
                </Link>
              </div>
              <div
                className={`flex ${
                  navOpen ? 'sm:hidden' : 'hidden'
                } flex-col absolute bg-white h-[100%] w-[15rem] p-5 right-0 top-[4.5rem] z-50`}
              >
                {/* <Link to='/'>yo</Link> */}
                <Link
                  to="/"
                  className="text-gray-600 hover:text-gray-800 px-8 py-2 rounded-md md:text-xl lg:text-2xl"
                >
                  Home
                </Link>
                <Link
                  to="/albums"
                  className="text-gray-600 hover:text-gray-800 px-8 py-2 rounded-md md:text-xl lg:text-2xl"
                >
                  Albums
                </Link>
                <Link
                  to="/journey"
                  className="text-gray-600 hover:text-gray-800 px-8 py-2 rounded-md md:text-xl lg:text-2xl"
                >
                  Journey
                </Link>
                <Search />
              </div>
            </div>
            <div className="sm:hidden">
              {navOpen ? (
                <img
                  onClick={() => setNavOpen(false)}
                  className="w-10 h-10 mt-10"
                  src="/close.png"
                  alt="Close Icon"
                />
              ) : (
                <img
                  onClick={() => setNavOpen(true)}
                  className="w-10 h-10 mt-10"
                  src="/menu.png"
                  alt="Menu Icon"
                />
              )}
            </div>
            <div className="max-sm:hidden">
              <Search />
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
