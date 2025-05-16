import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import Header from "../components/common/Header";
import Navigation from "../components/common/Navigation";

const PrivateLayout = ({ children, ...headerProps }) => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="private-layout">
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} {...headerProps} />
      <Navigation />
      <div className="layout">
        <main className="main-content">
          {children}
        </main>
      </div>
    </div>
  );
};

export default PrivateLayout;