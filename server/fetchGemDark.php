<?php
    /* 
    * This file fetches the id = 11 which stands for the Dark dragon treasured gemstone,
    * just in case I took limit on just 1 so the server won´t fetch more than 1.
    */
    include_once 'database.php';
    $statement = $pdo->prepare("SELECT * FROM gems WHERE id = 11 LIMIT 1");
    $statement->execute();
    $data = $statement->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($data, JSON_PRETTY_PRINT);
?>