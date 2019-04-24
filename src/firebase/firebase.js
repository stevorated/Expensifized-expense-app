import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DB_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MSI
  };

firebase.initializeApp(firebaseConfig)

const db = firebase.database()

export { firebase, db as default }


// db.ref().set({
//     name: 'shirelski stevorated',
//     age: 33,
//     isSingle: true,
//     location: {
//         city: 'Tel Aviv',
//         country: 'Republic of Bananas'
//     }
// }).then(()=>{
//     console.log('Data Saved')
// }).catch((e)=>{
//     console.log('this failed',e)
// })

// db.ref('isSingle').remove()