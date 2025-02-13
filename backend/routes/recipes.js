const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe');

// To get all recipes
router.get('/', async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.json(recipes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// To get a single recipe by ID
router.get('/:id', async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id);
        if (!recipe) return res.status(404).json({ message: 'Recipe not found' });
        res.json(recipe);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add a new recipe
router.post('/', async (req, res) => {
    const { name, ingredients, instructions } = req.body;

    if (!name || !ingredients || !instructions) {
        return res.status(400).json({ message: 'Name, ingredients, and instructions are required' });
    }

    const recipe = new Recipe({ name, ingredients, instructions });
    try {
        const savedRecipe = await recipe.save();
        res.status(201).json(savedRecipe);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Update a recipe
router.patch('/:id', async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id);
        if (!recipe) return res.status(404).json({ message: 'Recipe not found' });

        if (req.body.name) recipe.name = req.body.name;
        if (req.body.ingredients) recipe.ingredients = req.body.ingredients;
        if (req.body.instructions) recipe.instructions = req.body.instructions;

        const updatedRecipe = await recipe.save();
        res.json(updatedRecipe);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Delete a recipe
router.delete('/:id', async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id);
        if (!recipe) return res.status(404).json({ message: 'Recipe not found' });

        await recipe.remove();
        res.json({ message: 'Recipe deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
