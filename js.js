function epol()
{
    let arr1 = document.getElementById('firstArray').value.split(' ');
    let arr2 = document.getElementById('secondArray').value.split(' ');
    let newArray = arr1.map(function(value) {
        if (arr2.indexOf(value) == -1)
            value = 0;
        else
            value = 1;
        return value;
    });
    document.getElementById('result').innerHTML = newArray.join('');
}
document.getElementById('execute').addEventListener('click', epol);