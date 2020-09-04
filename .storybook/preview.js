import React, { Fragment } from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { create } from '@storybook/theming';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../src/index.css';
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
    brandTitle: `<b style="font-weight: 700;
    -webkit-background-clip: text;
    font-size: 22px;
    background-clip: text;
    color: transparent;
    letter-spacing: -1px;
    background-image: linear-gradient( to right, #3c4edd 0%, #b35ecd 50%, #f47a61 100% );">&#60; Stack UI &#47;&#62;</b>
    <br /><small><span style="font-weight: 300">Component Library from</span> Successive Tech</small><br /><small>v.0.1.0</small>`,
    // brandImage:
    //   'logoShap.png',
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