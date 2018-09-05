const express = require("express");
const router = express.Router();

//Item Model

const Item = require("../../models/Item");

// @route GET api/Items
// @desc Get All Items
// @access Public
router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 }) //desc
    .then(items => res.json(items));
});

// @route POST api/Items
// @desc Add Items
// @access Public
router.post("/", (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });

  newItem.save().then(item => res.json(item));
});

// @route Delete api/Items/:id
// @desc Delete Item
// @access Public
router.delete("/:id", (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err =>
      res.status(404).json({ success: false, detail: "Id not found" })
    );
});

module.exports = router;
