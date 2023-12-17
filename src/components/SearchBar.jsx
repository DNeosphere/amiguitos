import "./styles/searchbar.scss";
import CustomCheckbox from "./CustomCheckbox";

function SearchBar({
  checkedGato,
  handleChangeGato,
  checkedPerro,
  handleChangePerro,
}) {
  return (
    <div className="searchbar">
      <h1 className="searchbar__title">
        Vamos a encontrar el mejor amiguito para ti
      </h1>
      <div className="searchbar__filters">
        <CustomCheckbox
          label="Gato"
          value={checkedGato}
          onChange={handleChangeGato}
        />

        <CustomCheckbox
          label="Perro"
          value={checkedPerro}
          onChange={handleChangePerro}
        />
      </div>
    </div>
  );
}

export default SearchBar;
