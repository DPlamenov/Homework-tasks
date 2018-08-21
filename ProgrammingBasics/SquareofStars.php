<?php

$num = intval(trim(fgets(STDIN)));
for ($i = 1; $i <= $num; $i++) {
    echo "*";
}
echo PHP_EOL;
for ($x = 1; x <= $num - 2; $x++) {
    echo "*";
    for ($i = 1; $i <= $num - 2; $i++) {
        echo " ";
    }
    echo "*";
    echo " ";
}

for ($i = 1; $i <= $num; $i++) {
    echo "*";
}

echo "";