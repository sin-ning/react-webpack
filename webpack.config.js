/**
 * Created by sin on 16/9/13.
 */

console.info(process.env.NODE_ENV);

module.exports = process.env.NODE_ENV == 'production' ? require('./webpack/prod.config') :  require('./webpack/dev.config');