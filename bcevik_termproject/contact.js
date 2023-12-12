
// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDkwvN57ORBJGvP9zRL8nGM69veSdCMjJE",
    authDomain: "bcevik-termproject.firebaseapp.com",
    databaseURL: "https://bcevik-termproject-default-rtdb.firebaseio.com",
    projectId: "bcevik-termproject",
    storageBucket: "bcevik-termproject.appspot.com",
    messagingSenderId: "873862102015",
    appId: "1:873862102015:web:67e619d10f7c6720a6c5ca",
    measurementId: "G-RQBE5H8CSQ"
  };
  
  firebase.initializeApp(firebaseConfig);
  console.log("Firebase initialized successfully");
  
  
  new Vue({
    el: '#subscription-app',
    data: {
        subscriptionForm: {
            firstName: '',
            lastName: '',
            email: '',
        }
    },
    methods: {
        submitSubscriptionForm() {
          console.log("Submitting subscription form");
            // Save subscription data to Firebase
            const database = firebase.database();
            database.ref('subscriptions').push(this.subscriptionForm);
  
            // Show a pop-up message
            alert('Subscription successful! Thank you for subscribing.');
            // Reset the subscription form data
            this.subscriptionForm = {
                firstName: '',
                lastName: '',
                email: '',
            };
        }
    }
  });
  