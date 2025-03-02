import { Alumno } from "../../utils/Alumno";
import { useLocation } from "react-router-dom";
import Button from "../Button";
import styles from "./Details.module.css";

function Details() {
  const location = useLocation();
  const alumno = location.state.alumno as Alumno;

  return (
    <div className={styles.details}>
      <h1 className={styles.title}>Alumno</h1>
      <p className={styles.data}>Nombre: {alumno.nombre}</p>
      <p className={styles.data}>Apellidos: {alumno.apellidos}</p>
      <p className={styles.data}>Teléfono: {alumno.telefono}</p>
      <Button />
    </div>
  );
}

export default Details;
