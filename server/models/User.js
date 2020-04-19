const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;


const userSchema = new Schema({
    password: {
        type: String,
        default: ""
    },

    email: {
        type: String, 
        default: ""
    },

    firstname: {
        type: String, 
        default: ""
    },

    lastname: {
        type: String, 
        default: ""
    },

    isDeleted: {
        type: Boolean,
        default: false
    }
    // password: {
    //     type: String,
    //     required: true
    // },

    // eCurrency: {
    //     type: Number,
    //     required: true
    // },

    // postsTouched: {
    //     type: Object
    // }

});

userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
}

const User = mongoose.model('User', userSchema);

module.exports = User;