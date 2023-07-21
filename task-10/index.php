<?php
require('db.php');
require('head.php');
?>





<html>


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
    <div class="content">
        <div class="heading">
            <h2>Students</h2>
            <a href="Admission.php " class="link-btn">Add Student</a>
        </div>

        <div class="table-container">
            <table class="List-table">
                <tr>
                    <th>R. No</th>
                    <th>Full Name</th>
                    <th>Branch</th>
                    <th>Mobile</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
                <?php
                $sql = "SELECT * FROM students";
                $result = $conn->query($sql);


                if ($result->num_rows > 0) {

                    while ($row = $result->fetch_assoc()) { ?>
                        <tr>
                            <td><?php echo $row[`id`]; ?></td>
                            <td><?php echo $row[`first_name`] . `` . $row[`last_name`]; ?></td>
                            <td><?php echo $row[`branch`]; ?></td>
                            <td><?php echo $row[`mobile`]; ?></td>
                            <td><?php echo $row[`email`]; ?></td>
                            <td>

                                <a class="button" href="edit.php?id=<?php echo $row[`id`]; ?>">
                                    <i class="fa-solid fa-pencil"></i>
                                </a>
                                <a class="button" href="view.php?id=<?php echo $row[`id`]; ?>">
                                    <i class="fa-solid fa-eye"></i>
                                </a>
                                <a class="button" href="delete.php?id=<?php echo $row[`id`]; ?>">
                                    <i class="fa-solid fa-trash"></i>
                                </a>
                            </td>
                        </tr>
                    <?php }
                } else { ?>
                    <tr>
                        <td colspan="6">No Records Found</td>
                    </tr>
                <?php
                }

                $conn->close();
                ?>
            </table>
        </div>
    </div>
    <script src="js/script.js"></script>
</body>

</html>