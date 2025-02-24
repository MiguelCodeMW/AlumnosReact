import Button from "./Button";
import { useEffect, useState } from "react";
import axios from "axios";
import { Alumno } from "../utils/Alumno";
import { useNavigate } from "react-router-dom";

type listProps = {
  irAEditarAlumno: (id: number) => void;
  eliminarAlumno: (id: number) => void;
};

function Lista({ irAEditarAlumno, eliminarAlumno }: listProps) {
  const [alumnos, setAlumnos] = useState<Alumno[]>([]);
  const navigate = useNavigate();
  const handleCreateAlumno = () => {
    navigate("/alumno/create");
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

  return (
    <>
      <Button text="Crear alumno" onClick={handleCreateAlumno} />
      {alumnos.length > 0 ? (
        <ul>
          {alumnos.map((alumno) => (
            <li key={alumno.id}>
              {alumno.nombre}
              <br />
              <Button
                text="Editar"
                id={alumno.id}
                onClick={() => irAEditarAlumno(alumno.id)}
              />
              <Button
                text="Eliminar"
                id={alumno.id}
                onClick={() => eliminarAlumno(alumno.id)}
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
