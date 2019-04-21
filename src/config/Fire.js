import firebase from 'firebase';
const config = {
  apiKey: "AIzaSyA-ZYtajNF__oZHETSNzq-4BQ7XJOjB9Ok",
  authDomain: "medicare-1d4c4.firebaseapp.com",
  databaseURL: "https://medicare-1d4c4.firebaseio.com",
  projectId: "medicare-1d4c4",
  storageBucket: "medicare-1d4c4.appspot.com",
  messagingSenderId: "206839565869"
};
const fire=firebase.initializeApp(config);
export default fire;