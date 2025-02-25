import { useState } from "react";
import { Alumno } from "../utils/Alumno";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Formulario() {
  const [datosAlumno, setDatosAlumnos] = useState<Alumno>({
    id: -1,
    nombre: "",
    apellidos: "",
    email: "",
    telefono: "",
    direccion: "",
  });

  const handleAlumnoDatos = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDatosAlumnos({ ...datosAlumno, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Evita que la página se recargue

    try {
      const response = await fetch("http://localhost:8000/api/alumno", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datosAlumno),
      });

      if (!response.ok) {
        throw new Error("Error al registrar el alumno");
      }

      //console.log("Alumno registrado correctamente");
      //redireccionar al listado de alumnos
      navigate("/alumno");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          value={datosAlumno.nombre}
          onChange={handleAlumnoDatos}
          placeholder="nombre"
        />
        <input
          type="text"
          name="apellidos"
          value={datosAlumno.apellidos}
          onChange={handleAlumnoDatos}
          placeholder="apellidos"
        />
        <input
          type="email"
          name="email"
          value={datosAlumno.email}
          onChange={handleAlumnoDatos}
          placeholder="email"
        />
        <input
          type="text"
          name="telefono"
          value={datosAlumno.telefono}
          onChange={handleAlumnoDatos}
          placeholder="telefono"
        />
        <input
          type="text"
          name="direccion"
          value={datosAlumno.direccion}
          onChange={handleAlumnoDatos}
          placeholder="direccion"
        />
        <button type="submit">Registrar Alumno</button>
      </form>
      <Button />
    </>
  );
}

export default Formulario;
