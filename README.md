# AJ Design

Local and deployment setup for the AJ Design website, independent of Emergent.

## Local development

```bash
cd ~/Desktop/AJ_Design
corepack yarn install
cd frontend
corepack yarn install
corepack yarn start
```

The frontend runs at http://localhost:3000.

## Production build

```bash
cd ~/Desktop/AJ_Design
corepack yarn build
```

The static production files are generated in `frontend/build`.

## Deploy without Emergent

Vercel:

```bash
cd ~/Desktop/AJ_Design
corepack yarn deploy
```

Netlify:

```bash
cd ~/Desktop/AJ_Design
corepack yarn deploy:netlify
```

Both options build and publish the React app as a static site. You may be prompted to log in to the deployment provider the first time you run the command.

## GitHub Pages custom domain

The app is configured to deploy to GitHub Pages from `main` and use `akashjayaprabalan.com`.

Required DNS records:

```text
@    A      185.199.108.153
@    A      185.199.109.153
@    A      185.199.110.153
@    A      185.199.111.153
www  CNAME  akashjayaprabalan.github.io
```
