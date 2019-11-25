<?php
    /* 
    * This file fetches all the MainMenu/Submenu buttons from the Mysql
    * database table menus and order the buttons by id. 
    */
    include_once 'database.php';
    $statement = $pdo->prepare("SELECT * FROM menus ORDER BY id ASC");
    $statement->execute();
    $data = $statement->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($data, JSON_PRETTY_PRINT);
?>