<?php
session_start();
if (@$_SESSION['islogged'] != true) {
    ?>
    <form method="post">
        <input type="text" placeholder="username" name="username"/>
        <input type="text" placeholder="password" name="password"/>

        <input type="submit"/>
    </form>
    <?php
}else{
    header('Location: files.php');
}


if (isset($_POST['username'])) {
    $username = trim($_POST['username']);
    $password = trim($_POST['password']);

    if ($username == "user" && $password == "qwerty") {
        $_SESSION['islogged'] = true;
        header("Location: files.php");
    } else {
        echo 'Error username or password.';
    }
}
