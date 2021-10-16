/*
 * @Description:
 * @Author: Kenzi
 * @Date: 2021-08-22 15:33:32
 * @LastEditTime: 2021-08-24 18:01:20
 * @LastEditors: Kenzi
 */

import firebase from "firebase";

import "firebase/auth";

// const fb = firebase.initializeApp({
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MASSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
// });

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyDGuK6QiJ8uXqBI2rneVsZZuQNcYWzuAbQ",
    authDomain: "tinder-clone-bbd7c.firebaseapp.com",
    projectId: "tinder-clone-bbd7c",
    storageBucket: "tinder-clone-bbd7c.appspot.com",
    messagingSenderId: "960288974948",
    appId: "1:960288974948:web:0ad52566aa99f29b1f1771",
    measurementId: "G-KS5JH0C5PF",
  });
} else {
  firebase.app(); // if already initialized, use that one
}

export const auth = firebase.auth();
