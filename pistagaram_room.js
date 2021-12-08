      var firebaseConfig = {
      apiKey: "AIzaSyBPOa8A-QTDmVEIicu_TR6QYg2KYtDqXLM",
      authDomain: "pistagram-4d0d0.firebaseapp.com",
      databaseURL: "https://pistagram-4d0d0-default-rtdb.firebaseio.com",
      projectId: "pistagram-4d0d0",
      storageBucket: "pistagram-4d0d0.appspot.com",
      messagingSenderId: "46199975268",
      appId: "1:46199975268:web:7c0a1fa78e6b5ee6fade71"
    };
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";


