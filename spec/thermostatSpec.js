describe ("Thermostat", function() {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });
    
  describe("by default", function() {

    it("starts at 20 degrees", function() {
      expect(thermostat.temperature).toEqual(20);
    });
  });

  describe("the temperature", function() {

    it("can increase", function() {
      thermostat.increaseTemperature(2);
      expect(thermostat.temperature).toEqual(22);
    });

    it("can decrease", function() {
      thermostat.decreaseTemperature(2);
      expect(thermostat.temperature).toEqual(18);
    });

    it("can be set to a minimum of 10", function() {
      thermostat.decreaseTemperature(1);
      expect(thermostat.temperature).toBeGreaterThan(9);
    });

    it("can not go above the maximum temperature", function() {
      thermostat.increaseTemperature(14);
      expect(thermostat.temperature).toEqual(thermostat.maxTemp);
    });

    it("can be reset to 20 by pressing reset button", function() { 
      thermostat.temperature = 21;
      thermostat.resetButton();
      expect(thermostat.temperature).toEqual(20);
    });

  });

  describe("power saving mode", function() {

    it("is switched on by default", function() {
      expect(thermostat.powerSaveMode).toBe(true);
     });

    it("can be switched off", function() {
      thermostat.switchPowerSaveModeOff();
      expect(thermostat.powerSaveMode).toBe(false);
    });

    it ("sets maximum temperature to 25 when switched on", function() {
      thermostat.switchPowerSaveModeOn();
      expect(thermostat.maxTemp).toEqual(25);
    });

    it("sets maximum temperature to 32 when switched off", function() {
      thermostat.switchPowerSaveModeOff();
      expect(thermostat.maxTemp).toEqual(32);
    });

  });

  describe ("using up and down buttons", function() {
    
    it("when the up button is pressed, the temperature increases by 1", function () {
      thermostat.upButton();
      expect(thermostat.temperature).toEqual(21);
    });

    it("when the down button is pressed, the temperature decreases by 1", function() {
      thermostat.downButton();
      expect(thermostat.temperature).toEqual(19);

    });
  });

  describe ("colors of the display using energy usage", function() {

    it("when energy usage is less than 18, display is green", function() {
      thermostat.temperature = 17;
      expect(thermostat.tempDisplay()).toEqual("green");    
    });

    it("when energy usage is less than 25, but more than or equal to 18, display is yellow", function() {
      thermostat.temperature = 19;
      expect(thermostat.tempDisplay()).toEqual("yellow");    
    });

        it("when energy usage is more than or equal to 25, display is red", function() {
      thermostat.temperature = 27;
      expect(thermostat.tempDisplay()).toEqual("red");    
    });

  });

// .... <18 = green.... <25 yellow... >=25 red. 

});

// DONE... Thermostat starts at 20 degrees DONE. 
// DONE... The minimum temperature is 10 degrees
// DONE... If power saving mode is on, the maximum temperature is 25 degrees
// DONE... If power saving mode is off, the maximum temperature is 32 degrees
// DONE... Power saving mode is on by default

// DONE... You can reset the temperature to 20 by hitting the reset button

// DONE... You can increase the temp with the up button
// DONE... You can decrease the temp with the down button 
// DONE... thermostat should color the display based on energy usage - < 18 is green, < 25 is yellow, otherwise red


