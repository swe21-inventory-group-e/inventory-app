import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import { fetchItems, deleteItem } from "../api/items";

function RemovePage({ goback, setItems }) {
  const [items, setLocalItems] = useState([]);

  // Fetch items when the page loads
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchItems();
      setLocalItems(data);
    };
    fetchData();
  });
}
