var personDiv = document.getElementsByClassName("personDivStyle")
var input = document.getElementById('input')

function addBorder() {
  id = [this.id]; 
  id = id.toString();
  id = id.charAt(9); //extract id number from string
  personDiv[this.id].classList.toggle("dotted");
  input.focus();
  typeBio (id);
}

function typeBio (idNum) {
  idNum = "bio" + idNum;
  console.log("", idNum);
  var bio = document.getElementById(idNum);
  input.addEventListener("keyup", function () {
    bio.innerHTML = input.value;
  })  
}

for (i = 0; i < personDiv.length; i++) {
  personDiv[i].addEventListener('click', addBorder);
}


