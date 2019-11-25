import React from 'react';
import { linkTo } from '@storybook/addon-links';
import Timer from "./";

export default {
  title: 'Timer',
};

export const rendered = () => <Timer />;

rendered.story = {
  name: 'to Storybook',
};
