import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useAppContext } from "../context";

const SearchBar = ({ searchItem }) => {
  const context = useAppContext();
  const language = context.language;
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
          className={`border-success rounded-end ${
            language === "fn" ? "pe-5 ms-5" : "ps-5"
          } form-control `}
          type="text"
          placeholder={
            language === "fn"
              ? "جستجو برای فست فود . . ."
              : "Search For FastFoods . . ."
          }
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></input>

        <BsSearch
          className={`position-absolute ${
            language === "fn" ? "me-4" : "ms-4"
          } top-50 translate-middle-y text-munted`}
        ></BsSearch>
      </div>
    </form>
  );
};
export default SearchBar;
