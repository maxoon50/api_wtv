import {ChannelModal} from "./db/channelModal.model";
import {AppsModal} from "./db/appsModal.model";
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

/*
* Get User with ID
 */
app.post('/update', async function (req, res) {
    const user = await User.findOneAndUpdate({ name: req.body.name }, req.body, {new: true}, function(err){
        if(err){ res.status(500).send()}
    });
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

/**
 * get all the apps which are proposed on tv
 */
app.get('/apps', async function (req, res) {
    const apps = await AppsModal.find();
    if (!apps) {
        res.status(204).send('no data found');
    }
    res.status(200).send(apps);
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



app.get('/createUser1', async function (req, res){
    let user = new User;
    user.name = "Antoine la guez";

    // SET CHANNELS
    let channel1 = {};
    channel1.title = 'France 2';
    channel1.img = "france2Logo.png";
    channel1.video = "video1.mp4";
    channel1.sub = "The kind with looting and maybe starting a few fires! I haven't felt much of anything since my guinea pig died. I've got to find a way to escape the horrible ravages of youth. Suddenly, I'm going to the bathroom like clockwork, every three hours";
    let channel2 = {};
    channel2.title = 'M6';
    channel2.img = "m6Logo.png";
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

    let content8 = {};
    content8.title = 'Gremlins 2';
    content8.img = "gremlins.png";
    content8.video = "video1.mp4";
    content8.sub = "The kind with looting and maybe starting a few fires! I haven't felt much of anything since my guinea pig died. I've got to find a way to escape the horrible ravages of youth. Suddenly, I'm going to the bathroom like clockwork, every three hours...";

    let content7 = {};
    content7.title = 'Hercule';
    content7.img = "hercule.jpg";
    content7.video = "video1.mp4";
    content7.sub = "The kind with looting and maybe starting a few fires! I haven't felt much of anything since my guinea pig died. I've got to find a way to escape the horrible ravages of youth. Suddenly, I'm going to the bathroom like clockwork, every three hours...";

    let content6 = {};
    content6.title = 'Navarro';
    content6.img = "navarro.png";
    content6.video = "video1.mp4";
    content6.sub = "The kind with looting and maybe starting a few fires! I haven't felt much of anything since my guinea pig died. I've got to find a way to escape the horrible ravages of youth. Suddenly, I'm going to the bathroom like clockwork, every three hours...";

    let content1 = {};
    content1.title = 'Breaking Bad';
    content1.img = "breakingBad.png";
    content1.video = "video1.mp4";
    content1.sub = "The kind with looting and maybe starting a few fires! I haven't felt much of anything since my guinea pig died. I've got to find a way to escape the horrible ravages of youth. Suddenly, I'm going to the bathroom like clockwork, every three hours...";

    let content5 = {};
    content5.title = 'Julie Lescaut';
    content5.img = "julieLescaut.jpg";
    content5.video = "video1.mp4";
    content5.sub = "The kind with looting and maybe starting a few fires! I haven't felt much of anything since my guinea pig died. I've got to find a way to escape the horrible ravages of youth. Suddenly, I'm going to the bathroom like clockwork, every three hours...";

    let content2 = {};
    content2.title = 'Les convois de l\'extrème';
    content2.img = "convoisExtreme.png";
    content2.video = "video1.mp4";
    content2.sub = "The kind with looting and maybe starting a few fires! I haven't felt much of anything since my guinea pig died. I've got to find a way to escape the horrible ravages of youth. Suddenly, I'm going to the bathroom like clockwork, every three hours...";

    let content4 = {};
    content4.title = 'Teleshopping';
    content4.img = "teleshopping.png";
    content4.video = "video1.mp4";
    content4.sub = "The kind with looting and maybe starting a few fires! I haven't felt much of anything since my guinea pig died. I've got to find a way to escape the horrible ravages of youth. Suddenly, I'm going to the bathroom like clockwork, every three hours...";

    let content3 = {};
    content3.title = 'Burger Quiz';
    content3.img = "burgerQuizz.png";
    content3.video = "video1.mp4";
    content3.sub = "The kind with looting and maybe starting a few fires! I haven't felt much of anything since my guinea pig died. I've got to find a way to escape the horrible ravages of youth. Suddenly, I'm going to the bathroom like clockwork, every three hours...";


    user.preferences.myContents.push(content1);
    user.preferences.myContents.push(content2);
    user.preferences.myContents.push(content3);
    user.preferences.myContents.push(content4);
    user.preferences.myContents.push(content5);
    user.preferences.myContents.push(content6);
    user.preferences.myContents.push(content7);
    user.preferences.myContents.push(content8);

    let app1 = {};
    app1.id = 124;
    app1.title = "Netflix";
    app1.img = "netflix.jpeg";
    app1.url = "http://www.netflix.com";

    let app2 = {};
    app2.id = 14;
    app2.title = "YouTube";
    app2.img = "youtube.png";
    app2.url = "http://www.youtube.com";

    let app3 = {};
    app3.id = 90;
    app3.title = "HBO Go";
    app3.img = "hboGo.png";
    app3.url = "http://www.hbo.com";

    let app4 = {};
    app4.id = 129;
    app4.title = "Twitch";
    app4.img = "twitch.png";
    app4.url = "http://www.twitch.com";

    user.preferences.apps.push(app1);
    user.preferences.apps.push(app2);
    user.preferences.apps.push(app3);
    user.preferences.apps.push(app4);

    let film1 ={};
    film1.title = "Jackie Brown";
    film1.img = "jackie.jpg";
    film1.url = "null";
    film1.videoId = "QlqM2oiD19w";

    let film2 = {};
    film2.title = "L'invasion des profanateurs de sépulture";
    film2.img = "invasion.jpg";
    film2.url = "null";
    film2.videoId = "0BLt7yDaHdQ";

    let film3 = {};
    film3.title = "Daredevil";
    film3.img = "daredevil.jpg";
    film3.url = "null";
    film3.videoId = "mGEWftxFX3M";

    user.preferences.films.push(film1);
    user.preferences.films.push(film2);
    user.preferences.films.push(film3);

/*    let extra1 = {};
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
    user.preferences.extras.push(extra4);*/

    user.preferences.keywords.push(...['sailing', 'hockey','horse']);

    const userGol = await user.save();
    if(userGol){
        res.status(200).send(userGol);
    }else{
        res.status(500).send('error');
    }
});

app.get('/createUser2', async function (req, res){
    let user = new User;
    user.name = "Marlene la zouz";

    // SET CHANNELS
    let channel1 = {};
    channel1.title = 'France 3';
    channel1.img = "france3Logo.png";
    channel1.video = "video1.mp4";
    channel1.sub = "The kind with looting and maybe starting a few fires! I haven't felt much of anything since my guinea pig died. I've got to find a way to escape the horrible ravages of youth. Suddenly, I'm going to the bathroom like clockwork, every three hours";
    let channel2 = {};
    channel2.title = 'Gulli';
    channel2.img = "gulliLogo.png";
    channel2.video = "video1.mp4";
    channel2.sub = "The kind with looting and maybe starting a few fires! I haven't felt much of anything since my guinea pig died. I've got to find a way to escape the horrible ravages of youth. Suddenly, I'm going to the bathroom like clockwork, every three hours.";
    let channel3 = {};
    channel3.title = 'NRJ12';
    channel3.img = "nrj12Logo.png";
    channel3.video = "video1.mp4";
    channel3.sub = "The kind with looting and maybe starting a few fires! I haven't felt much of anything since my guinea pig died. I've got to find a way to escape the horrible ravages of youth. Suddenly, I'm going to the bathroom like clockwork, every three hours...";
    let channel4 = {};
    channel4.title = 'RMC';
    channel4.img = "rmcLogo.png";
    channel4.video = "video1.mp4";
    channel4.sub = "The kind with looting and maybe starting a few fires! I haven't felt much of anything since my guinea pig died. I've got to find a way to escape the horrible ravages of youth. Suddenly, I'm going to the bathroom like clockwork, every three hours...";


    user.preferences.channels.push(channel1);
    user.preferences.channels.push(channel2);
    user.preferences.channels.push(channel3);
    user.preferences.channels.push(channel4);

    let content8 = {};
    content8.title = 'Gremlins 2';
    content8.img = "gremlins.png";
    content8.video = "video1.mp4";
    content8.sub = "The kind with looting and maybe starting a few fires! I haven't felt much of anything since my guinea pig died. I've got to find a way to escape the horrible ravages of youth. Suddenly, I'm going to the bathroom like clockwork, every three hours...";

    let content7 = {};
    content7.title = 'Hercule';
    content7.img = "hercule.jpg";
    content7.video = "video1.mp4";
    content7.sub = "The kind with looting and maybe starting a few fires! I haven't felt much of anything since my guinea pig died. I've got to find a way to escape the horrible ravages of youth. Suddenly, I'm going to the bathroom like clockwork, every three hours...";

    let content6 = {};
    content6.title = 'Navarro';
    content6.img = "navarro.png";
    content6.video = "video1.mp4";
    content6.sub = "The kind with looting and maybe starting a few fires! I haven't felt much of anything since my guinea pig died. I've got to find a way to escape the horrible ravages of youth. Suddenly, I'm going to the bathroom like clockwork, every three hours...";

    let content5 = {};
    content5.title = 'Breaking Bad';
    content5.img = "breakingBad.png";
    content5.video = "video1.mp4";
    content5.sub = "The kind with looting and maybe starting a few fires! I haven't felt much of anything since my guinea pig died. I've got to find a way to escape the horrible ravages of youth. Suddenly, I'm going to the bathroom like clockwork, every three hours...";

    let content1 = {};
    content1.title = 'Julie Lescaut';
    content1.img = "julieLescaut.jpg";
    content1.video = "video1.mp4";
    content1.sub = "The kind with looting and maybe starting a few fires! I haven't felt much of anything since my guinea pig died. I've got to find a way to escape the horrible ravages of youth. Suddenly, I'm going to the bathroom like clockwork, every three hours...";

    let content3 = {};
    content3.title = 'Les convois de l\'extrème';
    content3.img = "convoisExtreme.png";
    content3.video = "video1.mp4";
    content3.sub = "The kind with looting and maybe starting a few fires! I haven't felt much of anything since my guinea pig died. I've got to find a way to escape the horrible ravages of youth. Suddenly, I'm going to the bathroom like clockwork, every three hours...";

    let content4 = {};
    content4.title = 'Teleshopping';
    content4.img = "teleshopping.png";
    content4.video = "video1.mp4";
    content4.sub = "The kind with looting and maybe starting a few fires! I haven't felt much of anything since my guinea pig died. I've got to find a way to escape the horrible ravages of youth. Suddenly, I'm going to the bathroom like clockwork, every three hours...";

    let content2 = {};
    content2.title = 'Burger Quiz';
    content2.img = "burgerQuizz.png";
    content2.video = "video1.mp4";
    content2.sub = "The kind with looting and maybe starting a few fires! I haven't felt much of anything since my guinea pig died. I've got to find a way to escape the horrible ravages of youth. Suddenly, I'm going to the bathroom like clockwork, every three hours...";


    user.preferences.myContents.push(content1);
    user.preferences.myContents.push(content2);
    user.preferences.myContents.push(content3);
    user.preferences.myContents.push(content4);
    user.preferences.myContents.push(content5);
    user.preferences.myContents.push(content6);
    user.preferences.myContents.push(content7);
    user.preferences.myContents.push(content8);

    let app1 = {};
    app1.id = 124;
    app1.title = "Tune In";
    app1.img = "tuneIn.png";
    app1.url = "http://www.tunein.com";

    let app3 = {};
    app3.id = 14;
    app3.title = "YouTube";
    app3.img = "youtube.png";
    app3.url = "http://www.youtube.com";

    let app2 = {};
    app2.id = 90;
    app2.title = "Gaming Tv";
    app2.img = "gamingTv.png";
    app2.url = "http://www.hbo.com";

    let app4 = {};
    app4.id = 129;
    app4.title = "Twitch";
    app4.img = "twitch.png";
    app4.url = "http://www.twitch.com";

    user.preferences.apps.push(app1);
    user.preferences.apps.push(app2);
    user.preferences.apps.push(app3);
    user.preferences.apps.push(app4);

    let film1 ={};
    film1.title = "Stalker";
    film1.img = "stalker.jpg";
    film1.url = "null";
    film1.videoId = "xB7jVTut3-g";

    let film2 = {};
    film2.title = "Willow";
    film2.img = "willow.jpg";
    film2.url = "null";
    film2.videoId = "VDKNr6ID2sc";

    let film3 = {};
    film3.title = "Daredevil";
    film3.img = "daredevil.jpg";
    film3.url = "null";
    film3.videoId = "mGEWftxFX3M";

    user.preferences.films.push(film1);
    user.preferences.films.push(film2);
    user.preferences.films.push(film3);

    /*    let extra1 = {};
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
        user.preferences.extras.push(extra4);*/

    user.preferences.keywords.push(...['rnb', 'golf','cosmos']);

    const userGol = await user.save();
    if(userGol){
        res.status(200).send(userGol);
    }else{
        res.status(500).send('error');
    }
});




export default app;