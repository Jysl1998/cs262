import Firebase from 'firebase';

let config = {
   apiKey: "AIzaSyDfFKSTz3Ya4M6VTOcQzC1OwnUOTH45x5M",
    authDomain: "homework03-572d8.firebaseapp.com",
    databaseURL: "https://homework03-572d8.firebaseio.com",
    projectId: "homework03-572d8",
    storageBucket: "homework03-572d8.appspot.com",
    messagingSenderId: "852345847249",
    appId: "1:852345847249:web:5d8aee8e58e3332e26f4f0",
    measurementId: "G-Y2B3EY833K"
};
let app = Firebase.initializeApp(config);
export const db = app.database();