import { defineConfig, presetIcons, presetTypography, presetUno } from "unocss";

export default defineConfig({
  cli: {
    entry: {
      outFile: "static/site.css",
      patterns: ["templates/**/*.html"],
    },
  },
  presets: [presetUno({ dark: "media" }), presetIcons(), presetTypography()],
});
