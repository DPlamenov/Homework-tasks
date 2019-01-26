<?php
$age = intval(readline());
if($age <= 2){
    echo 'baby';
}elseif ($age <= 13){
    echo 'child';
}elseif ($age <= 19){
    echo 'teenager';
}elseif ($age <= 65) {
    echo 'adult';
}else{
    echo 'elder';

}
