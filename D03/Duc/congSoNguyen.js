let int1 = prompt("Nhập số nguyên 1: ")
let int2 = prompt("Nhập số nguyên 2: ")
let res
if (int1.length > int2.length) {
    int2 = addZero(int1.length, int2)
}
else {
    int1 = addZero(int2.length, int1)
}

function sum(a, b) {
    let res = ''
    let n = a.length
    let nho = 0//biến nhớ
    for (let i = n - 1; i >= 0; i--) {
        let temp = a[i] - - b[i] - - nho
        if (temp > 9) {
            nho = 1
            res = temp % 10 + res

        }
        else {
            nho = 0
            res = temp + res
        }

        if (i == 0 && temp > 9)
            res = 1 + res
    }
    return res

}
function addZero(length, numInt) {
    let length1 = length - numInt.length
    let zero = ''
    for (let i = 0; i < length1; i++) {
        zero = zero + '0'
    }
    return zero + numInt
}



console.log(int1)
console.log('+')
console.log(int2)
res = sum(int1, int2)
console.log(res)























//     //alert(cal(5, 5, 1))
//     alert(int1 - -int2)
function cal(a, b, i) {
    let funs = [
        (a, b) => a + b,
        (a, b) => a * b,

    ]

    return funs[i](a, b)
}