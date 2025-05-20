
# Install Wrangler as a Dev Dependency

```bash
bun i -D wrangler@latest
```

# Build with Cloudflare Pages Preset

```bash
bunx nuxi build --preset=cloudflare_pages
```

# Deploy the Build Output

```bash
bunx wrangler pages deploy dist/
```