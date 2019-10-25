<?php
    /* 
    * This file fetches the id = 1,2,3,4 and 5 which stands for all the dragons,
    * just in case I took limit on just 5 so the server won´t fetch more than 5.
    */
    include_once 'database.php';
    $statement = $pdo->prepare("SELECT * FROM skills WHERE id LIMIT 5");
    $statement->execute();
    $data = $statement->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($data, JSON_PRETTY_PRINT);
?>