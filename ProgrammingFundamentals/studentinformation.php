<?php
$name = readline();
$age = intval(readline());
$grade = doubleval(readline());

$grade = number_format($grade, 2);
$result = "Name: $name, Age: $age, Grade: $grade";
echo $result;