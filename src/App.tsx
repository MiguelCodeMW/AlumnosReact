import Lista from "./components/Lista";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Formulario from "./components/Formulario";

function App() {
  const handleEditar = (id: number) => console.log(`Editar ${id}`);
  const handleEliminar = (id: number) => console.log(`Eliminar ${id}`);

  /* return (
    <Lista irAEditarAlumno={handleEditar} eliminarAlumno={handleEliminar} />
  ); */
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/alumno" />} />
        <Route
          path="/alumno"
          element={
            <Lista
              irAEditarAlumno={handleEditar}
              eliminarAlumno={handleEliminar}
            />
          }
        />
        <Route path="/alumno/create" element={<Formulario />} />
      </Routes>
    </Router>
  );
}
export default App;
