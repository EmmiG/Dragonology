<?php
    /* 
    * This file fetches the id = 62,1,2,3,4,63 and 5 which stands for the Water dragon,
    * the id 62 and 63 are the Earth Elemental = Main Element text and Water Elemental = Minor Element text
    * I took in WHEN and THEN so that the server know which order I want the ids to be,
    * I took a limit on just 7 so the server won´t fetch more than 7.
    */
    include_once 'database.php';
    $statement = $pdo->prepare("SELECT * FROM magics ORDER BY CASE id
  WHEN 62 THEN 1
  WHEN 1 THEN 2
  WHEN 2 THEN 3
  WHEN 3 THEN 4
  WHEN 4 THEN 5
  WHEN 63 THEN 6
  ELSE 7
END
LIMIT 7");
    $statement->execute();
    $data = $statement->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($data, JSON_PRETTY_PRINT);
?>