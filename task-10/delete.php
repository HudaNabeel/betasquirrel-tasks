<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "school";

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("connection failed; " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['id'])) {
    $id = $_GET['id'];
} else {
    $id = false;
}

if (!$id && $_SERVER['REQUEST_METHOD'] === 'GET') {
    header("Location: index.php");
} else {
    if ($_SERVER['REQUEST_METHOD'] === 'GET') {
        $sql = "DELETE FROM students WHERE id = '$id'";
        if ($conn->query($sql) === TRUE) {
            header("Location: index.php");
        } else {
            echo $conn->error;
        }
        $conn->close();
    }
}
