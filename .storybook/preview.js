import React, { Fragment } from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { create } from '@storybook/theming';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/index.css';

const theme = create({
    base: 'light',
    brandTitle: 'Stack UI',
    brandUrl: 'https://github.com/bbc/psammead',
    brandImage:
      'logoShap.png',
  });

  addParameters({
    options: {
      panelPosition: 'right',
      sidebarAnimations: true,
      theme,
    },
    a11y: {
      options: {
        runOnly: {
          type: 'tag',
          values: ['wcag2a', 'wcag2aa', 'wcag21aa'],
        },
        iframes: true,
      },
    },
  });