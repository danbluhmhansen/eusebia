import { defineConfig, presetIcons, presetTypography, presetUno } from "unocss";

export default defineConfig({
  presets: [presetUno({ dark: "media" }), presetIcons(), presetTypography()],
});
