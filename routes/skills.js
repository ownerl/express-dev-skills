var express = require('express');
var router = express.Router();
var skillsController = require('../controllers/skills');

// GET /skills
router.get('/', skillsController.index);
// GET /skills/new
router.get('/new', skillsController.new);
// GET /skills/:id
router.get('/:id', skillsController.show);

module.exports = router;
