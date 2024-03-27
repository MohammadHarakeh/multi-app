import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Pages/componenets";
import Weather from "./Pages/componenets/Weather/weather";
import Notes from "./Pages/componenets/Notes/notes";
import Calculator from "./Pages/componenets/Calculator/calculator";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage></MainPage>}></Route>
        <Route path="/weather" element={<Weather></Weather>}></Route>
        <Route path="/Calculator" element={<Calculator></Calculator>}></Route>
        <Route path="/Notes" element={<Notes></Notes>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
