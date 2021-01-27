import React from 'react';
import firebase from 'firebase/app'
import 'firebase/firestore'

function Firebase(){
  return(
    <div></div>
  )
}
var firebaseConfig = {
    apiKey: "AIzaSyDYze6HxIcbZ6kEmzbUi9CevTxfWsQ-Vr4",
    authDomain: "austin-keep.firebaseapp.com",
    databaseURL: "https://austin-keep.firebaseio.com",
    projectId: "austin-keep",
    storageBucket: "austin-keep.appspot.com",
    messagingSenderId: "829239451770",
    appId: "1:829239451770:web:28bfd232dfc4620e899bc3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const db=firebase.firestore()
  db.settings({timestampsInSnapshots:true})

  export default Firebase