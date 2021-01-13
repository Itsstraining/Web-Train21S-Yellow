let int = prompt("nhap int1")
let int1 = prompt("nhap int2")

if (int1.length > int2.length) {
    int2 = addZero(int1.length, int2)
}
else {
    int1 = addZero(int2.length, int1)
}

function addZero(length, numInt) {
    let length1 = length - numInt.length
    let zero = ''
    for (let i = 0; i < length1; i++) {
        zero = zero + '0'
    }
    return zero + numInt
}