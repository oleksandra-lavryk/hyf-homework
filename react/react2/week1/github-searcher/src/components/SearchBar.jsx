import { useContext } from "react";
import { GitSearcherContext } from "./GitSearcherProvider";

export default function SearchBar() {
  const { searchOnChange } = useContext(GitSearcherContext);
  return (
    <>
      <input type="text" placeholder="Search user" onChange={searchOnChange} />
    </>
  );
}
