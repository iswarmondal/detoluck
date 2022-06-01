import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBvZi_Jt8rKoMXAQlU2zpFe7YB5HAezn7k",
  authDomain: "detoluck.firebaseapp.com",
  databaseURL: "https://detoluck-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "detoluck",
  storageBucket: "detoluck.appspot.com",
  messagingSenderId: "812073056235",
  appId: "1:812073056235:web:c71d81bd4e1b53d51f4bae",
  measurementId: "G-JCBYPYJ3YP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

// For admin login
export const actionCodeSettings = {
  url: "http://localhost:3000/admin",

  handleCodeInApp: true,
  iOS: {
    bundleId: "com.example.ios",
  },
  android: {
    packageName: "com.example.android",
    installApp: true,
    minimumVersion: "12",
  },
  dynamicLinkDomain: "detoluck.page.link",
};
