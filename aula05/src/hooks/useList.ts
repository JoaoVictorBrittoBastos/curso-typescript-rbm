import { Item } from "../types/item";
import { useState } from "react";

export default function useList() {
  const [items, setItems] = useState([] as Item[]);

  function updateItem(item: Item) {
    const newItems = items.map((existingItem) => (existingItem.id === item.id ? { ...item } : { ...existingItem }));
    setItems([...newItems]);
  }

  function addItem(item: Omit<Item, "id">) {
    setItems((prev) => [...prev, { ...item, id: new Date().getTime() }]);
  }

  function removeItem(item: Item) {
    const newItems = items.filter((existingItem) => (existingItem.id === item.id ? false : true));
    setItems([...newItems]);
  }

  return { updateItem, addItem, removeItem, items };
}
