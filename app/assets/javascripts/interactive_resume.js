$(document).on('ready page:load', function () {
});

function bsod(){
  document.getElementById('header').style.visibility = "hidden";
  document.getElementById('begin-button').style.visibility = "hidden";
  document.getElementById('BSOD').style.visibility = "visible";
  setTimeout(recover, 5000)
}

function recover(){
  document.getElementById('BSOD').style.visibility = "hidden";
  document.getElementById('one').style.visibility = "visible";
  document.getElementById('two').style.visibility = "visible";
  document.getElementById('three').style.visibility = "visible";
  document.getElementById('four').style.visibility = "visible";
}