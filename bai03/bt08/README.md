✦ BÀI THỰC HÀNH 08 – QUẢN LÝ TẬP TIN VỚI FILE SYSTEM

Sinh viên: Nguyễn Thành Danh
Môn học: Node.js
Bài: 3 – Module, File System và cơ sở dữ liệu
Tên thư mục: Bt08

1. Giới thiệu

Bài thực hành này giúp em tìm hiểu cách sử dụng module fs trong Node.js để quản lý tập tin và thư mục.

Ngoài việc xử lý dữ liệu trong Terminal, em còn xây dựng giao diện FILEFLOW với HTML và CSS được tích hợp trực tiếp trong file JavaScript nhằm hiển thị kết quả trực quan hơn.

2. Các chức năng đã thực hiện

Chương trình thực hiện 6 thao tác chính:

Tạo thư mục data bằng fs.mkdir().
Tạo tập tin ghichu.txt và ghi nội dung bằng fs.writeFile().
Đổi tên tập tin thành ghichu_moi.txt bằng fs.rename().
Đọc nội dung tập tin mới bằng fs.readFile().
Tạo tập tin tạm tam.txt.
Xóa tập tin tam.txt bằng fs.unlink().

Sau khi hoàn thành, chương trình hiển thị thông báo kết quả trên Terminal và giao diện trình duyệt.

3. Cấu trúc thư mục
text
Bt08/
│
├── bai08.js
├── Readme.md
│
└── data/
    └── ghichu_moi.txt

4. Hướng dẫn thực hiện

Bước 1: Mở Terminal

Di chuyển đến thư mục chứa bài thực hành:

powershell
cd C:\Users\Admin\Desktop\CNTT18B\NodeJS\Bai03\Bt08


Bước 2: Chạy chương trình

powershell
node bai08.js


Bước 3: Kiểm tra kết quả trên Terminal

Chương trình sẽ hiển thị các thao tác tạo thư mục, ghi file, đổi tên, đọc file và xóa file.

Bước 4: Mở giao diện Web

Truy cập địa chỉ:

text
http://localhost:3000


Giao diện FILEFLOW sẽ hiển thị lịch sử xử lý và nội dung tập tin sau khi đọc.

5. Kết quả thực hiện

Sau khi chạy chương trình:

Thư mục data được tạo thành công.
Tập tin ghichu.txt được ghi nội dung.
Tập tin được đổi tên thành ghichu_moi.txt.
Nội dung tập tin mới được đọc thành công.
Tập tin tam.txt được tạo và xóa thành công.
Giao diện FILEFLOW hiển thị trạng thái hoàn thành.
6. Hình ảnh minh họa
Ảnh 1 – Kết quả chạy chương trình trên Terminal

!Ảnh 1

Ảnh 2 – Giao diện FILEFLOW trên trình duyệt

!Ảnh 2

Ảnh 3 – Kết quả trong thư mục data

!Ảnh 3

Lưu ý: Tạo thư mục images trong Bt08 và thêm ảnh chụp thực tế vào đúng tên file phía trên.

7. Kết luận

Qua bài thực hành, em đã hiểu hơn về cách sử dụng module File System trong Node.js, biết cách tạo thư mục, ghi dữ liệu, đổi tên, đọc và xóa tập tin.

Việc kết hợp thêm giao diện HTML và CSS giúp kết quả thực hành dễ quan sát và trực quan hơn.

Người thực hiện: Nguyễn Thành Danh
Bài thực hành 08 – Node.js