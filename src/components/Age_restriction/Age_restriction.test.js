import React from "react";
import EnzymeAdapter from "../../setupTests.js";
import { shallow } from "enzyme";
import Age_restriction from "./Age_restriction.js";

describe("Age description test", () => {
  it("it should run without errors", () => {
    const component = shallow(<Age_restriction />);
    const wrapper = component.find(".para-text");
    expect(wrapper.length).toBe(3);
  });
});
