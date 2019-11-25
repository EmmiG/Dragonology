<?php
    /* This file fetches all the data from the homepage table and order the data by Description */
    include_once 'database.php';
    $statement = $pdo->prepare("SELECT * FROM homepage ORDER BY Description ASC");
    $statement->execute();
    $data = $statement->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($data, JSON_PRETTY_PRINT);
?>