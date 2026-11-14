
const fs = require('fs/promises');

// Thông tin sinh viên
const hoTen = 'Nguyễn Thành Danh';
const maSinhVien = 'NHẬP_MÃ_SINH_VIÊN';
const tenLop = 'NHẬP_TÊN_LỚP';

// Nội dung ban đầu
const noiDung = `Họ và tên: ${hoTen}\nMã sinh viên: ${maSinhVien}\n`;

async function main() {
    try {
        // Bước 1: Tạo tập tin và ghi thông tin sinh viên
        await fs.writeFile('thongtin.txt', noiDung, 'utf8');
        console.log('1. Đã tạo tập tin thongtin.txt');

        // Bước 2: Đọc và hiển thị nội dung ban đầu
        console.log('\n2. Nội dung tập tin ban đầu:');
        let duLieu = await fs.readFile('thongtin.txt', 'utf8');
        console.log(duLieu);

        // Bước 3: Ghi nối thêm tên lớp vào cuối tập tin
        await fs.appendFile(
            'thongtin.txt',
            `Tên lớp: ${tenLop}\n`,
            'utf8'
        );
        console.log('3. Đã ghi nối thêm tên lớp vào tập tin.');

        // Bước 4: Đọc lại tập tin sau khi cập nhật
        console.log('\n4. Nội dung tập tin sau khi cập nhật:');
        duLieu = await fs.readFile('thongtin.txt', 'utf8');
        console.log(duLieu);

    } catch (error) {
        console.error('Đã xảy ra lỗi:', error);
    }
}

// Chạy chương trình
main();
