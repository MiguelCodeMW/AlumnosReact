type ButtonProps = {
  text: string;
  id: string | number;
  onClick: () => void;
};

function Button({ text, onClick }: ButtonProps) {
  return <button onClick={onClick}>{text}</button>;
}

export default Button;
