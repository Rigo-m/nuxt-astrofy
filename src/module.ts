import { defineNuxtModule, addPlugin, createResolver } from "@nuxt/kit";
import { isBoolean } from "util";

// Module options TypeScript interface definition
export interface ModuleOptions { }

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "nuxt-astrofy",
    configKey: "astrofy",
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  async setup(_, nuxt) {
    const projectDir = nuxt.options.srcDir;
    nuxt.hook("components:extend", (components) => {
      components.forEach((component, index) => {
        if (component.filePath.startsWith(projectDir)) {
          components[index] = {
            ...component,
            mode: "server",
          };
        }
      });
    });
  },
});
