<?php
    /* This file fetches current dragons and name of the dragons. */
    include_once 'database.php';
    $statement = $pdo->prepare("SELECT * FROM homepage ORDER BY Description ASC");
    $statement->execute();
    $data = $statement->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($data, JSON_PRETTY_PRINT);
?>