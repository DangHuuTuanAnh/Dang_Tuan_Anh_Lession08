// khai báo kiểu chuỗi
var sn;
// khai báo kiểu số
var n;
do {
	sn = prompt('Nhập  n số dương: ')
	n = parseInt(sn)
} while (n<=0);
// khai báo mảng kiểu chuỗi
var smang = new Array(n);
// khai báo mảng kiểu số
var mang = new Array(n);
for (var i = 0; i < mang.length; i++) {
	smang[i] = prompt('Nhập số thứ'+(i+1));
	mang[i] = parseInt(smang[i]);
}
function tinh_tong(){
	var tong = 0;
	for (var i = 0; i < mang.length; i++) {
		tong = tong  + mang[i];
	}
	return tong;
}
// khai báo biến tổng

document.writeln("Tổng là:" + tong);