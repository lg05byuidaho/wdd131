document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentyear').textContent = currentYear;

    const lastModified = new Date(document.lastModified);
    document.getElementById('lastModified').textContent = `Last Modified: ${lastModified.toDateString()}`;

    // Static values for temperature and wind speed
    const temperature = 25; // in Celsius
    const windSpeed = 10; // in km/h

    // Function to calculate wind chill
    function calculateWindChill(temp, wind) {
        return 13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16);
    }

    // Check conditions and display wind chill
    if (temperature <= 10 && windSpeed > 4.8) {
        const windChill = calculateWindChill(temperature, windSpeed).toFixed(2);
        document.getElementById('windchill').textContent = `${windChill} °C`;
    } else {
        document.getElementById('windchill').textContent = 'N/A';
    }
});
