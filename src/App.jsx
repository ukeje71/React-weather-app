import React from "react";
import Weather from "./components/Weather";
import { ThemeProvider } from "./contexts/ThemeContext";

const App = () => {
  return (
    <div>
      <ThemeProvider>
        <Weather />
      </ThemeProvider>
    </div>
  );
};

export default App;
