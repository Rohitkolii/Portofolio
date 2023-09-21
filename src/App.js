import './App.css';
import Home from './Components/Pages/Home';
import {
  Route,
  Routes
} from "react-router-dom";
import ProjectsPage from './Components/Pages/ProjectsPage';
import Contact from './Components/Contact';
import ContactPage from './Components/Pages/ContactPage';
import AboutPage from './Components/Pages/AboutPage';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Projects" element={<ProjectsPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="About" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
