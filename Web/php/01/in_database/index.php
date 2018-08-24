<?php
require_once 'config.php';
?>
    <a href="new.php">Добави нов разход</a>
    <form>
        <label>
            <select name="tip">
                <option>Всички</option>
				<?php
				foreach ($types as $type) {
					echo "<option>" . $type . "</option>";
				}

				?>
            </select>
        </label>
        <input type="submit" name="ok"/>
    </form>
    <table>
        <tr>
            <td>Разход</td>
            <td>Цена</td>
            <td>Тип</td>
        </tr>
<?php
$rows = $dbc->query("SELECT * FROM `rows`");
$suma = 0;
foreach ($rows as $line) {

	$razhod = $line["name"];
	$cena = $line["price"];
	$tip = $line["category"];
	$suma += doubleval($cena);
	echo '<tr><td>' . $razhod . '</td><td>' . $cena . '</td><td>' . $types[intval($tip)] . '</td></tr>';
}
echo "</table>";
echo "Сума: " . "$" . $suma;
