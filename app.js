"use strict";
const nconf = require('nconf');
class App {
    static main(args) {
        console.log('Hello world!');
    }
}
App.config = nconf.env().argv().file('config', 'config.json');
exports.App = App;
App.main(process.argv);
//# sourceMappingURL=app.js.map