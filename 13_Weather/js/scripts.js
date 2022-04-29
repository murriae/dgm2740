
const apiURL =
  "//api.openweathermap.org/data/2.5/forecast?zip=19019,us&appid=583f4d9c72b13f531cf6a2b4e843ab69&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    console.log(weatherInfo);
    document.getElementById("place").innerHTML = weatherInfo.city.name;
    //document.getElementById("townName").textContent = weatherInfo.city.name;
    //document.getElementById("currentTemp").innerHTML = weatherInfo.main.temp;
    //document.getElementById("windSpeed").innerHTML = weatherInfo.wind.speed;

    //const iconcode = weatherInfo.weather[0].icon;
    //console.log(iconcode);
    //const icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
    //console.log(icon_path);
    //document.getElementById("weather_icon").src = iconPath;
    //console.log(myweekday[3]);
    const d = new Date();
const todayDayNumber = d.getDay();
const myweekday = new Array(7);
myweekday[0] = "Sunday";
myweekday[1] = "Monday";
myweekday[2] = "Tuesday";
myweekday[3] = "Wednesday";
myweekday[4] = "Thursday";
myweekday[5] = "Friday";
myweekday[6] = "Saturday";
 //end of .then
    let mylist = weatherInfo.list;
    let forecastDayNumber = todayDayNumber;

    for (i = 0; i < mylist.length; i++) {

      var time = mylist[i].dt_txt;
      if (time.includes("21:00:00")) {
          
        forecastDayNumber += 1;
        if (forecastDayNumber === 7) {
          forecastDayNumber = 0;
        }
        let theDayName=document.createElement["span"];
        theDayName.textContent=myweekday[forecastDayNumber];
        console.log(">"+myweekday[forecastDayNumber]);

        let theTemp = document.createElement("p");
        theTemp.textContent=weatherInfo.list[i].main.temp+"\xB0";

        let iconcode = weatherInfo.list[i].weather[0].icon;
        let iconPath = "//openweathermap.org/img/w/" + iconcode + ".png";
        let theIcon = document.createElement("img");
        theIcon.src = iconPath;

        let theDay = document.createElement("div");
        theDay.appendChild(theDayName);
        theDay.appendChild(theTemp);
        theDay.appendChild(theIcon);

        document.getElementById("weatherforecast").appendChild(theDay);
      } //end if
    } //end for
}); 
