import {ChannelModal} from "./db/channelModal.model";
const express = require('express');
import {User} from "./db/user.model";
let bodyParser = require('body-parser');
const app = express();
/*const io = socketio(5001);*/
app.use(express.static('public'));
app.use(bodyParser.json());
const DOMAIN_NAME = 'http://localhost:8080';

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", DOMAIN_NAME);
    res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE');
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});



app.get('/createUser', async function (req, res){
    let user = new User;
    user.name = "Marlene la zouz";
    console.log(user.preferences);


    // SET CHANNELS
    let channel1 = {};
    channel1.title = 'Canal+';
    channel1.img = "canal+Logo.png";
    channel1.video = "video1.mp4";
    channel1.sub = "The kind with looting and maybe starting a few fires! I haven't felt much of anything since my guinea pig died. I've got to find a way to escape the horrible ravages of youth. Suddenly, I'm going to the bathroom like clockwork, every three hours";
    let channel2 = {};
    channel2.title = 'CStar';
    channel2.img = "cstarLogo.png";
    channel2.video = "video1.mp4";
    channel2.sub = "The kind with looting and maybe starting a few fires! I haven't felt much of anything since my guinea pig died. I've got to find a way to escape the horrible ravages of youth. Suddenly, I'm going to the bathroom like clockwork, every three hours.";
    let channel3 = {};
    channel3.title = 'Arte';
    channel3.img = "arteLogo.png";
    channel3.video = "video1.mp4";
    channel3.sub = "The kind with looting and maybe starting a few fires! I haven't felt much of anything since my guinea pig died. I've got to find a way to escape the horrible ravages of youth. Suddenly, I'm going to the bathroom like clockwork, every three hours...";
    let channel4 = {};
    channel4.title = 'France 4';
    channel4.img = "france4Logo.png";
    channel4.video = "video1.mp4";
    channel4.sub = "The kind with looting and maybe starting a few fires! I haven't felt much of anything since my guinea pig died. I've got to find a way to escape the horrible ravages of youth. Suddenly, I'm going to the bathroom like clockwork, every three hours...";


    user.preferences.channels.push(channel1);
    user.preferences.channels.push(channel2);
    user.preferences.channels.push(channel3);
    user.preferences.channels.push(channel4);

    let content1 = {};
    content1.title = 'Gremlins 2';
    content1.img = "hercule.jpg";
    content1.video = "video1.mp4";
    content1.sub = "The kind with looting and maybe starting a few fires! I haven't felt much of anything since my guinea pig died. I've got to find a way to escape the horrible ravages of youth. Suddenly, I'm going to the bathroom like clockwork, every three hours...";

    let content2 = {};
    content2.title = 'Toinou contre les merguez';
    content2.img = "hercule.jpg";
    content2.video = "video1.mp4";
    content2.sub = "The kind with looting and maybe starting a few fires! I haven't felt much of anything since my guinea pig died. I've got to find a way to escape the horrible ravages of youth. Suddenly, I'm going to the bathroom like clockwork, every three hours...";

    let content3 = {};
    content3.title = 'Mad Max Fury Road';
    content3.img = "hercule.jpg";
    content3.video = "video1.mp4";
    content3.sub = "The kind with looting and maybe starting a few fires! I haven't felt much of anything since my guinea pig died. I've got to find a way to escape the horrible ravages of youth. Suddenly, I'm going to the bathroom like clockwork, every three hours...";

    let content4 = {};
    content4.title = 'Starship troopers';
    content4.img = "julieLescaut.jpg";
    content4.video = "video1.mp4";
    content4.sub = "The kind with looting and maybe starting a few fires! I haven't felt much of anything since my guinea pig died. I've got to find a way to escape the horrible ravages of youth. Suddenly, I'm going to the bathroom like clockwork, every three hours...";

    user.preferences.myContents.push(content1);
    user.preferences.myContents.push(content2);
    user.preferences.myContents.push(content3);
    user.preferences.myContents.push(content4);

    let app1 = {};
    app1.title = "Tinder";
    app1.img = "netflix.jpeg";
    app1.url = "http://www.netflix.com";

    let app2 = {};
    app2.title = "Netflix";
    app2.img = "netflix.jpeg";
    app2.url = "http://www.netflix.com";

    let app3 = {};
    app3.title = "Nutsflix";
    app3.img = "netflix.jpeg";
    app3.url = "http://www.netflix.com";

    let app4 = {};
    app4.title = "Google Map";
    app4.img = "netflix.jpeg";
    app4.url = "http://www.netflix.com";

    user.preferences.apps.push(app1);
    user.preferences.apps.push(app2);
    user.preferences.apps.push(app3);
    user.preferences.apps.push(app4);

    let film1 ={};
    film1.title = "l'arme fatale";
    film1.img = "jackie.jpg";
    film1.url = "null";

    let film2 = {};
    film2.title = "L'invasion des profanateurs de sépulture";
    film2.img = "invasion.jpg";
    film2.url = "null";

    let film3 = {};
    film3.title = "Daredevil";
    film3.img = "daredevil.jpg";
    film3.url = "null";

    user.preferences.films.push(film1);
    user.preferences.films.push(film2);
    user.preferences.films.push(film3);

    let extra1 = {};
    extra1.title = "extra1";
    extra1.img ="hercule.jpg";

    let extra2 = {};
    extra2.title = "extra2";
    extra2.img ="canal+Logo.png";

    let extra3 ={};
    extra3.title = "extra3";
    extra3.img ="julieLescaut.jpg";

    let extra4 ={};
    extra4.title = "extra4";
    extra4.img ="w9Logo.png";

    user.preferences.extras.push(extra1);
    user.preferences.extras.push(extra2);
    user.preferences.extras.push(extra3);
    user.preferences.extras.push(extra4);

    const userGol = await user.save();
    if(userGol){
       res.status(200).send(userGol);
    }else{
        res.status(500).send('error');
    }
});
/*
* => get all the Users
 */
app.get('/users', async function (req, res) {
    const users = await User.find({});
    if (!users) {
        res.status(204).send('no data found');
    }
    res.status(200).send(users)
});

/*
* Get User with ID
 */
app.get('/user/:name', async function (req, res) {
    const user = await User.findOne({ name : req.params.name });
    if (!user) {
        res.status(204).send('no data found');
    }
    res.status(200).send(user);
});

/**
 * get all the channels which are proposed on tv
 */
app.get('/channels', async function (req, res) {
    const channels = await ChannelModal.find();
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