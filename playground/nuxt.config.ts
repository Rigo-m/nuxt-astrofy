export default defineNuxtConfig({
  modules: ["../src/module"],
  devtools: { enabled: true },
  runtimeConfig: {
    privateValue: "test",
  },
  experimental: {
    componentIslands: true,
  },
});
