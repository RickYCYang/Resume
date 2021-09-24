import { useState } from "react";

const DarkModeSwitch = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    setDarkMode(!darkMode);
  };

  return (
    <div className="flex items-center justify-end mb-3 text-right">
      <div className="mr-3 text-gray-700 dark:text-white font-medium">
        Dark Mode
      </div>
      <label htmlFor="toggleB" className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            type="checkbox"
            id="toggleB"
            checked={darkMode}
            className="sr-only checked:bg-green-900-400"
            onChange={toggleDarkMode}
          />
          <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
          <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
        </div>
      </label>
    </div>
  );
};

export default DarkModeSwitch;
