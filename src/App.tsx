import Lista from "./components/Lista";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Formulario from "./components/Formulario";
import FormularioEdit from "./components/FormularioEdit";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/alumno" />} />
        <Route path="/alumno" element={<Lista />} />
        <Route path="/alumno/create" element={<Formulario />} />
        <Route path="/alumno/edit" element={<FormularioEdit />} />
      </Routes>
    </Router>
  );
}
export default App;
