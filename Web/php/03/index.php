<?php
include "function.php";
session_start();
if(isset($_POST)){

}
if(@$_SESSION['islogged'] !== true){
    $data['page_title'] = 'Login form';
    render_view('login_form', $data);
}