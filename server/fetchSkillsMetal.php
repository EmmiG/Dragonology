<?php
    /* 
    * This file fetches the id = 79 - 88 which stands for the Metal dragon,
    * BETWEEN command means that all id between 79 and 88 will be displayed
    * BETWEEN 79 means that the command starts from id 79, 
    * AND command is the end to the BETWEEN command, meaning it ends at 88.
    * just in case I took limit on just 10 so the server won´t fetch more than 10.
    */
    include_once 'database.php';
    $statement = $pdo->prepare("SELECT * FROM skills WHERE id BETWEEN 79 AND 88 LIMIT 10");
    $statement->execute();
    $data = $statement->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($data, JSON_PRETTY_PRINT);
?>