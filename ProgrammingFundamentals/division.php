<?php
//2, 3, 6, 7, 10
$n = intval(readline());
if ($n % 10 == 0) {
    echo 'The number is divisible by 10';
} elseif ($n % 7 == 0) {
    echo 'The number is divisible by 7';
} elseif ($n % 6 == 0) {
    echo 'The number is divisible by 6';
} elseif ($n % 3 == 0) {
    echo 'The number is divisible by 3';
} elseif ($n % 2 == 0) {
    echo 'The number is divisible by 2';
} else {
    echo 'Not divisible';
}



