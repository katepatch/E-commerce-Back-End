const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// find all tags
  // be sure to include its associated Product data
router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll({
      include: [{
        model: Product,
        attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
      }],
    });
    res.status(200).json(tagData);
  } catch (err) {
    console.log("tag-routes 18 here");
    res.status(400).json(err);
  }
  });

// find a single tag by its `id`
  // be sure to include its associated Product data
router.get('/:id', async (req, res) => {
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ 
        model: Product,
        attributes: ['id', 'tag_name'] 
      }],
    });
    if (!tagData) {
      res.status(400).json({ message: 'No tag found with this id!'});
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    console.log("tag routes 36 here");
    res.status(500).json(err);
  }
});

// create a new tag
router.post('/', async (req, res) => {
  try {
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
  } catch (err) {
    console.log ("tag routes 47 here");
    res.status(400).json(err);
  }
});

// update a tag's name by its `id` value
router.put('/:id', (req, res) => {
  Tag.update(
    {
      tag_name: req.body.tag_name,
    },
    {
      where: {
        tag_id: req.params.tag_id,
      },
    }
  )
  .then((updateTag) => {
    res.json(updateTag);
  })
  .catch((err) => {
    console.log(err, "tag routes 68 here");
    res.json(err);
  });
});

// delete on tag by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });
    if(!tagData) {
      res.status(404).json({ message: 'No Tag found with this id!' });
      return;
    }
    res.status(200).json(tagData);
  } catch (err) {
    console.log("tag routes 87 here");
    res.status(500).json(err);
  }
});

module.exports = router;