

$(document).ready(function(){
  let thermostat = new Thermostat();

  (function(){
    if(thermostat.PowerSavingMode == true){
      document.getElementById('powerSaver').style.color = '#FD2026';
      document.getElementById('generalInfo').innerHTML = ' On'
    }
  })();

  (()=> {
    let apiKey = 'bba53355256cc5e80941f166b19aa970';
    let basePath = 'https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=';
    let city = 'London'
    fetch(`${basePath}${city}&units=metric&appid=${apiKey}`)
    .then(response => {
      if(response.ok){
        return response.json();
      }
      throw new Error('Request Failed');
    },networkError => networkError.message)
    .then(response => {
      let country = response.sys['country'];
      let city = response.name;
      let weather = response.weather[0]['description'];
      let currentTemperature = response.main['temp'];

      document.getElementById('country').innerHTML = country;
      document.getElementById('cityName').innerHTML = city;
      document.getElementById('wetherDescription').innerText = weather;
      document.getElementById('temperature').innerText = `${currentTemperature}℃`;
    })
  })();

  $('#currentTemperature').html(`${thermostat.temp}℃`);

  $('#increase').on('click',()=>{
    thermostat.increment()
    $('#currentTemperature').html(`${thermostat.temp}℃`);
    if(thermostat.currentUsage() == 'high-usage'){
      document.getElementById('currentUsage').innerHTML = thermostat.currentUsage();
    };
    if(thermostat.PowerSavingMode == true && thermostat.temp >= thermostat.maxTemperature){
      let message = 'Maximum temperature for Power Save mode is 25℃'
      document.getElementById('show-message').innerHTML = message;
    }
  });


  $('#decrease').on('click',()=>{
    thermostat.decrement()
    $('#currentTemperature').html(`${thermostat.temp}℃`);
    if(thermostat.currentUsage() == 'low-usage'){
      document.getElementById('currentUsage').innerHTML = thermostat.currentUsage();
    };
    if(thermostat.temp <= 10){
      document.getElementById('show-message').innerHTML = 'Minimum temperature is 10℃';
    }
  });

  $('#powerSaver').on('click',()=>{
    thermostat.switchPowerSaver()
    if(thermostat.PowerSavingMode == false){
      document.getElementById('powerSaver').style.color ='#2F2F2F';
      document.getElementById('generalInfo').innerHTML = ' Off'
      document.getElementById('show-message').innerHTML = 'Maximum temperature is now 32℃'
    }
    if(thermostat.PowerSavingMode == true){
      document.getElementById('powerSaver').style.color ='#FD2026';
      document.getElementById('generalInfo').innerHTML = ' On'
      document.getElementById('show-message').innerHTML = 'Maximum temperature is now 25℃'
    }
    $('#currentTemperature').html(`${thermostat.temp}℃`);
  });

  $('#currentUsage').html(thermostat.currentUsage())


  $('#reset').on('click',()=>{
    thermostat.reset()
    $('#currentTemperature').html(`${thermostat.temp}℃`);
  });

  $('#select-city').submit((event)=>{
    event.preventDefault();
    let apiKey ='bba53355256cc5e80941f166b19aa970';
    let userInput = $('#userQuery').val();
    let herokuappApiCall = 'https://cors-anywhere.herokuapp.com/';
    fetch(`${herokuappApiCall}http://api.openweathermap.org/data/2.5/weather?q=${userInput}&units=metric&appid=${apiKey}`)
    .then((response)=>{
      if(response.ok){
        return(response.json())
      }
      throw new Error('Request failed')
    }, networkError => networkError.message)
    .then(resjonResponse => {
      let country = resjonResponse.sys['country'];
      let city = resjonResponse.name;
      let weather = resjonResponse.weather[0]['description'];
      let currentTemperature = resjonResponse.main['temp'];

      document.getElementById('country').innerHTML = country;
      document.getElementById('cityName').innerHTML = city;
      document.getElementById('wetherDescription').innerText = weather;
      document.getElementById('temperature').innerText = `${currentTemperature}℃`;
    })
  });
});

