<?php
    /* 
    * This file fetches the id = 43,44,45,46,47,48 and 49 which stands for the Earth dragon,
    * just in case I took limit on just 7 so the server won´t fetch more than 7.
    */
    include_once 'database.php';
    $statement = $pdo->prepare("SELECT * FROM skills WHERE id IN (43,44,45,46,47,48,49) LIMIT 7");
    $statement->execute();
    $data = $statement->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($data, JSON_PRETTY_PRINT);
?>