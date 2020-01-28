import screen from "./feeds/screen";
import component1 from "./feeds/component1";

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
    if (params.component === "1")
      return await providerInterface.sendResponse(component1({ params }));

    return await providerInterface.sendResponse(screen({ params }));
  }
};
