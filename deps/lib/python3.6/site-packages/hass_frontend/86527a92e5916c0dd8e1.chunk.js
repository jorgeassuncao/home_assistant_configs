/*! For license information please see 86527a92e5916c0dd8e1.chunk.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{161:function(e,t,a){"use strict";a(132);const i=customElements.get("paper-slider");customElements.define("ha-paper-slider",class extends i{static get template(){const e=document.createElement("template");e.innerHTML=i.template.innerHTML;const t=e.content.querySelector("style");return t.setAttribute("include","paper-slider"),t.innerHTML="\n      .pin > .slider-knob > .slider-knob-inner {\n        font-size:  var(--ha-paper-slider-pin-font-size, 10px);\n        line-height: normal;\n      }\n\n      .pin > .slider-knob > .slider-knob-inner::before {\n        top: unset;\n        margin-left: unset;\n\n        bottom: calc(15px + var(--calculated-paper-slider-height)/2);\n        left: 50%;\n        width: 2.2em;\n        height: 2.2em;\n\n        -webkit-transform-origin: left bottom;\n        transform-origin: left bottom;\n        -webkit-transform: rotate(-45deg) scale(0) translate(0);\n        transform: rotate(-45deg) scale(0) translate(0);\n      }\n\n      .pin.expand > .slider-knob > .slider-knob-inner::before {\n        -webkit-transform: rotate(-45deg) scale(1) translate(7px, -7px);\n        transform: rotate(-45deg) scale(1) translate(7px, -7px);\n      }\n\n      .pin > .slider-knob > .slider-knob-inner::after {\n        top: unset;\n        font-size: unset;\n\n        bottom: calc(15px + var(--calculated-paper-slider-height)/2);\n        left: 50%;\n        margin-left: -1.1em;\n        width: 2.2em;\n        height: 2.1em;\n\n        -webkit-transform-origin: center bottom;\n        transform-origin: center bottom;\n        -webkit-transform: scale(0) translate(0);\n        transform: scale(0) translate(0);\n      }\n\n      .pin.expand > .slider-knob > .slider-knob-inner::after {\n        -webkit-transform: scale(1) translate(0, -10px);\n        transform: scale(1) translate(0, -10px);\n      }\n    ",e}})},165:function(e,t,a){"use strict";a(128),a(126),a(63),a(57),a(122),a(124);var i=a(0),s=a(4),o=(a(161),a(14));customElements.define("ha-form",class extends(Object(o.a)(s.a)){static get template(){return i["a"]`
    <style>
      .error {
        color: red;
      }
    </style>
    <template is="dom-if" if="[[_isArray(schema)]]" restamp="">
      <template is="dom-if" if="[[error.base]]">
          <div class='error'>[[computeError(error.base, schema)]]</div>
      </template>

      <template is="dom-repeat" items="[[schema]]">
        <ha-form data="[[_getValue(data, item)]]" schema="[[item]]" error="[[_getValue(error, item)]]" on-data-changed="_valueChanged" compute-label="[[computeLabel]]" compute-error="[[computeError]]"></ha-form>
      </template>
    </template>
    <template is="dom-if" if="[[!_isArray(schema)]]" restamp="">
      <template is="dom-if" if="[[error]]">
        <div class="error">[[computeError(error, schema)]]</div>
      </template>

      <template is="dom-if" if="[[_equals(schema.type, &quot;string&quot;)]]" restamp="">
        <template is="dom-if" if="[[_includes(schema.name, &quot;password&quot;)]]" restamp="">
          <paper-input
            type="[[_passwordFieldType(unmaskedPassword)]]"
            label="[[computeLabel(schema)]]"
            value="{{data}}"
            required="[[schema.required]]"
            auto-validate="[[schema.required]]"
            error-message='Required'
          >
            <paper-icon-button toggles
              active="{{unmaskedPassword}}"
              slot="suffix"
              icon="[[_passwordFieldIcon(unmaskedPassword)]]"
              id="iconButton"
              title="Click to toggle between masked and clear password">
            </paper-icon-button>
          </paper-input>
        </template>
        <template is="dom-if" if="[[!_includes(schema.name, &quot;password&quot;)]]" restamp="">
          <paper-input
            label="[[computeLabel(schema)]]"
            value="{{data}}"
            required="[[schema.required]]"
            auto-validate="[[schema.required]]"
            error-message='Required'
          ></paper-input>
        </template>
      </template>

      <template is="dom-if" if="[[_equals(schema.type, &quot;integer&quot;)]]" restamp="">
        <template is="dom-if" if="[[_isRange(schema)]]" restamp="">
          <div>
            [[computeLabel(schema)]]
            <ha-paper-slider pin="" value="{{data}}" min="[[schema.valueMin]]" max="[[schema.valueMax]]"></ha-paper-slider>
          </div>
        </template>
        <template is="dom-if" if="[[!_isRange(schema)]]" restamp="">
          <paper-input
            label="[[computeLabel(schema)]]"
            value="{{data}}"
            type="number"
            required="[[schema.required]]"
            auto-validate="[[schema.required]]"
            error-message='Required'
          ></paper-input>
        </template>
      </template>

      <template is="dom-if" if="[[_equals(schema.type, &quot;float&quot;)]]" restamp="">
        <!--TODO-->
        <paper-input
          label="[[computeLabel(schema)]]"
          value="{{data}}"
          required="[[schema.required]]"
          auto-validate="[[schema.required]]"
          error-message='Required'
        ></paper-input>
      </template>

      <template is="dom-if" if="[[_equals(schema.type, &quot;boolean&quot;)]]" restamp="">
        <paper-checkbox checked="{{data}}">[[computeLabel(schema)]]</paper-checkbox>
      </template>

      <template is="dom-if" if="[[_equals(schema.type, &quot;select&quot;)]]" restamp="">
        <paper-dropdown-menu label="[[computeLabel(schema)]]">
          <paper-listbox slot="dropdown-content" attr-for-selected="item-name" selected="{{data}}">
            <template is="dom-repeat" items="[[schema.options]]">
              <paper-item item-name$="[[_optionValue(item)]]">[[_optionLabel(item)]]</paper-item>
            </template>
          </paper-listbox>
        </paper-dropdown-menu>
      </template>

    </template>
`}static get properties(){return{data:{type:Object,notify:!0},schema:Object,error:Object,computeLabel:{type:Function,value:()=>e=>e&&e.name},computeError:{type:Function,value:()=>(e,t)=>e}}}_isArray(e){return Array.isArray(e)}_isRange(e){return"valueMin"in e&&"valueMax"in e}_equals(e,t){return e===t}_includes(e,t){return e.indexOf(t)>=0}_getValue(e,t){return e?e[t.name]:null}_valueChanged(e){this.set(["data",e.model.item.name],e.detail.value)}_passwordFieldType(e){return e?"text":"password"}_passwordFieldIcon(e){return e?"hass:eye-off":"hass:eye"}_optionValue(e){return Array.isArray(e)?e[0]:e}_optionLabel(e){return Array.isArray(e)?e[1]:e}})},204:function(e,t,a){"use strict";a.d(t,"b",function(){return o}),a.d(t,"a",function(){return n}),a(2);var i=a(54),s=a(1);const o={hostAttributes:{role:"dialog",tabindex:"-1"},properties:{modal:{type:Boolean,value:!1},__readied:{type:Boolean,value:!1}},observers:["_modalChanged(modal, __readied)"],listeners:{tap:"_onDialogClick"},ready:function(){this.__prevNoCancelOnOutsideClick=this.noCancelOnOutsideClick,this.__prevNoCancelOnEscKey=this.noCancelOnEscKey,this.__prevWithBackdrop=this.withBackdrop,this.__readied=!0},_modalChanged:function(e,t){t&&(e?(this.__prevNoCancelOnOutsideClick=this.noCancelOnOutsideClick,this.__prevNoCancelOnEscKey=this.noCancelOnEscKey,this.__prevWithBackdrop=this.withBackdrop,this.noCancelOnOutsideClick=!0,this.noCancelOnEscKey=!0,this.withBackdrop=!0):(this.noCancelOnOutsideClick=this.noCancelOnOutsideClick&&this.__prevNoCancelOnOutsideClick,this.noCancelOnEscKey=this.noCancelOnEscKey&&this.__prevNoCancelOnEscKey,this.withBackdrop=this.withBackdrop&&this.__prevWithBackdrop))},_updateClosingReasonConfirmed:function(e){this.closingReason=this.closingReason||{},this.closingReason.confirmed=e},_onDialogClick:function(e){for(var t=Object(s.b)(e).path,a=0,i=t.indexOf(this);a<i;a++){var o=t[a];if(o.hasAttribute&&(o.hasAttribute("dialog-dismiss")||o.hasAttribute("dialog-confirm"))){this._updateClosingReasonConfirmed(o.hasAttribute("dialog-confirm")),this.close(),e.stopPropagation();break}}}},n=[i.a,o]},207:function(e,t,a){"use strict";a(2),a(27),a(30),a(43),a(64);const i=document.createElement("template");i.setAttribute("style","display: none;"),i.innerHTML='<dom-module id="paper-dialog-shared-styles">\n  <template>\n    <style>\n      :host {\n        display: block;\n        margin: 24px 40px;\n\n        background: var(--paper-dialog-background-color, var(--primary-background-color));\n        color: var(--paper-dialog-color, var(--primary-text-color));\n\n        @apply --paper-font-body1;\n        @apply --shadow-elevation-16dp;\n        @apply --paper-dialog;\n      }\n\n      :host > ::slotted(*) {\n        margin-top: 20px;\n        padding: 0 24px;\n      }\n\n      :host > ::slotted(.no-padding) {\n        padding: 0;\n      }\n\n      \n      :host > ::slotted(*:first-child) {\n        margin-top: 24px;\n      }\n\n      :host > ::slotted(*:last-child) {\n        margin-bottom: 24px;\n      }\n\n      /* In 1.x, this selector was `:host > ::content h2`. In 2.x <slot> allows\n      to select direct children only, which increases the weight of this\n      selector, so we have to re-define first-child/last-child margins below. */\n      :host > ::slotted(h2) {\n        position: relative;\n        margin: 0;\n\n        @apply --paper-font-title;\n        @apply --paper-dialog-title;\n      }\n\n      /* Apply mixin again, in case it sets margin-top. */\n      :host > ::slotted(h2:first-child) {\n        margin-top: 24px;\n        @apply --paper-dialog-title;\n      }\n\n      /* Apply mixin again, in case it sets margin-bottom. */\n      :host > ::slotted(h2:last-child) {\n        margin-bottom: 24px;\n        @apply --paper-dialog-title;\n      }\n\n      :host > ::slotted(.paper-dialog-buttons),\n      :host > ::slotted(.buttons) {\n        position: relative;\n        padding: 8px 8px 8px 24px;\n        margin: 0;\n\n        color: var(--paper-dialog-button-color, var(--primary-color));\n\n        @apply --layout-horizontal;\n        @apply --layout-end-justified;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(i.content)},214:function(e,t,a){"use strict";a(2);var i=a(96),s=a(204),o=(a(207),a(3)),n=a(0);Object(o.a)({_template:n["a"]`
    <style include="paper-dialog-shared-styles"></style>
    <slot></slot>
`,is:"paper-dialog",behaviors:[s.a,i.a],listeners:{"neon-animation-finish":"_onNeonAnimationFinish"},_renderOpened:function(){this.cancelAnimation(),this.playAnimation("entry")},_renderClosed:function(){this.cancelAnimation(),this.playAnimation("exit")},_onNeonAnimationFinish:function(){this.opened?this._finishRenderOpened():this._finishRenderClosed()}})},224:function(e,t,a){"use strict";a(2),a(27);var i=a(204),s=(a(30),a(3)),o=a(0);Object(s.a)({_template:o["a"]`
    <style>

      :host {
        display: block;
        @apply --layout-relative;
      }

      :host(.is-scrolled:not(:first-child))::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: var(--divider-color);
      }

      :host(.can-scroll:not(.scrolled-to-bottom):not(:last-child))::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: var(--divider-color);
      }

      .scrollable {
        padding: 0 24px;

        @apply --layout-scroll;
        @apply --paper-dialog-scrollable;
      }

      .fit {
        @apply --layout-fit;
      }
    </style>

    <div id="scrollable" class="scrollable" on-scroll="updateScrollState">
      <slot></slot>
    </div>
`,is:"paper-dialog-scrollable",properties:{dialogElement:{type:Object}},get scrollTarget(){return this.$.scrollable},ready:function(){this._ensureTarget(),this.classList.add("no-padding")},attached:function(){this._ensureTarget(),requestAnimationFrame(this.updateScrollState.bind(this))},updateScrollState:function(){this.toggleClass("is-scrolled",this.scrollTarget.scrollTop>0),this.toggleClass("can-scroll",this.scrollTarget.offsetHeight<this.scrollTarget.scrollHeight),this.toggleClass("scrolled-to-bottom",this.scrollTarget.scrollTop+this.scrollTarget.offsetHeight>=this.scrollTarget.scrollHeight)},_ensureTarget:function(){this.dialogElement=this.dialogElement||this.parentElement,this.dialogElement&&this.dialogElement.behaviors&&this.dialogElement.behaviors.indexOf(i.b)>=0?(this.dialogElement.sizingTarget=this.scrollTarget,this.scrollTarget.classList.remove("fit")):this.dialogElement&&this.scrollTarget.classList.add("fit")}})},630:function(e,t,a){"use strict";a.r(t),a(55),a(224),a(214),a(127);var i=a(0),s=a(4),o=(a(165),a(129),a(123),a(14)),n=a(13);let r=0;customElements.define("ha-config-flow",class extends(Object(n.a)(Object(o.a)(s.a))){static get template(){return i["a"]`
    <style include="ha-style-dialog">
      .error {
        color: red;
      }
      paper-dialog {
        max-width: 500px;
      }
      ha-markdown img:first-child:last-child {
        display: block;
        margin: 0 auto;
      }
      .init-spinner {
        padding: 10px 100px 34px;
        text-align: center;
      }
      .submit-spinner {
        margin-right: 16px;
      }
    </style>
    <paper-dialog id="dialog" with-backdrop="" opened="{{_opened}}" on-opened-changed="_openedChanged">
      <h2>
        <template is="dom-if" if="[[_equals(_step.type, 'abort')]]">
          Aborted
        </template>
        <template is="dom-if" if="[[_equals(_step.type, 'create_entry')]]">
          Success!
        </template>
        <template is="dom-if" if="[[_equals(_step.type, 'form')]]">
          [[_computeStepTitle(localize, _step)]]
        </template>
      </h2>
      <paper-dialog-scrollable>
        <template is="dom-if" if="[[_errorMsg]]">
          <div class='error'>[[_errorMsg]]</div>
        </template>
        <template is="dom-if" if="[[!_step]]">
          <div class='init-spinner'><paper-spinner active></paper-spinner></div>
        </template>
        <template is="dom-if" if="[[_step]]">
          <template is="dom-if" if="[[_equals(_step.type, 'abort')]]">
            <ha-markdown content="[[_computeStepAbortedReason(localize, _step)]]"></ha-markdown>
          </template>

          <template is="dom-if" if="[[_equals(_step.type, 'create_entry')]]">
            <p>Created config for [[_step.title]]</p>
          </template>

          <template is="dom-if" if="[[_equals(_step.type, 'form')]]">
            <template is="dom-if" if="[[_computeStepDescription(localize, _step)]]">
              <ha-markdown content="[[_computeStepDescription(localize, _step)]]" allow-svg></ha-markdown>
            </template>

            <ha-form
              data="{{_stepData}}"
              schema="[[_step.data_schema]]"
              error="[[_step.errors]]"
              compute-label="[[_computeLabelCallback(localize, _step)]]"
              compute-error="[[_computeErrorCallback(localize, _step)]]"
            ></ha-form>
          </template>
        </template>
      </paper-dialog-scrollable>
      <div class="buttons">
        <template is="dom-if" if="[[_equals(_step.type, 'abort')]]">
          <paper-button on-click="_flowDone">Close</paper-button>
        </template>
        <template is="dom-if" if="[[_equals(_step.type, 'create_entry')]]">
          <paper-button on-click="_flowDone">Close</paper-button>
        </template>
        <template is="dom-if" if="[[_equals(_step.type, 'form')]]">
          <template is="dom-if" if="[[_loading]]">
            <div class='submit-spinner'><paper-spinner active></paper-spinner></div>
          </template>
          <template is="dom-if" if="[[!_loading]]">
            <paper-button on-click="_submitStep">Submit</paper-button>
          </template>
        </template>
      </div>
    </paper-dialog>
`}static get properties(){return{_hass:Object,_dialogClosedCallback:Function,_instance:Number,_loading:{type:Boolean,value:!1},_errorMsg:String,_opened:{type:Boolean,value:!1},_step:{type:Object,value:null},_stepData:Object}}ready(){super.ready(),this.addEventListener("keypress",e=>{13===e.keyCode&&this._submitStep()})}showDialog({hass:e,continueFlowId:t,newFlowForHandler:a,dialogClosedCallback:i}){this.hass=e,this._instance=r++,this._dialogClosedCallback=i,this._createdFromHandler=!!a,this._loading=!0,this._opened=!0;const s=t?this.hass.callApi("get",`config/config_entries/flow/${t}`):this.hass.callApi("post","config/config_entries/flow",{handler:a}),o=this._instance;s.then(e=>{o===this._instance&&(this._processStep(e),this._loading=!1,setTimeout(()=>this.$.dialog.center(),0))})}_submitStep(){this._loading=!0,this._errorMsg=null;const e=this._instance;this.hass.callApi("post",`config/config_entries/flow/${this._step.flow_id}`,this._stepData).then(t=>{e===this._instance&&(this._processStep(t),this._loading=!1)},e=>{this._errorMsg=e&&e.body&&e.body.message||"Unknown error occurred",this._loading=!1})}_processStep(e){e.errors||(e.errors={}),this._step=e,0===Object.keys(e.errors).length&&(this._stepData={})}_flowDone(){this._opened=!1;const e=this._step&&["success","abort"].includes(this._step.type);this._step&&!e&&this._createdFromHandler&&this.hass.callApi("delete",`config/config_entries/flow/${this._step.flow_id}`),this._dialogClosedCallback({flowFinished:e}),this._errorMsg=null,this._step=null,this._stepData={},this._dialogClosedCallback=null}_equals(e,t){return e===t}_openedChanged(e){this._step&&!e.detail.value&&this._flowDone()}_computeStepAbortedReason(e,t){return e(`component.${t.handler}.config.abort.${t.reason}`)}_computeStepTitle(e,t){return e(`component.${t.handler}.config.step.${t.step_id}.title`)}_computeStepDescription(e,t){const a=[`component.${t.handler}.config.step.${t.step_id}.description`],i=t.description_placeholders||{};return Object.keys(i).forEach(e=>{a.push(e),a.push(i[e])}),e(...a)}_computeLabelCallback(e,t){return a=>e(`component.${t.handler}.config.step.${t.step_id}.data.${a.name}`)}_computeErrorCallback(e,t){return a=>e(`component.${t.handler}.config.error.${a}`)}})}}]);
//# sourceMappingURL=86527a92e5916c0dd8e1.chunk.js.map