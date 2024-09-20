import { useEffect, useState } from "react";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const detectTheme = window.matchMedia("(prefers-color-scheme: dark)");

    setIsDarkTheme(detectTheme.matches);

    const themeChangeListener = (e) => {
      setIsDarkTheme(e.matches);
    };

    detectTheme.addEventListener("change", themeChangeListener);

    return () => {
      detectTheme.removeEventListener("change", themeChangeListener);
    };
  }, []);

  return (
    <div>
      <p>Theme: </p>
      {isDarkTheme ? (
        <div>
          <p>Dark Theme</p>
        </div>
      ) : (
        <div>
          <p>Light Theme</p>
        </div>
      )}
    </div>
  );
}

export default App;
