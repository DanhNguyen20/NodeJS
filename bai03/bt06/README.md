BÀI 06: THỰC HÀNH MODULE VỚI NODE.JS
1. Giới thiệu

Bài tập thực hành xây dựng chương trình quản lý kết quả học tập đơn giản bằng JavaScript và Node.js.

Chương trình thực hiện tính điểm trung bình 3 môn Toán, Lý, Hóa và xếp loại học lực cho 3 sinh viên.

2. Công cụ sử dụng
Visual Studio Code.
Node.js.
JavaScript.
Terminal (PowerShell).
3. Các tập tin trong bài

bai06.js: Chứa chương trình chính, tạo danh sách sinh viên, gọi các hàm xử lý điểm và hiển thị kết quả.

xulyDiem.js: Chứa hai hàm:

tinhDiemTB(): Tính điểm trung bình 3 môn.
xepLoai(): Xác định học lực dựa trên điểm trung bình.

Hai hàm được xuất bằng module.exports để sử dụng ở tập tin khác.

4. Quy tắc xếp loại
Điểm trung bình	Học lực
Từ 8 trở lên	Giỏi
Từ 6.5 đến dưới 8	Khá
Từ 5 đến dưới 6.5	Trung bình
Dưới 5	Yếu
5. Các bước thực hiện

Bước 1: Kiểm tra phiên bản Node.js.

bash
node -v


Bước 2: Mở Terminal tại thư mục chứa bài tập.

Bước 3: Chạy chương trình bằng lệnh:

bash
node bai06.js


Bước 4: Quan sát kết quả tính điểm và xếp loại của các sinh viên trên Terminal.

6. Hình ảnh minh chứng
Hình 1: Cấu trúc thư mục bài tập

!Cấu trúc thư mục

Hình 2: Nội dung chương trình bai06.js

!Code bai06.js

Hình 3: Nội dung chương trình xulyDiem.js

!Code xulyDiem.js

Hình 4: Kết quả chạy chương trình

!Kết quả Terminal

7. Kết quả thực hiện

Chương trình đã chạy thành công và đưa ra kết quả:

Pham Minh Thu: Điểm trung bình 8.83 - Giỏi.
Nguyen Hoang Nam: Điểm trung bình 6.83 - Khá.
Tran Gia Bao: Điểm trung bình 4.50 - Yếu.
8. Kết luận

Sau khi hoàn thành bài thực hành, em đã biết cách tạo module trong Node.js, sử dụng module.exports để xuất hàm và require() để gọi hàm từ tập tin khác.

Đồng thời, em đã vận dụng kiến thức JavaScript để xây dựng chương trình tính điểm trung bình và xếp loại học tập cho sinh viên.

Bài thực hành 06 đã hoàn thành.