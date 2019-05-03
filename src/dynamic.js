//var Thermostat = require('../src/thermostat');

$(document).ready(function(){
  let thermostat = new Thermostat();
  (function(){
    if(thermostat.PowerSavingMode == true){
      document.getElementById('powerSaver').style.color = '#FD2026';
      document.getElementById('generalInfo').innerHTML = ' On'
    }
  })();


  $('#currentTemperature').html(thermostat.temp);

  $('#increase').on('click',()=>{
    thermostat.increment()
    $('#currentTemperature').html(thermostat.temp);
    if(thermostat.currentUsage() == 'high-usage'){
      document.getElementById('currentUsage').innerHTML = thermostat.currentUsage();
    };
  });


  $('#decrease').on('click',()=>{
    thermostat.decrement()
    $('#currentTemperature').html(thermostat.temp);
    if(thermostat.currentUsage() == 'low-usage'){
      document.getElementById('currentUsage').innerHTML = thermostat.currentUsage();
    };
  });

  $('#powerSaver').on('click',()=>{
    thermostat.switchPowerSaver()
    if(thermostat.PowerSavingMode == false){
      document.getElementById('powerSaver').style.color ='#2F2F2F';
      document.getElementById('generalInfo').innerHTML = ' Off'
    }
    if(thermostat.PowerSavingMode == true){
      document.getElementById('powerSaver').style.color ='#FD2026';
      document.getElementById('generalInfo').innerHTML = ' On'
    }
    $('#currentTemperature').html(thermostat.temp);
  });

  $('#currentUsage').html(thermostat.currentUsage())


  $('#reset').on('click',()=>{
    thermostat.reset()
    $('#currentTemperature').html(thermostat.temp);
  });
  $('#select-city').submit((event)=>{
    event.preventDefault();
    let apiKey ='bba53355256cc5e80941f166b19aa970';
    let userInput = $('#userQuery').val();
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${apiKey}`)
    .then((response)=>{
      if(response.ok){
        return(response.json())
      }
      throw new Error('Request failed')
    }, networkError => newtworkError.message)
    .then(resjonResponse => {
      console.log(resjonResponse)
    })
  });
});

