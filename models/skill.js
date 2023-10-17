const skills = [
    {id: 1, name: 'Drawing', proficiency: 'Good', description: 'Pretty good at drawing, both organic and product rendering.'},
    {id: 2, name: 'Sculpting', proficiency:'Excellent', description: 'Actually Michelangelo reborn'},
    {id: 3, name: 'JavaScript', proficiency: 'Mega-Expert', description: 'Bill Gates eat your heart out'},
    {id: 4, name: 'Python', proficiency: 'Good', description: 'I liek sneks'},
    {id: 5, name: 'First Person Shooters', proficiency: 'God-like', description: 'Got accused of cheating from sheer skill'},
    {id: 6, name: 'Music Prod', proficiency: 'Iss arite', description: 'Timbaland type of arite'}
];

module.exports = {
    getAll,
    getOne,
};

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find((skill) => skill.id === id);
}