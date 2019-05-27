import React from 'react';
import Provider from '../../stories';
import { storiesOf } from '@storybook/react';
import UserForm from './user-form';

storiesOf('Components|UserForm', module)
  .addDecorator(story => <Provider story={story()} />)
  .add('without props', () => <UserForm />);
