import { exec } from "child_process";
import fs from "fs";
import path from "path";

import autoprefixer from "autoprefixer";
import cssHasPseudo from "css-has-pseudo";
import esbuild, { BuildOptions } from "esbuild";
import nodeExternalsPlugin from "esbuild-node-externals";
import svgr from "esbuild-plugin-svgr";
import { postcssModules, sassPlugin } from "esbuild-sass-plugin";
import postcss from "postcss";

import { dependencies } from "../package.json";

const resolveRoot = (...pathSegments: string[]) => {
  const rootDir = path.resolve(__dirname, "..");

  return path.resolve(rootDir, ...pathSegments);
};

const template = (variables: any, { tpl }: any) => tpl`
    ${variables.imports};
    ${variables.interfaces};
    const ${variables.componentName} = (${variables.props}) => (
      ${variables.jsx}
    );
    ${variables.exports};
    export const ReactComponent = ${variables.componentName};
  `;

const outdir = resolveRoot("lib");

const options: BuildOptions = {
  assetNames: "static/assets/[name]",
  bundle: true,
  entryNames: "esm/[ext]/index",
  entryPoints: [resolveRoot("src/index.tsx")],
  external: Object.keys(dependencies),
  format: "esm",
  jsx: "transform",
  jsxSideEffects: true,
  metafile: true,
  minify: true,
  outdir,
  plugins: [
    nodeExternalsPlugin(),
    sassPlugin({
      transform: async (source, resolveDir, filePath) => {
        const cssModules = postcssModules({
          generateScopedName: "[name]__[local]___[hash:base64:5]",
        });

        const { css } = await postcss([
          autoprefixer,
          cssHasPseudo({ preserve: true }),
        ]).process(source, { from: undefined });

        const result = cssModules(css, resolveDir, filePath);

        return result;
      },
    }),
    svgr({
      template,
    }),
  ],
  sourcemap: "external",
  sourceRoot: resolveRoot("src"),
  target: ["es2020"],
  tsconfig: resolveRoot("./tsconfig.json"),
};

const build = async () => {
  const result = await esbuild.build(options);

  fs.writeFileSync(
    path.resolve(outdir, "meta.json"),
    JSON.stringify(result.metafile),
  );
};

fs.rm(outdir, { recursive: true }, (err) => {
  console.info(err);
});

exec(`tsc --noEmit false --declarationDir ${outdir}/types`);

build();
