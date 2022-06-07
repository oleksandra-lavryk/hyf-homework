import { createContext } from "react";
import { useState, useEffect } from "react";

export const GitSearcherContext = createContext();

export function GitSearcherProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [searchUser, setSearchUser] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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

  function searchOnChange(e) {
    setSearchUser(e.target.value);
  }

  return (
    <GitSearcherContext.Provider
      value={{
        users: users,
        searchOnChange: searchOnChange,
        isLoading: isLoading,
      }}
    >
      {children}
    </GitSearcherContext.Provider>
  );
}
