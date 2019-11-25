    
<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header("Access-Control-Allow-Headers: X-Requested-With");
/*
A connection to the database is established through PDO.
*/
$pdo = new PDO(
  "mysql:host=localhost;dbname=dragonology;charset=utf8",
  "root",
  "root"
);
?>