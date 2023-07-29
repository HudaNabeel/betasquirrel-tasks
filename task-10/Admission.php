<?php
require('db.php');
require('head.php');
?>




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
                <h2><u>Student Registration</u></h2>
            </div>
            <div>
                <?php
                // Variable for storing from data
                $isError = false;
                $firstName = '';
                $lastName = '';
                $mobile = '';
                $email = '';
                $branch = '';
                $address = '';
                $hostelFacility = 0;


                // Variable for storing error
                $firstNameError = '';
                $lastNmeError = '';
                $mobileError = '';
                $branchError = '';
                $addressError = '';

                // Execute this code on form submit
                if ($_SERVER['REQUEST_METHOD'] === 'POST') {
                    // Sanitize all user input data to ensure security and integrity
                    $firstName = sanitizeField($_POST['first_name']);
                    $lastName = sanitizeField($_POST['last_name']);
                    $mobile = sanitizeField($_POST['mobile']);
                    $email = sanitizeField($_POST['email']);
                    $branch = sanitizeField($_POST['branch']);
                    $address = sanitizeField($_POST['address']);
                    $hostelFacility = sanitizeField($_POST['hostel_facility']);

                    // Validate data
                    if (empty($firstName)) {
                        $firstNameError = 'First Name is mandatory!';
                        $isError = true;
                    }

                    if (empty($lastName)) {
                        $LastNameError = 'Last Name is mandatory!';
                        $isError = true;
                    }

                    if (empty($mobile)) {
                        $mobileError = 'Mobile Number is mandatory!';
                        $isError = true;
                    }

                    if (empty($email)) {
                        $emailError = 'Email Address is mandatory!';
                        $isError = true;
                    }

                    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                        $emailError = "invalid email format";
                        $isError = true;
                    }

                    if (empty($branch)) {
                        $branchError = 'Branch is mandatory!';
                        $isError = true;
                    }

                    if (empty($address)) {
                        $addressError = 'Address is mandatory!';
                        $isError = true;
                    }
                    // Insert to database for validation
                    if (!$isError) {
                        $sql = "INSERT INTO students ( `first_name`, `last_name`, `mobile`,`email`, `branch`,   `is_hostel_opted`, `additional_subjects `, `address`, ) VALUES ('" . $firstName . "', '" . $lastName . "', '" . $mobile . "', '" . $email . "', '" . $branch . "', '" . $hostelFacility . "',  '" . $address . "')";
                        // Redirect to listing page after successful creation
                        if ($conn->query($sql) === TRUE) {
                            header("Location: index.php");
                        } else {
                            echo $conn->error;
                        }
                    }
                    // Close database connection after use
                    $conn->close();
                }
                // Function to sanitize variables
                function sanitizeField($field)
                {
                    $field = trim($field);
                    $field = stripcslashes($field);
                    $field = htmlspecialchars($field);
                    return $field;
                }
                ?>
            </div>
            <div class="form-container">
                <form method="POST" action="<?php echo $_SERVER['PHP_SELF']; ?>" novalidate>
                    <div class="row-container">
                        <div class="input-container"></div>
                        <div class="input-container"></div>
                    </div>


                    <div class="row-container">
                        <!-- First Name -->
                        <div class="input-container">
                            <label for="first-name">
                                First Name <span class="red-text">*</span> :
                            </label>
                            <input type="text" name="first_name" required id="first_name" placeholder="Enter your first name" value="<?php echo $firstName; ?>" class="<?php echo isset($firstNameError) && !empty($firstNameError) ? 'error-input' : ''; ?>" />
                            <?php if (isset($firstNameError) && !empty($firstNameError)) { ?>
                                <div class="error">
                                    <?php echo $firstNameError; ?>
                                </div>
                            <?php  } ?>

                        </div>
                        <!-- last Name -->
                        <div class="input-container">
                            <label for="last-name">
                                Last Name <span class="red-text">*</span> :
                            </label>
                            <input type="text" name="last_name" required id="last_name" placeholder="Enter your last name" value="<?php echo $lastName; ?>" class="<?php echo isset($lastNameError) && !empty($lastNameError) ? 'error-input' : ''; ?>" value="<?php echo $lastName; ?>" />
                            <?php if (isset($lastNameError) && !empty($lastNameError)) { ?>
                                <div class="error">
                                    <?php echo $lastNameError; ?>
                                </div>
                            <?php  } ?>
                        </div>
                    </div>
                    <div class="row-container">
                        <!-- Mobile Number -->
                        <div class="input-container">
                            <label for="mobile">
                                Mobile <span class="red-text">*</span> :
                            </label>
                            <input type="tel" name="mobile" id="mobile" required pattern="[6-9]{1}[0-9]{9}" placeholder="[6-9]00000000" class="<?php echo isset($mobileError) && !empty($mobileError) ? 'error-input' : ''; ?>" value="<?php echo $mobile; ?>" />
                            <?php if (isset($mobileError) && !empty($mobileError)) { ?>
                                <div class="error">
                                    <?php echo $mobileError; ?>
                                </div>
                            <?php  } ?>
                        </div>
                        <div class="row-container">
                            <!-- Email -->
                            <div class="input-container">
                                <label for="email">
                                    Email <span class="red-text">*</span> :
                                </label>
                                <input type="email" name="email" id="email" required placeholder="Enter your email address" class="<?php echo isset($emailError) && !empty($emailError) ? 'error-input' : ''; ?>" value="<?php echo $email; ?>" />
                                <?php if (isset($emailError) && !empty($emailError)) { ?>
                                    <div class="error">
                                        <?php echo $emailError; ?>
                                    </div>
                                <?php  } ?>
                            </div>
                        </div>
                        <div class="row-container">
                            <!-- Branch -->
                            <div class="input-container">
                                <label for="branch">Branch<span class="red-text">*</span> :
                                </label>
                                <select name="branch" id="branch" required class="<?php echo isset($branchError) && !empty($branchError) ? 'error-input' : ''; ?>">
                                    <option value=''>Select branch you like</option>
                                    <option value="Computer Science">Computer Science</option>
                                    <option value="Electronics">Electronics</option>
                                    <option value="Mechanical">Mechanical</option>
                                </select>
                                <?php if (isset($branchError) && !empty($branchError)) { ?>
                                    <div class="error">
                                        <?php echo $branchError; ?>
                                    </div>
                                <?php  } ?>
                            </div>
                            <!-- Hostel -->
                            <div class="input-container">
                                <label>Do you need hostel facility:</label>
                                <label class="wrapper">
                                    <input type="radio" name="hostel_facility" value="1" <?php echo $hostelFacility == 1 ? 'checked' : ''; ?>>
                                    Yes
                                </label>
                                <label class="wrapper">
                                    <input type="radio" name="hostel_facility" value="0" <?php echo $hostelFacility == 0 ? 'checked' : ''; ?>>
                                    No
                                </label>
                            </div>
                        </div>

                        <div class="row-container">
                            <!-- Address -->
                            <div class="input-container">
                                <label for="address">
                                    Permanent Address <span class="red-text">*</span> :
                                </label>
                                <textarea name="address" required id="address" rows="5" placeholder="Enter  address" class="<?php echo isset($addressError) && !empty($addressError) ? 'error-input' : ''; ?>"><?php echo $address; ?></textarea>
                                <?php if (isset($addressError) && !empty($addressError)) { ?>
                                    <div class="error">
                                        <?php echo $addressError; ?>
                                    </div>
                                <?php  } ?>
                            </div>
                        </div>
                        <!-- Submit -->
                        <div class="row-container btn-container">
                            <button type="submit" class="button-save">Save</button>
                        </div>
                </form>
            </div>
        </div>
    </div>
    <script src="js/script.js"></script>

</body>

</html>