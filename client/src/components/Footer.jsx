import { FaHeart } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center gap-1">
          Made with <FaHeart className="text-red-500" /> by Ankur Chouhan
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
          © {new Date().getFullYear()} All rights reserved
        </p>
      </div>
    </footer>
  )
}
 
export default Footer 