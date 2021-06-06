const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username : {type:String, required:true},
    fullname : {type:String, required:true},
    entryDate : {type:Date, default:Date.now}
});

const tweetSchema = new Schema({
   tweet: {type:String, required:true},
   user: {type:Schema.Types.ObjectId, ref:'users'}
});

const newUserSchema = new Schema({
    name: {type:String, required:true},
    password: {type:String, required:true},
    thirdField: {type:String, required:true},
    entryDate: {type:Date, default:Date.now}
});

const userLogin = new Schema({
    name : {type:String, required:true},
    password : {type:String, required:true}
});

const Users = mongoose.model('user', userSchema, 'users');
const Tweets = mongoose.model('tweets', tweetSchema, 'tweets');
const NewUser = mongoose.model('users', newUserSchema, 'users');
const LoginUser = mongoose.model('loginUser', userLogin, 'users')
const mySchema = {'Users':Users, 'Tweets':Tweets, 'NewUser':NewUser, 'LoginUser':LoginUser};

module.exports = mySchema;