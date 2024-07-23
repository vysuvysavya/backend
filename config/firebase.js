const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json'); // Update this path to your JSON file

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://aerator-33835-default-rtdb.firebaseio.com/'

});

const db = admin.firestore();

module.exports = db;
