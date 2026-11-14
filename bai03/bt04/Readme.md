# Bài 3 - Bài tập 04: Kết nối MongoDB, thêm và hiển thị danh sách sinh viên

## 1. Mục tiêu bài thực hành
Sử dụng Node.js kết nối tới cơ sở dữ liệu MongoDB (`database: qlsinhvien`, `collection: students`) để thực hiện:
- Kết nối tới MongoDB local bằng `MongoClient`.
- Thêm danh sách gồm 3 sinh viên vào collection `students` bằng phương thức `insertMany()`.
- Truy vấn và hiển thị toàn bộ danh sách sinh viên ra màn hình bằng `find()`.
- Đóng kết nối MongoDB sau khi thực hiện xong.

---

## 2. Yêu cầu môi trường & Cài đặt
- **Node.js**
- **MongoDB** đang chạy tại `mongodb://127.0.0.1:27017`
- **Thư viện `mongodb`**

---

## 3. Mô tả các lệnh thực hiện

### Bước 1: Khởi tạo dự án và cài đặt thư viện `mongodb`
```powershell
cd bai04
npm init -y
npm install mongodb
```

### Bước 2: Giải thích các lệnh xử lý chính trong `bai04.js`
1. **Kết nối tới MongoDB và chọn database / collection:**
   ```javascript
   const client = new MongoClient('mongodb://127.0.0.1:27017');
   await client.connect();
   const db = client.db('qlsinhvien');
   const collection = db.collection('students');
   ```
2. **Thêm 3 sinh viên bằng `insertMany()`:**
   ```javascript
   const students = [
       { masv: 'SV01', hoten: 'Nguyễn Thành Danh', tuoi: 20, diem: 9.0 },
       { masv: 'SV02', hoten: 'Trần Minh Anh', tuoi: 21, diem: 8.2 },
       { masv: 'SV03', hoten: 'Lê Hoàng Nam', tuoi: 20, diem: 6.5 }
   ];
   const ketQua = await collection.insertMany(students);
   ```
3. **Hiển thị danh sách sinh viên bằng `find()`:**
   ```javascript
   const danhSach = await collection.find({}).toArray();
   console.log(danhSach);
   ```
4. **Đóng kết nối:**
   ```javascript
   await client.close();
   ```

### Bước 3: Chạy chương trình
```powershell
node bai04.js
```

---

## 4. Ảnh chạy các bước

### Bước 1: Cài đặt thư viện `mongodb`
*(Thay đường dẫn bằng ảnh chụp màn hình cài đặt của bạn)*
![Cài đặt thư viện mongodb](./images/buoc1-caidat.png)

### Bước 2: Chạy lệnh `node bai04.js`
*(Thay đường dẫn bằng ảnh chụp màn hình khi chạy lệnh)*
![Chạy lệnh node bai04.js](./images/buoc2-chaylenh.png)

---

## 5. Kết quả cuối cùng
Khi chạy `node bai04.js`, chương trình kết nối thành công và in ra Terminal:
- Thông báo `Kết nối MongoDB thành công!`.
- Thông báo `Đã thêm: 3 sinh viên`.
- Danh sách gồm 3 sinh viên (`SV01`, `SV02`, `SV03`) vừa được lưu trong collection `students` của database `qlsinhvien`.
- Thông báo `Đã đóng kết nối.`.

*(Thay đường dẫn bằng ảnh chụp màn hình kết quả trên Terminal hoặc MongoDB Compass)*
![Kết quả cuối cùng](./images/ket-qua-cuoi-cung.png)