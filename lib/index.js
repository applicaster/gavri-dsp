"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _screen = _interopRequireDefault(require("./feeds/screen"));

var _component = _interopRequireDefault(require("./feeds/component1"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  name: "gavri-dsp",
  manifest: {
    handlers: ["search"],
    help: {
      search: {
        description: "Search an item",
        params: {
          q: "query to search"
        }
      }
    }
  },
  test: {
    testCommand: "gavri-dsp://fetchData?type=search&q=private%20ryan"
  },
  handler: providerInterface => async params => {
    if (params.component === "1") return await providerInterface.sendResponse((0, _component.default)({
      params
    }));
    return await providerInterface.sendResponse((0, _screen.default)({
      params
    }));
  }
};
exports.default = _default;