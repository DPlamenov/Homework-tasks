<?php
include_once "config.php";

if (isset($_POST['ok'])) {

    $username = trim($_POST['username']);
    $password = trim($_POST['password']);
    $sql = "SELECT * FROM `todo_users` WHERE `username` = '" . $username . "' AND
    `password` = '" . $password . "'";
    $user = mysqli_query($dbc, $sql);
    $_SESSION['user_id'] = mysqli_fetch_assoc($user)['user_id'];
    if (mysqli_num_rows($user) == 1) {

        $_SESSION['username'] = $username;


        $_SESSION['islog'] = true;
    } else {
        echo "There is no such user in the database";
    }
}

pageHeader("Home");
if (@$_SESSION['islog'] != true) {
    ?>
    <a href="register.php">Register</a>
    <h1 style="font-size: medium">Login</h1>
    <form method="post">
        <input type="text" placeholder="Username" name="username"/>
        <input type="text" placeholder="Password" name="password"/>
        <input type="submit" name="ok" value="Log in"/>
    </form>

    <?php
} else {
    ?>
    <a href="logout.php">Log out</a>
    <p>Welcome, <?= $_SESSION['username'] ?></p>
    <p>ID: <?= $_SESSION['user_id'] ?></p>
    <h4>Add tasks</h4>
    <form>
        <input type="text" name="todo_name" placeholder="Name"/>
        <input type="submit" name="todo_ok" />
    </form>
    <?php
}


pageFooter();