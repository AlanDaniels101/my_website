$(document).on('ready page:load', function () {
});

function bsod(){
  document.getElementById('header').style.visibility = "hidden";
  document.getElementById('begin-button').style.visibility = "hidden";
  document.getElementById('BSOD').style.visibility = "visible";
  setTimeout(recover, 5000)
}

function recover(){
  debugger;
  document.getElementById('BSOD').style.visibility = "hidden";
  document.getElementById('one').style.visibility = "visible";
  document.getElementById('two').style.visibility = "visible";
  document.getElementById('three').style.visibility = "visible";
  document.getElementById('four').style.visibility = "visible";
}

function toggle(toggleElement, toggleTriangle){
  if (toggleElement.style.display == 'none'){
    toggleElement.style.display = 'inline';
  }
  else {
    toggleElement.style.display = 'none';
  }
  if (toggleTriangle.innerHTML == String.fromCharCode(9660)){
    toggleTriangle.innerHTML = '&#9650';
  }
  else {
    toggleTriangle.innerHTML = '&#9660';
  }
}

function toggle1(){
  var toggleElement = document.getElementById('one-body');
  var toggleTriangle = document.getElementById('toggle-triangle-one');
  toggle(toggleElement, toggleTriangle);
}

function toggle2(){
  var toggleElement = document.getElementById('two-body');
  var toggleTriangle = document.getElementById('toggle-triangle-two');
  toggle(toggleElement, toggleTriangle);
}

function toggle3(){
  var toggleElement = document.getElementById('three-body');
  var toggleTriangle = document.getElementById('toggle-triangle-three');
  toggle(toggleElement, toggleTriangle);
}

function toggle4(){
  var toggleElement = document.getElementById('four-body');
  var toggleTriangle = document.getElementById('toggle-triangle-four');
  toggle(toggleElement, toggleTriangle);
}