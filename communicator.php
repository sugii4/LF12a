<!DOCTYPE html>
<html>
 
<head>
    <title>Insert Page page</title>
</head>
 
<body>
<?php
        include('connector.php');

        $muenzen = $_GET['muenzen'];
        $popularitaet = $_GET['popularitaet'];
        $ressourcen = $_GET['ressourcen'];
        $territorien = $_GET['territorien'];
        $fabrik = $_GET['fabrik'];
        $sterne = $_GET['sterne'];
        $bonus = $_GET['bonus'];
        

        $insert_daten = "INSERT INTO scorelist (Muenzen, Popularitaet, Ressourcen, Territorien, Fabrik, Sterne, Bonus) VALUES ('$muenzen', '$popularitaet', '$ressourcen', '$territorien', '$fabrik', '$sterne', '$bonus')";

        if(mysqli_query($conn, $insert_daten)){
            echo "<h3>data stored in a database successfully."
                . " Please browse your localhost php my admin"
                . " to view the updated data</h3>"; 
        } else{
            echo "ERROR"
                . mysqli_error($conn);
        }

        mysqli_close($conn);
?>
</body>
 
</html>