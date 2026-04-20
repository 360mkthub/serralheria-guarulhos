const path = require('path');

const appDir = path.resolve(__dirname, '../nodejs');
process.chdir(appDir);

require(path.join(appDir, 'server.js'));
