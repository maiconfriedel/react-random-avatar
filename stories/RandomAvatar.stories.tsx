import { Meta } from '@storybook/react';
import React from 'react';

import { RandomAvatar } from '../src';
import { RandomAvatarProps } from '../src/components/RandomAvatar';

const meta: Meta = {
  title: 'RandomAvatar',
  component: RandomAvatar,
  argTypes: {
    seed: { control: { type: 'text' } },
    transparent: { control: { type: 'boolean' } },
    size: { control: { type: 'number' } },
  },
};

export default meta;

const DefaultRandomAvatarTemplate = ({ size, ...props }: RandomAvatarProps) => (
  <RandomAvatar size={size} {...props} />
);

export const DefaultRandomAvatar = DefaultRandomAvatarTemplate.bind({});
DefaultRandomAvatar.args = {
  transparent: true,
  size: 30,
};

const SeededRandomAvatarTemplate = ({ size, ...props }: RandomAvatarProps) => (
  <RandomAvatar size={size} {...props} />
);

export const SeededRandomAvatar = SeededRandomAvatarTemplate.bind({});
SeededRandomAvatar.args = {
  seed: 'seeded',
  transparent: false,
  size: 30,
};
