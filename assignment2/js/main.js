let userName = document.getElementById("username");
let email = document.getElementById("email");
let pass = document.getElementById("pass");
let submit = document.getElementById("submit");
let out = document.getElementById("out");

submit.onclick = function() {
  if (
    userName.value[0].includes("@") ||
    userName.value[0].includes("<") ||
    userName.value[0].includes(">")
  ) {
    alert("the First Leater In User Name Must Be NOt Include '<' '>' '@'");
  } else if (userName.value[0] !== userName.value[0].toUpperCase()) {
    alert("the First Leater In User Name Must Be Upercasse");}
  // } else {
  //   document.write("Valid User Name");
  // }
  validEmail();
};


function validEmail() {
  let regex = /^[a-zA-Z0-9. _-]+@[a-zA-Z0-9. -]+\. [a-zA-Z]{2,4}$/;
  if (email.value === regex) {
    alert("Email is InValid '@'");
  } else if (email.value[0] == email.value[0].indexOf("@")) {
    alert("The First Leter Of Email Must Not '@'");
  } else {
    window.location.href = 'homepage.html';
  }
};

