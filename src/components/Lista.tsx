import Button from "./Button";
import { useEffect, useState } from "react";
import axios from "axios";
import { Alumno } from "../utils/Alumno";
import { useNavigate } from "react-router-dom";

function Lista() {
  const [alumnos, setAlumnos] = useState<Alumno[]>([]);
  const navigate = useNavigate();
  const handleCrearAlumno = () => {
    navigate("/alumno/create");
  };

  const handleEliminarAlumno = async (
    e: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    e.stopPropagation();
    const confirmDelete = window.confirm(
      "¿Estás seguro de que deseas eliminar este alumno?"
    );
    if (confirmDelete) {
      try {
        const response = await axios.delete(
          `http://127.0.0.1:8000/api/alumno/${id}`
        );
        if (response.status === 200) {
          setAlumnos(alumnos.filter((alumno) => alumno.id !== id));
          console.log(`Alumno con ID ${id} eliminado correctamente.`);
        }
      } catch (error) {
        console.error("Error al eliminar alumno:", error);
      }
    }
  };
  const handleEditar = (
    e: React.MouseEvent<HTMLButtonElement>,
    alumno: Alumno
  ) => {
    e.stopPropagation();
    navigate(`/alumno/edit`, { state: { alumno } });
  };

  useEffect(() => {
    // Obtener los posts desde Laravel
    axios
      .get("http://127.0.0.1:8000/api/alumno")
      .then((response) => {
        setAlumnos(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLLIElement>, alumno: Alumno) => {
    e.stopPropagation();
    navigate("/alumno/details", { state: { alumno } });
  };

  return (
    <>
      <Button text="Crear alumno" onClick={handleCrearAlumno} />
      {alumnos.length > 0 ? (
        <ul>
          {alumnos.map((alumno) => (
            <li key={alumno.id} onClick={(e) => handleClick(e, alumno)}>
              {alumno.nombre}
              <br />
              <Button text="Editar" onClick={(e) => handleEditar(e, alumno)} />
              <Button
                text="Eliminar"
                onClick={(e) => handleEliminarAlumno(e, alumno.id)}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay alumnos inscritos</p>
      )}
    </>
  );
}

export default Lista;
