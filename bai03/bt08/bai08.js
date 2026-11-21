
const fs = require("fs");
const path = require("path");
const http = require("http");

const thuMuc = path.join(__dirname, "data");
const PORT = 3000;

let lichSu = [];
let noiDungFile = "";
let trangThai = "Đang xử lý";

// ===============================
// QUAN LY TAP TIN
// ===============================
async function quanLyTapTin() {
    lichSu = [];
    trangThai = "Đang xử lý";

    try {
        // 1. Tao thu muc data
        await fs.promises.mkdir(thuMuc, { recursive: true });
        lichSu.push("Đã tạo thư mục data thành công!");

        // 2. Tao va ghi file ghichu.txt
        const fileGhiChu = path.join(thuMuc, "ghichu.txt");

        const noiDung = `BAI THUC HANH 08 - NODE.JS
Ho ten: Nguyen Thanh Danh
Noi dung: Tim hieu module File System.
Muc tieu: Thuc hanh tao, ghi, doc, doi ten va xoa tap tin.`;

        await fs.promises.writeFile(fileGhiChu, noiDung, "utf8");
        lichSu.push("Đã tạo và ghi nội dung vào ghichu.txt!");

        // 3. Doi ten file
        const fileMoi = path.join(thuMuc, "ghichu_moi.txt");

        await fs.promises.rm(fileMoi, { force: true });
        await fs.promises.rename(fileGhiChu, fileMoi);
        lichSu.push("Đã đổi tên thành ghichu_moi.txt!");

        // 4. Doc noi dung file moi
        noiDungFile = await fs.promises.readFile(fileMoi, "utf8");
        lichSu.push("Đã đọc nội dung tập tin thành công!");

        // 5. Tao file tam.txt
        const fileTam = path.join(thuMuc, "tam.txt");

        await fs.promises.writeFile(
            fileTam,
            "Day la tap tin tam.",
            "utf8"
        );
        lichSu.push("Đã tạo tập tin tam.txt!");

        // 6. Xoa file tam.txt
        await fs.promises.unlink(fileTam);
        lichSu.push("Đã xóa tập tin tam.txt thành công!");

        trangThai = "Hoàn thành";

        console.log("\n===== KET QUA FILE SYSTEM =====");

        lichSu.forEach((item, index) => {
            console.log(`${index + 1}. ${item}`);
        });

        console.log("\nNOI DUNG FILE:");
        console.log(noiDungFile);

        console.log("\nHOAN THANH TAT CA CAC THAO TAC!");

    } catch (error) {
        trangThai = "Có lỗi xảy ra";
        lichSu.push("Lỗi: " + error.message);
        console.log("Loi:", error.message);
    }
}

