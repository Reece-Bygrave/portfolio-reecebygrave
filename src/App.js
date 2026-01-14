import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import BackgroundLayout from "./components/BackgroundLayout";

function App() {
  return (
    <BrowserRouter>
    <BackgroundLayout>
      <Navbar/>  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
      </Routes>
      </BackgroundLayout>
    </BrowserRouter>
  );
}

export default App;
