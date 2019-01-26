<?php
$peoples = intval(readline());
$people_type = readline();
$day_of_week = readline();
$total_price = 0.0;

if ($people_type == 'Students') {
    if ($peoples >= 30) {
        if ($day_of_week == 'Friday') {
            $price = 8.45 * $peoples;
            $total_price = $price - ($price * 15 / 100);
        } elseif ($day_of_week == 'Saturday') {
            $price = 9.80 * $peoples;
            $total_price = $price - ($price * 15 / 100);
        } elseif ($day_of_week == 'Sunday') {
            $price = 10.46 * $peoples;
            $total_price = $price - ($price * 15 / 100);
        }
    } else {
        if ($day_of_week == 'Friday') {
            $total_price = 8.45 * $peoples;
        } elseif ($day_of_week == 'Saturday') {
            $total_price = 9.80 * $peoples;
        } elseif ($day_of_week == 'Sunday') {
            $total_price = 10.46 * $peoples;
        }
    }
} elseif ($people_type == 'Business') {
    if ($peoples >= 100) {
        $peoples = $peoples - 10;
        if ($day_of_week == 'Friday') {
            $total_price = 10.90 * $peoples;
        } elseif ($day_of_week == 'Saturday') {
            $total_price = 15.60 * $peoples;
        } elseif ($day_of_week == 'Sunday') {
            $total_price = 16 * $peoples;
        }
    } else {
        if ($day_of_week == 'Friday') {
            $total_price = 10.90 * $peoples;
        } elseif ($day_of_week == 'Saturday') {
            $total_price = 15.60 * $peoples;
        } elseif ($day_of_week == 'Sunday') {
            $total_price = 16 * $peoples;
        }
    }
} elseif ($people_type == 'Regular') {
    if ($peoples >= 10 && $peoples <= 20) {
        if ($day_of_week == 'Friday') {
            $price = 15 * $peoples;
            $total_price = $price - ($price * 5 / 100);
        } elseif ($day_of_week == 'Saturday') {
            $price = 20 * $peoples;
            $total_price = $price - ($price * 5 / 100);
        } elseif ($day_of_week == 'Sunday') {
            $price = 22.50 * $peoples;
            $total_price = $price - ($price * 5 / 100);
        }
    } else {
        if ($day_of_week == 'Friday') {
            $total_price = 15 * $peoples;
        } elseif ($day_of_week == 'Saturday') {
            $total_price = 20 * $peoples;
        } elseif ($day_of_week == 'Sunday') {
            $total_price = 22.50 * $peoples;
        }
    }
}

echo "Total price: ".number_format($total_price, 2);