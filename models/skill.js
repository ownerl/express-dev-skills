const { update } = require("../controllers/skills");

const skills = [
    {id: 1, name: 'Drawing', proficiency: 'Good', description: 'Pretty good at drawing, both organic and product rendering.', picture: 'https://cdn.crevado.com/artists/1122122/artwork/13563510_enlarged-1.jpg'},
    {id: 2, name: 'Sculpting', proficiency:'Excellent', description: 'Actually Michelangelo reborn', picture: 'https://cdn.crevado.com/artists/1122122/artwork/11847326_xxl-1.jpg'},
    {id: 3, name: 'JavaScript', proficiency: 'Wizard', description: 'Gill Bates eat your heart out', picture: 'https://avatars.githubusercontent.com/u/10489835?v=4'},
    {id: 4, name: 'Python', proficiency: 'Good', description: 'I liek sneks', picture: 'https://www.dictionary.com/e/wp-content/uploads/2018/06/snek-9.png'},
    {id: 5, name: 'Gaming', proficiency: 'God-like', description: 'Winning since circa 2010', picture: 'https://staging.cohostcdn.org/attachment/5a6821e7-d2c9-4dec-a01c-71b8c96f953e/16.jpg?width=675&auto=webp&dpr=1'},
    {id: 6, name: 'Music Prod', proficiency: 'Ad-lib Expert', description: 'Another one bite the dust', picture: 'https://www.billboard.com/wp-content/uploads/2020/07/oliver-tree-2020-cr-Parker-Day-billboard-1548-1595254862.jpg'}
];

module.exports = {
    getAll,
    getOne,
    createOne,
    deleteOne,
    updateOne,
};

function deleteOne(deleteId) {
    // find index of skill to delete
    const idx = skills.findIndex((item) => item.id === deleteId); // always try to use strict equality ===, 3 =
    skills.splice(idx, 1);
}

function updateOne(updateId, skill) {
    //console.log(typeof updateId) // bruh, this took me so long to fix, dumb string
    updateId = parseInt(updateId)
    //console.log(typeof updateId)
    const updateSkill = skills.find((item) => item.id === updateId);
    updateSkill.name = skill.name;
    updateSkill.proficiency = skill.proficiency;
    updateSkill.description = skill.description;
}

function createOne(skill) {
    // add the id ---- could use Date.now() to get unique number, that is, the number of milliseconds since the implementation of unix in 1970
    skill.id = skills.length + 1;
    skill.picture = 'https://www.foodnavigator.com/var/wrbm_gb_food_pharma/storage/images/_aliases/news_large/7/9/1/7/237197-6-eng-GB/Handary-SIC-Food-20142.jpg'
    skills.push(skill);
}

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find((skill) => skill.id === id);
}