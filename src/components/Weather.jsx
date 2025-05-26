import { Import, Search } from "lucide-react";
import wind from "../assets/Wind (2).png";
import React, { useEffect } from "react";
import cold from "../assets/HumIcon.png";
import { useState } from "react";
import { useRef } from "react";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(false);
  const inputRef = useRef();
  const search = async (city) => {
    try {
      if (city === "") {
        alert("input a city");
        return;
      }
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
        import.meta.env.VITE_API_KEY
      }`;
      const response = await fetch(url);
      const data = await response.json();
      setWeatherData({
        Humidity: data.main.humidity,
        wind: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        State: data.name,
        icon:
          "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png",
      });
      console.log(data);
    } catch (error) {
      alert(error);
    }
  };
  useEffect(() => {
    search("Ghana");
  }, []);
  return (
    <>
      <div className="w-full flex h-screen items-center justify-center ">
        <div className="p-6 rounded-2xl bg-gradient-to-r from-[#2f4680] to-[#500ae4] ">
          <form action="#" className="mt-5 flex gap-2">
            <input
              ref={inputRef}
              type="text"
              placeholder="Enter a city"
              className="px-5 bg-[#ebfffc] w-3xs outline-0 p-3  rounded-3xl text-[#626262]"
            />
            <button
              className="rounded-3xl outline-0 p-3 bg-[#ebfffc]"
              onClick={() => search(inputRef.current.value)}
            >
              <Search size={20} color="grey" />
            </button>
          </form>
          <figure>
            <img
              src={weatherData.icon}
              className="w-50 max-w-full m-auto mt-10 "
            />
          </figure>
          <figure className="text-white text-center">
            <p className=" font-bold text-5xl">{weatherData.temp}</p>
            <p className=" text-4xl">{weatherData.State}</p>
          </figure>
          <figure className=" flex text-white justify-between mt-8 text-center">
            <div className="flex flex-row  gap-2">
              <img src={wind} alt="wind" className="w-10" />
              <span>
                <p>{weatherData.wind}km/h</p>
                <p>Windspeed</p>
              </span>
            </div>
            <div className="flex flex-row gap-2 ">
              <img src={cold} alt="Humidity" className="w-10" />
              <span>
                <p>{weatherData.Humidity}%</p>
                <p>Humidity</p>
              </span>
            </div>
          </figure>
        </div>
      </div>
    </>
  );
};

export default Weather;
