import React from "react";
import EnzymeAdapter from "../../setupTests.js";
import { shallow } from "enzyme";
import Blog from "./Blog.js";

const setUp = (props = {}) => {
  const component = shallow(<Blog {...props} />);
  return component;
};

describe("Blog test", () => {
  describe("has props", () => {});

  describe("has no props", () => {});
});

// beforeEach(() => {
//     component = setUp();
// });

// it("Should render 3 paragraphs", () => {
//     const para = component.find(".para-text");
//     expect(para.length).toBe(3);
//   });
