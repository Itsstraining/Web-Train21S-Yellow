let soTien = prompt("Nhập số TIỀN cần chuyển thành chữ: ")
let arrHang = [' TỶ', ' TRIỆU', ' NGHÌN', '']
let arrChuSo = [' Không', ' Một', ' Hai', ' Ba', ' Bốn', ' Năm', ' Sáu', ' Bảy', ' Tám', ' Chín']
function doc3So(int) {
    let tram = int[0]
    let chuc = int[1]
    let donVi = int[2]

    if (tram == 0 && chuc == 0 && donVi == 0) {
        return ''
    }
    let res = arrChuSo[tram] + ' Trăm'

    if (chuc == 0) {
        if (donVi == 4) {
            res += ' Linh Tư'
        }
        else {
            res += ' Linh' + arrChuSo[donVi]
        }
    }
    else if (chuc == 1) {
        if (donVi == 0) {
            res += ' Mười'
        }
        else if (donVi == 5) {
            res += ' Mười Lăm'
        }
        else {
            res += ' Mười' + arrChuSo[donVi]
        }
    }
    else {//2---9
        if (donVi == 0) {
            res += arrChuSo[chuc] + ' Mươi'
        }
        else if (donVi == 1) {
            res += arrChuSo[chuc] + ' Mươi Mốt'
        }
        else if (donVi == 4) {
            res += arrChuSo[chuc] + ' Mươi Tư'
        }
        else if (donVi == 5) {
            res += arrChuSo[chuc] + ' Mươi Lăm'
        }
        else {
            res += arrChuSo[chuc] + ' Mươi' + arrChuSo[donVi]
        }
    }
    return res
}
function doc3SoDau(int) {
    let tram = int[0]
    let chuc = int[1]
    let donVi = int[2]
    let res = ''
    if (tram == 0 && chuc == 0 && donVi == 0) {
        return ''
    }
    if (tram != 0) {
        res = arrChuSo[tram] + ' Trăm'
    }
    if (chuc == 0 && tram == 0) {
        res += arrChuSo[donVi]
    }
    else {
        if (chuc == 0) {
            if (donVi == 4) {
                res += ' Linh Tư'
            }
            else {
                res += ' Linh' + arrChuSo[donVi]
            }
        }
        else if (chuc == 1) {
            if (donVi == 0) {
                res += ' Mười'
            }
            else if (donVi == 5) {
                res += ' Mười Lăm'
            }
            else {
                res += ' Mười' + arrChuSo[donVi]
            }
        }
        else {//2---9
            if (donVi == 0) {
                res += arrChuSo[chuc] + ' Mươi'
            }
            else if (donVi == 1) {
                res += arrChuSo[chuc] + ' Mươi Mốt'
            }
            else if (donVi == 4) {
                res += arrChuSo[chuc] + ' Mươi Tư'
            }
            else if (donVi == 5) {
                res += arrChuSo[chuc] + ' Mươi Lăm'
            }
            else {
                res += arrChuSo[chuc] + ' Mươi' + arrChuSo[donVi]
            }
        }
    }
    return res
}
if (soTien.length % 3 == 1) {
    soTien = '00' + soTien
}
else if (soTien.length % 3 == 2) {
    soTien = '0' + soTien
}

let thanhTienChu = ''
for (let i = soTien.length / 3 - 1; i > -1; i--) {
    let soTemp = soTien[i * 3] + soTien[i * 3 + 1] + soTien[i * 3 + 2]
    if (i == soTien.length / 3 - 1) {
        thanhTienChu = thanhTienChu + doc3SoDau(soTemp) + arrHang[i] + thanhTienChu
    }
    else {
        thanhTienChu = doc3So(soTemp) + arrHang[i] + thanhTienChu
    }
}
thanhTienChu = thanhTienChu + ' Đồng'
console.log(thanhTienChu)
