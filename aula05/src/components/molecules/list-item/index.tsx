import "./styles.css";

import { ChangeEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Item } from "../../../types/item";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import useItem from "../../../hooks/useList";

type ListItemProps = {
  item: Item;
  removeItem: (params?: any) => any;
  updateItem: (params?: any) => any;
};

export default function ListItem({ item, removeItem, updateItem }: ListItemProps) {
  function handleChange(event: ChangeEvent<HTMLInputElement>, item: Item) {
    updateItem({ ...item, done: event.target.checked });
  }

  return (
    <li className="listitem__wrapper">
      <div className="listitem__description__wrapper">
        <input type="checkbox" id={item.id.toString()} onChange={(event) => handleChange(event, item)} />
        <label htmlFor={item.id.toString()}>{item.description}</label>
      </div>
      <button onClick={removeItem} className="listitem__removebutton">
        <FontAwesomeIcon icon={faTrashCan} />
      </button>
    </li>
  );
}
