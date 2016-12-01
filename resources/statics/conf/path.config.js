/**
 * constants about path
 */
import fs   from 'fs';
import path from 'path';

export const ROOT_PATH = path.join(__dirname, '../');
export const SRC_PATH  = path.join(ROOT_PATH, 'src');
export const BUILT_PATH = path.join(ROOT_PATH, 'build');
export const MANIFEST_PATH = path.join(ROOT_PATH, 'manifest.json');

const packageJson    = fs.readFileSync(`${ROOT_PATH}\\package.json`);
export const VERSION = JSON.parse(packageJson).projectVersion;
export const VERSION_PATH = path.join(BUILT_PATH, VERSION);

// deal with directories
[SRC_PATH, BUILT_PATH, VERSION_PATH].forEach(dir => !fs.existsSync(dir) && fs.mkdirSync(dir));
// deal with json files
[MANIFEST_PATH].forEach(file => !fs.existsSync(file) && fs.appendFileSync(file, '{}'));


export default {
  ROOT_PATH,
  SRC_PATH,
  BUILT_PATH,
  MANIFEST_PATH,
  VERSION_PATH,
  VERSION
};
