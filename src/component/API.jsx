import React from 'react'

export const fetchWeather = async (city)=>{
  const cityURL = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&countryCode=IN`;
  const cityRes = await fetch(cityURL);
  const corData = await cityRes.json();
// console.log(corData);

if(!corData.results || corData.results.length===0){
	throw new Error("city not fount");
}

const {latitude,longitude} = corData.results[0];
// console.log(latitude);
// console.log(longitude);

const URL =  `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m,weather_code,cloud_cover&daily=temperature_2m_min,temperature_2m_max,sunrise,sunset&timezone=Asia/Kolkata&forecast_days=1`

const weatherRes = await fetch(URL);
const weatherData = await weatherRes.json();

	return weatherData;

}


// https://geocoding-api.open-meteo.com/v1/search?name=dehli&count=1&countryCode=IN

// https://api.open-meteo.com/v1/forecast?latitude=28.6139&longitude=77.2090&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m,weather_code,cloud_cover&daily=temperature_2m_min,temperature_2m_max,sunrise,sunset&timezone=Asia/Kolkata&forecast_days=1

