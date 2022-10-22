const path = require("path");
const childProcess = require("child_process");

const compileTokens = () => {
  const tokensDir = path.resolve(__dirname, "../src/styles/tokens");

  childProcess.exec(`sass ${tokensDir}:${tokensDir}`);
};

module.exports = compileTokens;
