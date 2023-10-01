import React from "react";
import "./Onkentes.css";
import Navbar from "../navbar/Navbar";
import image from "./Onkentes.jpg";
import image2 from "./Onkentes2.jpg";
import image3 from "./Onkentes3.jpg";
import image4 from "./Onkentes4.jpg";

function Onkentes() {
  return (
    <div>
      <Navbar />
      <div className="container onkentes tc w-100 mt5">
        <div>
          <div className="flex">
            <div id="szoveg" className="flex w-100 ba br2">
              <p>
                Ha nem lennének lelkes, önzetlen, elkötelezett, önkéntes
                segítőink mi magunk nem tudnánk megvalósítani azokat a célokat,
                amiket magunk elé tűztünk az árva kutyák gyógyítása, nevelése,
                örökbe adása érdekében. Vannak, akik kutyáink rendszeres
                sétáltatásával, nevelésével, szocializálásával, felelős
                állattartást népszerűsítő rendezvényeink megszervezésével,
                támogatóink telefonos megkeresésével, telefonos
                ügyfélszolgálattal segítenek, mások a gyógyításra szánt állatok
                szállításával, vagy a sérült kutyák gyógyulása alatt, ideiglenes
                befogadással járulnak hozzá Alapítványunk munkájához.
              </p>
            </div>
            <div className="flex items-center justify-center images ml3 w-100">
              <img
                className="ml3"
                src={image}
                alt="Girl in a jacket"
                width={300}
                height={210}
              ></img>
              <img
                className="ml3"
                src={image2}
                alt="Girl in a jacket"
                width={300}
                height={210}
              ></img>
            </div>
          </div>
          <div className="flex flex-row-reverse mt4">
            <div id="szoveg2" className="w-50 ba br2 fw9">
              <p>
                Ha Debrecenben vagy a környéken laksz, és kedvet és erőt érzel
                magadban arra, hogy az állatok érdekében alapítványunk munkáját
                rendszeresen segítsd, ÍRJ NEKÜNK és add meg elérhetőségedet. Írj
                magadról pár sort is, amiből megtudhatjuk, miben számíthatnánk
                rád. Hamarosan keresünk majd! (Az önkéntes munkánál nagyon
                fontos a rendszeresség, hiszen mi is önkéntesek vagyunk: aki
                csak egyszer-egyszer jönne el, inkább feladatot ad nekünk, mint
                segítséget.) Kérünk, fogadd el, hogy ha még nem múltál el 18
                éves, nem tudod munkánkat segíteni: ez a Te érdeked is.
              </p>
            </div>
            <div>
              <img
                className="mr3"
                src={image3}
                alt="Girl in a jacket"
                width={300}
                height={210}
              ></img>
              <img
                className="mr3"
                src={image4}
                alt="Girl in a jacket"
                width={300}
                height={210}
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Onkentes;
