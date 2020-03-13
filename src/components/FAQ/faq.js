import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./faq.css";
import Button from "../Button/Button.js";

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
    
class faq extends Component {
  render() {
    return (
      <div className="faqTopMain">
        <div class="faqinformative">
          <h1>FAQ</h1>
          <div class="faqcontainer">
            <p className="ul">Whats is Shelter35?</p>
            <p className="li">
              Shelter35 is a place to release all the tears, fustration,
              happiness from our 12 week experience.
            </p>
            <p className="ul">
              Do I need an Internet connection to use Shelter35?
            </p>
            <p className="li">
              Yes you do. Shelter35 is a cloud-based website, meaning that your
              Meow's are backed up and available wherever you are.
            </p>
            <p className="ul">
              Have a question that's not answered here. What email address
              should I use to contact you?
            </p>
            <p className="li">
              Please email nsanchez@usa.com If it’s not a holiday or a weekend,
              Nate will get back to you slowly. Like really slow.
            </p>
          </div>
          <br />
          <br />
          <br />
          <br />
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
