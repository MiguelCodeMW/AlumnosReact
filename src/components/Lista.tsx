import Button from "./Button";
import { useEffect, useState } from "react";
import { Alumno } from "../utils/Alumno";
import { useNavigate } from "react-router-dom";
import api from "../api/axio";

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
    const confirmDelete = window.confirm("¿Eliminar este alumno?");
    if (confirmDelete) {
      try {
        const response = await api.delete(`alumno/${id}`);

        if (response.status === 200) {
          setAlumnos(alumnos.filter((alumno) => alumno.id !== id));
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
    api
      .get("/alumno")
      .then((response) => {
        setAlumnos(response.data.data);
      })
      .catch((error) => {
        console.error("Error al obtener los alumnos:", error);
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
