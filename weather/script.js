const apiKey = "bbd825fd81869fbfd16437fa91b4b9b7";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchbox = document.querySelector(".input");
const searchbtn = document.querySelector(".btn");
const icon = document.querySelector(".icon");
const eror = document.querySelector(".eror");
async function checkWeather(city) {
  const resoponse = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (resoponse.status == 404) {
    document.querySelector(".contain").style.height = "440px";
    document.querySelector(".eror").style.visibility = "visible";
    document.querySelector(".parent").style.visibility = "hidden";
    document.querySelector(".eror").style.animation = "animate 1s ease";
    document.querySelector(".p").style.animation = "animate 1s ease";
  } else {
    var data = await resoponse.json();

    console.log(data);

    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humid").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";

    if (data.weather[0].main == "Clouds") {
      icon.src = "clouds.png";
    } else if (data.weather[0].main == "rain") {
      icon.src = "rain.png";
    } else if (data.weather[0].main == "Mist") {
      icon.src = "mist.png";
    } else if (data.weather[0].main == "Drizzle") {
      icon.src = "drizzle.png";
    } else if (data.weather[0].main == "Snow") {
      icon.src = "snow.png";
    }
    document.querySelector(".contain").style.width = "370px";
    document.querySelector(".contain").style.height = "502px";
    document.querySelector(".eror").style.visibility = "hidden";
    document.querySelector(".temp").style.animation = "animate 1s ease ";
    document.querySelector(".foot").style.animation = "animate 1s ease ";
    document.querySelector(".icon").style.animation = "animate 1s ease ";
    document.querySelector(".city").style.animation = "animate 1s ease ";
    document.querySelector(".footer").style.animation = "animate 1s ease ";
    document.querySelector(".parent").style.visibility = "visible";
  }
}

searchbtn.addEventListener("click", () => {
  checkWeather(searchbox.value);
});
