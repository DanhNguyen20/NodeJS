
const { MongoClient } = require("mongodb");

// ===================================
// GIAO DIỆN TERMINAL
// ===================================
const C = {
    reset: "\x1b[0m",
    cyan: "\x1b[36m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    red: "\x1b[31m",
    purple: "\x1b[35m",
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

function showTable(data) {
    console.log(`\n${C.purple}${C.bold}┌────────┬──────────────────────┬────────┬──────────────────────┐`);
    console.log("│ MÃ SV  │ HỌ TÊN               │ MÃ KHOA│ TÊN KHOA             │");
    console.log("├────────┼──────────────────────┼────────┼──────────────────────┤");

    data.forEach(sv => {
        const ma = String(sv.masv).padEnd(6);
        const ten = String(sv.hoten).padEnd(20).slice(0, 20);
        const makhoa = String(sv.makhoa).padEnd(6);
        const tenkhoa = String(sv.tenkhoa).padEnd(20).slice(0, 20);

        console.log(
            `│ ${ma} │ ${ten} │ ${makhoa} │ ${tenkhoa} │`
        );
    });

    console.log("└────────┴──────────────────────┴────────┴──────────────────────┘" + C.reset);
}

// ===================================
// CHƯƠNG TRÌNH CHÍNH
// ===================================
async function main() {
    const url = "mongodb://127.0.0.1:27017";
    const client = new MongoClient(url);

    try {
        console.clear();

        title("STUDENT - DEPARTMENT MANAGEMENT SYSTEM");

        console.log(`${C.yellow}   BAI TAP 10 - MONGODB AGGREGATE & LOOKUP${C.reset}`);
        console.log(`${C.gray}   Database: qlsinhvien${C.reset}\n`);

        // 1. KẾT NỐI DATABASE
        info("Đang kết nối MongoDB...");

        await client.connect();

        const db = client.db("qlsinhvien");

        success("Kết nối MongoDB thành công!");

        const departments = db.collection("departments");
        const students = db.collection("students_join");

        // 2. TẠO DỮ LIỆU KHOA
        title("01. TAO COLLECTION DEPARTMENTS");

        const departmentData = [
            { makhoa: "CNTT", tenkhoa: "Cong nghe thong tin" },
            { makhoa: "QTKD", tenkhoa: "Quan tri kinh doanh" },
            { makhoa: "KETOAN", tenkhoa: "Ke toan" }
        ];

        for (const khoa of departmentData) {
            await departments.updateOne(
                { makhoa: khoa.makhoa },
                { $set: khoa },
                { upsert: true }
            );
        }

        success("Đã thêm/cập nhật 3 khoa!");

        console.table(departmentData);

        // 3. TẠO DỮ LIỆU SINH VIÊN
        title("02. TAO COLLECTION STUDENTS_JOIN");

        const studentData = [
            { masv: "SV001", hoten: "Nguyen Van An", makhoa: "CNTT" },
            { masv: "SV002", hoten: "Tran Thi Binh", makhoa: "QTKD" },
            { masv: "SV003", hoten: "Le Van Cuong", makhoa: "CNTT" },
            { masv: "SV004", hoten: "Pham Thi Dung", makhoa: "KETOAN" }
        ];

        for (const sv of studentData) {
            await students.updateOne(
                { masv: sv.masv },
                { $set: sv },
                { upsert: true }
            );
        }

        success("Đã thêm/cập nhật 4 sinh viên!");

        console.table(studentData);

        // 4. AGGREGATE + LOOKUP
        title("03. AGGREGATE + LOOKUP");

        info("Đang liên kết sinh viên với khoa thông qua makhoa...");

        const result = await students.aggregate([
            {
                $lookup: {
                    from: "departments",
                    localField: "makhoa",
                    foreignField: "makhoa",
                    as: "department_info"
                }
            },
            {
                $unwind: {
                    path: "$department_info",
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $project: {
                    _id: 0,
                    masv: 1,
                    hoten: 1,
                    makhoa: 1,
                    tenkhoa: "$department_info.tenkhoa"
                }
            },
            {
                $sort: {
                    masv: 1
                }
            }
        ]).toArray();

        success("Truy vấn Aggregate và Lookup thành công!");

        // 5. HIỂN THỊ KẾT QUẢ
        title("04. DANH SACH SINH VIEN KEM TEN KHOA");

        showTable(result);

        // 6. THỐNG KÊ
        title("05. THONG KE KET QUA");

        console.log(`${C.green}┌─────────────────────────────────────────────┐`);
        console.log(`│                KET QUA THUC HIEN             │`);
        console.log(`├─────────────────────────────────────────────┤`);
        console.log(`│  So luong khoa:             ${String(departmentData.length).padStart(3)}              │`);
        console.log(`│  So luong sinh vien:        ${String(studentData.length).padStart(3)}              │`);
        console.log(`│  Sinh vien da lien ket:     ${String(result.length).padStart(3)}              │`);
        console.log(`└─────────────────────────────────────────────┘${C.reset}`);

        console.log(`\n${C.green}${C.bold}✔ HOAN THANH BAI TAP 10!${C.reset}`);
        console.log(`${C.gray}Database: qlsinhvien${C.reset}`);
        console.log(`${C.gray}Collections: departments, students_join${C.reset}`);

    } catch (err) {
        error("Có lỗi xảy ra: " + err.message);
    } finally {
        await client.close();
        console.log(`\n${C.cyan}Đã đóng kết nối MongoDB.${C.reset}`);
        console.log(`${C.gray}${line}${C.reset}\n`);
    }
}

main();
