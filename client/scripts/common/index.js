'use strict';
require('angular-ui-router');

var modulename = 'common';

module.exports = function(namespace) {

    var fullname = namespace + '.' + modulename;

    var angular = require('angular');
    var chat = require('../chat')(namespace);
    var app = angular.module(fullname, ['ui.router',
        chat.name
    ]);

    app.namespace = {};
    app.namespace.chat = chat.name;

    // inject:folders start
    require('./controllers')(app);
    // inject:folders end

    var configRoutesDeps = ['$stateProvider', '$urlRouterProvider'];
    var configRoutes = function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider.state('home', {
            url: '/',
            template: require('./views/home.html'),
            controller: app.name + '.home',
            controllerAs: 'vm'
        });
    };
    configRoutes.$inject = configRoutesDeps;
    app.config(configRoutes);

    return app;
};
