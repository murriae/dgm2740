const d=new Date();
const todayDayNumber = d.getDay();

const weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

const apiURL  = "//api.openweathermap.org/data/2.5/forecast?id=5879400&appid=583f4d9c72b13f531cf6a2b4e843ab69&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    console.log(weatherInfo);

    document.getElementById('place').innerHTML = weatherInfo.city.name;
    let mylist = weatherInfo.list;
        let forecastDayNumber = todayDayNumber;
        for (i=0; i< mylist.length; i++) {
          var time = mylist[i].dt_txt;
          if(time.includes('21:00:00')) {
          forecastDayNumber +=1;
          if (forecastDayNumber === 7) {
            forecastDayNumber = 0;
          }
          let theDayName = document.createElement("span");
          theDayName.textContent = weekday[forecastDayNumber];

          let theTemp = document.createElement("p");
          theTemp.textContent = weatherInfo.list[i].main.temp + "\xB0";

          let iconcode = weatherInfo.list[i].weather[0].icon;
          let iconPath = "//openweathermap.org/img/wn/" +
          iconcode +
          ".png";
          let theIcon= document.createElement("img");
          theIcon.src=iconPath;

          let theDay = document.createElement("div");
          theDay.appendChild(theDayName);
          theDay.appendChild(theTemp);
          theDay.appendChild(theIcon);

          document.getElementById('forecast').appendChild(theDay);
          }//end if
        }//end for
  });
