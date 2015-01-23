var Thermostat = function() {
  this.temperature = 20;
  this.minTemp = 10;
  this.powerSaveMode = true;
  this.maxTemp = 25;
};

Thermostat.prototype.increaseTemperature = function(changeTempBy) {
  if(this.temperature + changeTempBy <= this.maxTemp) {
    this.temperature += changeTempBy}
  else {this.temperature = this.maxTemp}
};

Thermostat.prototype.decreaseTemperature = function(changeTempBy) {
    if(this.temperature - changeTempBy > this.minTemp) {
    this.temperature -= changeTempBy}
    else {this.temperature = this.minTemp}
  };

Thermostat.prototype.switchPowerSaveModeOff = function() {
    this.powerSaveMode = false;
    this.maxTemp = 32;
  };

Thermostat.prototype.switchPowerSaveModeOn = function() {
  this.powerSaveMode = true;
  this.maxTemp = 25;
    if(this.temperature > 25) {
      this.temperature = this.maxTemp
    }
};

Thermostat.prototype.resetButton = function() {
  this.temperature = 20;
};

Thermostat.prototype.upButton = function() {
  this.increaseTemperature(1)
};

Thermostat.prototype.downButton = function() {
  this.decreaseTemperature(1)
};

Thermostat.prototype.tempDisplay = function() {
  if(this.temperature <  18){
    return "green"
  }
  else if(this.temperature >= 18 && this.temperature < 25){
    return "yellow"
  }
  else{
    return "red"
  };

};
