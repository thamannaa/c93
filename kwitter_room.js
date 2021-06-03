
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBnVQpdSs58I2DNZQCeyqMe3zpXIhaXlXk",
      authDomain: "kwitter-1-d4393.firebaseapp.com",
      projectId: "kwitter-1-d4393",
      storageBucket: "kwitter-1-d4393.appspot.com",
      messagingSenderId: "376229182498",
      appId: "1:376229182498:web:a6efd279b05423cec45e7b"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem9=("user_name");
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
