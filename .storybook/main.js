module.exports = {
  stories: [
    '../src/components/**/*.stories.mdx',
    '../docs/get-started/*.stories.mdx',


],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-docs',
    // '@storybook/addon-knobs',
    '@storybook/addon-a11y',
  ],
};