import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./components/ui/dropdown-menu";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
const DarkMode = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex items-center justify-center h-screen">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <motion.button
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 transition duration-300 focus:outline-none"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Sun className="h-6 w-6 text-yellow-500 dark:hidden" />
            <Moon className="h-6 w-6 text-blue-500 hidden dark:block" />
          </motion.button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-white dark:bg-gray-900 rounded-lg shadow-lg py-2 mt-2 w-40">
          <DropdownMenuItem
            onClick={() => setTheme("light")}
            className="px-4 py-2 transition hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Light Mode
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => setTheme("dark")}
            className="px-4 py-2 transition hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Dark Mode
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => setTheme("system")}
            className="px-4 py-2 transition hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            System Default
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default DarkMode;
