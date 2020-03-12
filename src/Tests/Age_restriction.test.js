import React from "react";
import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import AgeRestriction from "../components/Age_restriction/Age_restriction";
configure({ adapter: new Adapter() });

// We will describe a block of tests
describe("Welcome page", () => {
  // we will write one individual test
  it("should have a enter button", () => {
    // Shallow rendering renders a component without rendering any of its children
    const component = shallow(<AgeRestriction />);
    // We create an assertion within the test that checks if our component renders our name prop
    expect(component.contains(<h1>SHELTER 35</h1>)).toBe(true);
  });
});

describe("");
