import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../navbar/Navbar";
import Card from "../Card/Card";

function Allatok() {
  const [allatok, setAllatok] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/orokbefogadott")
      .then((res) => setAllatok(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Navbar />
      <div className="d-flex justify-content-center my-5">
        {allatok.map((data, i) => (
          <Card data={data} key={i} />
        ))}
      </div>
    </div>
  );
}

export default Allatok;
