<?php
$n = intval(readline());
$sum = 0;
for ($i = 0; $i <= $n * 2 - 1; $i++) {
    if ($i % 2 != 0) {
        echo $i . PHP_EOL;
        $sum += $i;
    }
}
echo "Sum: $sum";