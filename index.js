import axios from "axios";

async function screen({ params }) {
  return {
    type: {
      value: "feed",
      title: "title"
    },
    entry: [
      {
        type: {
          value: "feed"
        },
        content: {
          src: `gavri-dsp://fetchData?type=search&q=${params.q}&component=1`
        }
      }
    ]
  };
}

async function component1({ params }) {
  console.log("*", params.q.length);

  const apiResponse =
    params.q.length < 3
      ? { data: { Response: "False" } }
      : await axios.get(
          `http://www.omdbapi.com/?s=${params.q}&apikey=${params.url}`
        );

  return {
    type: {
      value: "feed",
      title: "title"
    },
    entry:
      apiResponse.data.Response === "False"
        ? []
        : apiResponse.data.Search.map(item => {
            return {
              type: {
                value: "video"
              },
              id: "Id1",
              title: item.Title,
              summary: "Example summary",
              published: "2005-04-06T13:00:00-08:00",
              updated: "2005-04-06T20:25:05-08:00",
              media_group: [
                {
                  type: "image",
                  media_item: [
                    {
                      type: "image",
                      key: "image_base",
                      src: item.Poster
                    }
                  ]
                }
              ],
              content: {
                type: "video/hls",
                src:
                  "http://devimages.apple.com/iphone/samples/bipbop/bipbopall.m3u8"
              }
            };
          })
  };
}

export default {
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
      const response = await component1({ params });
      return await providerInterface.sendResponse(response);
    }
    return providerInterface.sendResponse(await screen({ params }));
  }
};
