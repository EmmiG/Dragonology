<?php
    /* 
    * This file fetches the id = 8 which stands for the Earth dragon,
    * just in case I took limit on just 1. The database stats 1 - 8 which
    * means the Name - Nesting columns. The stats will be in the Stats container
    * according to the mockup. 
    */
    include_once 'database.php';
    $statement = $pdo->prepare("SELECT * FROM dragons WHERE id = 8 LIMIT 1");
    $statement->execute();
    $data = $statement->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($data, JSON_PRETTY_PRINT);
?>