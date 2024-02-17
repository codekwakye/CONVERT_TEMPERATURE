function convertTemperature(temperature, unit) {
    if (unit === 'Celsius') {
         // Convert Celsius to Fahrenheit
        return (temperature * 9/5) + 32;
    } else if (unit === 'Fahrenheit') {
        // Convert Fahrenheit to Celsius
        return (temp - 32) * 5/9; 
    } else {
        return "Invalid unit.";
    }
}

