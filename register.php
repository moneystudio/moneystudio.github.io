<?php
session_start();
$conn = new mysqli("localhost", "root", "", "users_db");

if ($conn->connect_error) {
    die("MySQL ulanishda xatolik: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];
    $password = password_hash($_POST["password"], PASSWORD_BCRYPT);

    $stmt = $conn->prepare("INSERT INTO users (email, password) VALUES (?, ?)");
    $stmt->bind_param("ss", $email, $password);

    if ($stmt->execute()) {
        echo "Muvaffaqiyatli ro‘yxatdan o‘tdingiz!";
    } else {
        echo "Xatolik: Ushbu email allaqachon ro‘yxatdan o‘tgan!";
    }

    $stmt->close();
}

$conn->close();
?>
