function convert() {
    var celsius = document.getElementById("inputCelsius").value;
    var fahrenheit = (celsius * 9 / 5) + 32;
    document.getElementById("outputFahrenheit").innerHTML = fahrenheit;
  }
  