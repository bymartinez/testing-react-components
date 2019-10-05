import React from 'react';
import { mount } from 'enzyme';
import Form from './Form';

describe('<Form />', () => {
  let component;
  beforeAll(() => {
    component = mount(<Form />);
  });

  describe('when the form is rendered', () => {
    it('should have the expected structure', () => {
      expect(component.exists('form')).toEqual(true);

      const inputs = component.find('div.form-element-input');
      expect(inputs).toHaveLength(4);

      const firstNameInput = inputs.at(0);
      expect(firstNameInput.text()).toEqual('First name');

      const lastNameInput = inputs.at(1);
      expect(lastNameInput.text()).toEqual('Last name');

      const emailInput = inputs.at(2);
      expect(emailInput.text()).toEqual('Email address');

      const passwordInput = inputs.at(3);
      expect(passwordInput.text()).toEqual('Password');

      expect(component.find('button').prop('disabled')).toEqual(true);
    });

    describe('when the user inserts valid data', () => {
      it('the button should be enabled', () => {
        expect(component.exists('form')).toEqual(true);

        const inputs = component.find('div.form-element-input');

        const firstNameInput = inputs.at(0);
        const lastNameInput = inputs.at(1);
        const emailInput = inputs.at(2);
        const passwordInput = inputs.at(3);

        firstNameInput
          .find('input')
          .simulate('change', { target: { value: 'Elon' }});

        lastNameInput
          .find('input')
          .simulate('change', { target: { value: 'Musk' }});

        emailInput
          .find('input')
          .simulate('change', { target: { value: 'elon@musk.com' }});

        passwordInput
          .find('input')
          .simulate('change', { target: { value: 'secret!' }});

        component.update();
        expect(component.find('Button').prop('isEnabled')).toEqual(true);
      });
    });

    describe('when the user inserts invalid data', () => {
      it('the button should be enabled', () => {
        expect(component.exists('form')).toEqual(true);

        const inputs = component.find('div.form-element-input');

        const firstNameInput = inputs.at(0);
        const lastNameInput = inputs.at(1);
        const emailInput = inputs.at(2);
        const passwordInput = inputs.at(3);

        firstNameInput
          .find('input')
          .simulate('change', { target: { value: 'a' }});

        lastNameInput
          .find('input')
          .simulate('change', { target: { value: 'a' }});

        emailInput
          .find('input')
          .simulate('change', { target: { value: 'a' }});

        passwordInput
          .find('input')
          .simulate('change', { target: { value: 'a!' }});

        component.update();
        expect(component.find('Button').prop('isEnabled')).toEqual(false);
      });
    });
  });
});