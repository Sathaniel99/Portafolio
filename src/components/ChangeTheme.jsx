import React, { useState, useEffect } from "react";
import { ImSun, ImIcoMoon } from "react-icons/im";
import "./ChangeTheme.css";

export function ChangeTheme() {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return (
      storedTheme ||
      document.documentElement.getAttribute("data-bs-theme") ||
      "light"
    );
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  let btnClass;
  theme === "light" ? btnClass = "btn-outline-dark" : btnClass = "btn-outline-light"
  
  return (
    <button
      onClick={toggleTheme}
      className={`btn ${btnClass} rounded-circle position-fixed bottom-0 end-0 m-3 py-2 px-2 border border-1 border-secondary shadow`}
    >
      <ImSun className="theme-change-sun m-1" />
      <ImIcoMoon className="theme-change-moon m-1" />
    </button>
  );
}

export default ChangeTheme;
