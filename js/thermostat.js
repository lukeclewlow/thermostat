var Thermostat = function() {
  this.temperature = 20;
};

Thermostat.prototype.increaseTemperature = function(changeTempBy) {
  this.temperature += changeTempBy;
};

Thermostat.prototype.decreaseTemperature = function(changeTempBy) {
    if(this.temperature - changeTempBy > 10) {
    console.log(this.temperature -= changeTempBy)}
    else {console.log("error")}
  };


