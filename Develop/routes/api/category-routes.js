const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// find all categories
  // be sure to include its associated Products
router.get('/', (req, res) => {
  
});

// find one category by its `id` value
  // be sure to include its associated Products
router.get('/:id', (req, res) => {
  
});

// create a new category
router.post('/', (req, res) => {
  
});

// update a category by its `id` value
router.put('/:id', (req, res) => {
  
});

// delete a category by its `id` value
router.delete('/:id', (req, res) => {
  
});

module.exports = router;
