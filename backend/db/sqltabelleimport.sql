-- Nur ausführen wenn Datenbank existiert und nicht mehr gebraucht wird/Grundlegend Verändert wird
DROP DATABASE IF EXISTS Scoreboard;


-- Ab hier ausführen, wenn Datenbank komplett neu erstellt werden soll
CREATE DATABASE Scoreboard;
USE Scoreboard;

CREATE TABLE scorelist
(
    S_ID INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    S_Sterne INTEGER NOT NULL DEFAULT 0,
    S_Muenzen INTEGER NOT NULL DEFAULT 0,
    S_Territorien INTEGER NOT NULL DEFAULT 0,
    S_Popularitaet INTEGER NOT NULL DEFAULT 0,
    S_Ressourcen INTEGER NOT NULL DEFAULT 0,
    S_Bonus INTEGER NOT NULL DEFAULT 0,
    S_Fabrik BOOLEAN NOT NULL DEFAULT false,
    S_Gesamt INTEGER NOT NULL DEFAULT 0,
);