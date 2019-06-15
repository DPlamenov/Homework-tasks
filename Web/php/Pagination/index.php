<?php
require 'config.php';

if (isset($_GET['page'])) {
    $page = $_GET['page'];
} else {
    $page = 1;
}


if (isset($_GET['per_page'])) {
    $perPage = $_GET['per_page'];
    $products = getProducts($dbc, ($page - 1) * $perPage, $perPage);
    $i = 0;
    foreach ($products as $product) {
        $i++;
        echo $i;
        echo $product['product_title'] . '<br>';
    }
} else {
    $perPage = 10;
    $products = getProducts($dbc, ($page - 1) * $perPage, $perPage);
    $i = 0;
    foreach ($products as $product) {
        $i++;
        echo $i;
        echo $product['product_title'] . '<br>';
    }
}

?>
<div>
    <form action="index.php" method="get">
        <label>
            On page
            <select name="per_page">
                <?php
                foreach (getPerPage() as $perPage_) {
                    if ($perPage_ == $_GET['per_page']) {
                        echo '<option selected>' . $perPage_ . '</option>';
                    } else {
                        echo '<option>' . $perPage_ . '</option>';
                    }
                }
                ?>
            </select>
        </label>
        <button type="submit">Submit</button>
    </form>
</div>
<?php

$last_page = lastPage($dbc, $perPage);
if (!($page - 1 <= 0)) {
    echo '<a href="?per_page=' . $perPage . '&page=' . ($page - 1) . '">Prev</a>';
}
echo '<br>';


if (!($page + 1 > $last_page)) {
    echo '<a href="?per_page=' . $perPage . '&page=' . ($page + 1) . '">Next</a>';
}
echo '<br>';
echo '<p><a href="?per_page=' . $perPage . '&page=1">First</a></p>';

echo '<p><a href="?per_page=' . $perPage . '&page=' . $last_page . '">Last</a></p>';
?>


