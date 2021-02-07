'use strict'
const __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { default: mod }
}
Object.defineProperty(exports, '__esModule', { value: true })
const express_1 = __importDefault(require('express'))
const test_1 = __importDefault(require('../router/test'))
const app = express_1.default()
app.use(test_1.default)
exports.default = app
