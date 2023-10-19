const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill, // cant just call it 'new' because functions cant be a reserved word (eg. new Class) There cant be function new
    create,
    delete: deleteSkill, // ditto
    edit,
    update,
}

function deleteSkill(req,res) {
    Skill.deleteOne(req.params.deleteId);
    res.redirect('/skills');
}

function edit(req,res) {
    const skill = Skill.getOne(req.params.editId);
    //console.log(skill)
    res.render('skills/edit', { 
        title: 'Edit Skill',
        id: req.params.editId,
        skill,
    });
}

function update(req,res) {
    console.log(req.params.updateId,req.body)
    Skill.updateOne(req.params.updateId, req.body);
    res.redirect(`/skills/${req.params.updateId}`)
}

function create(req,res) {
    //console.log(req.body)
    // the model is responsible for creating and hosting the data
    Skill.createOne(req.body);
    // do a redirect any time data is changed (created or updated or deleted)
    res.redirect('/skills');
}

function newSkill(req,res) {
    res.render('skills/new', { 
        title: 'New Skill'
    });
}

function index(req,res) {
    res.render('skills/index', {
        skills: Skill.getAll()
    });
}

function show(req,res) {
    res.render('skills/show', {
        skills: Skill.getOne(req.params.id)
    });
}
