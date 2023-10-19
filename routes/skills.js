var express = require('express');
var router = express.Router();
var skillsController = require('../controllers/skills');

// GET /skills
router.get('/', skillsController.index);
// GET /skills/new    <---- new has to be before show, otherwise it will render the show one because :id is a variable that could literally be 'new'
router.get('/new', skillsController.new);
// POST /skills
router.post('/', skillsController.create);
// GET /skills/:id/edit
router.get('/:editId/edit', skillsController.edit);
// GET /skills/:id
router.get('/:id', skillsController.show);
// DELETE /skills/:id
router.delete('/:deleteId', skillsController.delete);
// PUT /skills/:id
router.put('/:updateId', skillsController.update)

module.exports = router;
