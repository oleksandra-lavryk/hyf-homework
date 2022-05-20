import { useContext } from "react";
import { gitSearcherContext } from "./GitSearcherContext";

export default function GitUsersList() {
  const contextValues = useContext(gitSearcherContext);

  return (
    <>
      {contextValues.isUsersEmpty ? (
        <p>No results</p>
      ) : (
        contextValues.usersList.map((user) => {
          return <div key={user.id}>{user.login}</div>;
        })
      )}
    </>
  );
}
