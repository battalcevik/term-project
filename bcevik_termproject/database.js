// Import the functions from the SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";


// Create Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBpRdnBYFe-5PFzFiYNL2EB1COlcLT26mI",
    authDomain: "termproject-1d38b.firebaseapp.com",
    databaseURL: "https://termproject-1d38b-default-rtdb.firebaseio.com",
    projectId: "termproject-1d38b",
    storageBucket: "termproject-1d38b.appspot.com",
    messagingSenderId: "673298503343",
    appId: "1:673298503343:web:964aa5ca45b613f077265a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getDatabase();

var enterEmailID = document.querySelector("#enterEmailID");
var enterFirstName = document.querySelector("#enterFirstName");
var enterLastName = document.querySelector("#enterLastName");

var insertBtn = document.querySelector("#insert");

function sanitizeEmail(email) {
    // Replace dots with underscores
    return email.replace(/\./g, "_");
}

function InsertData() {
    set(ref(db, "People/" + sanitizeEmail(enterEmailID.value)), {
        FirstName: enterFirstName.value,
        LastName: enterLastName.value,
        enterEmailID: enterEmailID.value,
    })
    .then(() => {
        alert("Subscribed Successfully");
    })
    .catch((error) => {
        alert(error);
    });
}

insertBtn.addEventListener('click', InsertData);
