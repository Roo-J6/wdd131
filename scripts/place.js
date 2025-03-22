document.addEventListener("DOMContentLoaded", () => {
    // Footer - Display Last Modified Date
    const lastModifiedElement = document.getElementById("lastModified");
    if (lastModifiedElement) {
        const lastModifiedDate = new Date(document.lastModified);
        lastModifiedElement.textContent = lastModifiedDate.toLocaleString();
    }

    // Wind Chill Calculation
    const temperatureElement = document.getElementById("temperature");
    const windSpeedElement = document.getElementById("wind-speed");
    const windChillElement = document.getElementById("wind-chill");

    if (temperatureElement && windSpeedElement && windChillElement) {
        const temperature = parseFloat(temperatureElement.textContent);
        const windSpeed = parseFloat(windSpeedElement.textContent);

        function calculateWindChill(temp, speed) {
            // Wind chill formula (metric system)
            return (
                13.12 +
                0.6215 * temp -
                11.37 * Math.pow(speed, 0.16) +
                0.3965 * temp * Math.pow(speed, 0.16)
            ).toFixed(2);
        }

        if (!isNaN(temperature) && !isNaN(windSpeed)) {
            if (temperature <= 10 && windSpeed > 4.8) {
                windChillElement.textContent = calculateWindChill(temperature, windSpeed) + "°C";
            } else {
                windChillElement.textContent = "N/A";
            }
        } else {
            windChillElement.textContent = "Error";
        }
    }
});


