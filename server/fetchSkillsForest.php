<?php
    /* 
    * This file fetches the id = 20 - 27 which stands for the Forest dragon,
    * BETWEEN command means that all id between 20 and 27 will be displayed
    * BETWEEN 20 means that the command starts from id 20, 
    * AND command is the end to the BETWEEN command, meaning it ends at 27.
    * just in case I took limit on just 8 so the server won´t fetch more than 8.
    */
    include_once 'database.php';
    $statement = $pdo->prepare("SELECT * FROM skills WHERE id BETWEEN 20 AND 27 LIMIT 8");
    $statement->execute();
    $data = $statement->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($data, JSON_PRETTY_PRINT);
?>