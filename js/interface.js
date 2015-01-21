var thermostat = new Thermostat();

$(document).ready(function() {

  $('#temperature').text(thermostat.temperature);

  $('.temperature-up').on('click', function() {
    thermostat.upButton();
    $('#temperature').text(thermostat.temperature); 
  });

  $('.temperature-down').on('click', function() {
    thermostat.downButton();
    $('#temperature').text(thermostat.temperature); 
  });

  $('.reset').on('click', function() {
    thermostat.resetButton();
    $('#temperature').text(thermostat.temperature);
  });

  $('.PSM-on').on('click', function() {
    thermostat.switchPowerSaveModeOn();
  });

  $('.PSM-off').on('click', function() {
    thermostat.switchPowerSaveModeOff();
  });

  $('#temperature').css({"color":"white"}); 
      // thermostat.tempDisplay();    
  // });

});