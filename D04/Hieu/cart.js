let arrSp = [
    {
        ten: 'Áo Khoác Đen',
        gia: 399.000,
        path: 'kisspng-leather-jacket-a-2-jacket-flight-jacket-hoodie-5b420379384041.1854785815310529212304.png'
    },
    {
        ten: 'Áo Khoác Đỏ',
        gia: 999.000,
        path: './kisspng-fleece-jacket-hoodie-polar-fleece-clothing-women-jacket-5b2f3b7a635b54.040967541529822074407.png'
    },
    {
        ten: 'T-shirt MA-1',
        gia: 510.000,
        path: './kisspng-flight-jacket-hoodie-t-shirt-ma-1-bomber-jacket-santa-muerte-5b4a6f51cce713.3757701015316048178393.png'
    },
    {
        ten: 'Áo Khoác(KDA hàng hiệu)',
        gia: +999.999,
        path: './kisspng-jacket-hoodie-t-shirt-pocket-sleeve-webserver-5b2b1ba6c07196.8614455815295517827883.png'
    },
    {
        ten: 'Áo khoác hơi chất',
        gia: 930.000,
        path: 'kisspng-leather-jacket-flight-jacket-ma-1-bomber-jacket-5ba37ac7ed0306.8423996515374404559708.png'
    },
    {
        ten: 'Áo khoác bao chất',
        gia: 990.000,
        path: './kisspng-leather-jacket-flight-jacket-chupa-5b039567734c67.4172647715269615114723.png'
    },
    {
        ten: 'Áo khoác mất chất',
        gia: 990.000,
        path: './kisspng-leather-jacket-flight-jacket-t-shirt-fashion-5ba3e48ef2c198.6586520515374675349943.png'
    },
    {
        ten: 'Áo khoác for child',
        gia: 900.000,
        path: './kisspng-university-of-minnesota-minnesota-golden-gophers-m-urban-celebrity-clothing-ltd-5b3d2a8d079a91.8678291415307352450312.png'
    },
    {
        ten: 'Áo khoác không',
        gia: 900.000,
        path: './kisspng-fleece-jacket-hoodie-polar-fleece-clothing-women-jacket-5b2f3b7a635b54.040967541529822074407.png'
    },
]

function getDiv(sp) {
    let div =
    "<div class='w3-third'>"+
                    "<img src='"+ sp.path +"' width='300px'>"+
                    "<h2>"+ sp.ten +"</h2>"+
                    "<p>"+ sp.gia +" 000 đồng </p>"+
                    "<button class='button1'>"+
                        "<p>buy now</p></button></div> "
    return div
}


for(let i=0;i<=arrSp.length;i++){
    let div = getDiv(arrSp[i])
    document.getElementById('div'+ i).innerHTML = div
}