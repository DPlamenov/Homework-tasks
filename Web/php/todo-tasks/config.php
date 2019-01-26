<?php
include 'db.php';
session_start();
$dbc = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME);
function pageHeader($title)
{
    echo "<!DOCTYPE html>
<html lang=\"en\">
<head>
    <meta charset=\"UTF-8\">
    <title>$title</title>
</head>
<body>
";
}

function pageFooter()
{
    echo "</body>
</html>";
}