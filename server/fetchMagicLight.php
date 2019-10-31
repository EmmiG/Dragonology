<?php
    /* 
    * This file fetches the id = 79,39,40,41,42,80,43 and 44 which stands for the Light dragon,
    * the id 79 and 80 are the Earth Elemental = Main Element text and Air Elemental = Minor Element text
    * I took in WHEN and THEN so that the server know which order I want the ids to be,
    * I took a limit on just 8 so the server won´t fetch more than 8.
    */
    include_once 'database.php';
    $statement = $pdo->prepare("SELECT * FROM magics ORDER BY CASE id
WHEN 79 THEN 1
WHEN 39 THEN 2
WHEN 40 THEN 3
WHEN 41 THEN 4
WHEN 42 THEN 5
WHEN 80 THEN 6
WHEN 43 THEN 7
WHEN 44 THEN 8
ELSE 9
END
LIMIT 8");
    $statement->execute();
    $data = $statement->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($data, JSON_PRETTY_PRINT);
?>