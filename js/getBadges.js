const WEATHER_ELEMENT = document.getElementById("weather_data");
const TIME_ELEMENT = document.getElementById("time_data");
const DATE_ELEMENT = document.getElementById("date_data");

const handleApiUrl = (lat, long) =>
  `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current_weather=true`;

const getCurrentWeather = async () => {
  const dbGeo = await fetch("db/userGeo.json").then((res) => res.json());
  const apiData = await fetch(
    handleApiUrl(dbGeo.latitude, dbGeo.longitude)
  ).then((res) => res.json());

  const weatherTemperature = Math.round(apiData.current_weather.temperature);
  WEATHER_ELEMENT.textContent = `${weatherTemperature}°C`;
};

const getCurrentTime = () => {
  const date = new Date();
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  TIME_ELEMENT.textContent = `${hours}:${minutes}`;
};

const getCurrentDate = () => {
  const now = new Date();
  const capitalize = (str) => str && str[0].toUpperCase() + str.slice(1);
  const month = capitalize(now.toLocaleString("default", { month: "long" }));
  const day = now.getDate();

  DATE_ELEMENT.textContent = `${month} ${day}`;
};

getCurrentWeather();
getCurrentTime();
getCurrentDate();

setInterval(getCurrentTime, 5000);
