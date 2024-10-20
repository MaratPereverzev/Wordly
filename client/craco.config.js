const path = require("path");
const fs = require("fs");
const evalSourceMap = require("react-dev-utils/evalSourceMapMiddleware");
const redirectServedPath = require("react-dev-utils/redirectServedPathMiddleware");
const noopServiceWorker = require("react-dev-utils/noopServiceWorkerMiddleware");

const resolvePath = (p) => path.resolve(__dirname, p);

module.exports = {
  webpack: {
    alias: {
      "@store": resolvePath("./src/store"),
      "@fetch": resolvePath("./src/fetch"),
      "@components": resolvePath("./src/components"),
      "@context": resolvePath("./src/context"),
      "@data": resolvePath("./src/data"),
      "@hooks": resolvePath("./src/hooks"),
      "@utils": resolvePath("./src/utils"),
      "@pages": resolvePath("./src/pages"),
      "@auth": resolvePath("./src/auth"),
      "@dialog": resolvePath("./src/dialog"),
    },
  },
  eslint: false,
  devServer: (devServerConfig, { env, paths }) => {
    devServerConfig = {
      ...devServerConfig,
      onBeforeSetupMiddleware: undefined,
      onAfterSetupMiddleware: undefined,
      setupMiddlewares: (middleware, devServer) => {
        if (!devServer) {
          throw new Error("webpack-dev-server is not defined");
        }

        if (fs.existsSync(paths.proxySetup)) {
          require(paths.proxySetup)(devServer.app);
        }

        middleware.push(
          evalSourceMap(devServer),
          redirectServedPath(paths.publicUrlOrPath),
          noopServiceWorker(paths.publicUrlOrPath)
        );

        return middleware;
      },
    };
    devServerConfig.client.overlay.warnings = true;
    return devServerConfig;
  },
};
