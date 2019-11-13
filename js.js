function epol() {
    let arr1 = document.getElementById('firstArray').value.trim().replace(/\s+/g, ' ').split(' ');
    let arr2 = document.getElementById('secondArray').value.trim().replace(/\s+/g, ' ').split(' ');
    if (arr1.length != 9) {
        let err1 = document.getElementById('error1').innerHTML = 'Первый массив содержит' + ' ' + arr1.length + ' ' + 'элементов. Элементов должно быть 9!';
        document.getElementById('error1').style.color = 'Red';
        document.getElementById('result').style.color = 'Red';
    } else if (arr2.length > 9) {
        let err2 = document.getElementById('error2').innerHTML = 'Второй массив содержит' + ' ' + arr2.length + ' ' + 'элементов. Элементов должно быть от 0 до 9!';
        document.getElementById('error2').style.color = 'Red';
        document.getElementById('result').style.color = 'Red';
    } else {
        let complet1 = document.getElementById("error1").innerHTML = 'Массив содержит ' + arr1.length + ' элементов!';
        let complet2 = document.getElementById('error2').innerHTML = 'Массив содержит ' + arr2.length + ' элементов!';
        document.getElementById("error1").style.color = 'Green';
        document.getElementById("error2").style.color = 'Green';
        document.getElementById('result').style.color = 'Green';
        let newArray = arr1.map(function(value) {
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