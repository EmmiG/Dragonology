<?php
    /* 
    * This file fetches the id = 11,12,13 and 14 which stands for the Brass dragon,
    * just in case I took limit on just 4 so the server won´t fetch more than 4.
    */
    include_once 'database.php';
    $statement = $pdo->prepare("SELECT * FROM skills WHERE id IN (11,12,13,14) LIMIT 4");
    $statement->execute();
    $data = $statement->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($data, JSON_PRETTY_PRINT);
?>