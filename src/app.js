const express = require('express');
import {User} from "./db/user.model";

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

// => récupère tous les users
app.get('/users', async function (req, res) {
    console.log('oki')
    const filmsFiltered = await User.find({});
    res.status(200).send(filmsFiltered)
});

// => récupère un user via id
app.get('/user/:id', async function (req, res) {
    let id = req.params.id;
    const movie = await User.findById(parseInt(id))
    if (!movie) {
        res.status(404).send('error');
    }
    res.send(movie);

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