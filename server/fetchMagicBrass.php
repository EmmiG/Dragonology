<?php
    /* 
    * This file fetches the id = 67,11,12,13,14,68 and 15 which stands for the Brass dragon,
    * the id 67 and 68 are the Water Elemental = Main Element text and Earth Elemental = Minor Element text
    * I took in WHEN and THEN so that the server know which order I want the ids to be,
    * I took a limit on just 7 so the server won´t fetch more than 7.
    */
    include_once 'database.php';
    $statement = $pdo->prepare("SELECT * FROM magics ORDER BY CASE id
WHEN 67 THEN 1
WHEN 11 THEN 2
WHEN 12 THEN 3
WHEN 13 THEN 4
WHEN 14 THEN 5
WHEN 68 THEN 6
WHEN 15 THEN 7
ELSE 8
END
LIMIT 7");
    $statement->execute();
    $data = $statement->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($data, JSON_PRETTY_PRINT);
?>