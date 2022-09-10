import "./styles.css";

import { ButtonHTMLAttributes } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";

export default function AddButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className="addbutton__button" {...props}>
      <FontAwesomeIcon icon={faSquarePlus} color="#fff" />
      Adicionar
    </button>
  );
}
