import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./components/SearchBar";
import GitUsersList from "./components/GitUsersList";
import Heading from "./components/Heading";
import { useState, useEffect } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [searchUser, setSearchUser] = useState("");

  useEffect(() => {
    if (searchUser === "") {
      setUsers([]);
      return;
    }
    setIsLoading(true);
    fetch(`https://api.github.com/search/users?q=${searchUser}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw Error("Error");
        }
      })
      .then((result) => {
        setUsers(result.items);
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }, [searchUser]);

  function searchOnChange(e) {
    setSearchUser(e.target.value);
  }
  return (
    <div className="App">
      <Heading />
      <SearchBar searchOnChange={searchOnChange} />
      {isLoading ? <p>Loading</p> : ""}
      <GitUsersList usersList={users} />
    </div>
  );
}

export default App;
