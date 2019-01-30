<?php
session_start();
if ($_SESSION['islogged'] != true) {
    header('Location: index.php');
}
?>
<span>Logged</span>
<a href="upload.php">Upload</a>
<a href="logout.php">Logout</a>
<?php
$file = file('data.txt');
    var_dump($file);
?>
