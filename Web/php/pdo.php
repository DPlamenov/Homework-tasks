<?php
$user_id = 2;
$db = new PDO('mysql:dbname=database', 'root', '');
$users = $db->prepare('SELECT * FROM `users` WHERE `user_id` = :user_id');
$users->bindParam('user_id', $user_id);
$users->execute();
echo '<pre>' . print_r($users->fetchObject(), true) . '</pre>';
