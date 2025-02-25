import { Alumno } from "../utils/Alumno";
import { useLocation } from "react-router-dom";
import Button from "./Button";

function Details() {
  const location = useLocation();
  const alumno = location.state.alumno as Alumno;

  return (
    <>
      <h1>Alumno</h1>
      <p>Nombre: {alumno.nombre}</p>
      <p>Apellidos: {alumno.apellidos}</p>
      <p>Teléfono: {alumno.telefono}</p>
      <Button />
    </>
  );
}

export default Details;
