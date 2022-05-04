// what is the path to the JSON file?
const apiURL =
"//api.openweathermap.org/data/2.5/forecast?zip=19019,us&appid=583f4d9c72b13f531cf6a2b4e843ab69";
//};

//Go fetch it and then wait for a response.
fetch(apiURL)
.then((response) => response.json())
.then((data) => {
console.log(data);

async function getWeatherText(url) {
  let weatherObject = await fetch(url);
  let weatherText = await weatherObject.text();
  parseWeather(weatherText);
}
let getDayOfWeek = function (dayNum) {
  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";
  return (weekday[dayNum]);
}
let parseWeather = function(weatherText) {
  let weatherJSON = JSON.parse(weatherText);
  console.log(weatherJSON);
  let dailyForecast = weatherJSON.daily;
  for (x = 0; x < dailyForecast.length; x++) {
    let day = dailyForecast[x];
    let today = new Date().getDay() + x;
    if (today > 6) {
      today = today - 7;
    }
    let dayOfWeek = getDayOfWeek(today);
    let description = day.weather[0].description;
    let icon = day.weather[0].icon;
    //let sunrise = timestampToTime(day.sunrise);
    //let sunset = timestampToTime(day.sunset);
    //let highTemp = kToF(day.temp.max);
    //let lowTemp = kToF(day.temp.min);
    let humidity = day.humidity;
    let windSpeed = day.wind_speed;
    let windGust = day.wind_gust;
    displayWeatherDay(
      dayOfWeek,
      description,
      icon,
      //sunrise,
      //sunset,
      //highTemp,
      //lowTemp,
      humidity,
      windSpeed,
      windGust
    );
  }
}
let displayWeatherDay = function (
  dayOfWeek,
  description,
  icon,
  sunrise,
  sunset,
  highTemp,
  lowTemp,
  humidity,
  windSpeed,
  windGust
) {
  let out =
    "<div class='weatherDay'><h2>" + dayOfWeek + "</h2>";
  out += "<h3>" + description + "</h3>";
  out += "<p>Sunrise: " + sunrise + "</p>";
  out += "<p>Sunset: " + sunset + "</p>";
  out += "<img src='//openweathermap.org/img/wn/" +
    icon +
    ".png'/>";
  //out += "<p>High: " + highTemp + "F</p>";
  //out += "<p>Low: " + lowTemp + "F</p>";
  //out += "<p>Humidity: " + humidity + "%</p>";
  /*out +=
    "<p>Wind Speed: " +
    Math.round(windSpeed) +
    " with gusts up to " +
    Math.round(windGust) +
    "</p>*/
    "</div>";

  document.getElementById("forecast").innerHTML += out;
  document.getElementById('forecast').appendChild(dayOfWeek);
}

}); //end of "then" fat arrow function