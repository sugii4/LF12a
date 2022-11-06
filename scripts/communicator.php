<?php
    $muenzen;
    $popularitaet;
    $ressourcen;
    $territorien;
    $fabrik;
    $sterne;
    $bonus;
    $gesamt;

    if(isset($_POST['muenzen']) && isset($_POST['popularitaet']) && isset($_POST['ressourcen']) && isset($_POST['territorien']) && isset($_POST['fabrik']) && isset($_POST['sterne']) && isset($_POST['bonus'])) {
        $muenzen = $_POST['muenzen'];
        $popularitaet = $_POST['popularitaet'];
        $ressourcen = $_POST['ressourcen'];
        $territorien = $_POST['territorien'];
        $fabrik = $_POST['fabrik'];
        $sterne = $_POST['sterne'];
        $bonus = $_POST['bonus'];
        include('connector.php');

        if ($fabrik == 'true') {
            $fabrik = 1;
        } else {
            $fabrik = 0;
        }

        $insert_muenzen = "INSERT INTO scorelist (Münzen, Popularität, Ressourcen, Territorien, Fabrik, Sterne, Bonus)
                            VALUES ($muenzen, $popularitaet, $ressourcen, $territorien, $fabrik, $sterne, $bonus)"

    mysqli_close($conn);
    }
?>    