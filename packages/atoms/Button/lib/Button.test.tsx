import React, { ReactElement } from 'react';
import { mount } from 'enzyme'
import Button from './Button';

describe("Button Atom - Test Suite", () => {
    
    const getButton = (children: HTMLElement | string): ReactElement => {
        return <Button>{children}</Button>
    };

    it("Should render the component properly with default params", () => {
        const children = "Test";
        const wrapper = mount(getButton(children));

        const ButtonWrapper = wrapper.find(Button);
        
        expect(ButtonWrapper.exists()).toBeTruthy();
        expect(ButtonWrapper.props().children).toBe(children);
        expect(ButtonWrapper.find("button").exists()).toBeTruthy()
    })
})
