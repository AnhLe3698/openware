function sum(a,b) {
  return a+b;
}

function storePassword(source, password) {
  window.localStorage.setItem(source, password);
}

function getPasswords(source) {
  window.localStorage.getItem(source);
}

let btnSubmit = document.getElementsByClassName("wrapper")[0];

let form = document.getElementById("password");

let innerText = document.getElementById("password");

let grab = document.getElementsByClassName("wrapper2");

const btn = btnSubmit.addEventListener("click", function() {
  const formdata = new FormData(form)
  console.log(formdata);
})
// grab.addEventListener("click", function() {
  
  
// })