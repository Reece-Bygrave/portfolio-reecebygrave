import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import About from "./pages/About";
import Writtern from "./pages/Writtern";
import BackgroundLayout from "./components/BackgroundLayout";
import ScrollToTop from "./components/ScrollToTop";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  useEffect(() => {
    // Explicitly update favicon in DOM to force browser tab to display white RB without cache delay
    const svgFavicon = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='16' fill='%2309090b'/%3E%3Crect width='60' height='60' x='2' y='2' rx='14' fill='none' stroke='%23ffffff' stroke-opacity='0.3' stroke-width='2.5'/%3E%3Ctext x='32' y='44' font-family='system-ui, -apple-system, sans-serif' font-weight='900' font-size='30' fill='%23ffffff' text-anchor='middle' letter-spacing='-0.5'%3ERB%3C/text%3E%3C/svg%3E`;
    const links = document.querySelectorAll("link[rel*='icon']");
    links.forEach((l) => {
      l.href = svgFavicon;
    });
  }, []);
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <BackgroundLayout>
          <Navbar/>  
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} /> 
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/writing" element={<Writtern />} />
          </Routes>
        </BackgroundLayout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
