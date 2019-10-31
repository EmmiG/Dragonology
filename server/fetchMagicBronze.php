<?php
    /* 
    * This file fetches the id = 81,82,45,46,47,83,48,84,49,85 and 50 which stands for the Bronze dragon,
    * id 82 normal magic spell Air Armor.
    * the id 81,83,84 och 85 are the Air Elemental = Main Element text,
    * Water Elemental = Minor Element text, Earth Elemental = Minor Element text
    * Fire Elemental = Minor Element text
    * I took in WHEN and THEN so that the server know which order I want the ids to be,
    * I took a limit on just 11 so the server won´t fetch more than 11.
    */
    include_once 'database.php';
    $statement = $pdo->prepare("SELECT * FROM magics ORDER BY CASE id
WHEN 81 THEN 1
WHEN 82 THEN 2
WHEN 45 THEN 3
WHEN 46 THEN 4
WHEN 47 THEN 5
WHEN 83 THEN 6
WHEN 48 THEN 7
WHEN 84 THEN 8
WHEN 49 THEN 9
WHEN 85 THEN 10
WHEN 50 THEN 11
ELSE 12
END
LIMIT 11");
    $statement->execute();
    $data = $statement->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($data, JSON_PRETTY_PRINT);
?>