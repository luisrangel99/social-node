const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let roleValited = {
    value: ['STUDENT', 'TEACHER', 'ADMIN', 'SUPER_ADMIN'],
    message: '{VALUE} is not a role valido'
}

const userSchema = new Schema({
    firs_name:{
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    img: {
        type: String,
        required: false
    },
    passwowrd: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'STUDENT'
    }
});

module.exports = mongoose.model( 'User', userSchema );