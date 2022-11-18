//  Add your code here
const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const Celebrity = require('./Celebrity.model')

const movieSchema = new Schema (
    {
        name: String,
        genre: String,
        plot: String,
        cast:[{ type: Schema.Types.ObjectId, ref: 'Celebrity'}]
        
    },
);

const Movie = model("Movie", movieSchema);

module.exports = Movie;