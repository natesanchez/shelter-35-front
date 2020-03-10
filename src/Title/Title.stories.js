import React from 'react';
import { storiesOf } from '@storybook/react';
import Title from './Title'

storiesOf('Title', module)
.add('Username', () => <Title
    type="text"
    placeholder= "Username"
    text
/>)
    .add('Comment', () => <Title
    type="text"
    placeholder= "Insert Comment Here"
    text
    Comment
    />)
