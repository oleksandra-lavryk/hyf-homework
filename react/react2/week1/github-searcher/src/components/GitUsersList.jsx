import { useState, useEffect } from "react";

export default function GitUsersList({ usersList }) {
  const [listEmpty, setListEmpty] = useState(false);
  useEffect(() => {
    usersList.length === 0 ? setListEmpty(true) : setListEmpty(false);
  }, [usersList]);
  return (
    <>
      {listEmpty ? (
        <p>No results</p>
      ) : (
        usersList.map((user) => {
          return <div key={user.id}>{user.login}</div>;
        })
      )}
    </>
  );
}
