/*! For license information please see 1cc34cb9e1697ebf39cb.chunk.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{230:function(e,t,a){"use strict";a(2),a(27),a(43);var o=a(99),i=(a(133),a(3)),r=a(0);Object(i.a)({_template:r["a"]`
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
`,is:"paper-icon-item",behaviors:[o.a]})},615:function(e,t,a){"use strict";a.r(t),a(125),a(31),a(63),a(230),a(122),a(124);var o=a(0),i=a(4),r=(a(90),a(56),a(13)),l=a(139);customElements.define("ha-sidebar",class extends(Object(r.a)(i.a)){static get template(){return o["a"]`
    <style include="iron-flex iron-flex-alignment iron-positioning">
      :host {
        --sidebar-text: {
          color: var(--sidebar-text-color);
          font-weight: 500;
          font-size: 14px;
        };
        height: 100%;
        display: block;
        overflow: auto;
        -ms-user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        border-right: 1px solid var(--divider-color);
        background-color: var(--sidebar-background-color, var(--primary-background-color));
      }

      app-toolbar {
        font-weight: 400;
        color: var(--primary-text-color);
        border-bottom: 1px solid var(--divider-color);
        background-color: var(--primary-background-color);
      }

      app-toolbar a {
        color: var(--primary-text-color);
      }

      paper-listbox {
        padding-bottom: 0;
      }

      paper-listbox > a {
        @apply --sidebar-text;
        text-decoration: none;

        --paper-item-icon: {
          color: var(--sidebar-icon-color);
        };
      }

      paper-icon-item span {
        @apply --sidebar-text;
      }

      a.iron-selected {
        --paper-icon-item: {
          background-color: var(--sidebar-selected-background-color, var(--paper-grey-200));
        };

        --paper-item-icon: {
          color: var(--sidebar-selected-icon-color);
        };
      }

      a.iron-selected .item-text {
        color: var(--sidebar-selected-text-color);
      }

      paper-icon-item.logout {
        margin-top: 16px;
      }

      .divider {
        height: 1px;
        background-color: var(--divider-color);
        margin: 4px 0;
      }

      .subheader {
        @apply --sidebar-text;
        padding: 16px;
      }

      .dev-tools {
        padding: 0 8px;
      }

      .dev-tools a {
        color: var(--sidebar-icon-color);
      }

      .profile-badge {
        /* for ripple */
        position: relative;
        box-sizing: border-box;
        width: 40px;
        line-height: 40px;
        border-radius: 50%;
        text-align: center;
        background-color: var(--light-primary-color);
        text-decoration: none;
        color: var(--primary-text-color);
      }

      .profile-badge.long {
        font-size: 80%;
      }
    </style>

    <app-toolbar>
      <div main-title=>Home Assistant</div>
      <template is='dom-if' if='[[hass.user]]'>
        <a href='/profile' class$='[[_computeBadgeClass(_initials)]]'>
          <paper-ripple></paper-ripple>
          [[_initials]]
        </a>
      </template>
    </app-toolbar>

    <paper-listbox attr-for-selected="data-panel" selected="[[hass.panelUrl]]">
      <a href='[[_computeUrl(defaultPage)]]' data-panel$="[[defaultPage]]">
        <paper-icon-item>
          <ha-icon slot="item-icon" icon="hass:apps"></ha-icon>
          <span class="item-text">[[localize('panel.states')]]</span>
        </paper-icon-item>
      </a>

      <template is="dom-repeat" items="[[panels]]">
        <a href='[[_computeUrl(item.url_path)]]' data-panel$='[[item.url_path]]'>
          <paper-icon-item>
            <ha-icon slot="item-icon" icon="[[item.icon]]"></ha-icon>
            <span class="item-text">[[_computePanelName(localize, item)]]</span>
          </paper-icon-item>
        </a>
      </template>

      <template is='dom-if' if='[[!hass.user]]'>
        <paper-icon-item on-click='_handleLogOut' class="logout">
          <ha-icon slot="item-icon" icon="hass:exit-to-app"></ha-icon>
          <span class="item-text">[[localize('ui.sidebar.log_out')]]</span>
        </paper-icon-item>
      </template>
    </paper-listbox>

    <div>
      <div class="divider"></div>

      <div class="subheader">[[localize('ui.sidebar.developer_tools')]]</div>

      <div class="dev-tools layout horizontal justified">
        <a href="/dev-service">
          <paper-icon-button
            icon="hass:remote"
            alt="[[localize('panel.dev-services')]]"
            title="[[localize('panel.dev-services')]]"
          ></paper-icon-button>
        </a>
        <a href="/dev-state">
          <paper-icon-button
            icon="hass:code-tags"
            alt="[[localize('panel.dev-states')]]"
            title="[[localize('panel.dev-states')]]"

          ></paper-icon-button>
        </a>
        <a href="/dev-event">
          <paper-icon-button
            icon="hass:radio-tower"
            alt="[[localize('panel.dev-events')]]"
            title="[[localize('panel.dev-events')]]"

          ></paper-icon-button>
        </a>
        <a href="/dev-template">
          <paper-icon-button
            icon="hass:file-xml"
            alt="[[localize('panel.dev-templates')]]"
            title="[[localize('panel.dev-templates')]]"

          ></paper-icon-button>
          </a>
        <template is="dom-if" if="[[_mqttLoaded(hass)]]">
          <a href="/dev-mqtt">
            <paper-icon-button
              icon="hass:altimeter"
              alt="[[localize('panel.dev-mqtt')]]"
              title="[[localize('panel.dev-mqtt')]]"

            ></paper-icon-button>
          </a>
        </template>
        <a href="/dev-info">
          <paper-icon-button
            icon="hass:information-outline"
            alt="[[localize('panel.dev-info')]]"
            title="[[localize('panel.dev-info')]]"
          ></paper-icon-button>
        </a>
      </div>
    </div>
`}static get properties(){return{hass:{type:Object},menuShown:{type:Boolean},menuSelected:{type:String},narrow:Boolean,panels:{type:Array,computed:"computePanels(hass)"},defaultPage:String,_initials:{type:String,computed:"_computeUserInitials(hass.user.name)"}}}_computeUserInitials(e){return e?e.trim().split(" ").slice(0,3).map(e=>e.substr(0,1)).join(""):"user"}_computeBadgeClass(e){return`profile-badge ${e.length>2?"long":""}`}_mqttLoaded(e){return Object(l.a)(e,"mqtt")}_computeUserName(e){return e&&(e.name||"Unnamed User")}_computePanelName(e,t){return e(`panel.${t.title}`)||t.title}computePanels(e){var t=e.panels,a={map:1,logbook:2,history:3},o=[];return Object.keys(t).forEach(function(e){t[e].title&&o.push(t[e])}),o.sort(function(e,t){var o=e.component_name in a,i=t.component_name in a;return o&&i?a[e.component_name]-a[t.component_name]:o?-1:i?1:e.title<t.title?-1:e.title>t.title?1:0}),o}_computeUrl(e){return`/${e}`}_handleLogOut(){this.fire("hass-logout")}})}}]);
//# sourceMappingURL=1cc34cb9e1697ebf39cb.chunk.js.map