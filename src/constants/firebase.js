var conf = require('../config');

export default {
    firebaseConfig: {
        apiKey: conf.apiKey,
        authDomain: conf.authDomain,
        databaseURL: conf.databaseURL,
        storageBucket: conf.storageBucket,
        messagingSenderId: conf.messagingSenderId
    }
};
