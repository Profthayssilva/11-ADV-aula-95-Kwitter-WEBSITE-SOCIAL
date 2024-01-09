
//ADICIONE SEUS LINKS FIREBASE
var firebaseConfig = {
  apiKey: "AIzaSyBUsXs7U3-7fT9TTHW7ZWmPiGBCVHhCZBA",
  authDomain: "vamosconversarbyjus.firebaseapp.com",
  databaseURL: "https://vamosconversarbyjus-default-rtdb.firebaseio.com",
  projectId: "vamosconversarbyjus",
  storageBucket: "vamosconversarbyjus.appspot.com",
  messagingSenderId: "530435431219",
  appId: "1:530435431219:web:161d584418bb65d3ad3c46"
};



// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// pegamos o valor de localStorage, e o armazenamos dentro de uma variável
  userName = localStorage.getItem("userName");
// atualize o elemento HTMl que possui a id=’userName’, com
// “Bem-vindo(a) ” + userName + “!”. Sabemos como fazer isso, a partir da última aula.
document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";

    // Código para addRoom():

// Defina a função.

function addRoom()
{
//   Obtenha o nome da sala, a partir da input box, com a id da input box. E, armazene-o dentro de uma variável.
  roomName = document.getElementById("roomName").value;
  //  adicione esse nome de sala ao firebase
  firebase.database().ref("/").child(roomName).update({
    purpose : "adicionar nome de sala"
  });
  // armazene esse nome de sala no localStorage
    localStorage.setItem("roomName", roomName);
  // Redirecione-o para kwitterPage.html.
    window.location = "kwitterPage.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       roomNames = childKey;
       console.log("Nome da Sala - " + roomNames);
      row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("roomName", name);
    window.location = "kwitterPage.html";
}

function logout() {
localStorage.removeItem("userName");
localStorage.removeItem("roomName");
    window.location = "index.html";
}
