<?php
$n = fgets(STDIN);
for($i = 1; $i<= $n; $i++){
    echo str_repeat('$ ', $i).PHP_EOL;
}
