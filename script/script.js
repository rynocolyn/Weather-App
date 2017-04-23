
function refresh(){ // This function runs after page load

// Get user GPS location
var UserLocation={};
if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(success,error);
}
// Alert user if location is not supported in browser
else {
alert('Geolocation is not supported');
}
// Alert user if location could not be established
function error() {
alert("Your Location cound not be found");
}
// Once GPS location is succesfull
function success(position) {
      var UserLocationlat = Math.round(position.coords.latitude * Math.pow( 10, 6 ) ) / Math.pow(10 ,6 );
      var UserLocationlng = Math.round(position.coords.longitude * Math.pow( 10, 6 ) ) / Math.pow(10 ,6 );;
      // DEBUG to test Lon and Lat
      // document.getElementById("weather").innerHTML=UserLocationlat;
      // document.getElementById("weather2").innerHTML=UserLocationlng;
      go (UserLocationlat, UserLocationlng)

}     
// Query to OpenWeather API using Lon and Lat from success function
function go(UserLocationlat, UserLocationlng){
    $.getJSON( "http://api.openweathermap.org/data/2.5/weather?lat=" + UserLocationlat + "&lon=" + UserLocationlng + "&APPID=f352ec6da200322d4edd5bcbabd6d756", function( data ) {
      console.log(data);
      // Populate div with weather query data
       $("#weather").html(data.name);
       $("#weather2").html(parseInt(data.main.temp_max) - 273 + "&deg;C");
       $("#weather3").html((data.wind.speed) + " Km");
    });
  }
}
