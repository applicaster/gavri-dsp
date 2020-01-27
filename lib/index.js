"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
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
    console.log({
      params
    });
    const appData = await providerInterface.appData();
    console.log(appData);
    return await providerInterface.sendResponse({
      type: {
        value: "feed",
        title: "title",
        entry: [{
          type: {
            value: "video"
          },
          id: "Id1",
          title: "Example Video Title #1",
          summary: "Example summary",
          published: "2005-04-06T13:00:00-08:00",
          updated: "2005-04-06T20:25:05-08:00",
          media_group: [{
            type: "image",
            media_item: [{
              type: "image",
              key: "image_base",
              src: "https://via.placeholder.com/320x180.png"
            }]
          }],
          content: {
            type: "video/hls",
            src: "http://devimages.apple.com/iphone/samples/bipbop/bipbopall.m3u8"
          }
        }]
      }
    });
  }
};
exports.default = _default;