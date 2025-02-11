var x = 100; // Khai báo biến x ở phạm vi toàn cục

function varDemo() {
    console.log("x", x); // Sử dụng biến toàn cục x
}

// Thực thi hàm
varDemo();

// Sử dụng x từ bên ngoài hàm
console.log("x", x); // Không lỗi, vì x được khai báo ở phạm vi toàn cục
