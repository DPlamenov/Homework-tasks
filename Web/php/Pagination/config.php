<?php
$dbc = mysqli_connect('localhost', 'root', '', 'products');
function getProducts($dbc, int $start, int $end)
{
    $products = mysqli_query($dbc, sprintf("SELECT * FROM `products` LIMIT %d, %d", $start, $end));
    while ($product = mysqli_fetch_assoc($products)) {
        yield $product;
    }
}

function getPerPage()
{
    return ['10', '20'];
}

function lastPage($dbc, $perPage)
{
    $products = mysqli_query($dbc, 'SELECT * FROM products');
    $products_count = mysqli_num_rows($products);
    return ceil($products_count / $perPage);
}