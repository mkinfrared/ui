// eslint-disable-next-line @typescript-eslint/no-var-requires
const postcssHasPseudo = require("css-has-pseudo");

module.exports = {
  plugins: [postcssHasPseudo(/* pluginOptions */ { preserve: true })],
};
