<?php
$string = strtolower(readline());
foreach (str_split($string) as $key =>$chr){
	$ord = ord($chr) - 97;
   echo $string[$key] . ' -> '. $ord  . PHP_EOL;
}
