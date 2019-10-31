<?php
    /* 
    * This file fetches the id = 58 - 69 which stands for the Bronze dragon,
    * BETWEEN command means that all id between 58 and 69 will be displayed
    * BETWEEN 58 means that the command starts from id 58, 
    * AND command is the end to the BETWEEN command, meaning it ends at 69.
    * just in case I took limit on just 12 so the server won´t fetch more than 12.
    */
    include_once 'database.php';
    $statement = $pdo->prepare("SELECT * FROM skills WHERE id BETWEEN 58 AND 69 LIMIT 12");
    $statement->execute();
    $data = $statement->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($data, JSON_PRETTY_PRINT);
?>