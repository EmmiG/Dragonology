<?php
    /* 
    * This file fetches the id = 50 - 57 which stands for the Light dragon,
    * BETWEEN command means that all id between 50 and 57 will be displayed
    * BETWEEN 50 means that the command starts from id 50, 
    * AND command is the end to the BETWEEN command, meaning it ends at 57.
    * just in case I took limit on just 8 so the server won´t fetch more than 8.
    */
    include_once 'database.php';
    $statement = $pdo->prepare("SELECT * FROM skills WHERE id BETWEEN 50 AND 57 LIMIT 8");
    $statement->execute();
    $data = $statement->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($data, JSON_PRETTY_PRINT);
?>