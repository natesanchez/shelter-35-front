import React from "react";
import { Link } from "react-router-dom";
import "./Age_restriction.css";
import Button from "../Button/Button.js";

function Agerestrict() {
  return (
    <div className="container">
      <div className="description">
        <h1 className="shelter-35-title">SHELTER 35</h1>
        <div className="para-container">
          <p className="para-text" data-test="para-text">
            The website contains high level coding materials. If you have any
            interest in becoming or maintaining a badass status, this site is
            for you.
          </p>
          <p className="para-text" data-test="para-text">
            Sometimes it is hard to speak up in Slack and be knowon for not
            knowing something or possibly judged. Here, you can feel freed.
            Shelter 35 is an open space to learn, talk and bond with your cohort
            over anonymous conversation during the SEI 35 experience. PLEASE,
            feel free to complain about work, let out your React anger, and sing
            to the high heavens when your errors suddenly disappear (which won’t
            happen). Here is where you get to do all that without judgement of
            being known for your struggles. Because let’s be honest…the bell
            curves are REAL. Also…we have given you random names and random cat
            pictures for your every post just to add a lil sumthin sumthin.
            Hence…Shelter35.
          </p>
          <p className="para-text" data-test="para-text">
            Lets all be good felines and not pee on the wall or "meow" at 2am
            for no reason or scratch the couch. By entering this site you hereby
            agree to have fun and build camaraderie with your fellow people. You
            also acknowledge and agree that you are awesome and will eventually
            learn everything every written (what a treat that would be). By
            clicking the “Enter" button and by entering the site you agree with
            all the above and certify that you are ready.{" "}
          </p>
        </div>
        <div className="button-container">
          <Link className="enterHome" to={"/home"}>
            <Button label="Enter" type="enter" />
          </Link>
          <Button label="Exit" type="exit" />
        </div>
      </div>
    </div>
  );
}

export default Agerestrict;
