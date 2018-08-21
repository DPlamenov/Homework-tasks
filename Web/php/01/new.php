<?php
require_once 'config.php';
?>
<a href="index.php">Разходи</a>
<form>
    <input type="text" name="razhod" placeholder="Разхода"/>
    <br>
    <input type="text" name="cena" placeholder="Цена"/>
    <select>
        <?php
        foreach ($types as $type){
            echo "<option>".$type."</option>";
        }

        ?>
    </select>
    <input type="submit" name="ok"/>
</form>
<?php
