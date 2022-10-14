import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyA-NDwonoQg3tmDjRVKHFgvM-BxGlE0bR4",
    authDomain: "pwa-cloud-messagng.firebaseapp.com",
    projectId: "pwa-cloud-messagng",
    storageBucket: "pwa-cloud-messagng.appspot.com",
    messagingSenderId: "814407619535",
    appId: "1:814407619535:web:1bdd643a120ca1f8d378ba"
};

function requestPermission() {
  console.log("Requesting permission...");
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      console.log("Notification permission granted.");
      const app = initializeApp(firebaseConfig);

      const messaging = getMessaging(app);
      getToken(messaging, {
        vapidKey:
          "BDhTiv-stJFTYx35WIg43NajSAyJQL9oNAPrAA-RJZBXJP8n5JQlI8qFUNhgCAISrxhuNuiD4nH9RZBymv3HeNk",
      }).then((currentToken) => {
        if (currentToken) {
          console.log("currentToken: ", currentToken);
        } else {
          console.log("Can not get token");
        }
      }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);
        
      })
    } else {
      console.log("Do not have permission!");
    }
  });
}

requestPermission();
