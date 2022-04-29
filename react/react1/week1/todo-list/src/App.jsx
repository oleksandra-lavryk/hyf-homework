import logo from "./logo.svg";
import "./App.css";
import ToDoList from "./components/ToDoList";
import ListName from "./components/ListName";

function App() {
  return (
    <div className="App">
      <ListName name="My ToDo List" />
      <ToDoList />
    </div>
  );
}

export default App;
