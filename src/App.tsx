import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Navigate,
} from "react-router-dom";
import Lista from "./components/Lista";
import Formulario from "./components/Formulario";

function App() {
  /*  const list = [
    {
      id: 2,
      nombre: "Juan",
      apellidos: "Pérez",
      edad: 20,
      email: "",
      telefono: "",
      direccion: "",
    },
    {
      id: 1,
      nombre: "Juan",
      apellidos: "Pérez",
      edad: 20,
      email: "",
      telefono: "",
      direccion: "",
    },
    {
      id: 4,
      nombre: "Juan",
      apellidos: "Pérez",
      edad: 20,
      email: "",
      telefono: "",
      direccion: "",
    },
  ]; */

  const handleEditar = (id: number) => console.log(`Editar ${id}`);
  const handleEliminar = (id: number) => console.log(`Eliminar ${id}`);

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
