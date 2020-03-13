import React from "react";
import EnzymeAdapter from "../../setupTests.js";
import { shallow } from "enzyme";
import Blog from "./Blog.js";
import { findByTestAtrr } from "../../utility.js";

const setUp = (props = {}) => {
  const component = shallow(<Blog {...props} />);
  return component;
};

describe("Blog test", () => {
  describe("has props", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        data: "test data",
        videoURL: "test url"
      };
      wrapper = setUp(props);
    });
    it("Should run no errors", () => {
      const component = findByTestAtrr(wrapper, "main");
      console.log(component.debug());
      expect(component.length).toBe(1);
    });
    describe("has no props", () => {
      let wrapper;
      beforeEach(() => {
        wrapper = setUp();
      });
    });
  });
});

// beforeEach(() => {
//     component = setUp();
// });

// it("Should render 3 paragraphs", () => {
//     const para = component.find(".para-text");
//     expect(para.length).toBe(3);
//   });
