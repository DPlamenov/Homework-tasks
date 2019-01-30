<?php
session_start();
if ($_SESSION['islogged'] != true) {
    header('Location: index.php');
}
?>
<span>Logged</span>
<a href="upload.php">Upload</a>
<a href="logout.php">Logout</a>
<table>
    <tr>
        <th>Name</th>
        <th>Download</th>
    </tr>
    <?php
    $file = file('data.txt');
    foreach ($file as $value) {
        $split_value = explode('|', $value);
        echo '<tr><td>'.$split_value[1].'</td><td><a href="'.$split_value[2].'" download="download">Download</a></td></tr>';
    }
    ?>
</table>