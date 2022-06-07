import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./components/SearchBar";
import GitUsersList from "./components/GitUsersList";
import Heading from "./components/Heading";
import { GitSearcherProvider } from "./components/GitSearcherProvider";

function App() {
  return (
    <div className="App">
      <Heading />
      <GitSearcherProvider>
        <SearchBar />
        <GitUsersList />
      </GitSearcherProvider>
    </div>
  );
}

export default App;
