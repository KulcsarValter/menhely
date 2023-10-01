import React from "react";
import Navbar from "../navbar/Navbar";
import "./Tamogatas.css";

function Tamogatas() {
  return (
    <div>
      <Navbar />
      <div className="container  mt5">
        <p className="f3">Támogasd munkánkat!</p>
        Lehet, hogy Te is állatokat szerető támogatónk vagy, aki élethelyzeted
        miatt nincs lehetőséged kutyust adoptálni? Vagy olyan állatbarát vagy,
        aki ezt megtetted ugyan, de még több elesett kedvencünkön szeretnél
        segíteni?
        <p className="fw9">Ha így érzel, akkor SZÜKSÉGÜNK VAN RÁD!</p>
        <div>
          <p className="fw9">Mire gyűjtünk?</p>
          <div className="szoveg ba bw1 br2">
            Mivel alapítványunk az Illatos úti, sérült és gazdátlan kutyák
            gyógyításával, örökbeadásai esélyeinek növelésével foglalkozik,
            legnagyobb szükségünk az állatorvosi költségek fedezésére,
            állatgyógyszerekre, jó minőségű száraz tápra van. Jelentős költség
            azon kutyák panzióban történő elhelyezése is, akiket nem tudunk
            ideiglenes befogadókhoz adni, végleges örökbe adásukig.
          </div>
        </div>
        <div className="mt-4 fw9">
          <p>
            Számunkra a pénzbeli támogatással egyenértékű a tárgyi adomány,
            (hiszen a pénzből is ezeket vásárolnánk meg) illetve az igénybe vett
            szolgáltatásokat kiváltó segítség: ideiglenes befogadás, önkéntes
            állatszállítás, ingyenes kutyakozmetika, kedvezményes ivartalanítás,
            stb. Amire NEM gyűjtünk, az alapítvány működtetésének fedezése:
            saját otthonukban, saját eszközeikkel, szabadidőnkben végezzük
            önkéntes munkánkat.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Tamogatas;
