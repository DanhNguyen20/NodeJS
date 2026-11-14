
// Bài 1: Quản lý thông tin sinh viên bằng JavaScript ES6

// 1. Khai báo class SinhVien
class SinhVien {
    constructor(ma, hoTen, tuoi, diem) {
        this.ma = ma;
        this.hoTen = hoTen;
        this.tuoi = tuoi;
        this.diem = diem;
    }
}

// 2. Khai báo danh sách 5 sinh viên
const danhSachSinhVien = [
    new SinhVien("SV001", "Nguyen Van An", 20, 8.5),
    new SinhVien("SV002", "Tran Thi Binh", 19, 4.5),
    new SinhVien("SV003", "Le Van Cuong", 21, 7.0),
    new SinhVien("SV004", "Pham Thi Dung", 20, 3.5),
    new SinhVien("SV005", "Hoang Van Em", 22, 9.0)
];

// 3. Sử dụng arrow function để lọc sinh viên có điểm >= 5
const sinhVienDat = danhSachSinhVien.filter(
    (sv) => sv.diem >= 5
);

// 4. Hiển thị danh sách sinh viên đạt yêu cầu
console.log("===== DANH SACH SINH VIEN DAT YEU CAU =====");

sinhVienDat.forEach((sv) => {
    console.log("------------------------------");
    console.log("Ma sinh vien:", sv.ma);
    console.log("Ho ten:", sv.hoTen);
    console.log("Tuoi:", sv.tuoi);
    console.log("Diem:", sv.diem);
});
