<?php
$numbers[] = intval(readline());
$numbers[] = intval(readline());
$numbers[] = intval(readline());

foreach (rsort($numbers) as $number){
    echo $number.PHP_EOL;
}