<?php
spl_autoload_register(function ($file) {
    include $file.'.php';
});
