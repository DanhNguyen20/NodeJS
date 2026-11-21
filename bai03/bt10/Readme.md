# BÀI TẬP 10 – MONGODB AGGREGATE VÀ LOOKUP

## 1. Thông tin bài tập

- **Môn học:** NodeJS
- **Bài:** Bài 3
- **Bài tập:** 10
- **Ngôn ngữ:** JavaScript (Node.js)
- **Database:** `qlsinhvien`
- **Collections:** `departments`, `students_join`
- **Thư viện:** MongoDB

## 2. Cấu trúc thư mục

```text
Bt10/
├── bai10.js
└── Readme.md
```

## 3. Mô tả yêu cầu

Chương trình thực hiện các chức năng:

1. Kết nối database `qlsinhvien`.
2. Tạo collection `departments` gồm ít nhất 2 khoa với các trường `makhoa`, `tenkhoa`.
3. Tạo collection `students_join` gồm ít nhất 4 sinh viên với các trường `masv`, `hoten`, `makhoa`.
4. Sử dụng `aggregate()` kết hợp `$lookup` để liên kết hai collection thông qua `makhoa`.
5. Sử dụng `$project` để hiển thị thông tin sinh viên và tên khoa tương ứng.
6. Hiển thị danh sách sinh viên kèm tên khoa.

## 4. Các bước thực hiện

### Bước 1: Khởi động MongoDB

Đảm bảo MongoDB Server đang hoạt động.

### Bước 2: Cài đặt thư viện

```bash
npm init -y
npm install mongodb
```

### Bước 3: Chạy chương trình

```bash
node bai10.js
```

### Bước 4: Kiểm tra kết quả

Chương trình hiển thị danh sách sinh viên cùng tên khoa tương ứng sau khi thực hiện Aggregate và Lookup.

## 5. Giải thích Aggregate và Lookup

Sử dụng `$lookup` để kết nối hai collection:

- `from`: Collection cần liên kết (`departments`).
- `localField`: Trường `makhoa` trong collection sinh viên.
- `foreignField`: Trường `makhoa` trong collection khoa.
- `as`: Tên mảng chứa thông tin khoa được liên kết.

Sử dụng `$unwind` để tách thông tin khoa và `$project` để hiển thị các trường cần thiết, đặc biệt là `tenkhoa`.

## 6. Hình ảnh thực hiện

### Hình 1: Cấu trúc thư mục Bt10

Chèn ảnh cấu trúc thư mục tại đây.

### Hình 2: Cài đặt thư viện MongoDB

Chèn ảnh Terminal cài đặt thư viện thành công tại đây.

### Hình 3: Kết quả chạy chương trình

Chèn ảnh Terminal sau khi chạy lệnh `node bai10.js` tại đây.

### Hình 4: Kiểm tra collection departments

Chèn ảnh MongoDB Compass hiển thị dữ liệu các khoa tại đây.

### Hình 5: Kiểm tra collection students_join

Chèn ảnh MongoDB Compass hiển thị dữ liệu sinh viên tại đây.

## 7. Kết quả đạt được

| Nội dung | Kết quả |
|---|---:|
| Số lượng khoa | 3 |
| Số lượng sinh viên | 4 |
| Sinh viên được liên kết | 4 |

Danh sách sinh viên sau khi liên kết:

| Mã SV | Họ tên | Mã khoa | Tên khoa |
|---|---|---|---|
| SV001 | Nguyen Van An | CNTT | Cong nghe thong tin |
| SV002 | Tran Thi Binh | QTKD | Quan tri kinh doanh |
| SV003 | Le Van Cuong | CNTT | Cong nghe thong tin |
| SV004 | Pham Thi Dung | KETOAN | Ke toan |

## 8. Kết luận

Qua bài thực hành, em đã biết cách tạo và quản lý nhiều collection trong MongoDB, sử dụng `aggregate()` kết hợp `$lookup` để liên kết dữ liệu giữa các collection và hiển thị thông tin sinh viên kèm tên khoa tương ứng.

**Bài thực hành 10 đã hoàn thành.**