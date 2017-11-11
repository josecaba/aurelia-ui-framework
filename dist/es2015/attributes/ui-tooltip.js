var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { autoinject, customAttribute, bindable, noView } from 'aurelia-framework';
import { UIUtils } from "../utils/ui-utils";
let UITooltipBase = UITooltipBase_1 = class UITooltipBase {
    constructor(element) {
        this.element = element;
        this.theme = 'light';
        this.value = '';
    }
    attached() {
        if (!UITooltipBase_1.tooltipEl) {
            let el = UITooltipBase_1.tooltipEl = document.createElement('div');
            el.classList.add('ui-tooltip');
            UIUtils.overlayContainer.appendChild(el);
        }
        this.element.addEventListener('mouseenter', () => this.show());
        this.element.addEventListener('mouseleave', () => this.hide());
    }
    detached() { this.hide(); }
    unbind() { this.hide(); }
    show() {
        if (isEmpty(this.value))
            return;
        let el = UITooltipBase_1.tooltipEl;
        el.className = 'ui-tooltip ui-' + this.theme;
        el.innerHTML = this.value;
        this.tether = UIUtils.tether(this.element, el, { resize: false, position: 'tc' });
        this.timer = setTimeout(() => el.classList.add('ui-show'), 700);
    }
    hide() {
        clearTimeout(this.timer);
        if (this.tether)
            this.tether.dispose();
        UITooltipBase_1.tooltipEl.className = 'ui-tooltip';
        this.tether = null;
    }
};
UITooltipBase = UITooltipBase_1 = __decorate([
    noView(),
    __metadata("design:paramtypes", [Element])
], UITooltipBase);
export { UITooltipBase };
let UITooltip = class UITooltip extends UITooltipBase {
    constructor(element) {
        super(element);
        this.element = element;
        this.theme = 'light';
        this.value = '';
    }
};
__decorate([
    bindable(),
    __metadata("design:type", Object)
], UITooltip.prototype, "theme", void 0);
__decorate([
    bindable({ primaryProperty: true }),
    __metadata("design:type", Object)
], UITooltip.prototype, "value", void 0);
UITooltip = __decorate([
    autoinject(),
    customAttribute('tooltip'),
    __metadata("design:paramtypes", [Element])
], UITooltip);
export { UITooltip };
let UITooltipDark = class UITooltipDark extends UITooltipBase {
    constructor(element) {
        super(element);
        this.element = element;
        this.theme = 'dark';
    }
};
UITooltipDark = __decorate([
    autoinject(),
    customAttribute('tooltip-dark'),
    __metadata("design:paramtypes", [Element])
], UITooltipDark);
export { UITooltipDark };
let UITooltipPrimary = class UITooltipPrimary extends UITooltipBase {
    constructor(element) {
        super(element);
        this.element = element;
        this.theme = 'primary';
    }
};
UITooltipPrimary = __decorate([
    autoinject(),
    customAttribute('tooltip-primary'),
    __metadata("design:paramtypes", [Element])
], UITooltipPrimary);
export { UITooltipPrimary };
let UITooltipSecondary = class UITooltipSecondary extends UITooltipBase {
    constructor(element) {
        super(element);
        this.element = element;
        this.theme = 'secondary';
    }
};
UITooltipSecondary = __decorate([
    autoinject(),
    customAttribute('tooltip-secondary'),
    __metadata("design:paramtypes", [Element])
], UITooltipSecondary);
export { UITooltipSecondary };
var UITooltipBase_1;
