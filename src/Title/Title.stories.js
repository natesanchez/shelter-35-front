import React from 'react';
import { storiesOf } from '@storybook/react';
import Title from './Title'

storiesOf('Title', module)
.add('Text Input Regular', () => <Title
    type="text"
    label="Username"
    placeholder= ""
/>)
