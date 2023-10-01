import React from "react";
import Navbar from "../navbar/Navbar";
import "./Main.css";

const Main = () => {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <div className="flex justify-center items-center mt5 ">
          <section className="w-50">
            <div className="rolunk ba pa3 br2">
              <p className="fw9 tc">Rólunk</p>
              <p>
                Alapítványunk tizennégy éve dolgozik az Illatos úti, árva és
                sérült kutyák gyógyításáért, örökbefogadási esélyeinek
                növeléséért, gazdához juttatásáért. A kuratórium tagjai
                munkájukat elkötelezettségből, tiszteletdíj nélkül az állatok
                iránt érzett szeretetből végzik. Tevékenységünket,
                gazdálkodásunkat az Alapítvány Felügyelőbizottsága ellenőrzi,
                akik szintén társadalmi munkában dolgoznak.
              </p>
              <p className="fw9">De kik is vagyunk, és mit csinálunk?</p>
              <p>
                Már 14 éve, hogy létrehoztuk a Vigyél Haza Alapítványt.
                Hétköznapi állatbarátokként mentünk ki az Illatos útra, hogy
                megismerjük munkájukat és megtudjuk, miben segíthetünk.
                Szerencsénk volt, mert Dr Kozma Tamás vezető állatorvos fogadott
                minket, és részletesen elmondta, miben számítanának a
                közreműködésünkre. Önként vállalt feladataink már az első évtől
                sem merültek ki abban, hogy kutyákat mentettünk és sikeres
                örökbefogadó napokat szerveztünk a telepen.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Main;
