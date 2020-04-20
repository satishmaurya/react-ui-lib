import React, { Fragment } from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { create } from '@storybook/theming';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/index.css';
import './fontawesome';
import Container from './container';
 
// fontawesome.library.add(fab,fas)
import { withA11y } from '@storybook/addon-a11y';
addDecorator(withA11y);

addDecorator(story => <Container story={story} />);

const theme = create({
    base: 'light',
    brandTitle: 'Stack UI',
    brandUrl: 'https://successive.tech',
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
      config: {},
      options: {
        checks: { 'color-contrast': { options: { noScroll: true } } },
        restoreScroll: true,
      },
    }
  });

  configure(
    [
      require.context('../docs/get-started', true, /\.stories\.mdx$/),
      require.context('../src/components', true, /\.stories\.mdx$/),
    ],
    module,
  );