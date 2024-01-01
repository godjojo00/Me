import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Me from './pages/Me'; // Import your Me component
import Header from './component/header'; // Import your Header component
import Contact from './pages/contact';
import Gallery from './pages/gallery';

function App() {
  return (
    <Router>
      <Header /> {/* Header is placed here to be included on every page */}
      <Routes>
        <Route path="/" element={<Me />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
}

export default App;
