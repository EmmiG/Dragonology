<?php
    /* 
    * This file fetches the id = 73,25,26,27,28,29,74 and 16 which stands for the Lightning dragon,
    * the id 73 and 74 are the Air Elemental = Main Element text and Fire Elemental = Minor Element text
    * I took in WHEN and THEN so that the server know which order I want the ids to be,
    * I took a limit on just 8 so the server won´t fetch more than 8.
    */
    include_once 'database.php';
    $statement = $pdo->prepare("SELECT * FROM magics ORDER BY CASE id
WHEN 73 THEN 1
WHEN 25 THEN 2
WHEN 26 THEN 3
WHEN 27 THEN 4
WHEN 28 THEN 5
WHEN 29 THEN 6
WHEN 74 THEN 7
WHEN 16 THEN 8
ELSE 9
END
LIMIT 8");
    $statement->execute();
    $data = $statement->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($data, JSON_PRETTY_PRINT);
?>