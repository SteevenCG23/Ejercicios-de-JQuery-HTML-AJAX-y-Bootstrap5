<?php
    $db = new PDO('mysql:host=localhoost;dbname=esquema', 'root', '');

    if(isset($_POST["valor"])){
        $nombre = $_POST["nombre"];
        $upSent = $db->prepare("INSERT INTO 'personal'('nombre')
        VALUES (:nombre)");
            $upSent->bindParam(':nombre', $nombre);
            $upSent->execute();
            if ($upSent->rowCount() > 0){
            echo 1;
            }else{
                echo 0;
            }
    }
?>