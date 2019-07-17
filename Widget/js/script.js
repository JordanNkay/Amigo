const appKey = "f24f40b1c24505685fce3b8acd0fcffc";

function onLoad(){
	var searchInput = document.getElementById('search-txt');
	var cityName = document.getElementById('city-name');
	var icon = document.getElementById('icon');
	var temperature = document.getElementById('temperature-div');
	var humidity = document.getElementById('humidity-div');

	searchInput.addEventListener('keyup', enterPressed);

	function enterPressed(event) {
	  if (event.key === "Enter") {
	    findWeatherDetails();
	  }
	}

	function findWeatherDetails() {
	  if (searchInput.value === "") {
	  
	  }else {
	    let searchLink = "https://api.openweathermap.org/data/2.5/weather?q=" + searchInput.value + "&appid="+appKey;
	   httpRequestAsync(searchLink, theResponse);
	  }
	 }

	function theResponse(response) {
	  let jsonObject = JSON.parse(response);
	  cityName.innerHTML = jsonObject.name;
	  icon.src = "http://openweathermap.org/img/w/" + jsonObject.weather[0].icon + ".png";
	  temperature.innerHTML = parseInt(jsonObject.main.temp - 273) + "°";
	  humidity.innerHTML = jsonObject.main.humidity + "%";
	}

	function httpRequestAsync(url, callback)
	{
	  console.log("hello");
	    var httpRequest = new XMLHttpRequest();
	    httpRequest.onreadystatechange = () => { 
	        if (httpRequest.readyState == 4 && httpRequest.status == 200)
	            callback(httpRequest.responseText);
	    }
	    httpRequest.open("GET", url, true); // true for asynchronous 
	    httpRequest.send();
	}
}
