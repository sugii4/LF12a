<?php
    $conn = mysqli_connect("localhost","root","","scoreboard");

    if($conn === false)
    {
        exit("Verbindungsfehler: ".mysqli_connect_error());
    }
?>