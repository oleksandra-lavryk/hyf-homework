export default function SearchBar({ searchOnChange }) {
  return (
    <>
      <input type="text" placeholder="Search user" onChange={searchOnChange} />
    </>
  );
}
