const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  const remarks = document.querySelector('#remarks');

  results.innerHTML = ''; // Clear previous results
  remarks.innerHTML = ''; // Clear previous remarks

  if (height === '' || height <= 0 || isNaN(height)) {
    results.innerHTML = '⚠️ Please enter a valid height.';
  } else if (weight === '' || weight <= 0 || isNaN(weight)) {
    results.innerHTML = '⚠️ Please enter a valid weight.';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `Your BMI is <span>${bmi}</span>`;

    let remarkText = '';
    let emoji = '';
    let quote = '';

    if (bmi < 18.6) {
      remarkText = 'You are Underweight!';
      emoji = '😟';
      quote = '“A healthy outside starts from the inside.” - Robert Urich';
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      remarkText = 'Your weight is Normal!';
      emoji = '😊';
      quote = '“To keep the body in good health is a duty… otherwise we shall not be able to keep our mind strong and clear.” - Buddha';
    } else {
      remarkText = 'You are Overweight!';
      emoji = '😟';
      quote = '“The first wealth is health.” - Ralph Waldo Emerson';
    }

    remarks.innerHTML = `${emoji} ${remarkText}`;
    const quoteElement = document.createElement('p');
    quoteElement.innerHTML = quote;
    quoteElement.style.fontStyle = 'italic';
    quoteElement.style.marginTop = '10px';

    results.appendChild(remarks); // Append remarks to results
    results.appendChild(quoteElement); // Append quote to results
  }
});
