// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	prefetch: {
		prefetchAll: false,
		defaultStrategy: "tap",
	},
	redirects: {
		"/madsession/a-ritmo-cha-cun-cha": "/madsessions/a-ritmo-cha-cun-cha",
		"/madsession/gangsters-modernos": "/madsessions/gangsters-modernos",
	},
});
