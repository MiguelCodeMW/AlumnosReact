import Lista from "./components/Lista";

function App() {
  const list = [
    { id: 1, nombre: "Juan", apellidos: "Pérez", edad: 20 },
    { id: 2, nombre: "Pedro" },
    { id: 3, nombre: "María" },
  ];

  const handleEditar = (id: number) => console.log(`Editar ${id}`);
  const handleEliminar = (id: number) => console.log(`Eliminar ${id}`);

  return (
    <Lista
      list={list}
      irAEditarAlumno={handleEditar}
      eliminarAlumno={handleEliminar}
    />
  );
}
export default App;
