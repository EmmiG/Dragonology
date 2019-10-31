<?php
    /* 
    * This file fetches the id = 89,56,57,58,59,90,60,91 and 61 which stands for the Metal dragon,
    * the id 89,90 and 91 are the Fire Elemental = Main Element text, 
    * Air Elemental = Minor Element text and Earth Elemental = Minor Element text
    * I took in WHEN and THEN so that the server know which order I want the ids to be,
    * I took a limit on just 9 so the server won´t fetch more than 9.
    */
    include_once 'database.php';
    $statement = $pdo->prepare("SELECT * FROM magics ORDER BY CASE id
WHEN 89 THEN 1
WHEN 56 THEN 2
WHEN 57 THEN 3
WHEN 58 THEN 4
WHEN 59 THEN 5
WHEN 90 THEN 6
WHEN 60 THEN 7
WHEN 91 THEN 8
WHEN 61 THEN 9
ELSE 10
END
LIMIT 9");
    $statement->execute();
    $data = $statement->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($data, JSON_PRETTY_PRINT);
?>