import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Tabela from './pages/tabela';
import Consultar from './pages/consulta';
import Recommended from './pages/recommended';
import About from './pages/about';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <ToastContainer />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tabela" element={<Tabela />} />
          <Route path="/consulta" element={<Consultar />} />
          <Route path="/recomendacoes" element={<Recommended />} />
          <Route path="/sobre" element={<About />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
