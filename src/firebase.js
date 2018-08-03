import { initializeApp } from 'firebase';

const app = initializeApp({
    apiKey: "AIzaSyAeO8wHuh1S4t1RLJHnnFfLVfOOrqd6f_8",
    authDomain: "photoflashcards-a24b5.firebaseapp.com",
    databaseURL: "https://photoflashcards-a24b5.firebaseio.com",
    projectId: "photoflashcards-a24b5",
    storageBucket: "photoflashcards-a24b5.appspot.com",
    messagingSenderId: "670628811855"
});

export const db = app.database();
export const namesRef = db.ref('names');

