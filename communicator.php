<!DOCTYPE html>
<html>
 
<head>
    <title>Insert Page page</title>
</head>
 
<body>
<?php
        include('connector.php');

        $muenzen = $_POST['muenzen'];
        $popularitaet = $_POST['popularitaet'];
        $ressourcen = $_POST['ressourcen'];
        $territorien = $_POST['territorien'];
        $fabrik = $_POST['fabrik'];
        $sterne = $_POST['sterne'];
        $bonus = $_POST['bonus'];
        

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