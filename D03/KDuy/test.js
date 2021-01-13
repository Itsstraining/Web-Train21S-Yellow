let int1 = prompt("Nhập số nguyên 1: ")
let int2 = prompt("Nhập số nguyên 2: ")

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

function sum(a, b){
    let res = ''
    let n = a.length
    let nho = 0
    for (let i >= 0; i < )
}

console.log(int1)
console.log(int2)


