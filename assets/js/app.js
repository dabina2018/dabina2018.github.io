//firebase scripts

const firebaseConfig = {
  apiKey: "AIzaSyCdVqLMM-LSmaqBSUC--X3jb8xC4QIpI50",
  authDomain: "contact-form-53050.firebaseapp.com",
  projectId: "contact-form-53050",
  storageBucket: "contact-form-53050.appspot.com",
  messagingSenderId: "839902421548",
  appId: "1:839902421548:web:2e6c36d5b85714004ce789",
  measurementId: "G-BY63JSYLK5"
};

//initialize firebase
firebase.initializeApp(firebaseConfig);

//reference your database
var contactFormDB = firebase.database().ref('contact-form-53050');

document.getElementById('contact-form-53050').addEventListener('submit-btn', submitForm);

function submitForm(e){
  e.preventDefault();

  var name = getElementVal('name');
  var email = getElementVal ('email');
  var message = getElementVal('message');

  saveMessages(name, email, message);

  console.log('Thank-you ' + name + ', someone will contact you soon.');
}

const saveMessages = (name, email, message) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    email: email,
    message: message
  });
}

const getElementVal = (id) => {
  return docuemnt.getElementById(id).value;
}

//Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Nav hamburgerburger selections
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

// scroll to top functionality
const scrollUp = document.querySelector("#scroll-up");

//Select nav links
const navLink = document.querySelectorAll(".nav-link");

//Hamburger menu function
burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});

// Close hamburger menu when a link is clicked
navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

// scroll to top functionality
scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

/* form data */
/*
//Listen for form submit
document.getElementById('contact').addEventListener('submit', submitForm);
function submitForm(e){
  e.preventDefault();

  //Get user input values
  var name = getInputVal('name');
  var name = getInputVal('email');
  var name = getInputVal('message');  

  saveMessage(name, email, message);

  console.log('Thank-you' + name + 'someone will contact you soon')
  
}

//Function to grab form values
function getInputVal(id){
  return document.getElementById(id).value;
}

//save message to firebase
function saveMessage(name, email, message){
  var newMessageRef = messagesRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    message: message
  });

}