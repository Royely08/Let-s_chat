var firebaseConfig = {
    apiKey: "AIzaSyBK_IoPrKdrVHfggX8NEm0dzhxto6LccE0",
    authDomain: "let-s-chat-21e4f.firebaseapp.com",
    projectId: "let-s-chat-21e4f",
    storageBucket: "let-s-chat-21e4f.appspot.com",
    messagingSenderId: "226808197515",
    appId: "1:226808197515:web:aec8033ef3f89ddf5aff8e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !";

function addRoom(){
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose : "Adding Room Name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name : " + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML += row;
    //End code
    });});}
getData();
function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location = "index.html";
}