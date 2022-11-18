const router = require("express").Router();

const Celebrity = require('../models/Celebrity.model')

/* GET home page */
// router.get("/", (req, res, next) => {
//     res.render("index.hbs");
// });

router.get('/celebrities/create', (req, res) => {
    res.render('celebrities/new-celebrity.hbs');
});



router.post('/celebrities/create', (req, res)=>{
    const {name, occupation, catchPhrase} = req.body
    console.log(req.body)
    Celebrity.create({name, occupation, catchPhrase})
    res.redirect('/celebrities')
    .catch(err => res.render('celebrities/new-celebrity.hbs',err))
})


router.get('/celebrities', (req, res) => {
    Celebrity.find()
    .then((celebrityFound)=>{
        console.log(celebrityFound)
        res.render('celebrities/celebrities',{celebrityList:celebrityFound});
    })
    .catch(err => console.log('An error occur while retriving the info', err))
});
    



// Create Movies!




// router.post('/movies/create', (req, res) => {
//     const {title, author, description, rating} = req.body;
//     Book.create({title, author, description, rating})
//         .then(()=> res.redirect('/'))
//         .catch(err => console.log(err))
// })



module.exports = router;