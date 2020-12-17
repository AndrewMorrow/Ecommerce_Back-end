const router = require("express").Router();
// pulls in the models for use in the routes
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

// route: api/categories/
router.get("/", async (req, res) => {
    // find all categories
    // be sure to include its associated Products
    try {
        const allCategoryData = await Category.findAll({
            include: [{ model: Product }],
        });
        res.status(200).json(allCategoryData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// route: api/categories/:id
router.get("/:id", async (req, res) => {
    // find one category by its `id` value
    // be sure to include its associated Products
    try {
        const categoryData = await Category.findByPk(req.params.id, {
            include: [{ model: Product }],
        });

        if (!categoryData) {
            res.status(404).json({
                message: "No category found with that id!",
            });
            return;
        }

        res.status(200).json(categoryData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// route: api/categories/
router.post("/", (req, res) => {
    /* req.body should look like this...
    {"category_name": "name"}
  */
    // create a new category
    Category.create(req.body)
        .then((category) => {
            res.status(200).json(category);
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);
        });
});

// route: api/categories/:id
router.put("/:id", async (req, res) => {
    /* req.body should look like this...
    {"category_name": "name"}
  */
    // update a category by its `id` value
    try {
        const categoryData = await Category.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json(categoryData);
    } catch {
        res.status(400).json(err);
    }
});

// route: api/categories/:id
router.delete("/:id", async (req, res) => {
    // delete a category by its `id` value
    try {
        const categoryData = await Category.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (!categoryData) {
            res.status(404).json({
                message: "No category found with that id!",
            });
            return;
        }

        res.status(200).json(categoryData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
