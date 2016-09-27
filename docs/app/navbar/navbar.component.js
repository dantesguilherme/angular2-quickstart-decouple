"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var navbar_routes_config_1 = require('./navbar-routes.config');
var navbar_metadata_1 = require('./navbar.metadata');
var NavbarComponent = (function () {
    function NavbarComponent() {
        this.isCollapsed = true;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.menuItemsLEFT = navbar_routes_config_1.ROUTES.filter(function (menuItem) { return menuItem.menuType !== navbar_metadata_1.MenuType.BRAND && menuItem.menuType == navbar_metadata_1.MenuType.LEFT; });
        this.menuItemsRIGHT = navbar_routes_config_1.ROUTES.filter(function (menuItem) { return menuItem.menuType !== navbar_metadata_1.MenuType.BRAND && menuItem.menuType == navbar_metadata_1.MenuType.RIGHT; });
        this.brandMenu = navbar_routes_config_1.ROUTES.filter(function (menuItem) { return menuItem.menuType === navbar_metadata_1.MenuType.BRAND; })[0];
    };
    Object.defineProperty(NavbarComponent.prototype, "menuIcon", {
        get: function () {
            return this.isCollapsed ? 'Open Menu' : 'Close Menu';
        },
        enumerable: true,
        configurable: true
    });
    NavbarComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'navbar',
            templateUrl: 'navbar.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;
//# sourceMappingURL=navbar.component.js.map