import { MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Button.module.css";

type ButtonProps = {
  text?: string;
  id?: string | number;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
};

function Button({ text = "Volver", onClick }: ButtonProps) {
  const navigate = useNavigate();

  return (
    <button
      onClick={onClick ?? (() => navigate("/alumno"))}
      className={[styles.button, styles.padded].join(" ")}
    >
      {text}
    </button>
  );
}

export default Button;
