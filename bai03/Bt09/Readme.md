# BÀI TẬP 09 – MODULE, FILE SYSTEM VÀ CƠ SỞ DỮ LIỆU

## 1. Thông tin bài tập

- **Môn học:** NodeJS
- **Bài:** Bài 3
- **Bài tập:** 09
- **Ngôn ngữ:** JavaScript (Node.js)
- **Database:** `qlsinhvien`
- **Collection:** `students_test`
- **Thư viện:** MongoDB

## 2. Cấu trúc thư mục

```text
Bt09/
├── bai09.js
└── Readme.md
```

## 3. Nội dung thực hiện

Chương trình sử dụng Node.js kết nối với MongoDB và thực hiện các chức năng:

1. Kết nối database `qlsinhvien`.
2. Sử dụng collection `students_test`.
3. Thêm 5 sinh viên mẫu với các thông tin:
   - `masv`: Mã sinh viên.
   - `hoten`: Họ tên.
   - `tuoi`: Tuổi.
   - `diem`: Điểm.
4. Sử dụng `deleteOne()` để xóa sinh viên có mã `SV005`.
5. Sử dụng `deleteMany()` để xóa các sinh viên có điểm dưới 5.
6. Hiển thị số lượng bản ghi đã xóa.
7. Sử dụng `find()` để hiển thị danh sách sinh viên còn lại.

## 4. Các bước thực hiện

### Bước 1: Khởi động MongoDB

Đảm bảo MongoDB Server đang hoạt động trên máy tính.

### Bước 2: Cài đặt thư viện

Mở Terminal tại thư mục `Bt09` và chạy lệnh:

```bash
npm init -y
npm install mongodb
```

### Bước 3: Chạy chương trình

```bash
node bai09.js
```

### Bước 4: Kiểm tra kết quả

Chương trình sẽ hiển thị:
- Thông báo kết nối MongoDB thành công.
- Danh sách 5 sinh viên mẫu.
- Số sinh viên được xóa bằng `deleteOne()`.
- Số sinh viên được xóa bằng `deleteMany()`.
- Danh sách sinh viên còn lại.
- Tổng số bản ghi đã xóa.

## 5. Hình ảnh thực hiện

### Hình 1: Cấu trúc thư mục bài tập

Chèn ảnh cấu trúc thư mục `Bt09` tại đây.

### Hình 2: Cài đặt thư viện MongoDB

Chèn ảnh Terminal sau khi chạy lệnh `npm install mongodb` tại đây.

### Hình 3: Kết quả chạy chương trình

Chèn ảnh Terminal sau khi chạy lệnh `node bai09.js` tại đây.

### Hình 4: Kết quả trong MongoDB Compass

Chèn ảnh database `qlsinhvien`, collection `students_test` sau khi thực hiện các thao tác xóa tại đây.

## 6. Kết quả đạt được

Với dữ liệu mẫu ban đầu, kết quả dự kiến:

| Nội dung | Kết quả |
|---|---:|
| Sinh viên mẫu | 5 |
| Xóa bằng deleteOne() | 1 |
| Xóa bằng deleteMany() | 1 |
| Sinh viên còn lại | 3 |

Danh sách sinh viên còn lại:

| Mã SV | Họ tên | Tuổi | Điểm |
|---|---|---:|---:|
| SV001 | Nguyen Van An | 20 | 8.5 |
| SV002 | Tran Thi Binh | 21 | 7.0 |
| SV004 | Pham Thi Dung | 20 | 9.0 |

## 7. Kết luận

Qua bài thực hành, em đã biết cách sử dụng Node.js kết nối với MongoDB, thêm dữ liệu, xóa một bản ghi bằng `deleteOne()`, xóa nhiều bản ghi bằng `deleteMany()` và truy vấn dữ liệu bằng `find()`.

**Bài thực hành 09 đã hoàn thành.**