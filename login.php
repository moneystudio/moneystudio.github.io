<?php
session_start();
$conn = new mysqli("localhost", "root", "", "users_db");

if ($conn->connect_error) {
    die("MySQL ulanishda xatolik: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];
    $password = $_POST["password"];

    $stmt = $conn->prepare("SELECT password FROM users WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        $stmt->bind_result($hashed_password);
        $stmt->fetch();

        if (password_verify($password, $hashed_password)) {
            $_SESSION["email"] = $email;
            echo "Kirish muvaffaqiyatli!";
        } else {
            echo "Xatolik: Parol noto‘g‘ri!";
        }
    } else {
        echo "Xatolik: Ushbu email ro‘yxatdan o‘tmagan!";
    }

    $stmt->close();
}

$conn->close();
?>
