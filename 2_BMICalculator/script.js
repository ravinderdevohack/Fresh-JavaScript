const form = document.querySelector('form')

console.log(form)

form.addEventListener('submit', function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')
    const resultValue = document.getElementById('resultValue')

    console.log(resultValue)
    console.log(`${height} and ${weight}`)

    const bmi = (weight / ((height*height) / 10000)).toFixed(2)
    console.log(bmi)
    result.innerHTML = `<span>${bmi}</span>`;

    if (bmi < 18.6) { resultValue.textContent = "Under Weight"; }
    if (18.6 > bmi < 24.9) { resultValue.textContent = "Normal"; }
    if (24.9 < bmi) { resultValue.textContent = "Overweight"; }
    
    console.log(resultValue)

    form.reset();

})