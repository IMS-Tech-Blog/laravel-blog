/**
 * constants about path
 */
import path from 'path';

const ROOT_PATH = path.join(__dirname, '../');
const SRC_PATH  = path.join(ROOT_PATH, 'src');
const BUILT_PATH = path.join(ROOT_PATH, 'build');

export default {
  ROOT_PATH,
  SRC_PATH,
  BUILT_PATH
};
