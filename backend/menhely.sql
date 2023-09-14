-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2023. Sze 14. 17:29
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
(14, 'Kutya', 'Rex', 3, 'Németjuhász', 'Kan', 0, 'Ez egy kutya', 'public/images/Rex.jpg'),
(15, 'Macska', 'Cirmi', 1, 'Házimacska', 'Nőstény', 1, 'Ez egy macska', 'public/images/Cirmi.jpg'),
(16, 'Kutya', 'Tyson', 1, 'Rottweiler', 'Kan', 0, 'Ez egy kutya.', 'public/images/allatKep-1694451006908-964839390allatKep-1693937811840-696249611Tyson.jpg');

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
(1, 'Kulcsár Valter', 'kulcsarvalter1975@gmail.com', '06301845627', 'Rex'),
(2, 'Kulcsár Valter2', 'kulcsarvalter21975@gmail.com', '06301845627', 'Rex'),
(3, 'Kulcsár Valter3', 'kulcsarvalter31975@gmail.com', '06301845627', 'Cirmi'),
(4, 'Kulcsár Valter3', 'kulcsarvalter31975@gmail.com', '06301845627', 'Tyson'),
(5, 'Kulcsár Valter3', 'kulcsarvalter31975@gmail.com', '06301845627', 'Tyson'),
(6, 'Kulcsár Valter3', 'kulcsarvalter31975@gmail.com', '06301845627', 'Rex'),
(7, 'Kulcsár Valter3', 'kulcsarvalter31975@gmail.com', '06301845627', 'Cirmi'),
(8, 'Kis Ferenc', 'kisferenc@gmail.com', '11111111111', 'Rex'),
(9, 'Nagy Ervin', 'kisferenc@gmail.com', '222222222222222', 'Cirmi'),
(10, 'Nagy Ervin', 'kisferenc@gmail.com', '222222222222222', 'Tyson'),
(11, 'Valter36', 'kulcsarvalter1975@gmail.com', '06301845627', 'Rex'),
(12, 'Valter36', 'kulcsarvalter1975@gmail.com', '06301845627', 'Cirmi'),
(13, 'Valter36', 'kulcsarvalter1975@gmail.com', '06301845627', 'Tyson'),
(14, 'Valter36', 'kulcsarvalter1975@gmail.com', '06301845627', 'Tyson'),
(15, 'Valter36', 'kulcsarvalter1975@gmail.com', '06301845627', 'Rex'),
(16, 'Kulcsár Valter', 'kulcsarvalter1975@gmail.com', '06301845627', 'Cirmi'),
(17, 'Kulcsár Valter', 'kulcsarvalter1975@gmail.com', '06301845627', 'Rex'),
(18, 'Kulcsár Valter', 'kulcsarvalter1975@gmail.com', '06301845627', 'Cirmi');

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
(15, NULL, NULL);

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
  MODIFY `allatid` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT a táblához `orokbefogado`
--
ALTER TABLE `orokbefogado`
  MODIFY `orokbefogadoid` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `orokbefogadott`
--
ALTER TABLE `orokbefogadott`
  ADD CONSTRAINT `orokbefogadott_ibfk_1` FOREIGN KEY (`orokbefogadoid`) REFERENCES `orokbefogado` (`orokbefogadoid`),
  ADD CONSTRAINT `orokbefogadott_ibfk_2` FOREIGN KEY (`allatId`) REFERENCES `allatok` (`allatid`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
