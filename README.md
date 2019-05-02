<h1 align='center'>
Makers Thermostat Challenge Week 5.
</h1>

<h4 align='center'>
To Use App
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
Thermostat: Business Logic.
</h4>

```
- Thermostat starts at 20 degrees
- You can increase the temperature with an up function
- You can decrease the temperature with a down function
- The minimum temperature is 10 degrees
- If power saving mode is on, the maximum temperature is 25 degrees
- If power saving mode is off, the maximum temperature is 32 degrees
- Power saving mode is on by default
- You can reset the temperature to 20 with a reset function
- You can ask about the thermostat's current energy usage: < 18 is low-usage, < 25 is medium-usage, anything else is high-usage.
```


