import axios from "axios";
import apiURL from "../api.js"; // Import apiURL to point to the correct backend

// Fetch all items from the API
export const fetchItems = async () => {
  const response = await axios.get(`${apiURL}/items`);
  return response.data; // Return the list of items
};

// Fetch a single item by ID
export const fetchItemById = async (id) => {
  const response = await axios.get(`${apiURL}/items/${id}`);
  if (response.status != 200) {
    throw new Error("Failed to fetch item");
  }
  return response.data;
};

// Create a new item
export const createItem = async (itemData) => {
  const response = await axios.post(`${apiURL}/items`, itemData);
  return response.data; // Return the new created item
};

// Update an existing item
export const updateItem = async (item) => {
  const response = await fetch(`${apiURL}/items/${item.id}`, {
    method: "PUT", // PUT request to update the item
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  });

  if (!response.ok) {
    throw new Error("Failed to update item");
  }
  return await response.json();
};

// Delete an item by ID
export async function deleteItem(itemId) {
  try {
    const response = await fetch(`${apiURL}/items/${itemId}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error(`Failed to delete item: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error in deleteItem:", error);
    return { error: error.message };
  }
}
