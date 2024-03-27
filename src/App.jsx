import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./Pages/componenets";
import Weather from "./Pages/componenets/Weather/weather";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage></MainPage>}></Route>
        <Route path="/weather" element={<Weather></Weather>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
