import React, { useEffect, useState } from 'react';
import { fetchRecipes } from '../api/recipes'; // Import the centralized API function
import { Link } from 'react-router-dom';  // Import Link for navigation
import './Home.css';  // Import Home.css for styling this component
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [showSignIn, setShowSignIn] = useState(false); // State for Sign In modal
  const [showSignUp, setShowSignUp] = useState(false); // State for Sign Up modal


  useEffect(() => {
    const getRecipes = async () => {
      try {
        const data = await fetchRecipes(); // Use the API utility function
        console.log("Fetched Recipes:", data); // Debugging
        setRecipes(data);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    getRecipes(); // Call the function to fetch recipes
  }, []);

  return (
    <div className="home">
      <nav className="nav-bar">
      <button className="nav-link" onClick={() => setShowSignIn(true)}>Sign In</button>
      <button className="nav-link" onClick={() => setShowSignUp(true)}>Sign Up</button>
        <Link to="/add-recipe" className="nav-link">Add Recipe</Link> {/* Add link to AddRecipe page */}
      </nav>

      <h1>Recipes</h1>
      <ul>
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <li key={recipe._id} className="recipe-item">
              <h3>{recipe.name}</h3>
              <p><strong>Ingredients:</strong> {recipe.ingredients.join(", ")}</p>
              <p><strong>Instructions:</strong> {recipe.instructions.join(". ")}</p>
            </li>
          ))
        ) : (
          <p>No recipes found. Please add some recipes.</p>
        )}
      </ul>

      {/* Sign In Modal */}
      {showSignIn && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={() => setShowSignIn(false)}>X</button>
            <SignIn closeModal={() => setShowSignIn(false)} /> {/* SignIn component */}
          </div>
        </div>
      )}

      {/* Sign Up Modal */}
      {showSignUp && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={() => setShowSignUp(false)}>X</button>
            <SignUp closeModal={() => setShowSignUp(false)} /> {/* SignUp component */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
