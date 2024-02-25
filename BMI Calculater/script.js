let form = document.querySelector('form');
form.addEventListener('submit',(e) =>{
    e.preventDefault()
    let height = parseInt(document.getElementById('height').value);
    let weight = parseInt(document.getElementById('weight').value);
    let result = document.getElementById('result');
    if (height === '' || height<=5 || isNaN(height)){
        result.innerHTML = 'Enter a valid height';
    }
    else if(weight === '' || weight<=5 || isNaN(weight)){
        result.innerHTML = 'Enter a valid weight';
    }
    else{
        BMI = (weight / ((height * height) / 10000)).toFixed(2);
        if (BMI<='18.6'){
            result.innerHTML = BMI + ' Under Weight'
        }
        else if (BMI>'18.6' && BMI<='24.9'){
            result.innerHTML = BMI + ' Noraml Weight'
        }
        else{
            result.innerHTML = BMI + ' Over Weight'
        }
    }
});