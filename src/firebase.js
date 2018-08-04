import firebase from 'firebase';


const app = firebase.initializeApp({
    apiKey: "AIzaSyAeO8wHuh1S4t1RLJHnnFfLVfOOrqd6f_8",
    authDomain: "photoflashcards-a24b5.firebaseapp.com",
    databaseURL: "https://photoflashcards-a24b5.firebaseio.com",
    projectId: "photoflashcards-a24b5",
    storageBucket: "photoflashcards-a24b5.appspot.com",
    messagingSenderId: "670628811855"
});

firebase.auth().onAuthStateChanged(function(user){
    
    
    // Triggers when the auth state change for instance when the user signs-in or signs-out.
  if (user) { // User is signed in!
      
      //alert("you signed in");
//    // Get the signed-in user's profile pic and name.
//    var profilePicUrl = getProfilePicUrl();
//    var userName = getUserName();
//
//    // Set the user's profile pic and name.
//    userPicElement.style.backgroundImage = 'url(' + profilePicUrl + ')';
//    userNameElement.textContent = userName;
//
//    // Show user's profile and sign-out button.
//    userNameElement.removeAttribute('hidden');
//    userPicElement.removeAttribute('hidden');
//    signOutButtonElement.removeAttribute('hidden');
//
//    // Hide sign-in button.
//    signInButtonElement.setAttribute('hidden', 'true');
//
//    // We save the Firebase Messaging Device token and enable notifications.
//    saveMessagingDeviceToken();
  }
      
//  } else { // User is signed out!
//    // Hide user's profile and sign-out button.
//    userNameElement.setAttribute('hidden', 'true');
//    userPicElement.setAttribute('hidden', 'true');
//    signOutButtonElement.setAttribute('hidden', 'true');
//
//    // Show sign-in button.
//    signInButtonElement.removeAttribute('hidden');
//  }

    
})



export const db = app.database();

export const namesRef = db.ref('names');

export const messagesRef = db.ref('messages');


