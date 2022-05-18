import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Error from "./components/error";
import Home from "./components/home";
import About from "./components/about";
import StudentDetails from "./components/student/student_details";

function App() {
  return (
    <div>
      <BrowserRouter className="browser">
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/studentdetail/:id" element={<StudentDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
