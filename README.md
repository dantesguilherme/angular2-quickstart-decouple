# angular2-quickstart-decouple

#### Features
* Bootstrap3 navbar component
* SystemJS in typescript and improved maintainability
* Suport to debug (.js.map)
* All dev files in `angular2` folder. Gulp take care of `install, watch and publish` process. 
* Configurations to transpile work from different directories.
* Added `bs-config.js` to make *browser-sync* from different directories.
* Use GitHub Pages to show [demo](https://dantesguilherme.github.io/angular2-quickstart-decouple/) (automatically with gulp)

###### Template based on https://github.com/angular/quickstart.

### Start development

```bash
git clone https://github.com/dantesguilherme/angular2-quickstart-decouple.git
```

Install the npm packages described in the `package.json` and verify that it works:

```bash
cd angular2
npm install
npm start
```
**You're ready to write your application.**

###### * `npm install` Uses gulp to move the _needed_ application files and dependencies from `package.json` to the `wwwroot` folder.
###### * `npm start` Compiles the application to `wwwroot` and uses gulp to move the `wwwroot` to the `docs` folder.
###### * Uses browser-sync to keep multiple browsers & devices in sync when building websites.

### GitHub Pages as DEMO

Use GitHub Pages to show your demo to the world. See this repository running [here](https://dantesguilherme.github.io/angular2-quickstart-decouple/)

Configure your github repository [here](https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/)

and `npm install` then `npm start` and then publish to github.


##Behind a Proxy?
*git example*
```bash
git config --global http.proxy http://user:password@proxy.yourcompany.com:8080
```
*npm example*
```bash
npm config set proxy http://user:password@proxy.yourcompany.com:8080
npm config set https-proxy http://user:password@proxy.yourcompany.com:8080
```
*typings example*
* documentation - https://github.com/typings/typings/blob/master/docs/faq.md#configuration
* create a file `.typingsrc` in user home directory (eg. C:\Users\MyName\) and use this text
```bash
{
	"proxy": "http://user:password@proxy.yourcompany.com:8080"
}
```



