import React from 'react';
import Button from "./Button";
import Central from '../../../../.storybook/decorators/layout/Central';
import { storiesOf } from '@storybook/react';

const stories = storiesOf('Atoms|Button', module);
stories.addDecorator(Central)

stories.add("Demo", () => <Button>Default Button</Button>);
