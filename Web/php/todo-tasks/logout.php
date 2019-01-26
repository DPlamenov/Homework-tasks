<?php
session_start();
$_SESSION['islog'] = false;
header("Location: index.php");