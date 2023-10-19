const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill, // cant just call it 'new' because functions cant be a reserved word (eg. new Class) There cant be function new
    create,
}

function create(req,res) {
    console.log(req.body)
    // the model is responsible for creating and hosting the data
    Skill.createOne(req.body);
    // do a redirect any time data is changed (created or updated or deleted)
    res.redirect('/skills');
}

function newSkill(req,res) {
    res.render('skills/new', { title: 'New Skill'})
}

function index(req,res) {
    res.render('skills/index', {
        skills: Skill.getAll()
    });
}

function show(req,res) {
    res.render('skills/show', {
        skills: Skill.getOne(req.params.id)
    })
}
