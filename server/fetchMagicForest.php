<?php
    /* 
    * This file fetches the id = 71,21,2,22,23,72 and 24 which stands for the Forest dragon,
    * the id 71 and 72 are the Earth Elemental = Main Element text and Air Elemental = Minor Element text
    * I took in WHEN and THEN so that the server know which order I want the ids to be,
    * I took a limit on just 7 so the server won´t fetch more than 7.
    */
    include_once 'database.php';
    $statement = $pdo->prepare("SELECT * FROM magics ORDER BY CASE id
WHEN 71 THEN 1
WHEN 21 THEN 2
WHEN 2 THEN 3
WHEN 22 THEN 4
WHEN 23 THEN 5
WHEN 72 THEN 6
WHEN 24 THEN 7
ELSE 8
END
LIMIT 7");
    $statement->execute();
    $data = $statement->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($data, JSON_PRETTY_PRINT);
?>