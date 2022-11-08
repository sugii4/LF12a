<?php

require('connector.php'); //nutze den connector zum verbinden mit der datenbank
mysqli_report(MYSQLI_REPORT_ERROR); //unterdrücke den fatal-error

if ($_SERVER['REQUEST_METHOD'] === 'POST') { //abfarge für post-methode
    $muenzen = $_POST['muenzen'];
    $popularitaet = $_POST['popularitaet'];
    $ressourcen = $_POST['ressourcen'];
    $territorien = $_POST['territorien'];
    $fabrik = $_POST['fabrik'];
    $sterne = $_POST['sterne'];
    $bonus = $_POST['bonus'];
    $gesamt = $_POST['gesamt'];
    
    $insert_daten = "INSERT INTO scorelist (Muenzen, Popularitaet, Ressourcen, Territorien, Fabrik, Sterne, Bonus, Gesamt) VALUES ('{$muenzen}', '{$popularitaet}', '{$ressourcen}', '{$territorien}', '{$fabrik}', '{$sterne}', '{$bonus}', '{$gesamt}')";
    
    if (@mysqli_query($conn, $insert_daten)) { //fehleranalyse fürs einspeichern der daten
        $response = ['success' => true];
    } else {
        $response = ['success' => false, 'message' => mysqli_error($conn)];
    }
    echo json_encode($response);
} else if ($_SERVER['REQUEST_METHOD'] === 'GET') { //abfrage für get-methode
    $select_daten = "SELECT MAX(Muenzen) AS Muenzen, MAX(Ressourcen) AS Ressourcen, MAX(Territorien) AS Territorien, MAX(Bonus) AS Bonus, MAX(Gesamt) AS Gesamt FROM scorelist;";
    $result = @mysqli_query($conn, $select_daten);
    if (mysqli_error($conn)) { //fehleranalyse bei der connection
        $response = ['success' => false, 'message' => mysqli_error($conn)]; //wenn connection fehlgeschlagen, hau fehlermeldung raus
    } else { //ansonsten...
        $data = mysqli_fetch_all($result,MYSQLI_ASSOC)[0]; //...nimm alle abgefragten daten
        $response = ['success' => true,'highscore'=>$data]; // und speicher die abgefragten daten in "highscore"
    }
    echo json_encode($response); //zeigs mir für mich leserlich
}

mysqli_close($conn);