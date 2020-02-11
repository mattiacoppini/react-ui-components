import React, { ReactElement } from 'react';
import { mount } from 'enzyme'
import Label from './Label';

describe("Label Atom - Test Suite", () => {
    
    const getLabel = (children: HTMLElement | string): ReactElement => {
        return <Label>{children}</Label>
    };

    it("Should render the component properly with default params", () => {
        const children = "Test";
        const wrapper = mount(getLabel(children));

        const LabelWrapper = wrapper.find(Label);
        
        expect(LabelWrapper.exists()).toBeTruthy();
        expect(LabelWrapper.props().children).toBe(children);
        expect(LabelWrapper.find("label").exists()).toBeTruthy()
    })
})
