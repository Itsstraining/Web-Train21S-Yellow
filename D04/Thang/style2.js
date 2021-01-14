if (chuc>0) {
    if (chuc =! 1){
        if(donvi==0){
            res+= arr[chuc] + ' mươi '
        }
        else if(donvi==1){
            res+= arr[chuc] + ' mươi mốt '
        }
        else if(donvi==4){
            res+= arr[chuc] + ' mươi tư '
        }
        else if(donvi==5){
            res+= arr[chuc] + ' mươi lăm '
        }
        else{
            res+= arr[chuc] + ' mươi ' + arr[donvi]
        }
    }
    if (chuc ==1){
        if(donvi==0){
            res+= ' mười '
        }
        else if(donvi==5){
            res+= ' mười lăm '
        }
        else{
            res+= ' mười ' + arr[donvi]
        }
    }
}
console.log(res)