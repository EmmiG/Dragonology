<?php
    /* 
    * This file fetches the id = 77,34,35,36,37,78,2 and 38 which stands for the Earth dragon,
    * the id 77 and 78 are the Fire Elemental = Main Element text and Earth Elemental = Medium Element text
    * I took in WHEN and THEN so that the server know which order I want the ids to be,
    * I took a limit on just 8 so the server won´t fetch more than 8.
    */
    include_once 'database.php';
    $statement = $pdo->prepare("SELECT * FROM magics ORDER BY CASE id
WHEN 77 THEN 1
WHEN 34 THEN 2
WHEN 35 THEN 3
WHEN 36 THEN 4
WHEN 37 THEN 5
WHEN 78 THEN 6
WHEN 2 THEN 7
WHEN 38 THEN 8
ELSE 9
END
LIMIT 8");
    $statement->execute();
    $data = $statement->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($data, JSON_PRETTY_PRINT);
?>