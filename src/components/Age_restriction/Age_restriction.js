import React from "react";
import { Link } from "react-router-dom";
import "./Age_restriction.css";

function Agerestrict() {
  return (
    <div className="">
      <div class="description">
        <h1>SHELTER 35</h1>
        <div class="para-container">
          <p>
            The website contains age-restricted materials. If you are under the
            age of 21 (Sorry Braden) or have no sense of humor, this site is not
            for you.
          </p>
          <p>
            Shelter 35 is an open space to joke, be sarcastic and bond with
            others over anonymous banter during the SEI 35 experience. PLEASE,
            feel free to complain about work, let out your React anger, and sing
            to the high heavens when your errors suddenly disappear (which won’t
            happen). Here is where you get to do all that without judgement of
            being known for your struggles. Because let’s be honest…the bell
            curves are REAL. Also…we have given you random names and random cat
            pictures for your every post. Hence…Shelter 35.
          </p>
          <p>
            By entering this site you hereby agree to have fun and build
            camaraderie with your SEI 35 felines. You also acknowledge and agree
            that you are not offended by OBVIOUS jokes and playful sarcasm. By
            clicking the “Enter" button and by entering the site you agree with
            all the above and certify that you are awesome and have a great
            sense of humor.{" "}
          </p>
        </div>
        <div class="button-container">
          <Link className="enterHome" to={"/home"}>
            <button>Enter</button>
          </Link>
          <button>Exit</button>
        </div>
      </div>
    </div>
  );
}

export default Agerestrict;
