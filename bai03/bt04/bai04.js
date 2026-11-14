const { MongoClient } = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

async function main() {
    try {
        // Kết nối MongoDB
        await client.connect();
        console.log('Kết nối MongoDB thành công!');

        // Chọn database và collection
        const db = client.db('qlsinhvien');
        const collection = db.collection('students');

        // Thêm ít nhất 3 sinh viên bằng insertMany()
        const students = [
            { masv: 'SV01', hoten: 'Nguyễn Thành Danh', tuoi: 20, diem: 9.0 },
            { masv: 'SV02', hoten: 'Trần Minh Anh', tuoi: 21, diem: 8.2 },
            { masv: 'SV03', hoten: 'Lê Hoàng Nam', tuoi: 20, diem: 6.5 }
        ];
        const ketQua = await collection.insertMany(students);
        console.log('Đã thêm:', ketQua.insertedCount, 'sinh viên');

        // Hiển thị danh sách sinh viên bằng find()
        const danhSach = await collection.find({}).toArray();
        console.log('Danh sách sinh viên:');
        console.log(danhSach);
    } catch (err) {
        console.error('Lỗi:', err);
    } finally {
        // Đóng kết nối sau khi hoàn thành
        await client.close();
        console.log('Đã đóng kết nối.');
    }
}

main();