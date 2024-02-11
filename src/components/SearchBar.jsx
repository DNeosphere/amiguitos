import "./styles/searchbar.scss";
import CustomCheckbox from "./CustomCheckbox";

function SearchBar({
  checkedAudio,
  handleChangeAudio,
  checkedES,
  handleChangeES,
  checkedEN,
  handleChangeEN,
}) {
  return (
    <div className="searchbar">
      <h1 className="searchbar__title">
        Busca el libro que deseas
      </h1>
      <div className="searchbar__filters">

        <CustomCheckbox
          label="ES"
          value={checkedES}
          onChange={handleChangeES}
        />

        <CustomCheckbox
          label="EN"
          value={checkedEN}
          onChange={handleChangeEN}
        />
      </div>
    </div>
  );
}

export default SearchBar;
