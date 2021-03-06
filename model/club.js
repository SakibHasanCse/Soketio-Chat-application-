
const mongoose = require('mongoose')


const clubSchema = new mongoose.Schema({
    club: {
        type: String,
        default: ''
    },
    country: {
        type: String,
        default: ''
    },
    image: {
        type: String,

    },
    clubslug: {
        type: String
    },
    fans: [
        {
            username: {
                type: String, default: ''
            },
            email: {
                type: String,
                default: ''
            }
        }
    ]

})



module.exports = mongoose.model('Clubs', clubSchema)