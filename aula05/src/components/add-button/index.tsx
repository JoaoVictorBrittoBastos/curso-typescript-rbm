import "./styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";

export default function AddButton() {
  return (
    <button className="addbutton__button">
      <FontAwesomeIcon icon={faSquarePlus} color="#fff" />
      Adicionar
    </button>
  );
}
