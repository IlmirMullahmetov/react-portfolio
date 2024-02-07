import './styles/reset.css'
import './styles/main.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contacts from './pages/Contacts';
import ProjectPage from './pages/ProjectPage';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTopHeader from './utils/scrollToTopHeader';


function App() {
  return (

    <div className="App">
      <Router>
      <ScrollToTopHeader />
        <Navbar />
        <Routes >
          <Route path="/" element={<Home />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/project/:id" element={<ProjectPage />}/>
          <Route path="/contacts" element={<Contacts />}/>
        </Routes>
        {/* <Projects /> */}
        <Footer />
      </Router>
    </div>

  );
}

export default App;
