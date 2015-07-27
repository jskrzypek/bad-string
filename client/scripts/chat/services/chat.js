'use strict';
var servicename = 'chat';

var randomstring = require('randomstring');

module.exports = function(app) {

    var dependencies = [];

    function service() {
        var gibberish = function(l) {
            return gibberish(l);
        };

        return {
            gibberish: gibberish
        };

    }
    service.$inject = dependencies;
    app.factory(app.name + '.' + servicename, service);
};