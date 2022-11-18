const router = require("express").Router();
const Movie = require("../models/Movie.model")
const Celebrity = require('../models/Celebrity.model')


/* GET home page */
// router.get("/", (req, res, next) => {
//     res.render("index");
// });


router.get('/movies/create', (req, res) => {
    //console.log(req.body)
    res.render('movies/new-movie.hbs')
    //res.redirect('/create')
})

router.post('/movies/create', (req, res) => {
    const movieElements = req.body
    Movie.create(movieElements)
    .then((test)=>{
         Movie.find({_id: test._id})
         res.redirect("/movies")

    })
 
})

router.get('/movies', (req,res)=>{
    Movie.find()
    .populate('cast')
    .then ((moviesArray)=>{
        res.render('/movies/movies', {moviesArray})
    })
})


module.exports = router;