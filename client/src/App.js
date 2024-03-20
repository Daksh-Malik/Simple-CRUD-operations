import './App.css';
import Home from './Components/Home';
import { Add } from './Components/Add';
import { Update } from './Components/Update';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Style.css"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/add" element={<Add/>}/>
        <Route path="/update/:id" element={<Update/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
