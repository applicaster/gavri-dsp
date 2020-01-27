const zappPipesDevKit = require("@applicaster/zapp-pipes-dev-kit");
const myProvider = require("./index.js");

const provider = myProvider.default;

const port = process.env.PORT || 8080;
const host = process.env.HOST || "0.0.0.0";


const zappPipesServer = zappPipesDevKit.createZappPipesServer({
  providers: [provider],
  host,
  port
});

zappPipesServer.startServer();
