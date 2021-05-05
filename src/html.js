const firebaseConfig = {
  apiKey: 'AIzaSyD5N2kwdt9NZs456F_blFJ3lk5Luu20A78',
  authDomain: 'red-social-456cf.firebaseapp.com',
  projectId: 'red-social-456cf',
  storageBucket: 'red-social-456cf.appspot.com',
  messagingSenderId: '910680213666',
  appId: '1:910680213666:web:7fd4a61704386fad8baffb',
  measurementId: 'G-WNZHSJG29K',
};
firebase.initializeApp(firebaseConfig);// Initialize Firebase
let auth = firebase.auth();
let firestore = firebase.firestore();
// const provider = new firebase.auth.GoogleAuthProvider();
  
