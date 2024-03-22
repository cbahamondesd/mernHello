import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PersonApiComponent from "../../Api/Apiperson";
import Detalle from '../../views/detalle';
import ProductoForm from '../../Components/ProductoForm.jsx';

const App = () => {
  return (

    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductoForm />} />
          <Route path="/edit/:id" element={<Detalle />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
