
const diemHocTap = require("./xulyDiem");

// Danh sách sinh viên lớp CNTT18B
const lopHoc = [
    { ten: "Pham Minh Thu", toan: 9, ly: 8.5, hoa: 9 },
    { ten: "Nguyen Hoang Nam", toan: 7, ly: 7.5, hoa: 6 },
    { ten: "Tran Gia Bao", toan: 4, ly: 4.5, hoa: 5 }
];

console.log("======================================");
console.log("       BANG KET QUA HOC TAP");
console.log("======================================");

lopHoc.forEach((sinhVien, viTri) => {
    let trungBinh = diemHocTap.tinhDiemTB(
        sinhVien.toan,
        sinhVien.ly,
        sinhVien.hoa
    );

    let ketQua = diemHocTap.xepLoai(trungBinh);

    console.log(`\nSTT: ${viTri + 1}`);
    console.log(`Ho va ten: ${sinhVien.ten}`);
    console.log(`Diem Toan: ${sinhVien.toan}`);
    console.log(`Diem Ly: ${sinhVien.ly}`);
    console.log(`Diem Hoa: ${sinhVien.hoa}`);
    console.log(`Diem trung binh: ${trungBinh.toFixed(2)}`);
    console.log(`Hoc luc: ${ketQua}`);
});

console.log("\n======================================");
console.log("          KET THUC CHUONG TRINH");
console.log("======================================");
