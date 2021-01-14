let arr = ["không", "một", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám", "chín",];
let int = prompt('nhập một số');
let chuc = int[0]
let donvi = int[1]



console.log(chuc)
console.log(donvi)
let res = ''
if (chuc > 0) {
    if (chuc != 1) {
        if (donvi == 0) {
            console.log(arr[chuc] + " mươi ")
        }
        else if (donvi == 1) {
            console.log(arr[chuc] + " mươi mốt")
        }
        else if (donvi == 4) {
            console.log(arr[chuc] + " mươi tư")
        }
        else if (donvi == 5) {
            console.log(arr[chuc] + " mươi lăm")
        }
        else {
            console.log(arr[chuc] + " mươi " + arr[donvi])
        }
    }
    if (chuc == 1) {
        if (donvi == 0) {
            console.log(" mười ")
        }
        else if (donvi == 5) {
            console.log(" mười lăm")
        }
        else {
            console.log(" mười " + arr[donvi])
        }

    }

    }
    
else {
    console.log(arr[donvi])
}
