import React from "react";
import Navbar from "../navbar/Navbar";
import "./Elerhetoseg.css";

function Elerhetoseg() {
  return (
    <div>
      <Navbar />
      <div className="container mt5">
        <p className="fw9 tc">Elérhetőség</p>
        <div className="bg-light-red w-100">
          Hétfőn, kedden ZÁRVA vagyunk. Szerdától vasárnapig örökbefogadási
          szándékkal kutyáink 9-13 óra között, cicáink pedig 9-14 óra között
          látogathatóak, előzetes egyeztetést követően (+36-70-601-6700).
        </div>
        <div className="informaciok mt2 w-100 bg-green">
          <p className="fw9">Információk</p>
          Email cím:<br></br>
          <a href="mailto:debreceniallatmenhely@gmail.com">
            debreceniallatmenhely@gmail.com
          </a>
          <p></p>
          Debreceni Állatmenhely<br></br>+36 70 601 6700 2045 Debrecen, Hrsz:
          097/98 Gyepmester: +36 70 601 6701 (Debrecen területén talált állat,
          tetem esetén hívható) Levelezési cím Állat és - Természetvédők
          Debreceni Egyesülete 2040 Debrecen, Lévai u.34. Adószám: 18693180-1-13
        </div>
      </div>
    </div>
  );
}

export default Elerhetoseg;
