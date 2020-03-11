import React from "react";
import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

import Home from "../components/Home/Home";

// We will describe a block of tests
describe("Home page", () => {
  // we will write one individual test
  it("does it have three links", () => {
    // Shallow rendering renders a component without rendering any of its children
    const component = shallow(<Home />);
    // We create an assertion within the test that checks if our component renders our name prop
    expect(component.contains(<Link />)).toBe(true);
  });
});
