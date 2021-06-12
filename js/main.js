var distanceForm = document.querySelector('.distance__form');
var distanceInput = document.querySelector('.distance__input');
var distanceBtn = document.querySelector('.distance__btn');

var manSpeedText = document.querySelector('.js__man');
var bicycleSpeedText = document.querySelector('.js__bicycle');
var carSpeedText = document.querySelector('.js__car');
var planeSpeedText = document.querySelector('.js__plane');

var manSpeed = 3.6;
var bicycleSpeed = 20.1;
var carSpeed = 70;
var planeSpeed = 800;


distanceForm.addEventListener('change', function () {
  var manHour = Number(distanceInput.value) / manSpeed;
  manSpeedText.textContent = (manHour).toFixed(1) + ' soat';

  var bicycleHour = Number(distanceInput.value) / bicycleSpeed;
  bicycleSpeedText.textContent = (bicycleHour).toFixed(1) + ' soat';

  var carHour = Number(distanceInput.value) / carSpeed;
  carSpeedText.textContent = (carHour).toFixed(1) + ' soat';

  var planeHour = Number(distanceInput.value) / planeSpeed;
  planeSpeedText.textContent = (planeHour).toFixed(1) + ' soat';

});