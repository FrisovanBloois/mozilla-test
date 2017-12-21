var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hallo Eindbaas!';

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/bowser.png') {
      myImage.setAttribute ('src','images/bowser-alt.gif');
    } else {
      myImage.setAttribute ('src','images/bowser.png');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Wat is je naam?');
  localStorage.setItem('name', myName);
  myHeading.textContent = myName + ' is een Eindbaas';
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}