
// Import module http
const http = require('http');

// Tạo Web Server
const server = http.createServer((req, res) => {

    // Truy cập trang chủ
    if (req.url === '/') {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        });

        res.end(`
            <h1>Xin chào!</h1>
            <p>Chào mừng bạn đến với Web Server Node.js.</p>
            <p>Họ tên: Nguyễn Thành Danh</p>
            <p>Mã sinh viên: [CDCNTT18B05]</p>
        `);
    }

    // Truy cập trang About
    else if (req.url === '/about') {
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        });

        res.end(`
            <h1>Giới thiệu bản thân</h1>
            <p>Họ tên: Nguyễn Thành Danh</p>
            <p>Ngành học: Công nghệ thông tin</p>
            <p>Tôi là sinh viên đang học tập và tìm hiểu về Node.js.</p>
        `);
    }

    // Đường dẫn không tồn tại
    else {
        res.writeHead(404, {
            'Content-Type': 'text/html; charset=utf-8'
        });

        res.end(`
            <h1>404 - Not Found</h1>
            <p>Đường dẫn bạn truy cập không tồn tại!</p>
        `);
    }
});

// Khởi động server tại cổng 3000
server.listen(3000, () => {
    console.log('Web Server đang chạy tại http://localhost:3000');
});
