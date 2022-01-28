/**
 * Plugins for humble.
 */

/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-param-reassign */

import {
  grayscaleCss,
} from './index';

/**
 * A plugin wrapper for the `grayscaleCss` function.
 *
 * @param humble a Humble object that will be modified in place.
 */
export async function grayscaleCssPlugin(
  humble: any,
) : Promise<void> {
  await grayscaleCss(humble.document);
}
