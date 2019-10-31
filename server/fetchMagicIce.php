<?php
    /* 
    * This file fetches the id = 75,30,31,32,33,76 and 24 which stands for the Ice dragon,
    * the id 75 and 76 are the Water Elemental = Main Element text and Air Elemental = Minor Element text
    * I took in WHEN and THEN so that the server know which order I want the ids to be,
    * I took a limit on just 7 so the server won´t fetch more than 7.
    */
    include_once 'database.php';
    $statement = $pdo->prepare("SELECT * FROM magics ORDER BY CASE id
WHEN 75 THEN 1
WHEN 30 THEN 2
WHEN 31 THEN 3
WHEN 32 THEN 4
WHEN 33 THEN 5
WHEN 76 THEN 6
WHEN 24 THEN 7
ELSE 8
END
LIMIT 7");
    $statement->execute();
    $data = $statement->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($data, JSON_PRETTY_PRINT);
?>