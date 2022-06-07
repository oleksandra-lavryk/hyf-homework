import { useContext } from "react";
import { GitSearcherContext } from "./GitSearcherProvider";

export default function GitUsersList() {
  const { users, isLoading } = useContext(GitSearcherContext);
  return (
    <>
      {isLoading ? <p>Loading...</p> : ""}
      {users.length === 0 ? (
        <p>No results</p>
      ) : (
        users.map((user) => {
          return <div key={user.id}>{user.login}</div>;
        })
      )}
    </>
  );
}
