import axios from 'axios';

const API_URL = 'http://localhost:5000/api/recipes';

// Fetch all recipes
export const fetchRecipes = async () => {
  try {
    const response = await axios.get(API_URL);
    console.log("API Response:", response.data); // Debugging
    return response.data;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    throw error;
  }
};

// Fetch a single recipe by ID
export const fetchRecipeById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching recipe:', error);
    throw error;
  }
};

// Add a new recipe
export const addRecipe = async (recipe) => {
  try {
    const response = await axios.post(API_URL, recipe);
    return response.data;
  } catch (error) {
    console.error('Error adding recipe:', error);
    throw error;
  }
};

// Update a recipe
export const updateRecipe = async (id, updatedData) => {
  try {
    const response = await axios.patch(`${API_URL}/${id}`, updatedData);
    return response.data;
  } catch (error) {
    console.error('Error updating recipe:', error);
    throw error;
  }
};

// Delete a recipe
export const deleteRecipe = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting recipe:', error);
    throw error;
  }
};
