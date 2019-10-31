<?php
    /* 
    * This file fetches the id = 28 - 36 which stands for the Lightning dragon,
    * BETWEEN command means that all id between 28 and 36 will be displayed
    * BETWEEN 28 means that the command starts from id 28, 
    * AND command is the end to the BETWEEN command, meaning it ends at 36.
    * just in case I took limit on just 9 so the server won´t fetch more than 9.
    */
    include_once 'database.php';
    $statement = $pdo->prepare("SELECT * FROM skills WHERE id BETWEEN 28 AND 36 LIMIT 9");
    $statement->execute();
    $data = $statement->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($data, JSON_PRETTY_PRINT);
?>