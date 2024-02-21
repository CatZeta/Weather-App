
document.addEventListener("DOMContentLoaded", function () {
    checkWeather();
});



function saveGuestName(event) {
    event.preventDefault(); 
    const guestName = document.getElementById("guestName").value;
    localStorage.setItem("guestName", guestName);
    window.location.href = "welcome.html";
}



async function checkWeather() {

    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=lisbon&appid=dd5db10c8316ccff65dbf224a3222c9c&units=metric";
    const weatherIcon = document.getElementById("weatherIcon");

    const guestName = localStorage.getItem("guestName");

    if (guestName) {

        const date = new Date();


        document.querySelector("#welcomeGuest").innerHTML = `Welcome, ${guestName}!`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        document.getElementById("tempIcon").innerHTML = Math.round(data.main.temp) + "ºC<br>" + data.name;
        document.getElementById("humidityIcon").innerHTML = data.main.humidity;

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "resources/cloudy.png";
        }  else if (date >= data.sys.sunset && data.weather[0].main == "Clear" ) {
            weatherIcon.src = "resources/clear_night.png";
        }  else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "resources/rain.png";
        } else {
            weatherIcon.src = "resources/clear_day.png";
        }
    }
}







































/*
function saveGuestName(event) {

    event.preventDefault(); 
    const guestName = document.getElementById("guestName").value;

    localStorage.setItem("guestName", guestName);

 
   window.location.href = "welcome.html";

}




   //Set to Lisbon by default(its only meant for local weather)
   const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=lisbon&appid=dd5db10c8316ccff65dbf224a3222c9c&units=metric";

   const weatherIcon = document.querySelector(".weather-icon");
   
   async function checkWeather(){
    const guestName = localStorage.getItem("guestName");
 
     //const guestName = document.getElementById("guestName").value;
  
     if(guestName) {
         
         document.querySelector(".w").innerHTML = `Welcome, ${guestName}!`;
  
     
     const response = await fetch(apiUrl);
     var data = await response.json();
 
 
     document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "ºC<br>" + data.name;
     document.querySelector(".humidity").innerHTML = data.main.humidity;
 
     if(data.weather[0].main == "Clouds"){
         weatherIcon.src = "resources/cloudy.png";
     }
 
     else if(data.weather[0].main == "Rain"){
         weatherIcon.src = "resources/rain.png";
     }
 
     else if(data.weather[0].main == "Clear" ||  "Sun"){
         weatherIcon.src = "resources/sun.png";
     } else {
        weatherIcon.src = "resources/night.jpg";
 } 

}
 
 }

 checkWeather();
 */