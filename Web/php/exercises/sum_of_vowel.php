<?php
$string = readline();
$sum = 0;
for ($i = 0; $i < mb_strlen($string); $i++){
    if($string[$i] == 'a'){
        $sum += 1;
    }
    if($string[$i] == 'e'){
        $sum += 2;
    }
    if($string[$i] == 'i'){
        $sum += 3;
    }
    if($string[$i] == 'o'){
        $sum += 4;
    }
    if($string[$i] == 'u'){
        $sum += 5;
    }
}
echo $sum;