import { Component, OnInit } from '@angular/core';
import { ROUTES } from './navbar-routes.config';
import { MenuType } from './navbar.metadata';

@Component({
    moduleId: module.id,
    selector: 'navbar',
    templateUrl: 'navbar.component.html'
})
export class NavbarComponent implements OnInit {
    public menuItemsLEFT: any[];
    public menuItemsRIGHT: any[];
    public brandMenu: any;
    isCollapsed = true;

    constructor() { }

    ngOnInit() {
        this.menuItemsLEFT = ROUTES.filter(menuItem => menuItem.menuType !== MenuType.BRAND && menuItem.menuType == MenuType.LEFT);
        this.menuItemsRIGHT = ROUTES.filter(menuItem => menuItem.menuType !== MenuType.BRAND && menuItem.menuType == MenuType.RIGHT);
        this.brandMenu = ROUTES.filter(menuItem => menuItem.menuType === MenuType.BRAND)[0];
    }

    public get menuIcon(): string {
        return this.isCollapsed ? 'Open Menu' : 'Close Menu';
    }

}