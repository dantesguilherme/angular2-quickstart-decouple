# angular2-quickstart-decouple
* Template based on https://github.com/angular/quickstart.
* Added gulp to install process. 
* Configurations to transpile work from different directories.
* Added `bs-config.js` to make *browser-sync* from different directories.

```bash
git clone https://github.com/dantesguilherme/angular2-quickstart-decouple.git
```

### Start development

Install the npm packages described in the `package.json` and verify that it works:

```bash
cd angular2
npm install
npm start
```
**You're ready to write your application.**

Uses gulp to moves the _needed_ application files and dependencies to the `wwwroot` folder.

Uses browser-sync to keep multiple browsers & devices in sync when building websites.

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



