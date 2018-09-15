const express = require('express');
import {User} from "./db/user.model";
import {Channel} from "./db/channel.model";

let bodyParser = require('body-parser');
const app = express();
/*const io = socketio(5001);*/
app.use(express.static('public'));
app.use(bodyParser.json());
let urlencodedParser = bodyParser.urlencoded({extended: false});
const DOMAIN_NAME = 'http://localhost:8080';

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", DOMAIN_NAME);
    res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE');
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});

/*
* => get all the Users
 */
app.get('/users', async function (req, res) {
    const users = await User.find({});
    if(!users){
        res.status(204).send('no data found');
    }
    res.status(200).send(users)
});

/*
* Get User with ID
 */
app.get('/user/:id', async function (req, res) {
    let id = req.params.id;
    const movie = await User.findById(parseInt(id))
    if (!movie) {
        res.status(204).send('no data found');
    }
    res.status(200).send(movie);
});

/**
 * get all the channels which are proposed on tv
 */
app.get('/channels', async function (req, res) {
    const channels = await Channel.find();
    if (!channels) {
        res.status(204).send('no data found');
    }
    res.status(200).send(channels);
});

// => update le user
app.post('/user', async function (req, res) {

    let toto = new User({
        name: 'titi',
    });
    await toto.save();
    return res.send(toto);
});

app.del('/user/:id', async function (req, res) {
    await User.deleteOne({_id: parseInt(req.params.id)});
    res.status(200).send('ok')
});

export default app;