<?php
    /* 
    * This file fetches the id = 10 and 13 which stands for the Bronze dragon treasured gemstones,
    * just in case I took limit on just 1 so the server won´t fetch more than 2.
    */
    include_once 'database.php';
    $statement = $pdo->prepare("SELECT * FROM gems WHERE id IN (10,13) LIMIT 2");
    $statement->execute();
    $data = $statement->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($data, JSON_PRETTY_PRINT);
?>