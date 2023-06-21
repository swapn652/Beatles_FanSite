import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
      <>
        <nav className="bg-white ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between -mt-10 h-50">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img className="mt-10 -ml-16 h-30 w-60" src="src/assets/logo.jpeg" alt="Logo" />
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 mt-12 flex items-baseline space-x-4">
                    {/* <Link to='/'>yo</Link> */}
                    <Link to="/" className="text-gray-600 hover:text-gray-800 px-8 py-2 rounded-md text-2xl">Home</Link>
                    <Link to="/albums" className="text-gray-600 hover:text-gray-800 px-8 py-2 rounded-md text-2xl">Albums</Link>
                    <Link to="/journey" className="text-gray-600 hover:text-gray-800 px-8 py-2 rounded-md text-2xl">Journey</Link>
                  </div>
                </div>
              </div>
              <div>
                <input type="text" placeholder="Search" className="px-4 py-2 mt-14 border border-gray-300 rounded-md" />
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  }
  