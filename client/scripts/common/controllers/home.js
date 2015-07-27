'use strict';
var controllername = 'home';

module.exports = function(app) {
    var fullname = app.name + '.' + controllername;
    /*jshint validthis: true */

    var deps = [app.namespace.chat + '.chat'];

    function controller(chat) {
        var vm = this;
        vm.controllername = fullname;
        vm.messages = [];
        vm.activate = function() {
            var date = Date.now();
            var length = Number.parseInt(date.toString().split('').slice(-1)[0]);
            vm.messages.push({
                date: date,
                content: chat.gibberish(length)
            });
        };
        vm.activate();
    }

    controller.$inject = deps;
    app.controller(fullname, controller);
};
