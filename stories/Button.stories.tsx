import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, Props } from '../src/Button';

const meta: Meta = {
    title: 'Button',
    component: Button
};

export default meta;

const Template: Story<Props> = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'Default button'
};

export const Text = Template.bind({});
Text.args = {
    variant: 'text',
    children: 'Text button'
};

export const Outlined = Template.bind({});
Outlined.args = {
    variant: 'outlined',
    children: 'Outlined button'
};