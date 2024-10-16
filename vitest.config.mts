import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		coverage: {
			exclude: ["bump.config.ts", "vitest.config.mts", "tsup.config.ts"],
		},
	},
});
