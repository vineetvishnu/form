
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjuQMVgILR5fIbpKf1eku8fDTZtig3kig",
  authDomain: "registrationform-bfc7a.firebaseapp.com",
  databaseURL: "https://registrationform-bfc7a-default-rtdb.firebaseio.com",
  projectId: "registrationform-bfc7a",
  storageBucket: "registrationform-bfc7a.appspot.com",
  messagingSenderId: "398792668704",
  appId: "1:398792668704:web:0b4844e75bfaabea1eee45",
  measurementId: "G-9TMP45N2BR"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Refernece contactInfo collections
let contactInfo = firebase.database().ref("infos");

// Listen for a submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //   Get input Values
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let message = document.querySelector(".message").value;
  console.log(name, email, message);

  saveContactInfo(name, email, message);

  document.querySelector(".contact-form").reset();
}

// Save infos to Firebase
function saveContactInfo(name, email, message) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    User_name: name,
    User_email: email,
    Message: message,
  });
}
