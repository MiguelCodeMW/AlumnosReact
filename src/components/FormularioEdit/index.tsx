import { useState } from "react";
import { Alumno } from "../../utils/Alumno";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "../Button";
import api from "../../api/axio";
import styles from "./FormularioEdit.module.css";

function FormularioEdit() {
  const location = useLocation();
  const alumno = location.state?.alumno as Alumno;
  const [datosAlumno, setDatosAlumnos] = useState<Alumno>({
    id: alumno?.id || -1,
    nombre: alumno?.nombre || "",
    apellidos: alumno?.apellidos || "",
    email: alumno?.email || "",
    telefono: alumno?.telefono || "",
    direccion: alumno?.direccion || "",
  });

  const handleAlumnoDatos = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDatosAlumnos({ ...datosAlumno, [e.target.name]: e.target.value });
  };
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Evita que la página se recargue

    try {
      const response = await api.put(`/alumno/${alumno.id}`, datosAlumno);

      if (response.status === 200) {
        navigate("/alumno");
      }
    } catch (error) {
      setError((error as Error).message);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={[styles.form, styles.formEdit].join(" ")}
      >
        <input
          type="text"
          name="nombre"
          value={datosAlumno.nombre}
          onChange={handleAlumnoDatos}
          placeholder="nombre"
          className={styles.input}
        />
        <input
          type="text"
          name="apellidos"
          value={datosAlumno.apellidos}
          onChange={handleAlumnoDatos}
          placeholder="apellidos"
          className={styles.input}
        />
        <input
          type="email"
          name="email"
          value={datosAlumno.email}
          onChange={handleAlumnoDatos}
          placeholder="email"
          className={styles.input}
        />
        <input
          type="text"
          name="telefono"
          value={datosAlumno.telefono}
          onChange={handleAlumnoDatos}
          placeholder="telefono"
          className={styles.input}
        />
        <input
          type="text"
          name="direccion"
          value={datosAlumno.direccion}
          onChange={handleAlumnoDatos}
          placeholder="direccion"
          className={styles.input}
        />
        <button
          type="submit"
          className={[styles.submitButton, styles.formEditButton].join(" ")}
        >
          Actualizar Alumno
        </button>
      </form>
      {error && <div className={styles.error}>{error}</div>}

      <Button />
    </>
  );
}

export default FormularioEdit;
