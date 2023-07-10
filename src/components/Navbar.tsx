import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../ThemeContext';
import { MoonIcon, SunIcon } from './ThemeIcons';

export default function Navbar() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <nav className="bg-white dark:bg-zinc-900">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between -mt-10 h-50">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="mt-10 h-14 md:h-24 lg:h-32 lg:w-60 dark:bg-zinc-900"
                  src={isDarkMode ? '/darkLogo.jpg' : '/logo.jpeg'}
                  alt="Logo"
                />
              </div>
              <div className="hidden md:block">
                <div className="text-gray-600 dark:text-gray-100 hover:text-zinc-900 dark:hover:text-gray-300 mx-auto mt-12 flex items-baseline">
                  {/* <Link to='/'>yo</Link> */}
                  <Link
                    to="/"
                    className=" px-8 py-2 rounded-md md:text-xl lg:text-2xl"
                  >
                    Home
                  </Link>
                  <Link
                    to="/albums"
                    className="px-8 py-2 rounded-md md:text-xl lg:text-2xl"
                  >
                    Albums
                  </Link>
                  <Link
                    to="/journey"
                    className="px-8 py-2 rounded-md md:text-xl lg:text-2xl"
                  >
                    Journey
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <button
                className="w-10 h-auto pt-14 pr-[4rem] focus:outline-none"
                onClick={toggleTheme}
                aria-label="Toggle Theme"
                aria-controls="dark-mode"
              >
                {isDarkMode ? <MoonIcon /> : <SunIcon />}
              </button>
              
              <a
                href="https://github.com/swapn652/Beatles_FanSite"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 mt-14 rounded-md flex items-center text-sm sm:text-xl lg:text-2xl dark:text-gray-100"
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
          </div>
        </div>
      </nav>
    </>
  );
}
