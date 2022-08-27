import React, { useState, useEffect } from 'react';
import WeatherContext from './WeatherContext';

interface Props {
  children: Object;
}
interface Country {
  capital: string;
  flag: string;
  population: Number;
  latlng: Number[];
}
interface Weather {
  temp: Number;
  humidity: Number;
  windSpeed: Number;
  icon: string;
}
let WeatherState = ({ children }: Props) => {
  let [inputValue, setInputValue] = useState<string>('');
  let [country, setCountry] = useState({});
  let [weather, setWeather] = useState({});
  let [getCountryName, setGetCountryName] = useState<string>('');
  let [showWeather, setShowWeather] = useState<boolean>(false);

  let inputState = (text: string) => {
    setInputValue(text);
  };

  let WeatherState = () => {
    setShowWeather(true);
  };
  let CountryData = async () => {
    try {
      let res = await fetch(
        `https://restcountries.com/v3.1/name/${getCountryName}`
      );
      let data = await res.json();
      let { capital, flag, population, latlng } = data[0];

      let countryDetails: Country = {
        capital,
        flag,
        population,
        latlng,
      };
      setCountry(countryDetails);
    } catch (error) {
      console.log(error);
    }
  };
  let WeatherData = async () => {
    let url: string = `https://api.openweathermap.org/data/2.5/weather?q=${getCountryName}&units=metric&appid=13659bf5b055ea2b8b3c5582c273d248`;
    try {
      let res = await fetch(url);

      let data = await res.json();
      let { temp, humidity } = data.main;
      let { speed } = data.wind;
      let { icon } = data.weather[0];

      let weatherDetails: Weather = {
        temp,
        humidity,
        windSpeed: speed,
        icon,
      };
      setWeather(weatherDetails);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    CountryData();
    WeatherData();
  }, [getCountryName, showWeather]);
  return (
    <WeatherContext.Provider
      value={{
        inputValue,
        setInputValue,
        country,
        weather,
        inputState,
        setGetCountryName,
        getCountryName,
        showWeather,
        WeatherState,
      }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherState;
