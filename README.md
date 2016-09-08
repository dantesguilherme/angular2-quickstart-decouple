# ng2-decoupled
* Template based on https://github.com/angular/quickstart.
* Added gulp to install process. 
* Configurations to transpile work from different directories.
* Added `bs-config.js` to make *browser-sync* from different directories.

### Start development

Install the npm packages described in the `package.json` and verify that it works:

```bash
cd angular2
npm install
npm start
```
**You're ready to write your application.**

Remember the npm scripts in `package.json`:

* `npm start` - runs the compiler and a server at the same time, both in "watch mode".
* `npm run tsc` - runs the TypeScript compiler once.
* `npm run tsc:w` - runs the TypeScript compiler in watch mode; the process keeps running, awaiting changes to TypeScript files and re-compiling when it sees them.
* `npm run lite` - runs the [lite-server](https://www.npmjs.com/package/lite-server), a light-weight, static file server, written and maintained by
[John Papa](https://github.com/johnpapa) and
[Christopher Martin](https://github.com/cgmartin)
with excellent support for Angular apps that use routing.
* `npm run typings` - runs the typings tool.
* `npm run postinstall` - called by *npm* automatically *after* it successfully completes package installation. This script installs the TypeScript definition files this app requires. I just added the `gulp restore` to move the dependencies to the `wwwroot` folder at the end of this command.

Uses gulp to moves the _needed_ application files and dependencies to the `wwwroot` folder.
Uses browser-sync to keep multiple browsers & devices in sync when building websites.