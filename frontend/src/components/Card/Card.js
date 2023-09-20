import React from "react";

function Card({ data }) {
  return (
    <div className="pa1 kartyak grow ma1 br2 my-5">
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
      <p>Leírás: {data.allatleiras}</p>
    </div>
  );
}

export default Card;
