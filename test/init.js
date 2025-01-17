import fs from 'fs';
import path from 'path';
import esdocsCLI from '../src/esdocsCLI.js';

export function cli(configPath) {
  const cliPath = path.resolve('./src/cli.js');
  const argv = ['node', cliPath];

  if (configPath) {
    configPath = path.resolve(configPath);
    argv.push('-c', configPath);
    console.log(`== start == ${configPath}`);
  }

  const cli = new esdocsCLI(argv);
  cli.exec();
  console.log(`== finish ==`);
}

cli('./test/integration-test/esdocs.json');
global.docs = JSON.parse(fs.readFileSync('./test/integration-test/out/index.json').toString());
