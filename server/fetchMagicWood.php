<?php
    /* 
    * This file fetches the id = 64,6,7,8,9,65,10,66 and 2 which stands for the Wood dragon,
    * the id 64,65 and 66 are the Air Elemental = Main Element text,
    * Water Elemental = Minor Element text and Earth Elemental = Minor Element text
    * I took in WHEN and THEN so that the server know which order I want the ids to be,
    * I took a limit on just 9 so the server won´t fetch more than 9.
    */
    include_once 'database.php';
    $statement = $pdo->prepare("SELECT * FROM magics ORDER BY CASE id
WHEN 64 THEN 1
WHEN 6 THEN 2
WHEN 7 THEN 3
WHEN 8 THEN 4
WHEN 9 THEN 5
WHEN 65 THEN 6
WHEN 10 THEN 7
WHEN 66 THEN 8
WHEN 2 THEN 9
ELSE 10
END
LIMIT 9");
    $statement->execute();
    $data = $statement->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($data, JSON_PRETTY_PRINT);
?>