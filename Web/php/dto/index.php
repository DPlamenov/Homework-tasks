<?php
spl_autoload_register();
$dsn = 'mysql:host=localhost;dbname=gt3';
$username = 'root';
$password = '';
$database = new \Database\PDODatabase(new PDO($dsn, $username, $password));
$stmt = $database->query('SELECT * FROM `subjects`');
$result = $stmt->execute();

$result->getOne(\DTO\SubjectDTO::class);