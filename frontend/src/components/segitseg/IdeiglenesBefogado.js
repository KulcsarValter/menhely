import React from "react";
import Navbar from "../navbar/Navbar";
import "./IdeiglenesBefogado.css";
import image from "./Ideiglenes.jpg";

function IdeiglenesBefogado() {
  return (
    <div>
      <Navbar />

      <div className="container mt4" id="szoveg">
        <h5 className="tc mb4 red">Legyél ideiglenes befogadó!</h5>
        <p className="fw9">
          Az ideiglenes befogadók áldozatos munkája nélkülözhetetlen a Vigyél
          Haza Alapítvány számára, hiszen újabb árva kutyákat akkor tudunk
          megmenteni, ha a korábban befogadott, vagy sérült állatokat ideiglenes
          szülőkhöz, vagy végleges gazdákhoz juttatjuk. A hozzánk került kutyák,
          életükben már legalább egyszer csalódtak, ezért a mi legfontosabb
          dolgunk, hogy megtanítsuk őket újra bízni az emberekben.
        </p>
        <div className="flex">
          <div>
            <img
              className="mr4"
              src={image}
              alt="Girl in a jacket"
              width={300}
              height={300}
            ></img>
          </div>
          <div className="w-70">
            <p>
              Alapítványunk által mentett kutyák közül néhányan kisebb-nagyobb
              lelki- vagy fizikai sérüléssel kerülnek hozzánk. Sok olyan kutya
              is van gondozásunkban, akik idősebb korukban veszítették el
              gazdáikat. Tapasztalataink szerint egy szerető családnál
              elhelyezett állat gyorsabban, és probléma mentesebben illeszkedik
              be későbbiekben a végleges gazdáinál is. Könnyebb pórázhoz
              szoktatni, olykor szobatisztaságra nevelni és az ideiglenes
              befogadók segítségével jobban megismerhetjük a kutya jellemét:
              hogyan jön ki más kutyákkal, cicával, hogyan viszonyul a
              gyerekekhez… stb. Ha ezt tudjuk róla, könnyebben találhatjuk meg
              számára a legalkalmasabb végleges Gazdit.
            </p>
            <div>
              <h5 className="yellow">Kik lehetnek ideiglenes befogadók?</h5>
              <p>
                Olyan állatbarátokat keresünk, akik otthonukba fogadnának
                egy-egy kutyust az alapítvány gondozásában lévő, gyógyuló,
                gazdára váró, akár idősebb állatok közül. Az ideiglenes befogadó
                feladata, hogy gondoskodjon az állat táplálásáról, gondozásáról,
                és lehetővé tegye a jövendő örökbefogadókkal való
                kapcsolatteremtést is. Ez az időszak általában több hónapig is
                tarthat, de nem „felejtünk” senkinél állatot: kérés esetén a
                kutyust rövid időn belül visszavesszük.
              </p>
            </div>
            <div>
              <h5 className="yellow">Én jó ideiglenes befogadó lennék?</h5>
              <p>
                Van egy szabad szobád, barátságos zugod, és Debrecenben, vagy
                közvetlen vonzáskörzetében laksz? Kertes házban élsz, de te is
                úgy gondolod, hogy egy kutya társ-állat és a lakásba is
                beengednéd? Jó érzéssel töltene el a tudat, hogy egy magára
                hagyott állaton segítesz? Néhány hónapos közös ismerkedés
                gyorsan átalakul, tanulságos, kihívásokkal teli és kedves
                élménnyé, melyet soha nem felejtesz el. Ideiglenes befogadónak
                lenni komoly feladat és elkötelezettség, hiszen ez
                megváltoztatja a megszokott hétköznapi életedet, és esetleg
                saját házi kedvencednek is meg kell barátkoznia az új
                helyzettel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IdeiglenesBefogado;
