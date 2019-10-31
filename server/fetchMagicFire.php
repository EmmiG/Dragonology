<?php
    /* 
    * This file fetches the id = 69,16,17,18,19,70 and 20 which stands for the Fire dragon,
    * the id 69 and 70 are the Fire Elemental = Main Element text and Water Elemental = Minor Element text
    * I took in WHEN and THEN so that the server know which order I want the ids to be,
    * I took a limit on just 7 so the server won´t fetch more than 7.
    */
    include_once 'database.php';
    $statement = $pdo->prepare("SELECT * FROM magics ORDER BY CASE id
WHEN 69 THEN 1
WHEN 16 THEN 2
WHEN 17 THEN 3
WHEN 18 THEN 4
WHEN 19 THEN 5
WHEN 70 THEN 6
WHEN 20 THEN 7
ELSE 8
END
LIMIT 7");
    $statement->execute();
    $data = $statement->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($data, JSON_PRETTY_PRINT);
?>