import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import AddRecipe from './pages/AddRecipe'; // Import AddRecipe page
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Route for Home page */}
          <Route path="/" element={<Navigate to="/home" replace />} />

          {/* Route for Home page */}
          <Route path="/home" element={<Home />} />
 
          {/* Route for SignIn page */}
          <Route path="/signin" element={<SignIn />} />

          {/* Route for SignUp page */}
          <Route path="/signup" element={<SignUp />} />

          {/* Route for AddRecipe page */}
          <Route path="/add-recipe" element={<AddRecipe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
