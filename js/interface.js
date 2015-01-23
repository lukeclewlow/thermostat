var thermostat = new Thermostat();

  var changeTemp = function() { 
    $('#temperature').text(thermostat.temperature);
    $('h2, #temperature').attr('class', thermostat.tempDisplay());
    $('h1, .colorbar').attr('id', thermostat.tempDisplay());
  }

$(document).ready(function() {
  changeTemp();

  $('.temperature-up').on('click', function() {
    thermostat.upButton();
    changeTemp();
  });

  $('.temperature-down').on('click', function() {
    thermostat.downButton();
    changeTemp();
  });

  $('.reset').on('click', function() {
    thermostat.resetButton();
    changeTemp();
  });

  $('.PSM-on').on('click', function() {
    thermostat.switchPowerSaveModeOn();
    changeTemp();
  });

  $('.PSM-off').on('click', function() {
    thermostat.switchPowerSaveModeOff();
    changeTemp();
  });

});
