function rotLeft(a, d) {
    var n = a.length;
    var rotArray = [];

    if(n < 1 || n > 100000) return -1;
    if(d < 1 || d > n) return -2;
    if(a.length < 1 || a.length > 1000000) return -3;

    for(let oldIndex = 0; oldIndex < n; oldIndex++) {
        let newIndex = (oldIndex + n - d) % n;
        rotArray[newIndex] = a[oldIndex];
    }
    return rotArray;
}

console.log(rotLeft([1, 2, 3, 4, 5, 6, 7], 2));

console.log('operando: ' + 4 % 5);