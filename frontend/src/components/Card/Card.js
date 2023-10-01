import React from "react";
import "./Cards.css";

function Card({ data }) {
  return (
    <div className="pa1 kartyak grow mh2 mt3 br2 grow">
      {data.allatkep && (
        <img
          src={`http://localhost:3001/${data.allatkep}`}
          height={200}
          width={300}
          alt={data.allatnev}
        />
      )}
      <p>Állat neve: {data.allatnev}</p>
      <p>Faj: {data.allatfaj}</p>
      <p>Fajta: {data.allatfajta}</p>
      <p>Neme: {data.allativar}</p>
      <p>Kora: {data.allatkor} éves</p>
      <p className="tc fw9">Leírás</p>
      <div className="flex justify-center ba">
        <div className="leiras w5">{data.allatleiras}</div>
      </div>
    </div>
  );
}

export default Card;
