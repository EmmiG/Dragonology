<?php
    /* 
    * This file fetches the id = 6,7,8,9 and 10 which stands for the Wood dragon,
    * just in case I took limit on just 5 so the server won´t fetch more than 5.
    */
    include_once 'database.php';
    $statement = $pdo->prepare("SELECT * FROM skills WHERE id IN (6,7,8,9,10) LIMIT 5");
    $statement->execute();
    $data = $statement->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($data, JSON_PRETTY_PRINT);
?>