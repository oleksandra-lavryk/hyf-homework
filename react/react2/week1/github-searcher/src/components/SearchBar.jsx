import { useContext } from "react";
import { gitSearcherContext } from "./GitSearcherContext";

export default function SearchBar() {
  const contextValues = useContext(gitSearcherContext);
  return (
    <>
      <input
        type="text"
        placeholder="Search user"
        onChange={contextValues.searchChange}
      />
    </>
  );
}
