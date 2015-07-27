'use strict';

module.exports = function(app) {
    // inject:start
    require('./chat')(app);
    // inject:end
};