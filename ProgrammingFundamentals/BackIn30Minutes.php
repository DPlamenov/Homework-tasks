<?php
$hours = intval(readline());
$minutes = intval(readline()) + 30;

if($minutes >= 59){
    $hours++;
    $minutes = $minutes - 60;
}
if($hours == 24){
    $hours = 0;
}

if($minutes < 10){
    $minutes = '0'.$minutes;
}
echo $hours . ':' . $minutes;