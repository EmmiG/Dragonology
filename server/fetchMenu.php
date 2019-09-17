<?php
    /* This file fetches current menus . */
    include_once 'database.php';
    $statement = $pdo->prepare("SELECT * FROM menus ORDER BY picUrl ASC");
    $statement->execute();
    $data = $statement->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($data, JSON_PRETTY_PRINT);
?>