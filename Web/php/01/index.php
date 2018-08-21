<?php
require_once 'config.php';
?>
<a href="new.php">Добави нов разход</a>
<form>
    <select>
        <option>Всички</option>
        <?php
        foreach ($types as $type){
            echo "<option>".$type."</option>";
        }

        ?>
    </select>
    <input type="submit" name="ok"/>
</form>
<?php
//TODO LIST PARSED DATA