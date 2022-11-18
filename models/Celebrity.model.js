//  Add your code here
const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const celebritySchema = new Schema (
    {
        name: { type: String, unique: true },
        occupation: String,
        catchPhrase: String,
        
    },
);

const Celebrity = model("Celebrity", celebritySchema);

module.exports = Celebrity;