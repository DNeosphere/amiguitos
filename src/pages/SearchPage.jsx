import { useState } from "react";

import AmiguitoCard from "../components/AmiguitoCard";
import SearchBar from "../components/SearchBar";
import { useGetData } from "../hooks/useGetData";
import "./styles/search.scss";

function Search() {
  const { data: amiguitos, setData } = useGetData("amiguitos");
  const [checkedGato, setCheckedGato] = useState(false);
  const [checkedPerro, setCheckedPerro] = useState(false);
  const { data: allAmiguitos } = useGetData("amiguitos");

  const handleChangeGato = (value) => {
    setCheckedGato(!checkedGato);
    if (value.target.checked) {
      const onlyCats = [...amiguitos].filter(
        (amiguito) => amiguito.especie === "Gato"
      );
      setData(onlyCats);
    } else {
      setData(allAmiguitos);
    }
  };

  const handleChangePerro = (value) => {
    setCheckedPerro(!checkedPerro);
    if (value.target.checked) {
      const onlyDogs = [...amiguitos].filter(
        (amiguito) => amiguito.especie === "Perro"
      );
      setData(onlyDogs);
    } else {
      setData(allAmiguitos);
    }
  };

  return (
    <div className="search content">
      <SearchBar
        props={(checkedGato, checkedPerro)}
        handleChangeGato={handleChangeGato}
        handleChangePerro={handleChangePerro}
      />
      <div className="search__amiguitos-container">
        {amiguitos?.map((amiguito) => (
          <AmiguitoCard key={amiguito.id} props={amiguito} />
        ))}
      </div>
    </div>
  );
}

export default Search;
