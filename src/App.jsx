import { useEffect } from "react";
import InputMenu from "./components/InputMenu";
import "./App.css";

const VITE_API_BASE_URL = "https://friends-2v7s.onrender.com";

function App() {
  useEffect(() => {
    const pingBackend = async (retries = 3, delay = 5000) => {
      for (let attempt = 1; attempt <= retries; attempt++) {
        try {
          const res = await fetch(`${VITE_API_BASE_URL}/api/ping`);
          if (res.ok) {
            console.log("Backend is awake");
            return;
          }
        } catch (error) {
          console.warn(`Ping attempt ${attempt} failed`);
          if (attempt < retries) {
            await new Promise((resolve) => setTimeout(resolve, delay));
          }
        }
      }

      console.error("Backend did not respond after multiple attempts.");
    };

    pingBackend();
  }, []);

  return (
    <>
      <InputMenu />
    </>
  );
}

export default App;
