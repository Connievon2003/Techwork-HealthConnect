<!DOCTYPE html>
<html>

<head>
  <title>Login Form</title>
  <link rel="stylesheet" href="style.css"
</head>

<body>
<a href="calendar.php">Calendar</a>
<a href="notifications.php">Notifications</a>
<a href="BMICalc.php">BMI Calculator</a>
<a href="search.php">Search</a>
<a href="help.php">Help</a>
<a href="signup.php">Sign Up</a>
<a href="login.php">Login</a>

  <div id="logo">
    <h1>Account Registration</h1>
  </div>

</body>

  <form action="includes/signup.inc.php" method="post">
    <input type="text" name="firstname:" placeholder="Enter your first name">
    <br>
    <br>
    <input type="text" name="lastname:" placeholder="Enter your last name">
    <br>
    <br>
    <input type="text" name="dob:" placeholder="Enter your date of birth">
    <br>
    <br>
    <label for="gender">Select your gender:</label>

  <select id="gender" name="gender">
    <option value="male">Male</option>
    <option value="female">Female</option>
    <option value="prefernottosay">Prefer not to say</option>
  </select>
  <br>
  <br>
  <input type="text" name="email" placeholder="Enter your email address">
  <br>
  <br>
  <input type="password" name="password" placeholder="Choose a password">
  <input type="password" name="passwordRepeat" placeholder="Enter password again">
  <br>
  <br>
  <button type="submit" name="signup-submit">Create account</button>
  </form>
  </html>
