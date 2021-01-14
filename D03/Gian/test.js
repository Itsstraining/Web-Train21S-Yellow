let int = prompt("nhap so thu 1")
let int1 = prompt("nhap so thu 2")
if (int.length > int1.length) {
    int1 = addZero(int.length, int1)
}
else{
     int = addZero(int1.length,int)
}

function addZero(n, int) {
    let n1 = n - int.length
    let zero = ''
    for (let i = 0; i < n1; i++) {
        zero = zero + '0'
    }
    return zero + int
}

console.log(int)
console.log(int1)

