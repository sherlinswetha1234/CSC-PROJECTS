document.getElementById('bmi-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get input values
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert height to meters

    // Calculate BMI
    const bmi = weight / (height * height);

    // Determine BMI category
    let category = '';
    if (bmi < 18.5) {
        category = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Overweight';
    } else {
        category = 'Obesity';
    }

    // Display result
    document.getElementById('bmi-value').textContent = `Your BMI: ${bmi.toFixed(2)}`;
    document.getElementById('bmi-category').textContent = `Category: ${category}`;
});