<?php
$n = intval(readline());
$a = intval(readline());
if($a == 1){
    for ($i = 1; $i <= 10; $i++) {
        echo "$n X $i = " . $n * $i .PHP_EOL;
    }
}elseif ($a <= 10){
    for ($i = $a; $i <= 10; $i++) {
        echo "$n X $i = " . $n * $i .PHP_EOL;
    }
}else{
    echo "$n X $a = " . $n * $a .PHP_EOL;
}