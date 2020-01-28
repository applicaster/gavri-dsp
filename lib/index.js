"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function screen({
  params
}) {
  return {
    type: {
      value: "feed",
      title: "title"
    },
    entry: [{
      type: {
        value: "feed"
      },
      content: {
        src: `gavri-dsp://fetchData?type=search&q=${params.q}&component=1`
      }
    }]
  };
}

async function component1({
  params
}) {
  const {
    data
  } = await _axios.default.get(`http://www.omdbapi.com/?s=${params.q}&apikey=866e332`);
  return {
    type: {
      value: "feed",
      title: "title"
    },
    entry: data.Response === "False" ? [] : data.Search.map(item => {
      return {
        type: {
          value: "video"
        },
        id: "Id1",
        title: item.Title,
        summary: "Example summary",
        published: "2005-04-06T13:00:00-08:00",
        updated: "2005-04-06T20:25:05-08:00",
        media_group: [{
          type: "image",
          media_item: [{
            type: "image",
            key: "image_base",
            src: item.Poster
          }]
        }],
        content: {
          type: "video/hls",
          src: "http://devimages.apple.com/iphone/samples/bipbop/bipbopall.m3u8"
        }
      };
    })
  };
}

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
    if (params.component === "1") {
      const response = await component1({
        params
      });
      return await providerInterface.sendResponse(response);
    }

    return await providerInterface.sendResponse(screen({
      params
    }));
  }
};
exports.default = _default;