import React, { Component } from "./node_modules/react";

function Avatar(props) {
  return (
    <div>
      <div className="headline">
        <p>WHAT KIND OF CAT DO YOU HAVE?</p>
      </div>
      <div className="avatar-container">
        <div className="picture-choice">
          <p className="words">YOUR COUCH IS MY PERSONAL SCRATCH BOARD</p>
        </div>
        <div className="picture-choice">
          <p className="words">WHY SLEEP? HEAR ME "MEOW" FOR 8 HOURS</p>
        </div>
        <div className="picture-choice">
          <p className="words">I LOVE PEEING ON WALLS</p>
        </div>
      </div>
    </div>
  );
}

export default Avatar;
