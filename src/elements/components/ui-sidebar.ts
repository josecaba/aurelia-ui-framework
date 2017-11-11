//
// @description :
// @author      : Adarsh Pastakia
// @copyright   : 2017
// @license     : MIT
import { autoinject, customElement, bindable, inlineView } from 'aurelia-framework';
import { UIEvent } from "../../utils/ui-event";

@autoinject()
@inlineView(`<template class="ui-sidebar ui-row ui-row-v ui-row-nowrap ui-align-stretch \${compact || collapsed?'ui-sidebar-collapse':''} ui-sidebar-\${position}" click.trigger="showOverlay($event)">
  <div class="ui-sidebar-head ui-row ui-row-h ui-row-nowrap ui-align-stretch" if.bind="!compact && (collapsible || label)">
  <div class="ui-sidebar-title ui-column-fill" ref="labelEl">\${label}</div>
  <a click.trigger="toggleCollapse($event)" class="ui-sidebar-close" if.bind="collapsible"><ui-glyph glyph.bind="glyph"></ui-glyph></a></div>
  <slot name="affix-content"></slot>
  <div class="ui-sidebar-content ui-column-fill \${contentCls}" ref="contentEl"><slot></slot></div>
</template>`)
@customElement('ui-sidebar')
export class UISidebar {
  constructor(public element: Element) {
    if (element.hasAttribute('scroll')) this.contentCls += ' ui-scroll';
    if (element.hasAttribute('flex')) this.contentCls += ' ui-row ui-row-v ui-align-stretch ui-nowrap';
    if (element.hasAttribute('padded')) this.contentCls += ' ui-pad-all';

    if (this.miniDisplay = element.hasAttribute('mini-display')) element.classList.add('ui-sidebar-mini');
    if (this.compact = element.hasAttribute('compact')) {
      element.classList.add('ui-sidebar-compact');
      element.classList.add('ui-sidebar-mini');
    }
    this.collapsible = element.hasAttribute('collapsible');


    this.obClick = UIEvent.subscribe('mouseclick', () => {
      this.element.classList.remove('ui-sidebar-show');
    });
  }

  // aurelia hooks
  // created(owningView: View, myView: View) { }
  bind(bindingContext: Object, overrideContext: Object) {
    this.collapsed = !!(this.collapsed);
    if (this.position === 'end' && this.glyph === 'glyph-arrow-left') this.glyph = "glyph-arrow-right";
  }
  attached() {
    if (this.label instanceof HTMLElement)[this.labelEl.innerHTML = '', this.labelEl.appendChild(this.label)];
  }
  detached() {
    if (this.obClick) this.obClick.dispose();
  }
  // unbind() { }
  // end aurelia hooks

  @bindable() label: any = "";
  @bindable() collapsed = false;
  @bindable() position = "start";

  glyph = 'glyph-arrow-left';
  contentCls = '';
  private labelEl;
  private contentEl;
  private obClick;
  private compact = false;
  private miniDisplay = false;
  private collapsible = false;

  collapsedChanged(newValue) {
    this.glyph = (this.position == 'end' && !(newValue)) || (this.position == 'start' && !!(newValue)) ? "glyph-arrow-right" : "glyph-arrow-left";
  }

  toggleCollapse($event) {
    this.collapsed = !this.collapsed;
    this.element.classList.remove('ui-sidebar-show');
    $event.cancelBubble = true;
    return true;
  }

  showOverlay($event) {
    if (this.miniDisplay || $event.target != this.element) return true;
    if (this.collapsed)
      this.element.classList.add('ui-sidebar-show');
    else
      this.element.classList.remove('ui-sidebar-show');
  }
}