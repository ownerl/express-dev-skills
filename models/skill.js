const skills = [
    {id: 1, name: 'Drawing', proficiency: 'Good', description: 'Pretty good at drawing, both organic and product rendering.', picture: 'https://cdn.crevado.com/artists/1122122/artwork/13563510_enlarged-1.jpg'},
    {id: 2, name: 'Sculpting', proficiency:'Excellent', description: 'Actually Michelangelo reborn', picture: 'https://cdn.crevado.com/artists/1122122/artwork/11847326_xxl-1.jpg'},
    {id: 3, name: 'JavaScript', proficiency: 'Wizard', description: 'Gill Bates eat your heart out', picture: 'https://avatars.githubusercontent.com/u/10489835?v=4'},
    {id: 4, name: 'Python', proficiency: 'Good', description: 'I liek sneks', picture: 'https://www.dictionary.com/e/wp-content/uploads/2018/06/snek-9.png'},
    {id: 5, name: 'First Person Shooters', proficiency: 'God-like', description: 'Got accused of cheating from sheer skill', picture: 'https://media.tenor.com/PdSPCI4PbvIAAAAC/fps-doug-boom-headshot.gif'},
    {id: 6, name: 'Music Prod', proficiency: 'Ad-lib Expert', description: 'Another one bite the dust', picture: 'https://www.billboard.com/wp-content/uploads/2020/07/oliver-tree-2020-cr-Parker-Day-billboard-1548-1595254862.jpg'}
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