// ===============================
// TAO GIAO DIEN HTML VA CSS
// ===============================
function taoGiaoDien() {
    const danhSach = lichSu.map((item, index) => `
        <div class="log-item">
            <span class="log-number">
                ${String(index + 1).padStart(2, "0")}
            </span>
            <span class="log-text">${item}</span>
            <span class="check">
                ${item.startsWith("Lỗi:") ? "✕" : "✓"}
            </span>
        </div>
    `).join("");

    const noiDungAnToan = noiDungFile
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");

    const daHoanThanh = trangThai === "Hoàn thành";

    return `
    <!DOCTYPE html>
    <html lang="vi">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport"
              content="width=device-width, initial-scale=1.0">

        <title>FILEFLOW | Node.js</title>

        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            body {
                font-family: Arial, sans-serif;
                background: #100e1b;
                color: #f5f1ff;
                min-height: 100vh;
                padding: 35px 18px;
            }

            .container {
                max-width: 1050px;
                margin: auto;
            }

            header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-wrap: wrap;
                gap: 15px;
                margin-bottom: 35px;
            }

            .logo {
                font-size: 25px;
                font-weight: bold;
                letter-spacing: 2px;
                color: #c5a5ff;
            }

            .logo span {
                color: #62e5c1;
            }

            .sub-logo {
                color: #88839e;
                font-size: 11px;
                letter-spacing: 3px;
                margin-top: 8px;
            }

            .badge {
                border: 1px solid #35dcb1;
                color: #62e5c1;
                background: #17342f;
                padding: 10px 17px;
                border-radius: 30px;
                font-size: 12px;
            }

            .hero {
                padding: 35px;
                border-radius: 20px;
                background: linear-gradient(
                    120deg,
                    #292044,
                    #182b37
                );
                border: 1px solid #594779;
                margin-bottom: 23px;
                box-shadow: 0 12px 40px #0005;
            }

            .hero small {
                color: #62e5c1;
                letter-spacing: 3px;
                font-size: 11px;
            }

            .hero h1 {
                font-size: 32px;
                margin: 15px 0;
            }

            .hero p {
                color: #b7b0ca;
                line-height: 1.8;
                max-width: 650px;
            }

            .cards {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 16px;
                margin-bottom: 23px;
            }

            .card {
                background: #1c192b;
                border: 1px solid #38304c;
                border-radius: 15px;
                padding: 22px;
                transition: .3s;
            }

            .card:hover {
                transform: translateY(-5px);
                border-color: #aa83ff;
                box-shadow: 0 8px 25px #a47aff22;
            }

            .card .icon {
                font-size: 26px;
                margin-bottom: 15px;
            }

            .card h3 {
                font-size: 15px;
                margin-bottom: 8px;
            }

            .card p {
                color: #928ca6;
                font-size: 12px;
            }

            .panel {
                background: #1c192b;
                border: 1px solid #38304c;
                border-radius: 17px;
                padding: 25px;
                margin-bottom: 22px;
            }

            .panel-title {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 22px;
                gap: 10px;
            }

            .panel-title h2 {
                font-size: 17px;
                color: #c9adff;
            }

            .status-label {
                font-size: 10px;
                color: #62e5c1;
                background: #17342f;
                padding: 7px 12px;
                border-radius: 20px;
            }

            .log-item {
                display: flex;
                align-items: center;
                gap: 14px;
                padding: 15px;
                margin-bottom: 10px;
                border-radius: 10px;
                background: #29243a;
                font-size: 13px;
            }

            .log-number {
                color: #b99aff;
                font-weight: bold;
            }

            .log-text {
                color: #ded8ed;
                line-height: 1.5;
            }

            .check {
                margin-left: auto;
                color: #62e5c1;
                font-weight: bold;
            }

            .file-box {
                background: #11101c;
                border: 1px solid #403451;
                border-radius: 12px;
                padding: 20px;
                overflow-x: auto;
            }

            .file-name {
                color: #62e5c1;
                font-size: 13px;
                margin-bottom: 15px;
            }

            pre {
                white-space: pre-wrap;
                color: #d1c3f5;
                line-height: 1.9;
                font-size: 13px;
                overflow-wrap: anywhere;
            }

            .result {
                text-align: center;
                padding: 25px;
                background: ${daHoanThanh ? "#172d2b" : "#392126"};
                border: 1px solid ${daHoanThanh ? "#327b68" : "#a34c59"};
                border-radius: 15px;
                margin-bottom: 22px;
            }

            .result h2 {
                color: ${daHoanThanh ? "#62e5c1" : "#ff929e"};
                font-size: 20px;
                margin-bottom: 8px;
            }

            .result p {
                color: #a4cfc2;
                font-size: 13px;
            }

            footer {
                text-align: center;
                color: #716a83;
                font-size: 11px;
                letter-spacing: 2px;
                padding: 20px;
                line-height: 2;
            }

            @media (max-width: 650px) {
                .cards {
                    grid-template-columns: repeat(2, 1fr);
                }

                .hero {
                    padding: 25px;
                }

                .hero h1 {
                    font-size: 24px;
                }
            }

            @media (max-width: 420px) {
                .cards {
                    grid-template-columns: 1fr;
                }

                .log-item {
                    font-size: 11px;
                }
            }
        </style>
    </head>

    <body>
        <div class="container">

            <header>
                <div>
                    <div class="logo">✦ FILE<span>FLOW</span></div>
                    <div class="sub-logo">
                        NODE.JS / FILE SYSTEM MANAGER
                    </div>
                </div>

                <div class="badge">● SYSTEM ONLINE</div>
            </header>

            <section class="hero">
                <small>WELCOME TO MY PROJECT</small>

                <h1>File Management System</h1>

                <p>
                    Bảng quản lý tập tin được xây dựng bằng Node.js.
                    Thực hiện các thao tác tạo thư mục, ghi dữ liệu,
                    đổi tên, đọc và xóa tập tin bằng module File System.
                </p>
            </section>

            <section class="cards">

                <div class="card">
                    <div class="icon">📁</div>
                    <h3>Create Folder</h3>
                    <p>Tạo thư mục data</p>
                </div>

                <div class="card">
                    <div class="icon">✍️</div>
                    <h3>Write File</h3>
                    <p>Ghi nội dung vào ghichu.txt</p>
                </div>

                <div class="card">
                    <div class="icon">🔄</div>
                    <h3>Rename File</h3>
                    <p>Đổi tên tập tin mới</p>
                </div>

                <div class="card">
                    <div class="icon">📄</div>
                    <h3>Read File</h3>
                    <p>Đọc dữ liệu tập tin</p>
                </div>

                <div class="card">
                    <div class="icon">🗑️</div>
                    <h3>Delete File</h3>
                    <p>Xóa tập tin tạm</p>
                </div>

                <div class="card">
                    <div class="icon">⚙️</div>
                    <h3>File System</h3>
                    <p>Node.js built-in module</p>
                </div>

            </section>

            <section class="result">
                <h2>
                    ${daHoanThanh
                        ? "✓ ALL OPERATIONS COMPLETED"
                        : "PROCESS STATUS"}
                </h2>
                <p>${trangThai}</p>
            </section>

            <section class="panel">
                <div class="panel-title">
                    <h2>◈ ACTIVITY HISTORY</h2>
                    <span class="status-label">LIVE LOG</span>
                </div>

                ${danhSach || "<p>Chưa có hoạt động.</p>"}
            </section>

            <section class="panel">
                <div class="panel-title">
                    <h2>◈ FILE PREVIEW</h2>
                    <span class="status-label">READ SUCCESS</span>
                </div>

                <div class="file-box">
                    <div class="file-name">
                        📄 data / ghichu_moi.txt
                    </div>

                    <pre>${noiDungAnToan || "Chưa có nội dung tập tin."}</pre>
                </div>
            </section>

            <footer>
                FILEFLOW SYSTEM • NODE.JS PRACTICE 08
                <br>
                DESIGNED BY NGUYEN THANH DANH
            </footer>

        </div>
    </body>
    </html>
    `;
}

// ===============================
// KHOI DONG WEB SERVER
// ===============================
async function khoiDong() {
    await quanLyTapTin();

    const server = http.createServer((req, res) => {
        res.writeHead(200, {
            "Content-Type": "text/html; charset=utf-8"
        });

        res.end(taoGiaoDien());
    });

    server.on("error", (error) => {
        if (error.code === "EADDRINUSE") {
            console.log(`Cong ${PORT} dang duoc su dung!`);
            console.log("Hay tat server cu truoc khi chay lai.");
        } else {
            console.log("Loi server:", error.message);
        }
    });

    server.listen(PORT, () => {
        console.log("\nGiao dien da san sang!");
        console.log(`Mo trinh duyet: http://localhost:${PORT}`);
    });
}

khoiDong();
