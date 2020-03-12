import React from "react";
import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Home from "../components/Home/Home.js";
configure({ adapter: new Adapter() });

it("should toggle second button’s disabled state when clicking on first button", () => {
  const component = shallow(<Home />);

  const wrapper = shallow(<Button />);
  const firstButton = wrapper.find("button").at(0);
  const secondButton = wrapper.find("button").at(1);

  firstButton.simulate("click");
  expect(secondButton.props().disabled).toEqual(true);

  firstButton.simulate("click");
  expect(secondButton.props().disabled).toEqual(false);
});
