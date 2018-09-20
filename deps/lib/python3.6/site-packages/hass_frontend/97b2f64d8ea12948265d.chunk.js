/*! For license information please see 97b2f64d8ea12948265d.chunk.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{202:function(e,t,a){"use strict";a(2),a(27),a(30),a(43);var i=a(3),o=a(0);Object(i.a)({_template:o["a"]`
    <style>
      :host {
        overflow: hidden; /* needed for text-overflow: ellipsis to work on ff */
        @apply --layout-vertical;
        @apply --layout-center-justified;
        @apply --layout-flex;
      }

      :host([two-line]) {
        min-height: var(--paper-item-body-two-line-min-height, 72px);
      }

      :host([three-line]) {
        min-height: var(--paper-item-body-three-line-min-height, 88px);
      }

      :host > ::slotted(*) {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      :host > ::slotted([secondary]) {
        @apply --paper-font-body1;

        color: var(--paper-item-body-secondary-color, var(--secondary-text-color));

        @apply --paper-item-body-secondary;
      }
    </style>

    <slot></slot>
`,is:"paper-item-body"})},230:function(e,t,a){"use strict";a(2),a(27),a(43);var i=a(99),o=(a(133),a(3)),p=a(0);Object(o.a)({_template:p["a"]`
    <style include="paper-item-shared-styles"></style>
    <style>
      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        @apply --paper-font-subhead;

        @apply --paper-item;
        @apply --paper-icon-item;
      }

      .content-icon {
        @apply --layout-horizontal;
        @apply --layout-center;

        width: var(--paper-item-icon-width, 56px);
        @apply --paper-item-icon;
      }
    </style>

    <div id="contentIcon" class="content-icon">
      <slot name="item-icon"></slot>
    </div>
    <slot></slot>
`,is:"paper-icon-item",behaviors:[i.a]})},616:function(e,t,a){"use strict";a.r(t),a(160),a(159),a(125),a(158),a(128),a(63),a(57),a(230),a(202),a(122),a(124),a(131);var i=a(0),o=a(4),p=(a(138),a(174),a(13));customElements.define("ha-panel-shopping-list",class extends(Object(p.a)(o.a)){static get template(){return i["a"]`
    <style include="ha-style">
      :host {
        height: 100%;
      }
      app-toolbar paper-listbox {
        width: 150px;
      }
      app-toolbar paper-item {
        cursor: pointer;
      }
      .content {
        padding-bottom: 32px;
        max-width: 600px;
        margin: 0 auto;
      }
      paper-card {
        display: block;
      }
      paper-icon-item {
        border-top: 1px solid var(--divider-color);
      }
      paper-icon-item:first-child {
        border-top: 0;
      }
      paper-checkbox {
        padding: 11px;
      }
      paper-input {
        --paper-input-container-underline: {
          display: none;
        }
        --paper-input-container-underline-focus: {
          display: none;
        }
        position: relative;
        top: 1px;
      }
      .tip {
        padding: 24px;
        text-align: center;
        color: var(--secondary-text-color);
      }
    </style>

    <app-header-layout has-scrolling-region>
      <app-header slot="header" fixed>
        <app-toolbar>
          <ha-menu-button narrow='[[narrow]]' show-menu='[[showMenu]]'></ha-menu-button>
          <div main-title>[[localize('panel.shopping_list')]]</div>
          <ha-start-voice-button hass='[[hass]]' can-listen='{{canListen}}'></ha-start-voice-button>
          <paper-menu-button
            horizontal-align="right"
            horizontal-offset="-5"
            vertical-offset="-5"
          >
            <paper-icon-button
              icon="hass:dots-vertical"
              slot="dropdown-trigger"
            ></paper-icon-button>
            <paper-listbox slot="dropdown-content">
              <paper-item
                on-click="_clearCompleted"
              >[[localize('ui.panel.shopping-list.clear_completed')]]</paper-item>
            </paper-listbox>
          </paper-menu-button>
        </app-toolbar>
      </app-header>

      <div class='content'>
        <paper-card>
          <paper-icon-item on-focus='_focusRowInput'>
            <paper-icon-button
              slot="item-icon"
              icon="hass:plus"
              on-click='_addItem'
            ></paper-icon-button>
            <paper-item-body>
              <paper-input
                id='addBox'
                placeholder="[[localize('ui.panel.shopping-list.add_item')]]"
                on-keydown='_addKeyPress'
                no-label-float
              ></paper-input>
            </paper-item-body>
          </paper-icon-item>

          <template is='dom-repeat' items='[[items]]'>
            <paper-icon-item>
                <paper-checkbox
                  slot="item-icon"
                  checked='{{item.complete}}'
                  on-click='_itemCompleteTapped'
                  tabindex='0'
                ></paper-checkbox>
              <paper-item-body>
                <paper-input
                  id='editBox'
                  no-label-float
                  value='[[item.name]]'
                  on-change='_saveEdit'
                ></paper-input>
              </paper-item-body>
            </paper-icon-item>
          </template>
        </paper-card>
        <div class='tip' hidden$='[[!canListen]]'>
          [[localize('ui.panel.shopping-list.microphone_tip')]]
        </div>
      </div>
    </app-header-layout>
    `}static get properties(){return{hass:Object,narrow:Boolean,showMenu:Boolean,canListen:Boolean,items:{type:Array,value:[]}}}connectedCallback(){super.connectedCallback(),this._fetchData=this._fetchData.bind(this),this.hass.connection.subscribeEvents(this._fetchData,"shopping_list_updated").then(function(e){this._unsubEvents=e}.bind(this)),this._fetchData()}disconnectedCallback(){super.disconnectedCallback(),this._unsubEvents&&this._unsubEvents()}_fetchData(){this.hass.callApi("get","shopping_list").then(function(e){e.reverse(),this.items=e}.bind(this))}_itemCompleteTapped(e){e.stopPropagation(),this.hass.callApi("post","shopping_list/item/"+e.model.item.id,{complete:e.target.checked}).catch(()=>this._fetchData())}_addItem(e){this.hass.callApi("post","shopping_list/item",{name:this.$.addBox.value}).catch(()=>this._fetchData()),this.$.addBox.value="",e&&setTimeout(()=>this.$.addBox.focus(),10)}_addKeyPress(e){13===e.keyCode&&this._addItem()}_saveEdit(e){const{index:t,item:a}=e.model,i=e.target.value;i!==a.name&&(this.set(["items",t,"name"],i),this.hass.callApi("post","shopping_list/item/"+a.id,{name:i}).catch(()=>this._fetchData()))}_clearCompleted(){this.hass.callApi("POST","shopping_list/clear_completed")}})}}]);
//# sourceMappingURL=97b2f64d8ea12948265d.chunk.js.map