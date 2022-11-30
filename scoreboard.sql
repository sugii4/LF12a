-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Erstellungszeit: 06. Nov 2022 um 18:21
-- Server-Version: 10.4.25-MariaDB
-- PHP-Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `scoreboard`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `scorelist`
--

CREATE TABLE `scorelist` (
  `ID` int(11) NOT NULL,
  `Muenzen` int(3) NOT NULL DEFAULT 0,
  `Popularitaet` int(1) NOT NULL DEFAULT 0,
  `Ressourcen` int(3) NOT NULL DEFAULT 0,
  `Territorien` int(2) NOT NULL DEFAULT 0,
  `Fabrik` tinyint(1) NOT NULL DEFAULT 0,
  `Sterne` int(1) NOT NULL DEFAULT 0,
  `Bonus` int(2) NOT NULL DEFAULT 0,
  `Gesamt` int(4) NOT NULL DEFAULT 0
) 

ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `scorelist`
--
ALTER TABLE `scorelist`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `scorelist`
--
ALTER TABLE `scorelist`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
