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
  return response.data; // Return the specific item
};

// Create a new item
export const createItem = async (itemData) => {
  const response = await axios.post(`${apiURL}/items`, itemData);
  return response.data; // Return the new created item
};

// Update an existing item
export const updateItem = async (id, itemData) => {
  const response = await axios.put(`${apiURL}/items/${id}`, itemData);
  return response.data; // Return updated item
};

// Delete an item by ID
export async function deleteItem(itemId) {
  try {
    console.log("Deleting item with ID:", itemId); // Log the item ID
    const response = await fetch(`${apiURL}/items/${itemId}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Failed to delete item: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Delete response data:", data); // Log the API response
    return data;
  } catch (error) {
    console.error("Error in deleteItem:", error); // Log any errors
    return { error: error.message }; // Ensure it always returns an object
  }
}
