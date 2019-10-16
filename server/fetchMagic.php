<?php
    /* 
    * This file fetches the id = 1,2,3,4 and 5 which stands for the Water dragon,
    * just in case I took limit on just 5 so the server won´t fetch more than 5.
    */
    include_once 'database.php';
    $statement = $pdo->prepare("SELECT * FROM magics WHERE id IN (1,2,3,4,5) LIMIT 5");
    $statement->execute();
    $data = $statement->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($data, JSON_PRETTY_PRINT);
?>