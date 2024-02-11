import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBookOpen, faBookOpenReader } from "@fortawesome/free-solid-svg-icons";

import "./styles/infocard.scss";

function InfoCard({ props }) {
  const icons = [faSearch, faBookOpen, faBookOpenReader];
  return (
    <div className="infocard">
      <h2>Paso {props.step}</h2>
      <p>{props.what}</p>
      <div className="infocard__icon-wrapper">
        <FontAwesomeIcon
          className="infocard__icon"
          icon={icons[props.step - 1]}
        />
      </div>
    </div>
  );
}

export default InfoCard;
