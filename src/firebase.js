// apiKey: "AIzaSyDxu0YWvepkPK8wPPKbdj7qHOv60OVYAAM",
import firebase from 'firebase'; 

// https://room-env-mon-default-rtdb.firebaseio.com
const firebaseConfig = {
  apiKey: "AIzaSyDup9NYm4vQnWrE14gclBc0Y8xy1wkewBI",
  authDomain: "forest-fire-1673d.firebaseapp.com",
  databaseURL: "https://forest-fire-1673d-default-rtdb.firebaseio.com",
  projectId: "forest-fire-1673d",
  storageBucket: "forest-fire-1673d.appspot.com",
  messagingSenderId: "402852158635",
  appId: "1:402852158635:web:32091c7a0385ad5e81ebee"
};

const firebaseapp =  firebase.initializeApp(firebaseConfig);

export default firebaseapp;



/* const firebaseConfig = {
  authDomain: "testing-api-6758b.firebaseapp.com",
  databaseURL: "https://testing-api-6758b-default-rtdb.firebaseio.com",
  projectId: "testing-api-6758b",
  storageBucket: "testing-api-6758b.appspot.com",
  messagingSenderId: "702306414400",
  appId: "1:702306414400:web:640577585b04b70d44d4a5",
  measurementId: "G-HWTD5M6WRT"
}; */