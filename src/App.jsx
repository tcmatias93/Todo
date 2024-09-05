import FormAdd from "./components/Headers/FormAdd";
import Title from "./components/Headers/Title";
import ListTask from "./components/Listado/ListTask";

function App() {
  return (
    <div className="container">
      <Title />
      <FormAdd />
      <ListTask />
    </div>
  );
}

export default App;
