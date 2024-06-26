import { esbuildPluginFilePathExtensions as fpe } from "esbuild-plugin-file-path-extensions";
import { defineConfig } from "tsup";

export default defineConfig([
	{
		entry: {
			bundle: "src/index.ts",
		},
		format: ["esm", "cjs"],
		splitting: false,
		sourcemap: true,
		clean: true,
		dts: true,
		outExtension: ({ format }) => ({ js: format == "esm" ? ".mjs" : ".cjs" }),
	},
	{
		entry: ["src/**/*.ts", "src/index.ts", "!src/**/*.test.ts"],
		outDir: "./dist",
		format: ["esm"],
		target: "es2020",
		splitting: false,
		sourcemap: true,
		clean: false,
		dts: true,
		outExtension: () => ({ js: ".mjs" }),
		esbuildPlugins: [fpe()],
	},
]);
