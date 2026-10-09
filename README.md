# ARITO Webinar — Tái định vị thu mua

Landing page tĩnh được xây dựng bằng HTML, CSS và JavaScript thuần.

## Chạy trên máy local

Mở `index.html` trực tiếp trong trình duyệt. Không cần cài package hoặc build project.

## Cấu trúc

```text
landing page thu mua/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── images/
│   ├── arito-logo.png
│   └── diễn giả.png
└── README.md
```

## Phần đang ở chế độ demo / chờ tài nguyên

- Form có kiểm tra dữ liệu phía trình duyệt nhưng chưa gửi hoặc lưu thông tin. Khi submit hợp lệ, trang sẽ hiển thị rõ trạng thái chưa kết nối hệ thống.
- Có sẵn vùng trạng thái thành công và liên kết nhóm Zalo để nối vào sau khi backend xác nhận lưu đăng ký.
- URL chính sách bảo mật chưa được cung cấp nên hiện có ghi chú placeholder.
- Font Montserrat tải từ Google Fonts; nếu không có mạng, trang dùng font dự phòng hệ thống.

## Responsive

CSS có breakpoint cho màn hình tablet và mobile, cùng hỗ trợ `prefers-reduced-motion`. Bố cục được khai báo theo hướng co giãn; cần xem trực tiếp trên trình duyệt ở các kích thước mục tiêu trước khi bàn giao cuối.
