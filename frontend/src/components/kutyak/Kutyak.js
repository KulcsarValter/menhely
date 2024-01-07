import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../navbar/Navbar";
import Card from "../Card/Card";

function Kutyak() {
  const [kutyak, setKutyak] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/kutyak")
      .then((res) => setKutyak(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Navbar />
      <div className="d-flex flex-wrap justify-content-center border-2 mt-5">
        {kutyak.map((data, i) => (
          <Card data={data} key={i} />
        ))}
      </div>
      <div className="d-flex justify-content-center mt-5">
        <Link
          to="/orokbefogadas"
          className="d-flex justify-content-center btn btn-outline-info"
        >
          Örökbefogadás
        </Link>
      </div>
    </div>
  );
}

export default Kutyak;
