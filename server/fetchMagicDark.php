<?php
    /* 
    * This file fetches the id = 86,51,52,53,54,87,16,88 and 55 which stands for the Dark dragon,
    * the id 86,87,88 are the Water Elemental = Main Element text, 
    * Fire Elemental = Minor Element text and Earth Elemental = Minor Element text.
    * I took in WHEN and THEN so that the server know which order I want the ids to be,
    * I took a limit on just 9 so the server won´t fetch more than 9.
    */
    include_once 'database.php';
    $statement = $pdo->prepare("SELECT * FROM magics ORDER BY CASE id
WHEN 86 THEN 1
WHEN 51 THEN 2
WHEN 52 THEN 3
WHEN 53 THEN 4
WHEN 54 THEN 5
WHEN 87 THEN 6
WHEN 16 THEN 7
WHEN 88 THEN 8
WHEN 55 THEN 9
ELSE 10
END
LIMIT 9");
    $statement->execute();
    $data = $statement->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($data, JSON_PRETTY_PRINT);
?>