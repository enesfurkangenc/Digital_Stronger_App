import * as firebase from "firebase";

const fireBaseConfig = {
  apiKey: "AIzaSyBWeIWPBoLEn6tmJAfFeYCX2myAEDvaYdQ",
  authDomain: "strongapp-82bd9.firebaseapp.com",
  databaseURL: "https://strongapp-82bd9.firebaseio.com",
  projectId: "strongapp-82bd9",
  storageBucket: "strongapp-82bd9.appspot.com",
  messagingSenderId: "896373124813",
  appId: "1:896373124813:web:856587cfd0ab7e4b"
};

if (!firebase.apps.length) {
  firebase.initializeApp(fireBaseConfig);
}

const LoginModule = ({ email, password }) => {
  firebase.auth.signInWithEmailAndPassword(email, password).then(res => {
    console.log(res)
  }).catch(error => {
    console.log(error, 'eror')
  })
}

export {
  // eslint-disable-next-line import/prefer-default-export
  LoginModule
}