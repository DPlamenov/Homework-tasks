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
    ?>
    <span>Logged</span>
    <a href="logout.php">Logout</a>
    <?php
}


if (isset($_POST['username'])) {
    $username = trim($_POST['username']);
    $password = trim($_POST['password']);

    if ($username == "user" && $password == "qwerty") {
        $_SESSION['islogged'] = true;
        header("Location: index.php");
    }
}
