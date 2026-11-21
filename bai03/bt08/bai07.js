
const http = require("http");
const { URL } = require("url");

const server = http.createServer((req, res) => {
    const url = new URL(req.url, "http://localhost:3001");
    const path = url.pathname;

    res.setHeader("Content-Type", "text/html; charset=utf-8");

    // Trang chu hien thi ket qua
    if (path === "/") {
        return res.end(`
            <h1>WEB SERVER NODE.JS</h1>
            <h2>Ket qua xu ly URL</h2>
            <p>Xin chao Minh</p>
            <p>Tong = 30</p>
            <hr>
            <a href="/hello?name=Minh">Kiem tra chao hoi</a><br>
            <a href="/sum?a=10&b=20">Kiem tra tinh tong</a>
        `);
    }

    // Xu ly chao hoi
    if (path === "/hello") {
        const name = url.searchParams.get("name");

        if (!name || name.trim() === "") {
            res.statusCode = 400;
            return res.end("<h2>Loi: Vui long nhap ten!</h2>");
        }

        return res.end(`<h1>Xin chao ${name.trim()}</h1>`);
    }

    // Xu ly tinh tong
    if (path === "/sum") {
        const a = url.searchParams.get("a");
        const b = url.searchParams.get("b");

        if (a === null || b === null || a.trim() === "" || b.trim() === "") {
            res.statusCode = 400;
            return res.end("<h2>Loi: Thieu tham so a hoac b!</h2>");
        }

        const soA = Number(a);
        const soB = Number(b);

        if (!Number.isFinite(soA) || !Number.isFinite(soB)) {
            res.statusCode = 400;
            return res.end("<h2>Loi: Vui long nhap so hop le!</h2>");
        }

        return res.end(`<h1>Tong = ${soA + soB}</h1>`);
    }

    res.statusCode = 404;
    res.end("<h2>Loi: Duong dan khong ton tai!</h2>");
});

server.listen(3001, () => {
    console.log("Server dang chay tai http://localhost:3001");
});

server.on("error", (err) => {
    console.log("Loi server:", err.message);
});
