-- Beispieleinträge machen
USE Scoreboard;

-- Wie erstelle ich neue Einträge:
INSERT INTO scorelist(S_Sterne, S_Muenzen, S_Territorien, S_Popularitaet, S_Ressourcen, S_Bonus, S_Fabrik) VALUES (4, 22, 6, 2, 8, 4, "FALSE");
INSERT INTO scorelist(S_Sterne, S_Muenzen, S_Territorien, S_Popularitaet, S_Ressourcen, S_Bonus, S_Fabrik) VALUES (3, 9, 9, 1, 12, 9, "TRUE");
INSERT INTO scorelist(S_Sterne, S_Muenzen, S_Territorien, S_Popularitaet, S_Ressourcen, S_Fabrik) VALUES (6, 24, 8, 3, 7, "TRUE");

-- Wie verändere ich aktive Einträge
UPDATE scorelist SET S_Sterne = 5, S_Fabrik = "FALSE" WHERE S_ID = 2;

--Wie bekomme ich meine Daten
SELECT * FROM scorelist; -- Gib mir alles
SELECT S_Sterne, S_Muenzen, S_Territorien, S_Popularitaet,S_Ressourcen FROM scorelist WHERE S_ID = 3; -- Gib mir bitte nur folgende Spalten wo S_ID = 3 ist
SELECT S_Sterne AS "Sterne" FROM scorelist; -- Ich kann auch Datennamen verändern.