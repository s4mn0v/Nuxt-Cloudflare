const { $ } = await import("bun");
await import("dotenv").then(env => env.config());

const projects = [
  {
    name: process.env.CF_PROJECT_1,
    token: process.env.CF_API_TOKEN_1,
    accountId: process.env.CF_ACCOUNT_ID_1,
  },
  // {
  //   name: process.env.CF_PROJECT_2,
  //   token: process.env.CF_API_TOKEN_2,
  //   accountId: process.env.CF_ACCOUNT_ID_2,
  // },
];

for (const proj of projects) {
  if (!proj.name || !proj.token || !proj.accountId) {
    console.error(`❌ Missing configuration for project`);
    continue;
  }

  console.log(`🚀 Deploying to ${proj.name}...`);

  await $`bunx wrangler pages deploy dist/ --project-name=${proj.name} --branch=main`
    .env({
      CLOUDFLARE_ACCOUNT_ID: proj.accountId,
      CLOUDFLARE_API_TOKEN: proj.token
    });
}