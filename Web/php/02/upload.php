<?php
session_start();
if ($_SESSION['islogged'] != true) {
    header('Location: index.php');
}
if (isset($_FILES['file'])) {
    if (!is_dir('files')) {
        mkdir('files');
    }
    move_uploaded_file($_FILES['file']['tmp_name'], 'files/' . basename($_FILES['file']['name']));
    $data = 'user|' . $_FILES['file']['name'] . '|files/' . $_FILES['file']['name'];

    file_put_contents('data.txt', $data . PHP_EOL, FILE_APPEND);
    header('Location: files.php');
}
?>
<form enctype="multipart/form-data" method="post" action="upload.php">
    <input type="file" name="file"/>
    <input type="submit"/>
</form>
