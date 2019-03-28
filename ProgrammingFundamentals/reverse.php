<?php
$n = intval(readline());
$nums = [];
for ($i = 0; $i <= $n - 1; $i++) {
    $current = intval(readline());
    $nums[$i] = $current;
}
$nums = array_reverse($nums);
foreach ($nums as $num){
    echo $num . ' ';
}