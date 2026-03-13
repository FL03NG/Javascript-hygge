const url = 'https://www.7timer.info/bin/civil.php?lon=12.1&lat=55.6&ac=0&unit=metric&output=json&tzshift=0';

axios.get(url)
  .then(({ data }) => displayWeather(data))
  .catch(err => {
      console.error('Error fetching weather data', err);
      document.getElementById('weather').textContent = 'Error loading data.';
  });

function displayWeather(data) {
    const container = document.getElementById('weather');
    const series = data.dataseries || [];
    if (series.length === 0) {
        container.textContent = 'No data available.';
        return;
    }

    let html = '<ul>';
    series.slice(0, 5).forEach(day => {
        const tp = day.timepoint;             // det tidspunkt i timer fra init
        const temp = day.temp2m;              // her er selve temperaturen
        const weather = day.weather || 'unknown';
        html += `<li>Timepoint: ${tp}, Temp: ${temp}°C, Weather: ${weather}</li>`;
    });
    html += '</ul>';
    container.innerHTML = html;
}