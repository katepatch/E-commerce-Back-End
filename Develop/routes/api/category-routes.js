const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// find all categories
  // be sure to include its associated Products
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      attributes: ['id', 'category_name'],
      include: [{
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
      }]
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// find one category by its `id` value
  // be sure to include its associated Products
router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ 
        model: Product, 
      attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
    }]
    });
    if(!categoryData) {
      res.status(404).json({ message: 'No category with this id!'});
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
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
