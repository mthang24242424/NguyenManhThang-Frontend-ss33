const weatherData = {
    "Hà Nội": {
      temperature: 25,
      humidity: 70,
      windSpeed: 5,
      description: "Có mây",
      icon: "☁️"
    },
    "Hồ Chí Minh": {
      temperature: 32,
      humidity: 75,
      windSpeed: 7,
      description: "Nắng",
      icon: "☀️"
    },
    "Đà Nẵng": {
      temperature: 28,
      humidity: 82,
      windSpeed: 12,
      description: "Mưa rào",
      icon: "🌧️"
    }
  };
  
const cityInput = document.getElementById("cityInput");
const searchButton = document.getElementById("searchButton");
const weatherDisplay = document.getElementById("weatherDisplay");
searchButton.addEventListener("click", () => {
    const city = cityInput.value.trim(); // Lấy giá trị thành phố
    if (weatherData[city]) {
    const weather = weatherData[city];
    weatherDisplay.classList.add("active");
    weatherDisplay.innerHTML = `
        <div class="weather-header">${city}</div>
        <div class="weather-content">
        <span class="icon">${weather.icon}</span>
        <span class="temperature">${weather.temperature}°C</span>
        <div class="weather-details">
            <p><strong>Mô tả:</strong> ${weather.description}</p>
            <p><strong>Độ ẩm:</strong> ${weather.humidity}%</p>
            <p><strong>Tốc độ gió:</strong> ${weather.windSpeed} km/h</p>
        </div>
        </div>
    `;
    } else {
        weatherDisplay.classList.add("active");
        weatherDisplay.innerHTML = `<p>Không tìm thấy dữ liệu thời tiết cho thành phố "${city}".</p>`;
      }
    });