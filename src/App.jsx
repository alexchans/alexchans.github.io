import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import About from './pages/About';
import Publications from './pages/Publications';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="layout">
        <Sidebar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/publications" element={<Publications />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
