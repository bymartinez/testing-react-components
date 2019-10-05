import React from "react";
import sinon from 'sinon';
import { shallow } from "enzyme";
import Button from "./Button";

describe("<Button />", () => {
  it("should render the expected structure", () => {
    const props = {
      type: "text",
      onClick: () => null,
      isEnabled: true,
      children: "Hello, World"
    };

    const component = shallow(<Button {...props} />);
    expect(component.exists('div.submit-button')).toEqual(true);
    expect(component.exists('button'));

    const button = component.find('button');
    expect(button.prop('type')).toEqual('text');
    expect(button.prop('disabled')).toEqual(false);
    expect(button.text()).toEqual('Hello, World');
  });

  describe('when the user click the button', () => {
    it("should call the onClick function", () => {
      const props = {
        type: "text",
        onClick: sinon.spy(),
        isEnabled: true,
        children: "Hello, World"
      };

      const component = shallow(<Button {...props} />);
      expect(component.exists('button'));
      const button = component.find('button');
      button.simulate('click');
      expect(props.onClick.calledOnce).toEqual(true);
    });
  });
});
