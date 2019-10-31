<?php
    /* 
    * This file fetches the id = 15,16,17,18 and 19 which stands for the Fire dragon,
    * just in case I took limit on just 5 so the server won´t fetch more than 5.
    */
    include_once 'database.php';
    $statement = $pdo->prepare("SELECT * FROM skills WHERE id IN (15,16,17,18,19) LIMIT 5");
    $statement->execute();
    $data = $statement->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($data, JSON_PRETTY_PRINT);
?>