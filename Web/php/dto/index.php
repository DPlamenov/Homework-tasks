<?php
spl_autoload_register();
/**
 * @var $subject \DTO\SubjectDTO
 */
$dsn = 'mysql:host=localhost;dbname=gt3';
$username = 'root';
$password = '';
$database = new \Database\PDODatabase(new PDO($dsn, $username, $password));
$stmt = $database->query('SELECT * FROM `subjects`');
$result = $stmt->execute();
$subject = $result->getOne(\DTO\SubjectDTO::class);
var_dump($subject);
echo $subject->getSubjectName();