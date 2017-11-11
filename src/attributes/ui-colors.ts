//
// @description :
// @author      : Adarsh Pastakia
// @copyright   : 2017
// @license     : MIT

import { autoinject, customAttribute, bindable, noView } from 'aurelia-framework';
import { UIButton, UIButtonGroup } from "../elements/inputs/ui-button";

@noView()
export class UIColorBase {
  constructor(public element: Element) {
    if (element['au'] && element['au'].controller) this.vm = element['au'].controller.viewModel;
    if (element.nodeType == Node.ELEMENT_NODE) {
      this.parentEl = element;
    }
    if (element.nodeType == Node.COMMENT_NODE) {
      this.parentEl = element.previousSibling;
    }
  }

  vm;
  parentEl;
  prefix = '';
  value = 'default';

  attached() {
    this.changeTheme('', this.value);
  }

  changeTheme(oldTheme, newTheme) {
    let el;
    if (this.vm instanceof UIButton) {
      if (!this.vm.buttonEl) return;
      el = this.vm.buttonEl;
      if (!this.vm.splitTheme || this.vm.splitTheme === oldTheme) this.vm.splitTheme = newTheme;
    }
    else if (this.vm instanceof UIButtonGroup) {
      if (!this.vm.buttons) return;
      this.vm.buttons.forEach(b => {
        b.element.classList.remove(`ui-${oldTheme}`);
        b.element.classList.add(`ui-${newTheme}`);
      });
      return;
    }
    else {
      el = this.element;
    }
    el.classList.remove(`ui-${this.prefix}${oldTheme}`);
    el.classList.add(`ui-${this.prefix}${newTheme}`);
  }
}

@autoinject()
@customAttribute('theme')
export class UIColorTheme extends UIColorBase {
  constructor(public element: Element) {
    super(element);
  }
  valueChanged(newValue) {
    this.changeTheme(this.value, newValue);
  }
}
@autoinject()
@customAttribute('primary')
export class UIThemePrimary extends UIColorBase {
  constructor(public element: Element) {
    super(element);
  }
  bind() {
    this.value = 'primary';
  }
}

@autoinject()
@customAttribute('secondary')
export class UIThemeSecondary extends UIColorBase {
  constructor(public element: Element) {
    super(element);
  }
  bind() {
    this.value = 'secondary';
  }
}

@autoinject()
@customAttribute('muted')
export class UIThemeMuted extends UIColorBase {
  constructor(public element: Element) {
    super(element);
  }
  bind() {
    this.value = 'muted';
  }
}

@autoinject()
@customAttribute('dark')
export class UIThemeDark extends UIColorBase {
  constructor(public element: Element) {
    super(element);
  }
  bind() {
    this.value = 'dark';
  }
}

@autoinject()
@customAttribute('info')
export class UIThemeInfo extends UIColorBase {
  constructor(public element: Element) {
    super(element);
  }
  bind() {
    this.value = 'info';
  }
}

@autoinject()
@customAttribute('danger')
export class UIThemeDanger extends UIColorBase {
  constructor(public element: Element) {
    super(element);
  }
  bind() {
    this.value = 'danger';
  }
}

@autoinject()
@customAttribute('success')
export class UIThemeSuccess extends UIColorBase {
  constructor(public element: Element) {
    super(element);
  }
  bind() {
    this.value = 'success';
  }
}

@autoinject()
@customAttribute('warning')
export class UIThemeWarning extends UIColorBase {
  constructor(public element: Element) {
    super(element);
  }
  bind() {
    this.value = 'warning';
  }
}


@autoinject()
@customAttribute('bg-theme')
export class UIColorThemeBg extends UIColorBase {
  constructor(public element: Element) {
    super(element);
    this.prefix = 'bg-';
  }
  valueChanged(newValue) {
    this.changeTheme(this.value, newValue);
  }
}
@autoinject()
@customAttribute('bg-primary')
export class UIThemePrimaryBg extends UIColorBase {
  constructor(public element: Element) {
    super(element);
    this.prefix = 'bg-';
  }
  bind() {
    this.value = 'primary';
  }
}

@autoinject()
@customAttribute('bg-secondary')
export class UIThemeSecondaryBg extends UIColorBase {
  constructor(public element: Element) {
    super(element);
    this.prefix = 'bg-';
  }
  bind() {
    this.value = 'secondary';
  }
}

@autoinject()
@customAttribute('bg-muted')
export class UIThemeMutedBg extends UIColorBase {
  constructor(public element: Element) {
    super(element);
    this.prefix = 'bg-';
  }
  bind() {
    this.value = 'muted';
  }
}

@autoinject()
@customAttribute('bg-dark')
export class UIThemeDarkBg extends UIColorBase {
  constructor(public element: Element) {
    super(element);
    this.prefix = 'bg-';
  }
  bind() {
    this.value = 'dark';
  }
}

@autoinject()
@customAttribute('bg-info')
export class UIThemeInfoBg extends UIColorBase {
  constructor(public element: Element) {
    super(element);
    this.prefix = 'bg-';
  }
  bind() {
    this.value = 'info';
  }
}

@autoinject()
@customAttribute('bg-danger')
export class UIThemeDangerBg extends UIColorBase {
  constructor(public element: Element) {
    super(element);
    this.prefix = 'bg-';
  }
  bind() {
    this.value = 'danger';
  }
}

@autoinject()
@customAttribute('bg-success')
export class UIThemeSuccessBg extends UIColorBase {
  constructor(public element: Element) {
    super(element);
    this.prefix = 'bg-';
  }
  bind() {
    this.value = 'success';
  }
}

@autoinject()
@customAttribute('bg-warning')
export class UIThemeWarningBg extends UIColorBase {
  constructor(public element: Element) {
    super(element);
    this.prefix = 'bg-';
  }
  bind() {
    this.value = 'warning';
  }
}
