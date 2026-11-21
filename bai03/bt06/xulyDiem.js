
// Tinh diem trung binh cua 3 mon hoc
function tinhDiemTB(toan, ly, hoa) {
    let tongDiem = toan + ly + hoa;
    return tongDiem / 3;
}

// Xep loai ket qua hoc tap
function xepLoai(diem) {
    switch (true) {
        case diem >= 8:
            return "Gioi";
        case diem >= 6.5:
            return "Kha";
        case diem >= 5:
            return "Trung binh";
        default:
            return "Yeu";
    }
}

// Cho phep file khac su dung cac ham
module.exports = {
    tinhDiemTB,
    xepLoai
};
