import React from 'react';
import { storiesOf } from '@storybook/react';
import Label from "./Label";

const stories = storiesOf('Atoms|Label', module);

stories.add("Demo", () => <Label>Label</Label>);
