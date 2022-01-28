"use strict";
/**
 * Plugins for humble.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.grayscaleCssPlugin = void 0;
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-param-reassign */
const index_1 = require("./index");
/**
 * A plugin wrapper for the `grayscaleCss` function.
 *
 * @param humble a Humble object that will be modified in place.
 */
function grayscaleCssPlugin(humble) {
    return __awaiter(this, void 0, void 0, function* () {
        yield index_1.grayscaleCss(humble.document);
    });
}
exports.grayscaleCssPlugin = grayscaleCssPlugin;
//# sourceMappingURL=plugin.js.map