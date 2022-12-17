const {pokemonCard} = require('../models');
const categories = ['Electric type'];

module.exports.viewAll = async function(req, res, next) {
    let searchCategories = ['All'];
    for(let i = 0; i<categories.length; i++){
        searchCategories.push(categories[i]);
    }
    let pokemoncards;
    let searchCategory = req.query.category || 'All';
    let searchRandom = req.query.random || false;
    if (searchCategory==='All'){
        pokemoncards = await pokemonCard.findAll();
    } else {
        pokemoncards = await pokemonCard.findAll( {
            where: {
                category: searchCategory
            }
        });
    }
    if (pokemoncards.length > 0 && searchRandom) {
        let randomIndex = getRandomInt(pokemoncards.length);
        pokemoncards = [pokemoncards[randomIndex]];
    }
    res.render('index', {pokemoncards, categories:searchCategories, searchCategory, searchRandom});
};

module.exports.renderEditForm = async function(req, res, next) {
    const pokemoncard = await pokemonCard.findByPk(
        req.params.id
    );
    res.render('edit', {pokemoncard});
};

module.exports.updatePokemonCard = async function(req,res){
    await pokemonCard.update(
        {
            name: req.body.name,
            health: req.body.health,
            type: req.body.type,
            pokemonPicture: req.body.pokemonPicture,
            energy1: req.body.energy1,
            move1: req.body.move1,
            number1: req.body.number1,
            energy2: req.body.energy2,
            move2: req.body.move2,
            number2: req.body.number2,
            weaknessImg: req.body.weaknessImg,
            resistanceImg: req.body.resistanceImg,
            retreatCostImg: req.body.retreatCostImg
        },
        {
            where:
                {
                    id: req.params.id
                }
        });
    res.redirect('/');
};

module.exports.deletePokemonCard = async function (req, res) {
    await pokemonCard.destroy(
        {
            where:
                {
                    id: req.params.id
                }
        });
    res.redirect('/');
};

module.exports.renderAddForm = function(req, res){
    const pokemoncard = {
        name: "",
        health: "",
        type: "",
        pokemonPicture: "",
        energy1: "",
        move1: "",
        number1: "",
        energy2: "",
        move2: "",
        number2: "",
        weaknessImg: "",
        resistanceImg: "",
        retreatCostImg: ""
    };
    res.render('add', {pokemoncard});
};

module.exports.addPokemonCard = async function (req, res) {
    await pokemonCard.create(
        {
            name: req.body.name,
            health: req.body.health,
            type: req.body.type,
            pokemonPicture: req.body.pokemonPicture,
            energy1: req.body.energy1,
            move1: req.body.move1,
            number1: req.body.number1,
            energy2: req.body.energy2,
            move2: req.body.move2,
            number2: req.body.number2,
            weaknessImg: req.body.weaknessImg,
            resistanceImg: req.body.resistanceImg,
            retreatCostImg: req.body.retreatCostImg
        });
    res.redirect('/');
};

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}