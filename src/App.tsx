import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './pages/header';
import Home from './pages/home';
import Tabela from './pages/tabela';
import Consultar from './pages/consulta';
import Recommended from './pages/recommended';
import About from './pages/about';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tabela" element={<Tabela />} />
        <Route path="/consultar" element={<Consultar />} />
        <Route path="/recommended" element={<Recommended />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
export default App;