# Bài 3 - Bài tập 05: Truy vấn, sắp xếp và cập nhật dữ liệu trong MongoDB

## 1. Mục tiêu bài thực hành
Sử dụng Node.js kết nối tới MongoDB (`database: qlsv`, `collection: students` từ Bài 4) để thực hiện các thao tác trong file `bai05.js`:
- Tìm các sinh viên có `diem >= 7` bằng `find()` và toán tử `$gte`.
- Sắp xếp danh sách kết quả theo `diem` giảm dần bằng `sort({ diem: -1 })`.
- Cập nhật điểm của sinh viên có `masv = 'SV01'` thành `9.5` bằng `updateOne()` và `$set`.
- Hiển thị lại thông tin của sinh viên sau khi cập nhật bằng `findOne()` để kiểm tra kết quả.

---

## 2. Yêu cầu môi trường & Cài đặt
- **Node.js**
- **MongoDB** đang chạy tại `mongodb://127.0.0.1:27017`
- **Thư viện `mongodb`** (driver kết nối MongoDB cho Node.js)

---

## 3. Mô tả các lệnh thực hiện

### Bước 1: Di chuyển vào thư mục bài tập và cài đặt thư viện
```powershell
cd bai04\bai05
npm init -y
npm install mongodb
```
*(Nếu đã cài `mongodb` ở thư mục cha `bai04` thì có thể bỏ qua bước cài lại).*

### Bước 2: Giải thích các lệnh xử lý chính trong `bai05.js`
1. **Kết nối MongoDB:**
   ```javascript
   const client = new MongoClient('mongodb://127.0.0.1:27017');
   await client.connect();
   const db = client.db('qlsv');
   const collection = db.collection('students');
   ```
2. **Tìm sinh viên có `diem >= 7` và sắp xếp giảm dần:**
   ```javascript
   const danhSach = await collection
     .find({ diem: { $gte: 7 } })
     .sort({ diem: -1 })
     .toArray();
   ```
3. **Cập nhật điểm cho sinh viên `SV01`:**
   ```javascript
   const ketQua = await collection.updateOne(
     { masv: 'SV01' },
     { $set: { diem: 9.5 } }
   );
   ```
4. **Hiển thị lại thông tin sinh viên sau khi cập nhật:**
   ```javascript
   const sinhVienSauCapNhat = await collection.findOne({ masv: 'SV01' });
   ```

### Bước 3: Chạy chương trình
```powershell
node bai05.js
```

---

## 4. Ảnh chạy các bước

### Bước 1: Cài đặt thư viện / Mở thư mục thực hành
*(Thay đường dẫn bằng ảnh chụp màn hình của bạn)*
![Bước cài đặt và chuyển thư mục](./images/buoc1-caidat.png)

### Bước 2: Chạy lệnh `node bai05.js`
*(Thay đường dẫn bằng ảnh chụp màn hình terminal khi chạy lệnh)*
![Chạy lệnh node bai05.js](./images/buoc2-chaylenh.png)

---

## 5. Kết quả cuối cùng
Khi chạy `node bai05.js`, chương trình thực hiện thành công và in ra Terminal:
1. Thông báo `Kết nối MongoDB thành công!`.
2. Danh sách các sinh viên có `diem >= 7` đã được sắp xếp theo điểm giảm dần.
3. Thông báo cập nhật thành công cho sinh viên `SV01` (`Đã khớp: 1 | Đã cập nhật: 1`).
4. Thông tin mới nhất của sinh viên `SV01` với trường `diem` đã đổi thành `9.5`.

*(Thay đường dẫn bằng ảnh chụp màn hình kết quả đầu ra trên Terminal hoặc MongoDB Compass)*
![Kết quả cuối cùng](./images/ket-qua-cuoi-cung.png)