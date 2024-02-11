import { useState } from "react";

import BookCard from "../components/BookCard";
import SearchBar from "../components/SearchBar";
import { useGetData } from "../hooks/useGetData";
import "./styles/search.scss";

function Search() {
  const { data: books, setData } = useGetData("books");
  const [checkedES, setCheckedES] = useState(false);
  const [checkedEN, setCheckedEN] = useState(false);
  const { data: allBooks } = useGetData("books");


  const handleChangeES = (value) => {
    setCheckedES(!checkedES);
    if (value.target.checked) {
      const onlyES = [...books].filter(
        (book) => book.language === "ES"
      );
      setData(onlyES);
    } else {
      setData(allBooks);
    }
  };

  const handleChangeEN = (value) => {
    setCheckedEN(!checkedEN);
    if (value.target.checked) {
      const onlyEN = [...books].filter(
        (book) => book.language === "EN"
      );
      setData(onlyEN);
    } else {
      setData(allBooks);
    }
  };

  return (
    <div className="search content">
      <SearchBar
        props={(checkedES, checkedEN)}
        handleChangeES={handleChangeES}
        handleChangeEN={handleChangeEN}
      />
      <div className="search__books-container">
        {books?.map((book) => (
          <BookCard key={book.id} props={book} />
        ))}
      </div>
    </div>
  );
}

export default Search;
