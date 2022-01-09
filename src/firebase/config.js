import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCfVqMOuvx3SuDk0TkT2sRwN7cvwskEhGw',
  authDomain: 'cookingninjasite-e1df0.firebaseapp.com',
  projectId: 'cookingninjasite-e1df0',
  storageBucket: 'cookingninjasite-e1df0.appspot.com',
  messagingSenderId: '443191837535',
  appId: '1:443191837535:web:c7efd34bb250ae561cecea',
}

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()

export { projectFirestore }
