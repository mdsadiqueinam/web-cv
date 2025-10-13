# Deploying to GitHub Pages

Your Nuxt app is now configured to deploy to GitHub Pages!

## Configuration Applied

1. ✅ Static site generation enabled (`ssr: true` with `nitro.preset: 'static'`)
2. ✅ Output directory set to `dist`
3. ✅ Base URL configured for GitHub Pages: `/web-cv/`
4. ✅ `.nojekyll` file added to prevent Jekyll processing
5. ✅ GitHub Actions workflow created for automatic deployment

## Deployment Options

### Option 1: Automatic Deployment with GitHub Actions (Recommended)

1. **Enable GitHub Pages in your repository settings:**

   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**

2. **Push your code to GitHub:**

   ```bash
   git add .
   git commit -m "Configure for GitHub Pages deployment"
   git push origin main
   ```

3. **The workflow will automatically:**
   - Build your static site
   - Deploy it to GitHub Pages
   - Your site will be available at: `https://mdsadiqueinam.github.io/web-cv/`

### Option 2: Manual Deployment

1. **Build the static site:**

   ```bash
   npm run generate
   ```

2. **Deploy the `dist` folder manually:**
   - Go to your repository settings → Pages
   - Select **Deploy from a branch**
   - Create a `gh-pages` branch and push the `dist` folder content to it

## Important Notes

- **Base URL**: Currently set to `/web-cv/` (matching your repository name)

  - If deploying to `https://mdsadiqueinam.github.io/` (user/org site), change `baseURL` in `nuxt.config.ts` to `'/'`
  - For project sites like `https://mdsadiqueinam.github.io/web-cv/`, keep it as `'/web-cv/'`

- **Branch**: The GitHub Actions workflow is set to deploy from the `main` branch. Update `.github/workflows/deploy.yml` if your default branch is different.

## Local Testing

### Test Regular Build (without GitHub Pages base path)

```bash
npm run generate
npm run preview:dist
```

Then open **http://localhost:3000** in your browser.

### Test GitHub Pages Build (with `/web-cv/` base path)

To test exactly how your site will work on GitHub Pages:

```bash
# 1. Build for GitHub Pages
npm run generate:gh-pages

# 2. Create test directory structure that mimics GitHub Pages
mkdir -p gh-pages-test/web-cv
cp -r dist/* gh-pages-test/web-cv/

# 3. Serve the test directory
npx serve gh-pages-test -l 3001
```

Then open **http://localhost:3001/web-cv/** in your browser.

**Note:** The `/web-cv/` part of the URL is important - this simulates how GitHub Pages will serve your site.

## Troubleshooting

- If assets aren't loading, verify the `baseURL` matches your GitHub Pages URL structure
- Check the Actions tab in your GitHub repository for build/deployment logs
- Ensure GitHub Pages is enabled in your repository settings
