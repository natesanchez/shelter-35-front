import React from "react";
import EnzymeAdapter from "../../setupTests.js";
import { shallow } from "enzyme";
import Age_restriction from "./Age_restriction.js";

describe("Age description test", () => {
  it("Should render 3 paragraphs", () => {
    const component = shallow(<Age_restriction />);
    const para = component.find(".para-text");
    expect(para.length).toBe(3);
  });
  it("Should render 2 buttons", () => {
    const component = shallow(<Age_restriction />);
    const button = component.find("Button");
    console.log(component.debug());
    expect(button.length).toBe(2);
  });
});
