let arrSp = [
    {
        ten: 'Chiến Hạm',
        gia: 431487.53,
        link: './ChienHam.gif',
        noidung: 'Thiết giáp hạm là một loại tàu chiến lớn được bọc thép dày với dàn hỏa lực chính bao gồm pháo có cỡ nòng rất lớn (trên 300mm).'
    },
    {
        ten: 'Xe Ngư Lôi',
        gia: 345190.02,
        link: './NgưLôi.gif',
        noidung: 'Ngư lôi là một loại vũ khí tự di chuyển trong nước, bên trong mang thuốc nổ lao vào đáy tàu thuyền của đối phương. Ngư lôi là đạn chính của tàu ngầm tấn công và tàu phóng lôi'
    },
    {
        ten: 'Phóng Tên Lửa',
        gia: 172595.01,
        link: './photo1523083487094-1523083487095169525800.gif',
        noidung:'Tên lửa là một khí cụ bay, có hoặc không có điều khiển, chỉ sử dụng một lần, chuyển động nhờ sức đẩy theo nguyên tắc phản lực do khí phụt ra từ động cơ tên lửa (xem thêm Định luật 3 Newton).'
    },
    {
        ten: 'Tên Lửa Không Đối Không',
        gia: 258892.52,
        link: './photo1592217858239-15922178583921562650265.gif',
        noidung:'Tên lửa không đối không là tên lửa dẫn hướng được bắn từ một máy bay để tiêu diệt máy bay khác. Nó được đẩy bằng một hay nhiều động cơ, thường sử dụng nhiên liệu đẩy dạng rắn hoặc lỏng.'
    },
    {
        ten: 'Xe Mang Phóng',
        gia: 302041.27,
        link: './XeTangLua.gif',
        noidung:'Xe mang phóng tự hành là phương tiện mang tên lửa với một bệ di chuyển tích hợp có thể mang, nâng lên vị trí bắn và phóng một hoặc nhiều tên lửa.'
    },
    {
        ten: 'Xe Tank',
        gia: 215743.76,
        link: './xnu1598518946.gif',
        noidung:'Xe tăng thường được gọi tắt là tăng, là loại xe chiến đấu bọc thép, được trang bị pháo lớn, di chuyển bằng bánh xích được thiết kế cho tấn công và phòng thủ độc lập hoặc cùng các đơn vị chiến đấu khác.'
    },
]

function sort(arr) {
    // for (let i = 0; i < )
} 

function getDiv(sp) {
    let div =
        "<div class='w3-third'>" +
        "<img src='"+ sp.link +"' width='350px' height='300px' />" +
        "<p>Giá <b>"+ sp.ten +"</b>: "+ sp.gia +"$</p>" +
        "<button>Vào giỏ hàng</button>" +
        "<p>"+ sp.noidung +"</p></div>"
    return div;
} 



for (let i = 0; i < arrSp.length; i++){
    let div = getDiv(arrSp[i]) 
    console.log(div)
    document.getElementById('div'+i).innerHTML= div
}