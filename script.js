let a =prompt("nhap dia chi email");
let b =/^[A-Za-z0-9]+[A-Za-z0-9]*@+[A-Za-z0-9]*(.com)?$/;
let c =b.test(a);
function kiem_tra_gmail() {
    if (c){
        alert('gmail hop le');
    } else {
        alert('gmail khong hop le');
    }
}
kiem_tra_gmail(a);