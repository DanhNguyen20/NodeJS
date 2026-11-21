BÀI 07 – XỬ LÝ THAM SỐ URL TRÊN WEB SERVER
1. Giới thiệu

Bài thực hành xây dựng một Web Server đơn giản bằng Node.js. Chương trình sử dụng module HTTP và đối tượng URL để tiếp nhận, đọc và xử lý các tham số được truyền từ trình duyệt.

Server hoạt động tại cổng 3001 với hai chức năng chính là chào hỏi người dùng và tính tổng hai số.

2. Cấu trúc thư mục
text
Bt07/
├── bai07.js
├── README.md
└── images/
    ├── terminal.png
    ├── hello.png
    ├── sum.png
    └── error.png

3. Các chức năng của chương trình
Chức năng 1: Chào hỏi

Địa chỉ truy cập:

http://localhost:3001/hello?name=Minh

Kết quả: Xin chào Minh.

Chức năng 2: Tính tổng

Địa chỉ truy cập:

http://localhost:3001/sum?a=10&b=20

Kết quả: Tổng = 30.

Chức năng 3: Kiểm tra lỗi

Chương trình kiểm tra các trường hợp:

Không nhập tham số name.
Thiếu tham số a hoặc b.
Giá trị a hoặc b không phải số hợp lệ.
Truy cập đường dẫn không tồn tại.
4. Các bước thực hiện

Bước 1: Kiểm tra phiên bản Node.js.

bash
node -v


Bước 2: Mở Terminal tại thư mục Bt07.

Bước 3: Chạy chương trình.

bash
node bai07.js


Bước 4: Mở trình duyệt và kiểm tra các địa chỉ:

text
http://localhost:3001/hello?name=Minh
http://localhost:3001/sum?a=10&b=20


Bước 5: Kiểm tra các trường hợp thiếu tham số và nhập dữ liệu không hợp lệ.

5. Hình ảnh minh chứng
Hình 1: Khởi động Web Server trên Terminal

!Terminal

Hình 2: Kết quả chức năng chào hỏi

!Hello

Hình 3: Kết quả chức năng tính tổng

!Sum

Hình 4: Kết quả kiểm tra lỗi

!Error

6. Kết quả đạt được

Sau khi hoàn thành bài thực hành, chương trình đã thực hiện được:

Tạo Web Server bằng module HTTP.
Sử dụng đối tượng URL để đọc đường dẫn và tham số.
Xử lý yêu cầu chào hỏi tại đường dẫn /hello.
Tính tổng hai số tại đường dẫn /sum.
Kiểm tra tham số thiếu và dữ liệu không hợp lệ.
Trả về thông báo phù hợp cho từng trường hợp.
7. Kết luận

Qua bài thực hành, em đã hiểu thêm cách tạo Web Server bằng Node.js, cách sử dụng module HTTP, đối tượng URL và phương pháp lấy dữ liệu từ các tham số trên đường dẫn URL.

Bài thực hành giúp em nắm được cách xử lý yêu cầu từ trình duyệt và trả kết quả về cho người dùng.