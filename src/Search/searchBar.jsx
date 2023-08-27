import { useState } from "react";
import { BsSearch } from "react-icons/bs";

const SearchBar = ({ searchItem }) => {
  const [value, setValue] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    searchItem(value);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="search flex-fill d-flex align-items-center"
    >
      <div className="input-group">
        <input
          className="border-success rounded-end pe-5 form-control"
          type="text"
          placeholder="جستجوری فست فود . . ."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></input>
        <BsSearch className=" position-absolute top-50 translate-middle-y text-munted me-3"></BsSearch>
      </div>
    </form>
  );
};
export default SearchBar;
