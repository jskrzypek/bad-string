'use strict';

var modulename = 'chat';

module.exports = function(namespace) {

    var fullname = namespace + '.' + modulename;

    var angular = require('angular');
    var app = angular.module(fullname, []);
    // inject:folders start
    require('./services')(app);
    // inject:folders end

    return app;
};