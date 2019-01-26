<?php
include_once "config.php";
pageHeader("Register");
if (isset($_POST['ok'])) {

    $username = trim($_POST['username']);
    $password = trim($_POST['password']);
    $sql = "INSERT INTO `todo_users`(`username`, `password`) VALUES ('".$username."','".$password."')";

    if(mysqli_query($dbc, $sql)){
        $_SESSION['islog'] = true;
        $_SESSION['user_id'] = mysqli_insert_id($dbc);
        $_SESSION['username'] = $username;
        header("Location: index.php");
        exit;
    }else{
        echo "Error";
    }

}









?>
<h4>Register</h4>
<form method="post">
    <input type="text" placeholder="Username" name="username"/>
    <input type="text" placeholder="Password" name="password"/>
    <input type="submit" name="ok" />
</form>
<?php
pageFooter();
