
const { MongoClient } = require("mongodb");
const readline = require("readline");

// ===============================
// CẤU HÌNH GIAO DIỆN TERMINAL
// ===============================
const C = {
    reset: "\x1b[0m",
    cyan: "\x1b[36m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    red: "\x1b[31m",
    purple: "\x1b[35m",
    blue: "\x1b[34m",
    bold: "\x1b[1m",
    gray: "\x1b[90m"
};

const line = "═".repeat(65);

function title(text) {
    console.log(`\n${C.cyan}${C.bold}╔${line}╗`);
    console.log(`║  ${text.padEnd(63)}║`);
    console.log(`╚${line}╝${C.reset}\n`);
}

function success(text) {
    console.log(`${C.green}✔ ${text}${C.reset}`);
}

function info(text) {
    console.log(`${C.cyan}➜ ${text}${C.reset}`);
}

function error(text) {
    console.log(`${C.red}✖ ${text}${C.reset}`);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// ===============================
// HIỂN THỊ BẢNG SINH VIÊN
// ===============================
function showTable(data) {
    console.log(`\n${C.purple}${C.bold}┌────────┬──────────────────────┬──────┬──────┐`);
    console.log("│ MÃ SV  │ HỌ TÊN               │ TUỔI │ ĐIỂM │");
    console.log("├────────┼──────────────────────┼──────┼──────┤");

    data.forEach(sv => {
        const ma = String(sv.masv).padEnd(6);
        const ten = String(sv.hoten).padEnd(20).slice(0, 20);
        const tuoi = String(sv.tuoi).padStart(4);
        const diem = String(sv.diem).padStart(4);

        console.log(
            `│ ${ma} │ ${ten} │ ${tuoi} │ ${diem} │`
        );
    });

    console.log("└────────┴──────────────────────┴──────┴──────┘" + C.reset);
}

// ===============================
// CHƯƠNG TRÌNH CHÍNH
// ===============================
async function main() {
    const url = "mongodb://127.0.0.1:27017";
    const client = new MongoClient(url);

    try {
        console.clear();

        title("STUDENT MANAGEMENT SYSTEM - BAI TAP 09");

        console.log(`${C.yellow}   MODULE - FILE SYSTEM - DATABASE${C.reset}`);
        console.log(`${C.gray}   Node.js + MongoDB | Collection: students_test${C.reset}\n`);

        // 1. KẾT NỐI DATABASE
        info("Đang kết nối MongoDB...");
        await client.connect();

        const db = client.db("qlsinhvien");
        const students = db.collection("students_test");

        success("Kết nối MongoDB thành công!");

        await sleep(500);

        // 2. THÊM DỮ LIỆU
        title("01. THEM DU LIEU SINH VIEN");

        const data = [
            { masv: "SV001", hoten: "Nguyen Van An", tuoi: 20, diem: 8.5 },
            { masv: "SV002", hoten: "Tran Thi Binh", tuoi: 21, diem: 7.0 },
            { masv: "SV003", hoten: "Le Van Cuong", tuoi: 19, diem: 4.0 },
            { masv: "SV004", hoten: "Pham Thi Dung", tuoi: 20, diem: 9.0 },
            { masv: "SV005", hoten: "Hoang Van Em", tuoi: 22, diem: 3.5 }
        ];

        for (const sv of data) {
            await students.updateOne(
                { masv: sv.masv },
                { $set: sv },
                { upsert: true }
            );
        }

        success("Đã thêm/cập nhật 5 sinh viên mẫu!");

        const beforeDelete = await students.find({}).toArray();
        showTable(beforeDelete);

        await sleep(500);

        // 3. DELETE ONE
        title("02. DELETE ONE - XOA THEO MA SINH VIEN");

        info("Đang xóa sinh viên có mã SV005...");

        const resultOne = await students.deleteOne({
            masv: "SV005"
        });

        if (resultOne.deletedCount > 0) {
            success("Đã xóa sinh viên SV005 thành công!");
        } else {
            info("Không tìm thấy sinh viên SV005 để xóa.");
        }

        console.log(
            `${C.yellow}Số bản ghi đã xóa: ${resultOne.deletedCount}${C.reset}`
        );

        await sleep(500);

        // 4. DELETE MANY
        title("03. DELETE MANY - XOA SINH VIEN DIEM DUOI 5");

        info("Đang tìm và xóa sinh viên có điểm dưới 5...");

        const resultMany = await students.deleteMany({
            diem: { $lt: 5 }
        });

        success("Đã thực hiện lệnh deleteMany()!");

        console.log(
            `${C.yellow}Số bản ghi đã xóa: ${resultMany.deletedCount}${C.reset}`
        );

        await sleep(500);

        // 5. FIND
        title("04. DANH SACH SINH VIEN CON LAI");

        const remaining = await students.find({}).toArray();

        if (remaining.length > 0) {
            showTable(remaining);
        } else {
            info("Không còn sinh viên nào trong collection.");
        }

        // 6. THỐNG KÊ
        title("05. THONG KE KET QUA");

        console.log(`${C.green}┌─────────────────────────────────────────────┐`);
        console.log(`│              KET QUA THUC HIEN               │`);
        console.log(`├─────────────────────────────────────────────┤`);
        console.log(`│  DeleteOne():           ${String(resultOne.deletedCount).padStart(3)} ban ghi           │`);
        console.log(`│  DeleteMany():          ${String(resultMany.deletedCount).padStart(3)} ban ghi           │`);
        console.log(`│  Tong so da xoa:        ${String(resultOne.deletedCount + resultMany.deletedCount).padStart(3)} ban ghi           │`);
        console.log(`│  Sinh vien con lai:     ${String(remaining.length).padStart(3)} ban ghi           │`);
        console.log(`└─────────────────────────────────────────────┘${C.reset}`);

        console.log(`\n${C.green}${C.bold}✔ HOAN THANH BAI TAP 09!${C.reset}`);
        console.log(`${C.gray}Database: qlsinhvien | Collection: students_test${C.reset}`);

    } catch (err) {
        error("Có lỗi xảy ra: " + err.message);
    } finally {
        await client.close();
        console.log(`\n${C.cyan}Đã đóng kết nối MongoDB.${C.reset}`);
        console.log(`${C.gray}${line}${C.reset}\n`);
    }
}

main();
