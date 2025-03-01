import InputMenu from "./components/InputMenu";
import "./App.css";
import { useEffect } from "react";
const API_BASE_URL = import.meta.env.VITE_API_URL;


function App() {
  useEffect(() => {
    console.log(API_BASE_URL)
  })

  return (
    <>
      <InputMenu />
    </>
  );
}

export default App;
