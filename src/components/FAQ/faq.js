import React from "react";
import { Link } from "react-router-dom";
import "./faq.css";

function faq() {
  return (
    <div className="TopMain">
      <div class="informative">
        <h1>FAQ</h1>
        <div class="container">
          <ul>What is Shelter35?</ul>
          <li>
            Shelter35 is a place to release all the tears, fustration, happiness
            from our 12 week experience.
          </li>
          <ul>Do I need an Internet connection to use Shelter35?</ul>
          <li>
            Yes you do. Shelter35 is a cloud-based website, meaning that your
            Meow's are backed up and available wherever you are.
          </li>
          <ul>
            Have a question that's not answered here. What email address should
            I use to contact you?
          </ul>
          <li>
            Please email nsanchez@usa.com If it’s not a holiday or a weekend,
            Nate will get back to you slowly. Like really slow.
          </li>
        </div>
      </div>
    </div>
  );
}
export default faq;
