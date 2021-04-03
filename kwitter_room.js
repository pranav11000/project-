
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyB7LnMS6p0_bmIOy7A4nYnynATgx_ra2yM",
      authDomain: "kwitter-website-ab5f9.firebaseapp.com",
      projectId: "kwitter-website-ab5f9",
      storageBucket: "kwitter-website-ab5f9.appspot.com",
      messagingSenderId: "120653367694",
      appId: "1:120653367694:web:a44f85ca029b31c5aebcdf",
      measurementId: "G-P1YMEGV09E"
    };
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
function logout()
      //End code
      });});}
getData();
