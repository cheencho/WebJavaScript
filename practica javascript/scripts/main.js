// Codigo cambio de imagen

let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/davinci.png') {
    myImage.setAttribute ('src','images/davinci2.png');
  } else {
    myImage.setAttribute ('src','images/davinci.png');
  }
}

// Codigo de mensaje personalizado de bienvenida

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Por favor introduzca tu nombre.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = ' Bienvenido a Leonardo Davinci, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = ' Bienvenido a Leonardo Davinci, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}