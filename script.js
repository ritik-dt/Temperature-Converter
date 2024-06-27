const temperatureInput = document.getElementById('temperature');
const scaleSelect = document.getElementById('scale');
const convertButton = document.getElementById('convert-button');
const convertedTemperature = document.getElementById('converted-temperature');

convertButton.addEventListener('click', () => {
  const temperature = parseFloat(temperatureInput.value);
  const scale = scaleSelect.value;

  let convertedTemp;

  if (scale === 'celsius') {
    convertedTemp = celsiusToFahrenheit(temperature);
  } else if (scale === 'fahrenheit') {
    convertedTemp = fahrenheitToCelsius(temperature);
  } else if (scale === 'kelvin') {
    if (scaleSelect.value === 'celsius') {
      convertedTemp = celsiusToKelvin(temperature);
    } else {
      convertedTemp = fahrenheitToKelvin(temperature);
    }
  }

  convertedTemperature.textContent = convertedTemp.toFixed(2);
});

function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}

function celsiusToKelvin(celsius) {
  return celsius + 273.15;
}

function fahrenheitToKelvin(fahrenheit) {
  return ((fahrenheit - 32) * 5/9) + 273.15;
}