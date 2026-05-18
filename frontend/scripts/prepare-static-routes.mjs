import { access, copyFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const buildDir = path.resolve(__dirname, '..', 'build');
const indexPath = path.join(buildDir, 'index.html');
const routes = ['services', 'portfolio', 'about', 'contact'];

await access(indexPath);
await copyFile(indexPath, path.join(buildDir, '404.html'));

for (const route of routes) {
  const routeDir = path.join(buildDir, route);
  await mkdir(routeDir, { recursive: true });
  await copyFile(indexPath, path.join(routeDir, 'index.html'));
}

console.log(`Prepared static route entries: ${routes.map((route) => `/${route}/`).join(', ')}`);
