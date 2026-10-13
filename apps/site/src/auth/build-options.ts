export const feedbackAuthBuild = {
  pure: {
    packages: [
      "better-auth",
      "@better-auth/*",
      "@rat-stack/auth",
      "@rat-stack/database",
    ],
  },
};

export const vendorChunkGroups = [
  {
    name: "vendor-otlp",
    test: /effect[\\/]dist[\\/]observability[\\/]/u,
  },
  {
    name: "vendor-pipelines",
    test: /alchemy[\\/]lib[\\/]Cloudflare[\\/]Pipelines[\\/]/u,
  },
];

export const feedbackGatewayBuild = {
  output: { codeSplitting: { groups: vendorChunkGroups } },
  pure: { packages: ["@rat-stack/database"] },
};
