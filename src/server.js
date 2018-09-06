import app from './app'
import {db} from './db';

(async function () {
    try {
        await db.connect('mongodb://localhost:27017/wiztivi', {useNewUrlParser: true});
        app.listen(8005, function () {
            console.log('listening on port 8005!')
        });
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
})();

