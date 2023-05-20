        function scrapeWeather() {
            // Make a request to the website and fetch the HTML content
            fetch("https://weather.com/weather/today/l/2fab9fe6303dd0ba4f5b4a57def4e43900f788412a71460f4b73a447f13c7ca9")
                .then(response => response.text())
                .then(html => {
                    // Create a temporary element to hold the HTML content
                    const tempElement = document.createElement("div");
                    tempElement.innerHTML = html;

                    // Find the elements that contain the weather data
                    const cityElement = tempElement.querySelector("h1.CurrentConditions--location--1YWj_");
                    const temperatureElement = tempElement.querySelector("span.CurrentConditions--tempValue--MHmYY");
                    const weatherDescriptionElement = tempElement.querySelector("div.CurrentConditions--phraseValue--mZC_p");

                    // Extract the weather data
                    const city = cityElement.textContent.trim();
                    const temperature = temperatureElement.textContent.trim();
                    const weatherDescription = weatherDescriptionElement.textContent.trim();

                    // Update the HTML elements with the scraped data
                    document.getElementById("city").textContent = city;
                    document.getElementById("temperature").textContent = temperature;
                    document.getElementById("weather-description").textContent = weatherDescription;
                })
                .catch(error => {
                    console.log("An error occurred:", error);
                });
        }