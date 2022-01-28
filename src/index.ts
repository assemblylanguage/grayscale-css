/**
 * Importing and re-exporting the CSS grayscaler code.
 */

/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */

import {
  grayscaleCss,
  grayscaleStyleSheet,
} from './lib/index';

import {
  grayscaleCssPlugin,
} from './lib/plugin';

export {
  grayscaleCss,
  grayscaleStyleSheet,
};

export const plugins = {
  grayscaleCssPlugin,
};
