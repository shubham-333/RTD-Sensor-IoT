import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getDatabase,onValue, ref } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9NGtzPedcAlRCXYthnWZBVqlzL4PPbCc",
  authDomain: "rtd-sensor-data.firebaseapp.com",
  databaseURL: "https://rtd-sensor-data-default-rtdb.firebaseio.com",
  projectId: "rtd-sensor-data",
  storageBucket: "rtd-sensor-data.appspot.com",
  messagingSenderId: "174330178737",
  appId: "1:174330178737:web:9edd687be5662114a34690"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getDatabase(firebaseApp);

const reference = ref(db, 'RTD/');

function getDarkColor() {
  var color = '#';
  for (var i = 0; i < 6; i++) {
      color += Math.floor(Math.random() * 10);
  }
  return color;
}

onValue(reference, (snapshot) => {
    console.log(snapshot.val());
    document.querySelector("#AnalogValue .card span").innerText= snapshot.val().AnalogValue;
    document.querySelector("#VoltageValue .card span").innerText= snapshot.val().VoltageValue;
    document.querySelector("#Temperature .card span").innerText= snapshot.val().Temperature;

    document.querySelectorAll('.card span').forEach((element) => {
        element.style.color = getDarkColor();
    });
});