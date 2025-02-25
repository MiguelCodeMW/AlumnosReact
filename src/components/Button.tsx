import { MouseEvent } from "react";
import { useNavigate } from "react-router-dom";

type ButtonProps = {
  text: string;
  id?: string | number;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
};

function Button({ text, onClick }: ButtonProps) {
  const navigate = useNavigate();

  return (
    <button onClick={onClick ?? (() => navigate("/alumno"))}>{text}</button>
  );
}

export default Button;
