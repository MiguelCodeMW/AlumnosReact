import Lista from "./components/Lista";

function App() {
  const handleEditar = (id: number) => console.log(`Editar ${id}`);
  const handleEliminar = (id: number) => console.log(`Eliminar ${id}`);

  return (
    <Lista irAEditarAlumno={handleEditar} eliminarAlumno={handleEliminar} />
  );
}
export default App;
