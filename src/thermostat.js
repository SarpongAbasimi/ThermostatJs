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

  if(this.PowerSavingMode == false && this.temp >= 32){
    throw('Sorry maximum temperature is 32 degrees')
  }

  try{
    return ++this.temp;
   }
   catch(err){
    this.temp = this.maxTemperature;
    this.temp = 32;
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
        this.temp = 25;
        this.maxTemperature = 25;
        return this.PowerSavingMode = true;
          break;
    }
  },

  reset: function(){
    return this.temp = 20;
  },

  currentUsage: function(){
    let currentTemperature = this.temp
    switch (true ) {
      case currentTemperature < 18:
        return('low-usage');
          break;
      case currentTemperature < 25:
        return('medium-usage');
      default:
        return('high-usage');
          break;
    }
  }

}

module.exports = Thermostat;

