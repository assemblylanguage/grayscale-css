"use strict";
/**
 * Importing and re-exporting the CSS grayscaler code.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.plugins = exports.grayscaleStyleSheet = exports.grayscaleCss = void 0;
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
const index_1 = require("./lib/index");
Object.defineProperty(exports, "grayscaleCss", { enumerable: true, get: function () { return index_1.grayscaleCss; } });
Object.defineProperty(exports, "grayscaleStyleSheet", { enumerable: true, get: function () { return index_1.grayscaleStyleSheet; } });
const plugin_1 = require("./lib/plugin");
exports.plugins = {
    grayscaleCssPlugin: plugin_1.grayscaleCssPlugin,
};
//# sourceMappingURL=index.js.map