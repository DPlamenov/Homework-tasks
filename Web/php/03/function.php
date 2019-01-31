<?php
function render_view(string $name, $data){
    include 'templates/header.php';
    include 'templates/' . $name . '.php';
    include 'templates/footer.php';
}