function epol() {
    let arr1 = document.getElementById('firstArray').value.trim().replace(/\s+/g, ' ').split(' ');
    let arr2 = document.getElementById('secondArray').value.trim().replace(/\s+/g, ' ').split(' ');
    if (arr1.length != 9 ){
        let err = document.getElementById('error').innerHTML = 'Первый массив содержит' + ' ' + arr1.length + ' ' + 'элементов. Элементов должно быть 9!';
        document.getElementById('error').style.color = 'Red';
    }
        else{
        let complet = document.getElementById("error").innerHTML = 'Массив содержит '+ arr1.length +  ' элементов!';
        document.getElementById("error").style.color = 'Green';
        let newArray = arr1.map(function (value) {
            if (arr2.indexOf(value) == -1)
                value = 0;
            else
                value = 1;
            return value;
        });
    document.getElementById('result').innerHTML = "Получившийся массив: " + newArray.join('');
        }
}

document.getElementById('execute').addEventListener('click', epol);