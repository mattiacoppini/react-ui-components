import React from 'react';
import { mount } from 'enzyme'
import Button from './Button';

describe("Button Atom - Test Suite", () => {
    
    it("Should render the component properly with default params", () => {
        const children = "Test";
        const wrapper = mount(<Button>{children}</Button>);

        const ButtonWrapper = wrapper.find(Button);
        
        expect(ButtonWrapper.exists()).toBeTruthy();
        expect(ButtonWrapper.props().children).toBe(children);
    })
})
