-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2024. Jan 06. 11:25
-- Kiszolgáló verziója: 10.4.28-MariaDB
-- PHP verzió: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `menhely`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `admin`
--

CREATE TABLE `admin` (
  `felhasznalonev` varchar(255) NOT NULL,
  `jelszo` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `admin`
--

INSERT INTO `admin` (`felhasznalonev`, `jelszo`) VALUES
('admin', 'admin');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `allatok`
--

CREATE TABLE `allatok` (
  `allatid` int(255) NOT NULL,
  `allatfaj` varchar(255) NOT NULL,
  `allatnev` varchar(255) NOT NULL,
  `allatkor` int(11) NOT NULL,
  `allatfajta` varchar(255) NOT NULL,
  `allativar` varchar(255) NOT NULL,
  `allatstatusz` tinyint(1) NOT NULL,
  `allatleiras` varchar(255) NOT NULL,
  `allatkep` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `allatok`
--

INSERT INTO `allatok` (`allatid`, `allatfaj`, `allatnev`, `allatkor`, `allatfajta`, `allativar`, `allatstatusz`, `allatleiras`, `allatkep`) VALUES
(14, 'Kutya', 'Rex', 5, 'Németjuhász', 'Kan', 1, 'Rex, amikor nem fúrja magát éppen az öledbe, kezedbe, akkor megmutatkozik a határtalan huncutsága. Vigyázat, a csokibarna kisfiú függőséget okoz. Nyugodtan lehet tolongani, van vele feladat.', 'public/images/Rex.jpg'),
(15, 'Macska', 'Cirmi', 1, 'Házimacska', 'Nőstény', 1, 'Barátságos cica. Mintha mindig is ismert volna minket, nem fél, azonnal jön, hogy simogassuk és foglalkozzunk vele. Lakásban érzi magát a legjobban,de a szabadban is feltalálja magát.', 'public/images/Cirmi.jpg'),
(16, 'Kutya', 'Tyson', 1, 'Rottweiler', 'Kan', 1, 'Tyson kedves, érdeklődő, szereti az emberek társaságát. A simogatást, hűséggel jutalmazza.', 'public/images/allatKep-1694451006908-964839390allatKep-1693937811840-696249611Tyson.jpg'),
(18, 'Kutya', 'Cimbi', 5, 'Labrador', 'Nöstény', 0, 'Igen ragaszkodó, játékos, szeretet igényes, szófogadó tündéri kutya.\r\nIgazi felelős gazdira vár, ez a szépséges, okos kutyus.', 'public/images/allatKep-1704109251207-607014795Cimbi.jpg');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `orokbefogado`
--

CREATE TABLE `orokbefogado` (
  `orokbefogadoid` int(255) NOT NULL,
  `nev` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `telefon` varchar(255) NOT NULL,
  `kisallatnev` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `orokbefogado`
--

INSERT INTO `orokbefogado` (`orokbefogadoid`, `nev`, `email`, `telefon`, `kisallatnev`) VALUES
(19, 'admin', '2021579@dszcberegszaszi.hu', '06301845627', 'Rex'),
(20, 'Kulcsár Valter', 'nagy@gmail.com', '7394341', 'Cirmi'),
(21, 'Valter36', 'kulcsarvalter1975@gmail.com', '234234234242', 'Tyson');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `orokbefogadott`
--

CREATE TABLE `orokbefogadott` (
  `allatid` int(255) NOT NULL,
  `orokbefogadoid` int(255) DEFAULT NULL,
  `allatnev` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `orokbefogadott`
--

INSERT INTO `orokbefogadott` (`allatid`, `orokbefogadoid`, `allatnev`) VALUES
(14, 19, 'Rex'),
(15, 20, 'Cirmi'),
(16, 21, 'Tyson');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `allatok`
--
ALTER TABLE `allatok`
  ADD PRIMARY KEY (`allatid`);

--
-- A tábla indexei `orokbefogado`
--
ALTER TABLE `orokbefogado`
  ADD PRIMARY KEY (`orokbefogadoid`);

--
-- A tábla indexei `orokbefogadott`
--
ALTER TABLE `orokbefogadott`
  ADD UNIQUE KEY `allatId` (`allatid`),
  ADD UNIQUE KEY `orokbefogadoid` (`orokbefogadoid`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `allatok`
--
ALTER TABLE `allatok`
  MODIFY `allatid` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT a táblához `orokbefogado`
--
ALTER TABLE `orokbefogado`
  MODIFY `orokbefogadoid` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `orokbefogadott`
--
ALTER TABLE `orokbefogadott`
  ADD CONSTRAINT `orokbefogadott_ibfk_1` FOREIGN KEY (`orokbefogadoid`) REFERENCES `orokbefogado` (`orokbefogadoid`),
  ADD CONSTRAINT `orokbefogadott_ibfk_2` FOREIGN KEY (`allatid`) REFERENCES `allatok` (`allatid`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
