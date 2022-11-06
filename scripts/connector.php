<?php
    $conn = mysqli_connect("localhost","root","","scoreboard");

    if(!$conn)
    {
        exit("Verbindungsfehler: ".mysqli_connect_error());
    }
?>