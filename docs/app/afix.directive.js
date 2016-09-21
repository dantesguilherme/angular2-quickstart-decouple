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
var position_1 = require('./position');
(function (AffixStatus) {
    AffixStatus[AffixStatus["AFFIX"] = 0] = "AFFIX";
    AffixStatus[AffixStatus["AFFIX_TOP"] = 1] = "AFFIX_TOP";
    AffixStatus[AffixStatus["AFFIX_BOTTOM"] = 2] = "AFFIX_BOTTOM";
})(exports.AffixStatus || (exports.AffixStatus = {}));
var AffixStatus = exports.AffixStatus;
var AffixStatusChange = (function () {
    function AffixStatusChange(oldStatus, newStatus) {
        this.oldStatus = oldStatus;
        this.newStatus = newStatus;
    }
    return AffixStatusChange;
}());
exports.AffixStatusChange = AffixStatusChange;
var Affix = (function () {
    function Affix(el) {
        var _this = this;
        this.el = el;
        this.affixOffsetTop = 0;
        this.affixOffsetBottom = 0;
        this.isAffix = true;
        this.isAffixedTop = true;
        this.isAffixedBottom = true;
        this.top = null;
        this.affixChange = new core_1.EventEmitter(false);
        this.status = null;
        this.pinnedOffset = null;
        this.debouncedCheckPosition = Affix.debounce(function () { return _this.checkPosition(); }, 5);
        this.eventListener = function (ev) { return _this.debouncedCheckPosition(); };
        this.body = el.nativeElement.ownerDocument.body;
        this.window = el.nativeElement.ownerDocument.defaultView;
    }
    Affix.prototype.ngOnInit = function () {
        this.el.nativeElement.ownerDocument.defaultView.addEventListener('scroll', this.eventListener);
        this.checkPosition();
    };
    Affix.prototype.ngOnDestroy = function () {
        this.el.nativeElement.ownerDocument.defaultView.removeEventListener('scroll', this.eventListener);
        return undefined;
    };
    Affix.prototype.checkPosition = function () {
        var elemPos = position_1.positionService.position(this.el.nativeElement);
        if (elemPos.height === 0 || elemPos.width === 0) {
            // Element is not visible
            return;
        }
        var scrollHeight = Math.max(this.window.innerHeight, this.body.scrollHeight);
        var nativeElemPos = position_1.positionService.offset(this.el.nativeElement);
        var newAffixStatus = this.getState(scrollHeight, nativeElemPos, this.affixOffsetTop, this.affixOffsetBottom);
        if (this.status !== newAffixStatus) {
            this.top = newAffixStatus === AffixStatus.AFFIX_BOTTOM ? this.getPinnedOffset() : null;
            this.affixChange.emit(new AffixStatusChange(this.status, newAffixStatus));
            this.status = newAffixStatus;
            this.isAffix = false;
            this.isAffixedBottom = false;
            this.isAffixedTop = false;
            switch (this.status) {
                case AffixStatus.AFFIX_TOP:
                    this.isAffixedTop = true;
                    break;
                case AffixStatus.AFFIX_BOTTOM:
                    this.isAffixedBottom = true;
                    break;
                default:
                    this.isAffix = true;
                    break;
            }
        }
        if (newAffixStatus === AffixStatus.AFFIX_BOTTOM) {
            this.top = scrollHeight - nativeElemPos.height - this.affixOffsetBottom;
        }
    };
    Affix.prototype.getState = function (scrollHeight, nativeElemPos, offsetTop, offsetBottom) {
        var scrollTop = this.body.scrollTop; // current scroll position in pixels from top
        var targetHeight = this.window.innerHeight; // Height of the window / viewport area
        if (offsetTop !== null && this.status === AffixStatus.AFFIX_TOP) {
            if (scrollTop < offsetTop) {
                return AffixStatus.AFFIX_TOP;
            }
            return AffixStatus.AFFIX;
        }
        if (this.status === AffixStatus.AFFIX_BOTTOM) {
            if (offsetTop !== null) {
                if (scrollTop + this.pinnedOffset <= nativeElemPos.top) {
                    return AffixStatus.AFFIX;
                }
                return AffixStatus.AFFIX_BOTTOM;
            }
            if (scrollTop + targetHeight <= scrollHeight - offsetBottom) {
                return AffixStatus.AFFIX;
            }
            return AffixStatus.AFFIX_BOTTOM;
        }
        if (offsetTop != null && scrollTop <= offsetTop) {
            return AffixStatus.AFFIX_TOP;
        }
        var initializing = this.status === null;
        var lowerEdgePosition = initializing ? scrollTop + targetHeight : nativeElemPos.top + nativeElemPos.height;
        if (offsetBottom != null && (lowerEdgePosition >= scrollHeight - offsetBottom)) {
            return AffixStatus.AFFIX_BOTTOM;
        }
        return AffixStatus.AFFIX;
    };
    Affix.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset !== null) {
            return this.pinnedOffset;
        }
        var scrollTop = this.body.scrollTop;
        var position = position_1.positionService.offset(this.el.nativeElement);
        this.pinnedOffset = position.top - scrollTop;
        return this.pinnedOffset;
    };
    Affix.debounce = function (func, wait) {
        var timeout;
        var args;
        var timestamp;
        return function () {
            // save details of latest call
            args = [].slice.call(arguments, 0);
            timestamp = Date.now();
            // this is where the magic happens
            var later = function () {
                // how long ago was the last call
                var last = Date.now() - timestamp;
                // if the latest call was less that the wait period ago
                // then we reset the timeout to wait for the difference
                if (last < wait) {
                    timeout = setTimeout(later, wait - last);
                }
                else {
                    timeout = null;
                    func.apply(this, args);
                }
            };
            // we only need to set the timer now if one isn't already running
            if (!timeout) {
                timeout = setTimeout(later, wait);
            }
        };
    };
    ;
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], Affix.prototype, "affixOffsetTop", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], Affix.prototype, "affixOffsetBottom", void 0);
    __decorate([
        core_1.HostBinding('class.affix'), 
        __metadata('design:type', Boolean)
    ], Affix.prototype, "isAffix", void 0);
    __decorate([
        core_1.HostBinding('class.affix-top'), 
        __metadata('design:type', Boolean)
    ], Affix.prototype, "isAffixedTop", void 0);
    __decorate([
        core_1.HostBinding('class.affix-bottom'), 
        __metadata('design:type', Boolean)
    ], Affix.prototype, "isAffixedBottom", void 0);
    __decorate([
        core_1.HostBinding('style.top.px'), 
        __metadata('design:type', Number)
    ], Affix.prototype, "top", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], Affix.prototype, "affixChange", void 0);
    Affix = __decorate([
        core_1.Directive({
            selector: '[affix]'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], Affix);
    return Affix;
}());
exports.Affix = Affix;
//# sourceMappingURL=afix.directive.js.map