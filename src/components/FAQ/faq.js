import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./faq.css";
import Button from "../Button/Button.js"

class faq extends Component {
  render () {
    return (
      <div className="faqTopMain">
  
        <div class="faqinformative">
          <h1>FAQ</h1>
          <div class="faqcontainer">
            <p className="ul">
             Whats is Shelter35?
            </p>
            <p className="li">
             Shelter35 is a place to realese all the tears, fustration, happiness from our evil overlord "Zakk"
            </p>
            <p className="ul">
             Do I need an Internet connection to use Shelter35?
            </p>
            <p className="li">
              Yes you do. Shelter35  is a cloud-based website, meaning that your Meow's are backed up and available wherever you are.
            </p>
            <p className="ul">
            I'm really offended by that joke you posted!
            </p>
            <p className="li">
            Sorry to hear that. We do hear that, alas, on just about every joke that is even slightly offensive. Please read the Page Warning again.
            </p>
            <p className="ul">
             Have a question that's not answered here. What email address should I use to contact you?
            </p>
            <p className="li"> 
            Please email nsanchez@usa.com If it’s not a holiday or a weekend, Nate would get back to you pretty slowly. Slower than a Snail.
            </p>
          </div>
          <div className="button">
          <Link className="enterHome" to={"/home"}>
            <Button label="Home" type="enter" />
          </Link>
        </div>
        </div>
      </div>
    );
  }
}



export default faq;
