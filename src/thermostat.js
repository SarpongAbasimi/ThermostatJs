function Thermostat(){
  this.temp = 20;
  this.minTemp = 10;
  this.PowerSavingMode = true;
  this.maxTemperature = 25;
}

Thermostat.prototype = {
  constructor:Thermostat,

  increment:function(){
  if(this.PowerSavingMode == true && this.temp >= this.maxTemperature){
    throw('Sorry maximum temperature reached')
  }
  try{
      return ++this.temp;
   }
   catch(err){
       this.temp = this.maxTemperature;
   }
  },

  decrement: function(){
    if(this.temp <= 10){
      throw('Sorry minimum temperature reached.');
    }
    try {
      return --this.temp;
    }
    catch(err){
      return this.temp = this.minTemp;
    }
  },

  switchPowerSaver: function(){
    let result = this.PowerSavingMode
    switch (result) {
        case true:
        this.maxTemperature = 32;
        return this.PowerSavingMode =false;
            break;
        default:
        this.maxTemperature = 25;
        return this.PowerSavingMode = true;
            break;
    }
  },
  reset: function(){
    return this.temp = 20;
  }
}

module.exports = Thermostat;

