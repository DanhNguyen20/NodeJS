const { MongoClient } = require('mongodb');

// Đường dẫn kết nối MongoDB (mặc định chạy local)
const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

// Thay 'qlsv' bằng đúng tên database bạn đã dùng trong file bai04.js
const dbName = 'qlsv';

async function main() {
  try {
    // Kết nối tới MongoDB
    await client.connect();
    console.log('Kết nối MongoDB thành công!');

    const db = client.db(dbName);
    const collection = db.collection('students');

    // 1. Tìm các sinh viên có diem >= 7 bằng find() và $gte
    // 2. Sắp xếp kết quả theo điểm giảm dần bằng sort()
    console.log('\n--- Danh sách sinh viên có diem >= 7 (giảm dần) ---');
    const danhSach = await collection
      .find({ diem: { $gte: 7 } })
      .sort({ diem: -1 })
      .toArray();
    console.log(danhSach);

    // 3. Cập nhật điểm của một sinh viên theo masv bằng updateOne() và $set
    // Thay 'SV01' bằng mã sinh viên có thật trong collection students của Bài 4
    const targetMasv = 'SV01';
    const diemMoi = 9.5;

    console.log(`\n--- Cập nhật điểm cho sinh viên ${targetMasv} ---`);
    const ketQua = await collection.updateOne(
      { masv: targetMasv },
      { $set: { diem: diemMoi } }
    );
    console.log(
      `Đã khớp: ${ketQua.matchedCount} | Đã cập nhật: ${ketQua.modifiedCount}`
    );

    // 4. Hiển thị lại thông tin sau cập nhật để kiểm tra kết quả
    console.log(`\n--- Thông tin sinh viên ${targetMasv} sau cập nhật ---`);
    const sinhVienSauCapNhat = await collection.findOne({ masv: targetMasv });
    console.log(sinhVienSauCapNhat);

  } catch (error) {
    console.error('Lỗi:', error);
  } finally {
    await client.close();
  }
}

main();