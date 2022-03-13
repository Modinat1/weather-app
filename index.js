let weather = {
    apiKey: "0aeaa90ed4f63384deba29813613aa3b",
    fetchWeather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey)
        .then(respone => respone.json())
        .then(data => this.displayWeather(data))
    },
    displayWeather: function(data){
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".weather-location").innerText = name;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".humidity").innerText = humidity + "%";
        document.querySelector(".weather-speed").innerText = speed + "km/hr";
        document.querySelector(".weather").classList.remove("loading");
        // document.body.style.backgroundImage = "url('https://source.unsplash.com/?" + name + "') no-repeat center/cover "
    },
    search: function(){
          this.fetchWeather(document.querySelector(".search-input").value);
    }

}
document.querySelector(".btn").addEventListener("click", () =>{
    weather.search()
})
document.querySelector(".search-input").addEventListener("keyup", (e) => {
    if(e.key == "Enter"){
        weather.search()
    }
})