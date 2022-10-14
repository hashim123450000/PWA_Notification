import firebase from 'firebase'



const config= {
    apiKey: "AIzaSyA-NDwonoQg3tmDjRVKHFgvM-BxGlE0bR4",
    authDomain: "pwa-cloud-messagng.firebaseapp.com",
    projectId: "pwa-cloud-messagng",
    storageBucket: "pwa-cloud-messagng.appspot.com",
    messagingSenderId: "814407619535",
    appId: "1:814407619535:web:1bdd643a120ca1f8d378ba"
}


firebase.intializeApp(config)

export default firebase