<?php
    /* 
    * This file fetches all the data from the cookies table, order by their id.
    * The data are used on the fortune cookie page to display a random quote
    * from the Fortune column.  
    */
    include_once 'database.php';
    $statement = $pdo->prepare("SELECT * FROM cookies ORDER BY id");
    $statement->execute();
    $data = $statement->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($data, JSON_PRETTY_PRINT);
?>