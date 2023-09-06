import React from "react";
import Navbar from "../navbar/Navbar";

function Kapcsolat() {
  return (
    <div>
      <Navbar />
      <div>
        <h2 className="section-header text-center">Kapcsolat</h2>
        <div className="d-flex justify-content-center">
          <form className="form-horizontal w-25">
            <textarea
              className="kapcsolat w-100 p-3 rounded-3"
              rows="20"
              placeholder="Üzenjen nekünk!"
              name="uzenet"
              required
            ></textarea>
            <div>
              <button
                className="btn btn-warning send-button w-100 mt-2"
                id="submit"
                type="submit"
                value="SEND"
              >
                Üzenet küldése
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Kapcsolat;
