import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../navbar/Navbar";
import Card from "../Card/Card";

function Allatok() {
  const [allatok, setAllatok] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/allatok")
      .then((res) => setAllatok(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Navbar />
      <div className="d-flex flex-wrap justify-content-center border-2 mt-5">
        {allatok.map((data, i) => (
          <div>
            <Card data={data} key={i} />
          </div>
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

export default Allatok;
