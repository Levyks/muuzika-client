import { defineConfig } from "vite";
import solid from "solid-start/vite";
import staticAdapter from "solid-start-static";
import UnoCSS from "unocss/vite";

export default defineConfig({
  plugins: [
    solid({
      adapter: staticAdapter(),
      ssr: true,
    }),
    UnoCSS(),
  ],
});
