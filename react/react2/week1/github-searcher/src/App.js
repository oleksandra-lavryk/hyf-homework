import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./components/SearchBar";
import GitUsersList from "./components/GitUsersList";
import Heading from "./components/Heading";
import { GitSearcherProvider } from "./components/GitSearcherContext";
import { useState, useEffect } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [searchUser, setSearchUser] = useState("");
  const [listEmpty, setListEmpty] = useState(false);

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
          throw Error("Fetching failed");
        }
      })
      .then((result) => {
        setUsers(result.items);
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }, [searchUser]);

  useEffect(() => {
    users.length === 0 ? setListEmpty(true) : setListEmpty(false);
  }, [users]);

  function searchOnChange(e) {
    setSearchUser(e.target.value);
  }

  const contextValue = {
    searchChange: searchOnChange,
    usersList: users,
    isUsersEmpty: listEmpty,
  };
  return (
    <div className="App">
      <Heading />
      <GitSearcherProvider value={contextValue}>
        <SearchBar />
        {isLoading ? <p>Loading</p> : ""}
        <GitUsersList />
      </GitSearcherProvider>
    </div>
  );
}

export default App;
