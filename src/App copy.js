import { useState } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    setDarkMode(!darkMode);
  };

  return (
    <div className="bg-white dark:bg-gray-800">
      <h1 className="text-gray-900 dark:text-white">這裡是深色模式 !</h1>
      <p className="text-gray-600 dark:text-gray-300">Lorem ipsum...</p>
      <button
        className="bg-blue-500 text-white p-3 dark:bg-red-800 m-5"
        onClick={toggleDarkMode}
      >
        Change Theme
      </button>
    </div>
  );
}

export default App;
