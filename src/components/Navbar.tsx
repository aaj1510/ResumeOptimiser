import { Menu, Sun, Moon, User } from 'lucide-react';
import { motion } from 'framer-motion';

interface NavbarProps {
  onToggleDarkMode: () => void;
  isDarkMode: boolean;
  onToggleSidebar: () => void;
}

const Navbar = ({ onToggleDarkMode, isDarkMode, onToggleSidebar }: NavbarProps) => {
  return (
    <nav className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onToggleSidebar}
            className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none"
          >
            <Menu className="h-6 w-6" />
          </motion.button>

          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Resume Optimiser
          </h1>

          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onToggleDarkMode}
              className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none"
            >
              {isDarkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none"
            >
              <User className="h-6 w-6" />
            </motion.button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 