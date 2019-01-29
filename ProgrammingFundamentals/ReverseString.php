<?php
$string = readline();
for($i = 0; $i <= strlen($string) - 1; $i++){
    echo $string[strlen($string) - $i - 1];
}