<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "school";

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("connection failed; " . $conn->connect_error);
}

?>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>task 10</title>
    <link rel="stylesheet" href="css/style.css">
</head>

<body>
    <div class="navbar">
        <div class="logo-container">
            <img src="images/figma.jpg" alt="logo">
            <h3>One School</h3>
        </div>
        <div class="profile-container">
            <img src="images/profile.jpg" alt="profile">
        </div>
    </div>
    <div class="sidebar">
        <nav>
            <a href="#" class="flex">
                <!-- <img src="images/student.png" alt="student" /> -->
                <i class="fa-solid fa-user"></i>
                <span>Students</span>
            </a>
            <a href="#" class="flex">
                <!-- <img src="images/staff.png" alt="staff" /> -->
                <i class="fa-solid fa-chalkboard-user"></i>
                <span>Staff</span>
            </a>
            <a href="#" class="flex">
                <!-- <img src="images/exam.png" alt="exam"> -->
                <i class="fa-solid fa-graduation-cap"></i>
                <span>Exams</span>
            </a>
        </nav>
    </div>
    <div class="container">
        <div class="content">
            <div class="heading">
                <h2><u> View student details</u></h2>
            </div>
            <div>
                <?php
                if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['id'])) {
                    $id = $_GET['id'];
                } else {
                    $id = false;
                }

                if (!$id && $_SERVER['REQUEST_METHOD'] === 'GET') {
                    header("Location: index.php");
                } else {
                    $isError = false;
                    if ($_SERVER['REQUEST_METHOD'] === 'GET') {
                        $sql = "SELECT * FROM students WHERE id = '$id'";

                        $result = $conn->query($sql);
                        $row = $result->fetch_assoc();

                        $firstName = $row['first_name'];
                        $lastName = $row['last_name'];
                        $mobile = $row['mobile'];
                        $email = $row['email'];
                        $branch = $row['branch'];
                        $address = $row['address'];
                        $additionalSubjects = json_decode($row['additional_subjects']);
                        $hostelFacility = $row['is_hostel_opted'];
                    }
                    $conn->close();
                }
                ?>

            </div>
            <div class="form-container">

                <div class="row-container">
                    <div class="input-container"></div>
                    <div class="input-container"></div>
                </div>

                <div class="row-container">
                    <div class="input-container">
                        <label for="first_name">
                            First Name :
                        </label>
                        <p><?php echo $firstName; ?></p>
                    </div>
                    <div class="input-container">
                        <label for="last_name">
                            Last Name :
                        </label>
                        <p><?php echo $lastName; ?></p>
                    </div>
                </div>
                <div class="row-container">
                    <div class="input-container">
                        <label for="mobile">Mobile :</label>
                        <p><?php echo $mobile; ?></p>
                    </div>
                    <div class="input-container">
                        <label for="email">Email :</label>
                        <p><?php echo $email; ?></p>
                    </div>
                </div>
                <div class="row-container">
                    <div class="input-container">
                        <label for="branch">Branch :</label>
                        <p><?php echo $branch; ?></p>
                    </div>
                    <div class="input-container">
                        <label>Opted for hostel facility :</label>
                        <p><?php echo $hostelFacility == 1 ? 'Yes' : 'No'; ?></p>
                    </div>
                </div>

                <div class="row-container">
                    <div class="input-container">
                        <label for="address">
                            Permanent Address :
                        </label>
                        <p><?php echo $address; ?></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="js/script.js"></script>
</body>