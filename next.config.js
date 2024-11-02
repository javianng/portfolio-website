/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/main-page",
        permanent: true, // Set to true if the redirect is permanent (301), otherwise false (302)
      },
    ];
  },
};

export default config;
