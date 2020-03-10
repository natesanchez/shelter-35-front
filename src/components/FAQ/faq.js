import React from "react";
// import { Link } from "react-router-dom";
import "./faq.css";

function faq() {
  return (
    <div className="mainDesc">
      <div class="description">
        <h1>FAQ</h1>
        <div class="container">
          <p>
           Whats is Shelter35?
          </p>
          <p>
           Shelter35 is a place to realese all the tears, fustration, happiness from our evil overlord "Zakk"
          </p>
          <p>

          </p>
           <p>
           Do I need an Internet connection to use Shelter35?
          </p>
          <p>
            Yes you do. Shelter35  is a cloud-based website, meaning that your Meow's are backed up and available wherever you are.
          </p>
          <p>

          </p>
          <p>
          I'm really offended by that joke you posted!
          </p>
          <p>
          Sorry to hear that. We do hear that, alas, on just about every joke that is even slightly offensive. Please read the Page Warning again.
          </p>
           <p>
           Have a question that's not answered here. What email address should I use to contact you?
          </p>
          <p> 
          Please email nsanchez@usa.com If it’s not a holiday or a weekend, Nate would get back to you pretty slowly. Slower than a Snail.
          </p>
        </div>
        {/* <div class="button-container">
          <Link className="enterHome" to={"/home"}>
            <button>Enter</button>
          </Link>
          <button>Exit</button>
        </div> */}
      </div>
    </div>
  );
}

export default faq;