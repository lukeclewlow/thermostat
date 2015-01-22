var thermostat = new Thermostat();

$(document).ready(function() {

  $('#temperature').text(thermostat.temperature);

  $('.temperature-up').on('click', function() {
    thermostat.upButton();
    $('#temperature').text(thermostat.temperature);
    $('h2, #temperature').attr('class', thermostat.tempDisplay())
  });

  $('.temperature-down').on('click', function() {
    thermostat.downButton();
    $('#temperature').text(thermostat.temperature); 
    $('h2, #temperature').attr('class', thermostat.tempDisplay())
  });

  $('.reset').on('click', function() {
    thermostat.resetButton();
    $('#temperature').text(thermostat.temperature);
    $('h2, #temperature').attr('class', thermostat.tempDisplay())
  });

  $('.PSM-on').on('click', function() {
    thermostat.switchPowerSaveModeOn();
  });

  $('.PSM-off').on('click', function() {
    thermostat.switchPowerSaveModeOff();
  });

      // thermostat.tempDisplay();    
  // });

});
