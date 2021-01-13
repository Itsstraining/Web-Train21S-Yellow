let inta = prompt("Nhập số nguyên a: ")
let intb = prompt("nhap so nguyên b: ")

if(inta.length> intb.length){
    intb = addZero(inta.length, intb)
}
else{
    inta = addZero(intb.length, inta)
}

function addZero(length, numInt) {
    let length1 = length - numInt.length
    let zero = ''
    for (let i = 0; i < length1; i++) {
        zero = zero + '0'
    }
    return zero + numInt
}


function sum(a,b){
    let res = ''
    let n = a.length
    let nho = 0
    for (let i >=0; i =n; i --)
}
console.log(inta)
console.log(intb)
