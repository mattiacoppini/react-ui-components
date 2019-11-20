import React from 'react';
import Button from "./Button";
import Central from '../../../../.storybook/decorators/layout/Central';

export default { 
    title: 'Atoms|Button', 
    decorators: [
        Central
    ]
};

export const DefaultButton = () => <Button>Default Button</Button>;
