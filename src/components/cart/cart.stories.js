import React from 'react';
import Provider from '../../stories';
import { storiesOf } from '@storybook/react';
import Cart from './cart';

storiesOf('Components|Cart', module)
  .addDecorator(story => <Provider story={story()} />)
  .add('without props', () => <Cart />)
  .add('with some props', () => <Cart visible={true} />);
