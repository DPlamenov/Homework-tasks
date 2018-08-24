<?php
require_once 'config.php';
?>
    <a href="index.php">Разходи</a>
    <form method="post">
        <input type="text" name="razhod" placeholder="Разхода"/>
        <br>
        <input type="text" name="cena" placeholder="Цена"/>
        <label>
            <select name="tip">
                <?php
                foreach ($types as $key => $type) {
                    echo "<option value = '" . $key . "'>" . $type . "</option>";
                }

                ?>
            </select>
        </label>
        <input type="submit" name="ok"/>
    </form>
<?php
if (isset($_POST['razhod'])) {
    $razhod = trim($_POST['razhod']);
    $cena = trim($_POST['cena']);
    $tip = trim($_POST['tip']);
    //TODO ADD TO DATABASE
    header("Location: index.php");
    exit;
}
