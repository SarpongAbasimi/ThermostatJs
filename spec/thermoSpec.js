
var Thermostat = require('../src/thermostat');

describe('Thermostat', function(){
  var thermostat;

  beforeEach(function(){
      thermostat = new Thermostat()
  });

  describe('it defualt at 20', function(){
    it('default', function(){
      expect(thermostat.temp).toEqual(20);
    })
  });

  describe('increment', function(){
    it('increments when clicked', function(){
      expect(thermostat.temp).toBe(20);
      thermostat.increment()
      expect(thermostat.temp).toBe(21);
      thermostat.increment()
      expect(thermostat.temp).toBe(22);
    });

    it('should throw error if max temperature reached', function(){
      for(let i = 1; i < 6; i++){
        thermostat.increment();
      }
      expect(function(){ thermostat.increment()}).toThrow('Sorry maximum temperature reached');
    });
  });

  describe('decrement', function(){
    it('increments when clicked', function(){
      expect(thermostat.temp).toBe(20);
      thermostat.decrement()
      expect(thermostat.temp).toBe(19);
      thermostat.decrement()
      expect(thermostat.temp).toBe(18);
    });

    it('It throws an error when minTemp reached', function(){
      for(let i = 1; i < 11 ; i++){
         thermostat.decrement()
      }
      expect(function(){ thermostat.decrement() }).toThrow('Sorry minimum temperature reached.');
    });
  })

  describe('PowerSavingMode', function(){
    it('should be true by default', function(){
      expect(thermostat.PowerSavingMode).toBe(true);
    });

    it('when on', function(){
      expect(thermostat.maxTemperature).toBe(25)
    });
  });


  describe('switchPowerSaver', function(){
    it('turns power saving mode on or off', function(){
     thermostat.switchPowerSaver()
     expect(thermostat.PowerSavingMode).toBe(false);
    });

    it('turns power saving mode on or off', function(){
      thermostat.switchPowerSaver()
      for(let i = 1; i < 13; i++){
        thermostat.increment();
      }
      expect(function(){thermostat.increment()}).toThrow('Sorry power saving mode on');
    });
  });

  describe('reset', function(){
    it('reset temperature to 20', function(){
        thermostat.increment()
        thermostat.reset()
        expect(thermostat.temp).toBe(20)
    });
  })

});