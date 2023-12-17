import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw, faBone, faDog, faCat } from "@fortawesome/free-solid-svg-icons";

import "./styles/infocard.scss";

function InfoCard({ props }) {
  const icons = [faPaw, faBone, faDog, faCat];
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
