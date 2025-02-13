import React, { useState } from 'react';
import { addRecipe } from '../api/recipes'; // Import the API function
import { useNavigate } from 'react-router-dom';

const AddRecipe = () => {
  const [name, setName] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const recipe = {
        name,
        ingredients: ingredients.split(',').map((item) => item.trim()),
        instructions: instructions.split('.').map((item) => item.trim()),
      };
      await addRecipe(recipe); // Use the API utility
      navigate('/home'); // Redirect to home after adding
    } catch (error) {
      console.error('Error adding recipe:', error);
    }
  };

  return (
    <div>
      <h1>Add a New Recipe</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Recipe Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="Ingredients (comma-separated)"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        ></textarea>
        <textarea
          placeholder="Instructions (dot-separated)"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
        ></textarea>
        <button type="submit">Add Recipe</button>
      </form>
    </div>
  );
};

export default AddRecipe;
