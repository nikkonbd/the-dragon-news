// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDjvAdVCSnX43lwyuWGY5xyWlRVvzLb7xw",
    authDomain: "the-news-dragon-7dcc6.firebaseapp.com",
    projectId: "the-news-dragon-7dcc6",
    storageBucket: "the-news-dragon-7dcc6.appspot.com",
    messagingSenderId: "511813278488",
    appId: "1:511813278488:web:6905a60712a4470d4d1c6d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;