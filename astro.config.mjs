import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import NetlifyCMS from "astro-netlify-cms";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
    applyBaseStyles:false
  }), 
    react(),
    NetlifyCMS({
      config: {
        disableIdentityWidgetInjection: true,
        backend: {
          name: "git-gateway",
          branch: "main",
        },
        media_folder: "src/assets/images/",
        public_folder: "_astro/",
        collections: [
          {
            name: "performances",
            label: "Upcoming Performances",
            folder: "src/content/performances",
            create: true,
            delete: true,
            fields: [
              { name: "title", widget: "string", label: "Title of Performance" },
              {name: "date", widget: "datetime", label: "Date of Performance" },
              { name: "body", widget: "markdown", label: "Description" },
            ],
          },
        ],
      },
    }),
  ]
});