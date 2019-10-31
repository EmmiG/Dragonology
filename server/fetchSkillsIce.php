<?php
    /* 
    * This file fetches the id = 37,38,39,40,41 and 42 which stands for the Ice dragon,
    * just in case I took limit on just 6 so the server won´t fetch more than 6.
    */
    include_once 'database.php';
    $statement = $pdo->prepare("SELECT * FROM skills WHERE id IN (37,38,39,40,41,42) LIMIT 6");
    $statement->execute();
    $data = $statement->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($data, JSON_PRETTY_PRINT);
?>