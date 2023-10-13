// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBykYgnUVyjtaefozyNOrZGwt4YRNQmKnI",
  authDomain: "monitor-cloud-69aba.firebaseapp.com",
  databaseURL: "https://monitor-cloud-69aba-default-rtdb.firebaseio.com",
  projectId: "monitor-cloud-69aba",
  storageBucket: "monitor-cloud-69aba.appspot.com",
  messagingSenderId: "110992051612",
  appId: "1:110992051612:web:7201ddc36bbe9a07284c59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

var email = document.getElementById("email");
var password = document.getElementById("password");
var login = document.getElementById("login");
var dangky = document.getElementById("signin");

dangky.addEventListener("click", (e) => {
  window.location.replace('../dang_ky/dangky.html');
});

login.addEventListener("click", (e) => {
  e.preventDefault();
  if(email.value == "" || password.value == "") {
    alert("Vui lòng nhập đầy đủ thông tin");
  }
  var obj = {
    email: email.value,
    password: password.value,
  };

  console.log(obj);

  signInWithEmailAndPassword(auth, obj.email, obj.password)
    .then(function (success) {
      var aaaa = success.user.uid;
      localStorage.setItem("uid", aaaa);
      console.log(aaaa);
      window.location.replace('../1_Monitor/1__Trangchu.html');
    })
    .catch(function (err) {
      alert("login error" + err);
    });

  console.log(obj);
});
