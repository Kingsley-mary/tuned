// scripts/create-deploy-payload.mjs
import fs from 'fs';
import path from 'path';

const deployFiles = [
  'package.json',
  'tsconfig.json',
  'next.config.js',
  'app/globals.css',
  'app/layout.tsx',
  'app/page.tsx',
  'app/api/categories/route.ts',
  'app/api/lineup/route.ts',
  'app/api/resolve-channel/route.ts',
  'components/PowerScreen.tsx',
  'components/PickInterestsScreen.tsx',
  'components/TuningScreen.tsx',
  'components/WatchScreen.tsx',
  'components/GuideScreen.tsx',
  'components/ManageScreen.tsx',
  'components/OffAirScreen.tsx',
  'components/YouTubePlayer.tsx',
  'lib/types.ts',
  'lib/seed-catalog.ts',
  'lib/quota.ts',
  'lib/cache.ts',
  'lib/youtube.ts'
];

const filesPayload = [];

for (const relPath of deployFiles) {
  const fullPath = path.resolve(relPath);
  if (!fs.existsSync(fullPath)) {
    console.error(`File not found: ${relPath}`);
    continue;
  }
  const content = fs.readFileSync(fullPath, 'utf-8');
  filesPayload.push({
    file: relPath.replace(/\\/g, '/'),
    data: content,
    encoding: 'utf-8'
  });
}

const payload = {
  teamId: 'team_SgfqZnEcrYV8h1Y6NpYA40Pr',
  requestBody: {
    name: 'tuned',
    project: 'prj_AsrAyfEbZZZuDh4rIpjcvICbFuTO',
    target: 'production',
    files: filesPayload,
    projectSettings: {
      framework: 'nextjs'
    }
  }
};

fs.writeFileSync('scripts/deploy-payload.json', JSON.stringify(payload));
console.log(`Payload created with ${filesPayload.length} files. Size: ${(fs.statSync('scripts/deploy-payload.json').size / 1024).toFixed(1)} KB`);
