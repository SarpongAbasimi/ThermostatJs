<h1 align='center'>
Makers Thermostat Challenge Week 5.
</h1>

<h4 align='center'>
Thermostat: Business Logic.
</h4>

```
- Thermostat starts at 20 degrees.
- You can increase the temperature with an up function.
- You can decrease the temperature with a down function.
- The minimum temperature is 10 degrees.
- If power saving mode is on, the maximum temperature is 25 degrees.
- If power saving mode is off, the maximum temperature is 32 degrees.
- Power saving mode is on by default.
- You can reset the temperature to 20 with a reset function.
- You can ask about the thermostat's current energy usage: < 18 is low-usage, < 25 is medium-usage, anything else is high-usage.
```

<h4 align='center'>
To Use App.
</h4>

-  ``Fork and clone`` this repo.
-  Cd into ``ThermostatJs``.
-  To run test type ``npm test``.
-  To feature test, cd into ``src``.
-  Copy code.
-  ``open chrome dev tools`` and paste code in there.
-  Create a new Thermostat object.


<img width="581" alt="Screen Shot 2019-05-02 at 21 28 23" src="https://user-images.githubusercontent.com/37377831/57104858-4f1a9000-6d21-11e9-9781-306435b96a6b.png">

- Increment the thermostat.

<img width="573" alt="Screen Shot 2019-05-02 at 21 30 52" src="https://user-images.githubusercontent.com/37377831/57105009-a7519200-6d21-11e9-95da-a862bce25e98.png">

- When the power saving mode is on, the maximum temperature is set to 25.

<img width="572" alt="Screen Shot 2019-05-02 at 21 32 37" src="https://user-images.githubusercontent.com/37377831/57106065-660eb180-6d24-11e9-8d5a-82c650e1f643.png">

- when the power saving mode is off, the maximum temperature is set to 32.

<img width="561" alt="Screen Shot 2019-05-02 at 21 54 06" src="https://user-images.githubusercontent.com/37377831/57106339-0238b880-6d25-11e9-8661-7775801f658c.png">

<img width="323" alt="Screen Shot 2019-05-02 at 21 55 03" src="https://user-images.githubusercontent.com/37377831/57106365-0f55a780-6d25-11e9-9099-fa2f1b8db1c1.png">

- Minimum temperature for the thermostat is set to 10.

<img width="308" alt="Screen Shot 2019-05-02 at 21 57 08" src="https://user-images.githubusercontent.com/37377831/57106472-5e034180-6d25-11e9-89a5-706e65a18232.png">

- It is able to tell its current usage mode.
- when temperature is  less than 18 the usage mode is ``low usage ``.

<img width="213" alt="Screen Shot 2019-05-02 at 21 59 18" src="https://user-images.githubusercontent.com/37377831/57106592-b63a4380-6d25-11e9-89e7-217d3056d73a.png">

- When current usage mode is between 18 and 25 the usage mode is `` medium usage``.

<img width="215" alt="Screen Shot 2019-05-02 at 22 02 55" src="https://user-images.githubusercontent.com/37377831/57106732-103b0900-6d26-11e9-8b62-33eabfc317c7.png">

- when current usage mode is aboove 25, the usage mode is ``high-usage``.

<img width="208" alt="Screen Shot 2019-05-02 at 22 05 38" src="https://user-images.githubusercontent.com/37377831/57106890-758efa00-6d26-11e9-8c32-c6743b3eab0f.png">


<h4 align='center'>
Next Step Thermostat Interface.
</h4>

```
This is how the application currently looks, 
I am really proud of it but at the same time, 
I am sure it could be improved to make it better.
The application is not currently finished, I have one more user story to complete,which I will do in the future.

One of the cool things I learned was using ES6 ``fetch`` to request data from an expternal api.
```
- Desktop view.

<img width="1277" alt="Screen Shot 2019-05-04 at 12 58 39" src="https://user-images.githubusercontent.com/37377831/57179269-c2341b80-6e73-11e9-81e8-7352f7f2f457.png">

- Mobile view.

<img width="438" alt="Screen Shot 2019-05-04 at 12 58 58" src="https://user-images.githubusercontent.com/37377831/57179271-d710af00-6e73-11e9-8933-5b191ede4478.png">

```
When the application is started, it automatically fetches the current weather
data from open weather app. This is done by using IFFE.
```
<img width="617" alt="Screen Shot 2019-05-04 at 13 56 50" src="https://user-images.githubusercontent.com/37377831/57179332-be54c900-6e74-11e9-81ef-851019176fd4.png">

```
This is the reason why when the application starts, it shows the current
temperature and weather conditions in London.
```

- Users can also ask the application for the weather conditions for any city.

<img width="438" alt="Screen Shot 2019-05-04 at 12 59 25" src="https://user-images.githubusercontent.com/37377831/57179563-05dc5480-6e77-11e9-99bf-b8f142e178e2.png">


<h4 align='center'>
  Problems Faced.
</h4>

```
I decided to use npm to manage the dependencies for the application.
I realised that whenever the application was run,
chrome was giving me this error.
```

<img width="583" alt="Screen Shot 2019-05-04 at 13 16 04" src="https://user-images.githubusercontent.com/37377831/57179729-af701580-6e78-11e9-9f80-493f1c463e22.png">

```
After conducting a research, I read on blogs that node can't be run in the browser.
This meant that I had to comment out the module.exports
in order to get my application to work.
```
<img width="299" alt="Screen Shot 2019-05-04 at 13 14 48" src="https://user-images.githubusercontent.com/37377831/57179773-4e950d00-6e79-11e9-9fb4-bc03cc3a7a14.png">

```
So just in case you decide to run the application and it does not respond to
the buttons on the UI , check to see if the the modules are being expoerted or commented out. 
I am hopping to fix this issue in the near future.
```

<h4 align='center'>
Tech Stack Used.
</h4>

- JavaScript(ES5 & ES6).
- Jasmine.
- HTML 5.
- CSS3.
- Bootstrap 4.
- jquery.
- Express.js
- Node.js

<h4 align='center'>
What Did I Learn in week 5?
</h4>

- Domain modelling in JavaScript.
- Encapsulation.
- Ajax request cycle.
- SRP.
- Testing using Jasmine.
- ES6 Fetch.
- IIFE in JavaScript.

<h4 align='center'>
Update On The Application.
</h4>

> Today(12/06/2019), I worked on deploying the application on Heroku. To do this, I had to use Expressjs.

- This meant that I had to make changes to application structure.

<img width="958" alt="Screen Shot 2019-05-12 at 20 51 44" src="https://user-images.githubusercontent.com/37377831/57587134-dcb36800-74f7-11e9-86a6-03f11a5f9299.png">

> What I learnt from deploying the app on Heroku.

```
I learnt that the openweather API only serves through http and not https. This meant that the app was not getting anything back when it was making request for to openweather.

To solve this issue, I had to use other services provided by heruko to
make the request for me. [Click here](https://cors-anywhere.herokuapp.com) to find out more.
```
- I had to put ``https://cors-anywhere.herokuapp.com/'`` in front of my API key.