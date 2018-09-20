(window.webpackJsonp=window.webpackJsonp||[]).push([[32,38],{272:function(t,e,i){"use strict";i.r(e);var n=i(2),s=i(72),o=i(54),a=i(3),r=i(0),p=null;Object(a.a)({_template:r["a"]`
    <style>
      :host {
        display: block;
        position: fixed;
        background-color: var(--paper-toast-background-color, #323232);
        color: var(--paper-toast-color, #f1f1f1);
        min-height: 48px;
        min-width: 288px;
        padding: 16px 24px;
        box-sizing: border-box;
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
        border-radius: 2px;
        margin: 12px;
        font-size: 14px;
        cursor: default;
        -webkit-transition: -webkit-transform 0.3s, opacity 0.3s;
        transition: transform 0.3s, opacity 0.3s;
        opacity: 0;
        -webkit-transform: translateY(100px);
        transform: translateY(100px);
        @apply --paper-font-common-base;
      }

      :host(.capsule) {
        border-radius: 24px;
      }

      :host(.fit-bottom) {
        width: 100%;
        min-width: 0;
        border-radius: 0;
        margin: 0;
      }

      :host(.paper-toast-open) {
        opacity: 1;
        -webkit-transform: translateY(0px);
        transform: translateY(0px);
      }
    </style>

    <span id="label">{{text}}</span>
    <slot></slot>
`,is:"paper-toast",behaviors:[o.a],properties:{fitInto:{type:Object,value:window,observer:"_onFitIntoChanged"},horizontalAlign:{type:String,value:"left"},verticalAlign:{type:String,value:"bottom"},duration:{type:Number,value:3e3},text:{type:String,value:""},noCancelOnOutsideClick:{type:Boolean,value:!0},noAutoFocus:{type:Boolean,value:!0}},listeners:{transitionend:"__onTransitionEnd"},get visible(){return n.a._warn("`visible` is deprecated, use `opened` instead"),this.opened},get _canAutoClose(){return this.duration>0&&this.duration!==1/0},created:function(){this._autoClose=null,s.a.requestAvailability()},show:function(t){for(var e in"string"==typeof t&&(t={text:t}),t)0===e.indexOf("_")?n.a._warn('The property "'+e+'" is private and was not set.'):e in this?this[e]=t[e]:n.a._warn('The property "'+e+'" is not valid.');this.open()},hide:function(){this.close()},__onTransitionEnd:function(t){t&&t.target===this&&"opacity"===t.propertyName&&(this.opened?this._finishRenderOpened():this._finishRenderClosed())},_openedChanged:function(){null!==this._autoClose&&(this.cancelAsync(this._autoClose),this._autoClose=null),this.opened?(p&&p!==this&&p.close(),p=this,this.fire("iron-announce",{text:this.text}),this._canAutoClose&&(this._autoClose=this.async(this.close,this.duration))):p===this&&(p=null),o.b._openedChanged.apply(this,arguments)},_renderOpened:function(){this.classList.add("paper-toast-open")},_renderClosed:function(){this.classList.remove("paper-toast-open")},_onFitIntoChanged:function(t){this.positionTarget=t}});const l=customElements.get("paper-toast");customElements.define("ha-toast",class extends l{connectedCallback(){super.connectedCallback(),this._resizeListener||(this._resizeListener=(t=>this.classList.toggle("fit-bottom",t.matches)),this._mediaq=window.matchMedia("(max-width: 599px")),this._mediaq.addListener(this._resizeListener),this._resizeListener(this._mediaq)}disconnectedCallback(){super.disconnectedCallback(),this._mediaq.removeListener(this._resizeListener)}})},613:function(t,e,i){"use strict";i.r(e),i(55),i(272),e.default=(t=>{const e=document.createElement("ha-toast");e.opened=!0,e.text="A new version of the frontend is available.",e.duration=0;const i=document.createElement("paper-button");i.addEventListener("click",()=>t.postMessage({type:"skipWaiting"})),i.style.color="var(--primary-color)",i.style.fontWeight="bold",i.innerHTML="reload",e.appendChild(i),document.body.appendChild(e)})}}]);
//# sourceMappingURL=5cb11dd94479c3e0298b.chunk.js.map