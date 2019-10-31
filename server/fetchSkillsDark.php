<?php
    /* 
    * This file fetches the id = 70 - 78 which stands for the Dark dragon,
    * BETWEEN command means that all id between 70 and 78 will be displayed
    * BETWEEN 70 means that the command starts from id 70, 
    * AND command is the end to the BETWEEN command, meaning it ends at 78.
    * just in case I took limit on just 9 so the server won´t fetch more than 9.
    */
    include_once 'database.php';
    $statement = $pdo->prepare("SELECT * FROM skills WHERE id BETWEEN 70 AND 78 LIMIT 9");
    $statement->execute();
    $data = $statement->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($data, JSON_PRETTY_PRINT);
?>