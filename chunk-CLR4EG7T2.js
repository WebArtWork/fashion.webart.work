import{n as s,t as r}from"./chunk-Btz99zWn.js";import{$n as xS,An as pn$1,At as Zb,B as Jh,Ct as Wb,Dn as p,Et as Wm,F as Ig,Fn as sV,Gt as cV,Hn as uS,I as Is,It as aS,J as Nb,Jt as cv,K as Md,Lt as aV,On as pV,Pn as rv,Pt as _d,Q as Ob,S as Fa,T as Gm,Tn as nv,U as Kv,Un as uV,Vt as bc,W as M,X as OS,Xt as di$1,Y as Nd,Yn as wC,Z as OT,Zt as dp,a as AI,ar as yv,at as RS,bn as kb,cn as he,cr as zb,ct as Rd,en as ep,er as xT,f as Cd,gt as Td,h as DS,i as $r,ir as yd,it as Qu,j as Hg,jt as Zm,k as Hb,kn as pa,l as An$1,ln as hi$1,m as DC,mn as jS,mt as TT,n as $m,nr as xb,o as AS,ot as Ra,p as D,q as Na,rt as Qm,s as Aa,sn as hb,st as Rb,tr as xa,u as Bb,vn as kS,w as Gb,wn as ne,xn as lV,yn as kT}from"./chunk-DLsS5aj0.js";import{A as Y,B as fn$1,C as Ti$1,H as hn$1,I as dn$1,S as Rn$1,W as ie,X as mt,_ as Ms,a as Dn$1,ct as xi$1,d as In$1,et as qi$1,g as Mn$1,h as Ln$1,j as Yi$1,k as Xi$1,lt as y,n as At,o as Ds,p as Ki$1,r as Be,st as wn$1,t as As,x as Re$1,y as Pn$1}from"./chunk-lAT3Uo9Q.js";import{g as Yt$1,i as Fn$1,m as We,n as Dn$2,s as K,v as _}from"./chunk-s3UUhhTu.js";import{B as S,o as f$1,s as f,t as Ce,z as L}from"./main-T52IB3K2.js";import{t as d}from"./chunk-CSNc332N.js";import{t as H}from"./chunk-CpxKSCdf.js";import{n as et,r as nt}from"./chunk-Dso9CZWo.js";import{a as Yt$2,l as xt,n as Kn$1,s as qe,t as Jn$1}from"./chunk-C3riz1-A.js";import"./chunk-DgppxD7G.js";import{i as z}from"./chunk-CHT4Xm_u.js";import{t as A}from"./chunk-BigOsMI1.js";import{i as p$1,t as B}from"./chunk-BaGnU7p62.js";import{n as mt$1,r as xe}from"./chunk-BQa6xtws2.js";import{a as li$1,i as ii$1,n as ci$1,o as mi$1,r as ei$1,s as vs,t as Ci$1}from"./chunk-CNbMA06V2.js";var Gt=(()=>{class t extends S{static ɵfac=(()=>{let e;return function(i){return(e||(e=Ig(t)))(i||t)}})();static ɵcmp=yd({type:t,selectors:[[``,`data-p-icon`,`minus`]],features:[$m],decls:1,vars:0,consts:[[`d`,`M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z`,`fill`,`currentColor`]],template:function(n,i){n&1&&(dp(),Zm(0,`path`,0))},encapsulation:2})}return t})();var jt=`
    .p-checkbox {
        position: relative;
        display: inline-flex;
        user-select: none;
        vertical-align: bottom;
        width: dt('checkbox.width');
        height: dt('checkbox.height');
    }

    .p-checkbox-input {
        cursor: pointer;
        appearance: none;
        position: absolute;
        inset-block-start: 0;
        inset-inline-start: 0;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        opacity: 0;
        z-index: 1;
        outline: 0 none;
        border: 1px solid transparent;
        border-radius: dt('checkbox.border.radius');
    }

    .p-checkbox-box {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: dt('checkbox.border.radius');
        border: 1px solid dt('checkbox.border.color');
        background: dt('checkbox.background');
        width: dt('checkbox.width');
        height: dt('checkbox.height');
        transition:
            background dt('checkbox.transition.duration'),
            color dt('checkbox.transition.duration'),
            border-color dt('checkbox.transition.duration'),
            box-shadow dt('checkbox.transition.duration'),
            outline-color dt('checkbox.transition.duration');
        outline-color: transparent;
        box-shadow: dt('checkbox.shadow');
    }

    .p-checkbox-icon {
        transition-duration: dt('checkbox.transition.duration');
        color: dt('checkbox.icon.color');
        font-size: dt('checkbox.icon.size');
        width: dt('checkbox.icon.size');
        height: dt('checkbox.icon.size');
    }

    .p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        border-color: dt('checkbox.hover.border.color');
    }

    .p-checkbox-checked .p-checkbox-box {
        border-color: dt('checkbox.checked.border.color');
        background: dt('checkbox.checked.background');
    }

    .p-checkbox-checked .p-checkbox-icon {
        color: dt('checkbox.icon.checked.color');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        background: dt('checkbox.checked.hover.background');
        border-color: dt('checkbox.checked.hover.border.color');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-icon {
        color: dt('checkbox.icon.checked.hover.color');
    }

    .p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
        border-color: dt('checkbox.focus.border.color');
        box-shadow: dt('checkbox.focus.ring.shadow');
        outline: dt('checkbox.focus.ring.width') dt('checkbox.focus.ring.style') dt('checkbox.focus.ring.color');
        outline-offset: dt('checkbox.focus.ring.offset');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
        border-color: dt('checkbox.checked.focus.border.color');
    }

    .p-checkbox.p-invalid > .p-checkbox-box {
        border-color: dt('checkbox.invalid.border.color');
    }

    .p-checkbox.p-variant-filled .p-checkbox-box {
        background: dt('checkbox.filled.background');
    }

    .p-checkbox-checked.p-variant-filled .p-checkbox-box {
        background: dt('checkbox.checked.background');
    }

    .p-checkbox-checked.p-variant-filled:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        background: dt('checkbox.checked.hover.background');
    }

    .p-checkbox.p-disabled {
        opacity: 1;
    }

    .p-checkbox.p-disabled .p-checkbox-box {
        background: dt('checkbox.disabled.background');
        border-color: dt('checkbox.checked.disabled.border.color');
    }

    .p-checkbox.p-disabled .p-checkbox-box .p-checkbox-icon {
        color: dt('checkbox.icon.disabled.color');
    }

    .p-checkbox-sm,
    .p-checkbox-sm .p-checkbox-box {
        width: dt('checkbox.sm.width');
        height: dt('checkbox.sm.height');
    }

    .p-checkbox-sm .p-checkbox-icon {
        font-size: dt('checkbox.icon.sm.size');
        width: dt('checkbox.icon.sm.size');
        height: dt('checkbox.icon.sm.size');
    }

    .p-checkbox-lg,
    .p-checkbox-lg .p-checkbox-box {
        width: dt('checkbox.lg.width');
        height: dt('checkbox.lg.height');
    }

    .p-checkbox-lg .p-checkbox-icon {
        font-size: dt('checkbox.icon.lg.size');
        width: dt('checkbox.icon.lg.size');
        height: dt('checkbox.icon.lg.size');
    }
`;var si=[`icon`];var ri=[`input`];var ci=(t,a,e)=>({checked:t,class:a,dataP:e});function di(t,a){if(t&1&&Ra(0,`span`,7),t&2){let e=Hb(3);uS(e.cx(`icon`)),Wm(`ngClass`,e.checkboxIcon())(`pBind`,e.ptm(`icon`)),Na(`data-p`,e.dataP)}}function pi(t,a){if(t&1&&(dp(),Ra(0,`svg`,8)),t&2){let e=Hb(3);uS(e.cx(`icon`)),Wm(`pBind`,e.ptm(`icon`)),Na(`data-p`,e.dataP)}}function ui(t,a){if(t&1&&(Nb(0,di,1,5,`span`,5),Nb(1,pi,1,4,`:svg:svg`,6)),t&2){let e=Hb(2);Rb(e.checkboxIcon()?0:-1),AI(),Rb(e.checkboxIcon()?-1:1)}}function mi(t,a){if(t&1&&(dp(),Ra(0,`svg`,9)),t&2){let e=Hb(2);uS(e.cx(`icon`)),Wm(`pBind`,e.ptm(`icon`)),Na(`data-p`,e.dataP)}}function hi(t,a){if(t&1&&(Nb(0,ui,2,2),Nb(1,mi,1,4,`:svg:svg`,4)),t&2){let e=Hb();Rb(e.checked?0:-1),AI(),Rb(e._indeterminate()?1:-1)}}function _i(t,a){}function fi(t,a){t&1&&Gm(0,_i,0,0,`ng-template`)}var gi=`
    ${jt}

    /* Native checkbox directive: retain browser interaction and accessibility while using the active theme color. */
    input.p-checkbox.p-component {
        accent-color: dt('checkbox.checked.background');
        cursor: pointer;
    }

    input.p-checkbox.p-component.p-disabled,
    input.p-checkbox.p-component[readonly] {
        cursor: default;
    }

    .p-checkbox > .p-checkbox-native-icon:empty::before {
        content: '\xE2\u0153\u201C';
        color: dt('checkbox.icon.color');
        font-size: dt('checkbox.icon.size');
        line-height: 1;
    }

    .p-checkbox-checked > .p-checkbox-native-icon:empty::before {
        color: dt('checkbox.icon.checked.color');
    }

    .p-checkbox.p-disabled > .p-checkbox-native-icon:empty::before {
        color: dt('checkbox.icon.disabled.color');
    }

    .p-checkbox > .p-checkbox-native-icon > * {
        color: dt('checkbox.icon.color');
    }

    .p-checkbox-checked > .p-checkbox-native-icon > * {
        color: dt('checkbox.icon.checked.color');
    }

    .p-checkbox.p-disabled > .p-checkbox-native-icon > * {
        color: dt('checkbox.icon.disabled.color');
    }

    /* For ngx-prime */
    p-checkBox.ng-invalid.ng-dirty .p-checkbox-box,
    p-check-box.ng-invalid.ng-dirty .p-checkbox-box,
    p-checkbox.ng-invalid.ng-dirty .p-checkbox-box {
        border-color: dt('checkbox.invalid.border.color');
    }
`;var bi={root:({instance:t})=>[`p-checkbox p-component`,{"p-checkbox-checked p-highlight":t.checked,"p-disabled":t.$disabled(),"p-invalid":t.invalid(),"p-variant-filled":t.$variant()===`filled`,"p-checkbox-sm p-inputfield-sm":t.size()===`small`,"p-checkbox-lg p-inputfield-lg":t.size()===`large`}],box:`p-checkbox-box`,input:`p-checkbox-input`,icon:`p-checkbox-icon`};var qt=(()=>{class t extends Y{name=`checkbox`;style=gi;classes=bi;static ɵfac=(()=>{let e;return function(i){return(e||(e=Ig(t)))(i||t)}})();static ɵprov=M({token:t,factory:t.ɵfac})}return t})();var Ut=new D(`CHECKBOX_INSTANCE`);var Ci={provide:K,useExisting:Is(()=>$e),multi:!0};var $e=(()=>{class t extends xe{componentName=`Checkbox`;hostName=Fa(``);value=Fa();binary=Fa(void 0,{transform:hi$1});ariaLabelledBy=Fa();ariaLabel=Fa();tabindex=Fa(void 0,{transform:TT});inputId=Fa();inputStyle=Fa();styleClass=Fa();inputClass=Fa();indeterminate=Fa(!1,{transform:hi$1});formControl=Fa();checkboxIcon=Fa();readonly=Fa(void 0,{transform:hi$1});autofocus=Fa(void 0,{transform:hi$1});trueValue=Fa(!0);falseValue=Fa(!1);variant=Fa();size=Fa();onChange=sV();onFocus=sV();onBlur=sV();inputViewChild=cV(`input`);get checked(){return this._indeterminate()?!1:this.binary()?this.modelValue()===this.trueValue():dn$1(this.value(),this.modelValue())}_indeterminate=ne(void 0);checkboxIconTemplate=uV(`icon`,{descendants:!1});templates=lV(Pn$1);_checkboxIconTemplate;focused=!1;_componentStyle=p(qt);bindDirectiveInstance=p(Ds,{self:!0});$pcCheckbox=p(Ut,{optional:!0,skipSelf:!0})??void 0;$variant=di$1(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());constructor(){super(),pV()&&console.warn('`<p-checkbox>` is deprecated and will be removed in a future major version. Use a native `<input type="checkbox" pCheckbox>` instead.'),Qu(()=>{this._indeterminate.set(this.indeterminate())})}onAfterContentInit(){this.templates()?.forEach(e=>{switch(e.getType()){case`icon`:this._checkboxIconTemplate=e.template;break;case`checkboxicon`:this._checkboxIconTemplate=e.template;break}})}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}updateModel(e){let n,i=this.injector.get(_,null,{optional:!0,self:!0}),o=this.formControl(),l=i&&!o?i.value:this.modelValue();this.binary()?(n=this._indeterminate()?this.trueValue():this.checked?this.falseValue():this.trueValue(),this.writeModelValue(n),this.onModelChange(n)):(this.checked||this._indeterminate()?n=l.filter(x=>!ie(x,this.value())):n=l?[...l,this.value()]:[this.value()],this.onModelChange(n),this.writeModelValue(n),o&&o.setValue(n)),this._indeterminate()&&this._indeterminate.set(!1),this.onChange.emit({checked:n,originalEvent:e})}handleChange(e){this.readonly()||this.updateModel(e)}onInputFocus(e){this.focused=!0,this.onFocus.emit(e)}onInputBlur(e){this.focused=!1,this.onBlur.emit(e),this.onModelTouched()}focus(){this.inputViewChild()?.nativeElement.focus()}writeControlValue(e,n){n(e),this.cd.markForCheck()}get dataP(){return this.cn({invalid:this.invalid(),checked:this.checked,disabled:this.$disabled(),filled:this.$variant()===`filled`,[this.size()]:this.size()})}static ɵfac=function(n){return new(n||t)};static ɵcmp=yd({type:t,selectors:[[`p-checkbox`],[`p-checkBox`],[`p-check-box`]],contentQueries:function(n,i,o){n&1&&nv(o,i.checkboxIconTemplate,si,4)(o,i.templates,Pn$1,4),n&2&&Wb(2)},viewQuery:function(n,i){n&1&&rv(i.inputViewChild,ri,5),n&2&&Wb()},hostVars:6,hostBindings:function(n,i){n&2&&(Na(`data-p-highlight`,i.checked)(`data-p-checked`,i.checked)(`data-p-disabled`,i.$disabled())(`data-p`,i.dataP),uS(i.cn(i.cx(`root`),i.styleClass())))},inputs:{hostName:[1,`hostName`],value:[1,`value`],binary:[1,`binary`],ariaLabelledBy:[1,`ariaLabelledBy`],ariaLabel:[1,`ariaLabel`],tabindex:[1,`tabindex`],inputId:[1,`inputId`],inputStyle:[1,`inputStyle`],styleClass:[1,`styleClass`],inputClass:[1,`inputClass`],indeterminate:[1,`indeterminate`],formControl:[1,`formControl`],checkboxIcon:[1,`checkboxIcon`],readonly:[1,`readonly`],autofocus:[1,`autofocus`],trueValue:[1,`trueValue`],falseValue:[1,`falseValue`],variant:[1,`variant`],size:[1,`size`]},outputs:{onChange:`onChange`,onFocus:`onFocus`,onBlur:`onBlur`},features:[RS([Ci,qt,{provide:Ut,useExisting:t},{provide:xi$1,useExisting:t}]),hb([Ds]),$m],decls:5,vars:27,consts:[[`input`,``],[`type`,`checkbox`,3,`focus`,`blur`,`change`,`checked`,`indeterminate`,`pBind`],[3,`pBind`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`],[`data-p-icon`,`minus`,3,`class`,`pBind`],[3,`class`,`ngClass`,`pBind`],[`data-p-icon`,`check`,3,`class`,`pBind`],[3,`ngClass`,`pBind`],[`data-p-icon`,`check`,3,`pBind`],[`data-p-icon`,`minus`,3,`pBind`]],template:function(n,i){n&1&&(pa(0,`input`,1,0),Aa(`focus`,function(l){return i.onInputFocus(l)})(`blur`,function(l){return i.onInputBlur(l)})(`change`,function(l){return i.handleChange(l)}),Cd(),pa(2,`div`,2),Nb(3,hi,2,2),Gm(4,fi,1,0,null,3),Cd()),n&2&&(aS(i.inputStyle()),uS(i.cn(i.cx(`input`),i.inputClass())),Wm(`checked`,i.checked)(`indeterminate`,!!i._indeterminate())(`pBind`,i.ptm(`input`)),Na(`id`,i.inputId())(`value`,i.value())(`name`,i.name())(`tabindex`,i.tabindex())(`required`,i.required()?``:void 0)(`readonly`,i.readonly()?``:void 0)(`disabled`,i.$disabled()?``:void 0)(`aria-labelledby`,i.ariaLabelledBy())(`aria-label`,i.ariaLabel()),AI(2),uS(i.cx(`box`)),Wm(`pBind`,i.ptm(`box`)),Na(`data-p`,i.dataP),AI(),Rb(!i.checkboxIconTemplate()&&!i._checkboxIconTemplate?3:-1),AI(),Wm(`ngTemplateOutlet`,i.checkboxIconTemplate()||i._checkboxIconTemplate)(`ngTemplateOutletContext`,kS(23,ci,i.checked,i.cx(`icon`),i.dataP)))},dependencies:[Kv,xT,kT,Dn$1,f,Gt,Ms,Ds],encapsulation:2})}return t})();var Yt=`
    .p-chip {
        display: inline-flex;
        align-items: center;
        background: dt('chip.background');
        color: dt('chip.color');
        border-radius: dt('chip.border.radius');
        padding-block: dt('chip.padding.y');
        padding-inline: dt('chip.padding.x');
        gap: dt('chip.gap');
    }

    .p-chip-icon {
        color: dt('chip.icon.color');
        font-size: dt('chip.icon.size');
        width: dt('chip.icon.size');
        height: dt('chip.icon.size');
    }

    .p-chip-image {
        border-radius: 50%;
        width: dt('chip.image.width');
        height: dt('chip.image.height');
        margin-inline-start: calc(-1 * dt('chip.padding.y'));
    }

    .p-chip:has(.p-chip-remove-icon) {
        padding-inline-end: dt('chip.padding.y');
    }

    .p-chip:has(.p-chip-image) {
        padding-block-start: calc(dt('chip.padding.y') / 2);
        padding-block-end: calc(dt('chip.padding.y') / 2);
    }

    .p-chip-remove-icon {
        cursor: pointer;
        font-size: dt('chip.remove.icon.size');
        width: dt('chip.remove.icon.size');
        height: dt('chip.remove.icon.size');
        color: dt('chip.remove.icon.color');
        border-radius: 50%;
        transition:
            outline-color dt('chip.transition.duration'),
            box-shadow dt('chip.transition.duration');
        outline-color: transparent;
    }

    .p-chip-remove-icon:focus-visible {
        box-shadow: dt('chip.remove.icon.focus.ring.shadow');
        outline: dt('chip.remove.icon.focus.ring.width') dt('chip.remove.icon.focus.ring.style') dt('chip.remove.icon.focus.ring.color');
        outline-offset: dt('chip.remove.icon.focus.ring.offset');
    }
`;var vi=[`removeicon`];var xi=[`*`];function yi(t,a){if(t&1){let e=Bb();pa(0,`img`,2),Aa(`error`,function(i){Jh(e);return ep(Hb().imageError(i))}),Cd()}if(t&2){let e=Hb();uS(e.cx(`image`)),Wm(`pBind`,e.ptm(`image`))(`src`,e.resolvedImage(),Hg)(`alt`,e.resolvedAlt())}}function ki(t,a){if(t&1&&Ra(0,`span`,4),t&2){let e=Hb(2);uS(e.resolvedIcon()),Wm(`pBind`,e.ptm(`icon`))(`ngClass`,e.cx(`icon`))}}function Ii(t,a){if(t&1&&Nb(0,ki,1,4,`span`,3),t&2)Rb(Hb().resolvedIcon()?0:-1)}function Ti(t,a){if(t&1&&(pa(0,`div`,5),DS(1),Cd()),t&2){let e=Hb();uS(e.cx(`label`)),Wm(`pBind`,e.ptm(`label`)),AI(),yv(e.resolvedLabel())}}function Si(t,a){if(t&1){let e=Bb();pa(0,`span`,9),Aa(`click`,function(i){Jh(e);return ep(Hb(3).close(i))})(`keydown`,function(i){Jh(e);return ep(Hb(3).onKeydown(i))}),Cd()}if(t&2){let e=Hb(3);uS(e.resolvedRemoveIcon()),Wm(`pBind`,e.ptm(`removeIcon`))(`ngClass`,e.cx(`removeIcon`)),Na(`tabindex`,e.disabled()?-1:0)(`aria-label`,e.removeAriaLabel)}}function Mi(t,a){if(t&1){let e=Bb();dp(),pa(0,`svg`,10),Aa(`click`,function(i){Jh(e);return ep(Hb(3).close(i))})(`keydown`,function(i){Jh(e);return ep(Hb(3).onKeydown(i))}),Cd()}if(t&2){let e=Hb(3);uS(e.cx(`removeIcon`)),Wm(`pBind`,e.ptm(`removeIcon`)),Na(`tabindex`,e.disabled()?-1:0)(`aria-label`,e.removeAriaLabel)}}function Oi(t,a){if(t&1&&(Nb(0,Si,1,6,`span`,7),Nb(1,Mi,1,5,`:svg:svg`,8)),t&2){let e=Hb(2);Rb(e.resolvedRemoveIcon()?0:-1),AI(),Rb(e.resolvedRemoveIcon()?-1:1)}}function wi(t,a){}function Vi(t,a){t&1&&Gm(0,wi,0,0,`ng-template`)}function Di(t,a){if(t&1){let e=Bb();pa(0,`span`,11),Aa(`click`,function(i){Jh(e);return ep(Hb(2).close(i))})(`keydown`,function(i){Jh(e);return ep(Hb(2).onKeydown(i))}),Gm(1,Vi,1,0,null,12),Cd()}if(t&2){let e=Hb(2);uS(e.cx(`removeIcon`)),Wm(`pBind`,e.ptm(`removeIcon`)),Na(`tabindex`,e.disabled()?-1:0)(`aria-label`,e.removeAriaLabel),AI(),Wm(`ngTemplateOutlet`,e.removeIconTemplate||e._removeIconTemplate)}}function Fi(t,a){if(t&1&&(Nb(0,Oi,2,2),Nb(1,Di,2,6,`span`,6)),t&2){let e=Hb();Rb(!e.removeIconTemplate&&!e._removeIconTemplate?0:-1),AI(),Rb(e.removeIconTemplate||e._removeIconTemplate?1:-1)}}var Ei={root:({instance:t})=>({display:!t.visible&&`none`})};var Ni={root:({instance:t})=>[`p-chip p-component`,{"p-disabled":t.disabled()}],image:`p-chip-image`,icon:`p-chip-icon`,label:`p-chip-label`,removeIcon:`p-chip-remove-icon`};var Xt=(()=>{class t extends Y{name=`chip`;style=Yt;classes=Ni;inlineStyles=Ei;static ɵfac=(()=>{let e;return function(i){return(e||(e=Ig(t)))(i||t)}})();static ɵprov=M({token:t,factory:t.ɵfac})}return t})();var Zt=new D(`CHIP_INSTANCE`);var Jt=(()=>{class t extends As{componentName=`Chip`;$pcChip=p(Zt,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=p(Ds,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}label=Fa();icon=Fa();image=Fa();alt=Fa();styleClass=Fa();disabled=Fa(!1,{transform:hi$1});removable=Fa(!1,{transform:hi$1});removeIcon=Fa();onRemove=sV();onImageError=sV();visible=!0;get removeAriaLabel(){return this.config.getTranslation(Mn$1.ARIA).removeLabel}chipProps=Fa();resolvedLabel=di$1(()=>this.chipProps()?.label??this.label());resolvedIcon=di$1(()=>this.chipProps()?.icon??this.icon());resolvedImage=di$1(()=>this.chipProps()?.image??this.image());resolvedAlt=di$1(()=>this.chipProps()?.alt??this.alt());resolvedStyleClass=di$1(()=>this.chipProps()?.styleClass??this.styleClass());resolvedRemovable=di$1(()=>this.chipProps()?.removable??this.removable());resolvedRemoveIcon=di$1(()=>this.chipProps()?.removeIcon??this.removeIcon());_componentStyle=p(Xt);removeIconTemplate;templates=lV(Pn$1);_removeIconTemplate;onAfterContentInit(){this.templates().forEach(e=>{e.getType()===`removeicon`?this._removeIconTemplate=e.template:this._removeIconTemplate=e.template})}close(e){this.visible=!1,this.onRemove.emit(e)}onKeydown(e){e.key===`Enter`||e.key===`Backspace`?this.close(e):(e.key===` `||e.key===`Spacebar`)&&(e.preventDefault(),this.close(e))}imageError(e){this.onImageError.emit(e)}get dataP(){return this.cn({removable:this.resolvedRemovable()})}static ɵfac=(()=>{let e;return function(i){return(e||(e=Ig(t)))(i||t)}})();static ɵcmp=yd({type:t,selectors:[[`p-chip`]],contentQueries:function(n,i,o){if(n&1&&(nv(o,i.templates,Pn$1,4),xa(o,vi,4)),n&2){Wb();let l;Md(l=Nd())&&(i.removeIconTemplate=l.first)}},hostVars:6,hostBindings:function(n,i){n&2&&(Na(`aria-label`,i.resolvedLabel())(`data-p`,i.dataP),aS(i.sx(`root`)),uS(i.cn(i.cx(`root`),i.resolvedStyleClass())))},inputs:{label:[1,`label`],icon:[1,`icon`],image:[1,`image`],alt:[1,`alt`],styleClass:[1,`styleClass`],disabled:[1,`disabled`],removable:[1,`removable`],removeIcon:[1,`removeIcon`],chipProps:[1,`chipProps`]},outputs:{onRemove:`onRemove`,onImageError:`onImageError`},features:[RS([Xt,{provide:Zt,useExisting:t},{provide:xi$1,useExisting:t}]),hb([Ds]),$m],ngContentSelectors:xi,decls:5,vars:3,consts:[[3,`pBind`,`class`,`src`,`alt`],[3,`pBind`,`class`],[3,`error`,`pBind`,`src`,`alt`],[3,`pBind`,`class`,`ngClass`],[3,`pBind`,`ngClass`],[3,`pBind`],[`role`,`button`,3,`pBind`,`class`],[`role`,`button`,3,`pBind`,`class`,`ngClass`],[`data-p-icon`,`times-circle`,`role`,`button`,3,`pBind`,`class`],[`role`,`button`,3,`click`,`keydown`,`pBind`,`ngClass`],[`data-p-icon`,`times-circle`,`role`,`button`,3,`click`,`keydown`,`pBind`],[`role`,`button`,3,`click`,`keydown`,`pBind`],[4,`ngTemplateOutlet`]],template:function(n,i){n&1&&(zb(),Gb(0),Nb(1,yi,1,5,`img`,0)(2,Ii,1,1),Nb(3,Ti,2,4,`div`,1),Nb(4,Fi,2,2)),n&2&&(AI(),Rb(i.resolvedImage()?1:2),AI(2),Rb(i.resolvedLabel()?3:-1),AI(),Rb(i.resolvedRemovable()?4:-1))},dependencies:[Kv,xT,kT,L,Dn$1,Ds],encapsulation:2})}return t})();var ei=`
    .p-multiselect {
        display: inline-flex;
        cursor: pointer;
        position: relative;
        user-select: none;
        background: dt('multiselect.background');
        border: 1px solid dt('multiselect.border.color');
        transition:
            background dt('multiselect.transition.duration'),
            color dt('multiselect.transition.duration'),
            border-color dt('multiselect.transition.duration'),
            outline-color dt('multiselect.transition.duration'),
            box-shadow dt('multiselect.transition.duration');
        border-radius: dt('multiselect.border.radius');
        outline-color: transparent;
        box-shadow: dt('multiselect.shadow');
    }

    .p-multiselect:not(.p-disabled):hover {
        border-color: dt('multiselect.hover.border.color');
    }

    .p-multiselect:not(.p-disabled).p-focus {
        border-color: dt('multiselect.focus.border.color');
        box-shadow: dt('multiselect.focus.ring.shadow');
        outline: dt('multiselect.focus.ring.width') dt('multiselect.focus.ring.style') dt('multiselect.focus.ring.color');
        outline-offset: dt('multiselect.focus.ring.offset');
    }

    .p-multiselect.p-variant-filled {
        background: dt('multiselect.filled.background');
    }

    .p-multiselect.p-variant-filled:not(.p-disabled):hover {
        background: dt('multiselect.filled.hover.background');
    }

    .p-multiselect.p-variant-filled.p-focus {
        background: dt('multiselect.filled.focus.background');
    }

    .p-multiselect.p-invalid {
        border-color: dt('multiselect.invalid.border.color');
    }

    .p-multiselect.p-disabled {
        opacity: 1;
        background: dt('multiselect.disabled.background');
    }

    .p-multiselect-dropdown {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        background: transparent;
        color: dt('multiselect.dropdown.color');
        width: dt('multiselect.dropdown.width');
        border-start-end-radius: dt('multiselect.border.radius');
        border-end-end-radius: dt('multiselect.border.radius');
    }

    .p-multiselect-clear-icon {
        align-self: center;
        color: dt('multiselect.clear.icon.color');
        inset-inline-end: dt('multiselect.dropdown.width');
    }

    .p-multiselect-label-container {
        overflow: hidden;
        flex: 1 1 auto;
        cursor: pointer;
    }

    .p-multiselect-label {
        white-space: nowrap;
        cursor: pointer;
        overflow: hidden;
        text-overflow: ellipsis;
        padding: dt('multiselect.padding.y') dt('multiselect.padding.x');
        color: dt('multiselect.color');
    }

    .p-multiselect-display-chip .p-multiselect-label {
        display: flex;
        align-items: center;
        gap: calc(dt('multiselect.padding.y') / 2);
    }

    .p-multiselect-label.p-placeholder {
        color: dt('multiselect.placeholder.color');
    }

    .p-multiselect.p-invalid .p-multiselect-label.p-placeholder {
        color: dt('multiselect.invalid.placeholder.color');
    }

    .p-multiselect.p-disabled .p-multiselect-label {
        color: dt('multiselect.disabled.color');
    }

    .p-multiselect-label-empty {
        overflow: hidden;
        visibility: hidden;
    }

    .p-multiselect-overlay {
        position: absolute;
        top: 0;
        left: 0;
        background: dt('multiselect.overlay.background');
        color: dt('multiselect.overlay.color');
        border: 1px solid dt('multiselect.overlay.border.color');
        border-radius: dt('multiselect.overlay.border.radius');
        box-shadow: dt('multiselect.overlay.shadow');
        min-width: 100%;
    }

    .p-multiselect-header {
        display: flex;
        align-items: center;
        padding: dt('multiselect.list.header.padding');
    }

    .p-multiselect-header .p-checkbox {
        margin-inline-end: dt('multiselect.option.gap');
    }

    .p-multiselect-filter-container {
        flex: 1 1 auto;
    }

    .p-multiselect-filter {
        width: 100%;
    }

    .p-multiselect-list-container {
        overflow: auto;
    }

    .p-multiselect-list {
        margin: 0;
        padding: 0;
        list-style-type: none;
        padding: dt('multiselect.list.padding');
        display: flex;
        flex-direction: column;
        gap: dt('multiselect.list.gap');
    }

    .p-multiselect-option {
        cursor: pointer;
        font-weight: normal;
        white-space: nowrap;
        position: relative;
        overflow: hidden;
        display: flex;
        align-items: center;
        gap: dt('multiselect.option.gap');
        padding: dt('multiselect.option.padding');
        border: 0 none;
        color: dt('multiselect.option.color');
        background: transparent;
        transition:
            background dt('multiselect.transition.duration'),
            color dt('multiselect.transition.duration'),
            border-color dt('multiselect.transition.duration'),
            box-shadow dt('multiselect.transition.duration'),
            outline-color dt('multiselect.transition.duration');
        border-radius: dt('multiselect.option.border.radius');
    }

    .p-multiselect-option:not(.p-multiselect-option-selected):not(.p-disabled).p-focus {
        background: dt('multiselect.option.focus.background');
        color: dt('multiselect.option.focus.color');
    }

    .p-multiselect-option:not(.p-multiselect-option-selected):not(.p-disabled):hover {
        background: dt('multiselect.option.focus.background');
        color: dt('multiselect.option.focus.color');
    }

    .p-multiselect-option.p-multiselect-option-selected {
        background: dt('multiselect.option.selected.background');
        color: dt('multiselect.option.selected.color');
    }

    .p-multiselect-option.p-multiselect-option-selected.p-focus {
        background: dt('multiselect.option.selected.focus.background');
        color: dt('multiselect.option.selected.focus.color');
    }

    .p-multiselect-option-group {
        cursor: auto;
        margin: 0;
        padding: dt('multiselect.option.group.padding');
        background: dt('multiselect.option.group.background');
        color: dt('multiselect.option.group.color');
        font-weight: dt('multiselect.option.group.font.weight');
    }

    .p-multiselect-empty-message {
        padding: dt('multiselect.empty.message.padding');
    }

    .p-multiselect-label .p-chip {
        padding-block-start: calc(dt('multiselect.padding.y') / 2);
        padding-block-end: calc(dt('multiselect.padding.y') / 2);
        border-radius: dt('multiselect.chip.border.radius');
    }

    .p-multiselect-label:has(.p-chip) {
        padding: calc(dt('multiselect.padding.y') / 2) calc(dt('multiselect.padding.x') / 2);
    }

    .p-multiselect-fluid {
        display: flex;
        width: 100%;
    }

    .p-multiselect-sm .p-multiselect-label {
        font-size: dt('multiselect.sm.font.size');
        padding-block: dt('multiselect.sm.padding.y');
        padding-inline: dt('multiselect.sm.padding.x');
    }

    .p-multiselect-sm .p-multiselect-dropdown .p-icon {
        font-size: dt('multiselect.sm.font.size');
        width: dt('multiselect.sm.font.size');
        height: dt('multiselect.sm.font.size');
    }

    .p-multiselect-lg .p-multiselect-label {
        font-size: dt('multiselect.lg.font.size');
        padding-block: dt('multiselect.lg.padding.y');
        padding-inline: dt('multiselect.lg.padding.x');
    }

    .p-multiselect-lg .p-multiselect-dropdown .p-icon {
        font-size: dt('multiselect.lg.font.size');
        width: dt('multiselect.lg.font.size');
        height: dt('multiselect.lg.font.size');
    }

    .p-floatlabel-in .p-multiselect-filter {
        padding-block-start: dt('multiselect.padding.y');
        padding-block-end: dt('multiselect.padding.y');
    }
`;var ii=t=>({$implicit:t});var Bi=(t,a)=>({checked:t,class:a});function Ai(t,a){}function Pi(t,a){t&1&&Gm(0,Ai,0,0,`ng-template`)}function zi(t,a){if(t&1&&Gm(0,Pi,1,0,null,2),t&2){let e=a.class,n=Hb(2);Wm(`ngTemplateOutlet`,n.itemCheckboxIconTemplate())(`ngTemplateOutletContext`,OS(2,Bi,n.selected(),e))}}function Hi(t,a){t&1&&Gm(0,zi,1,5,`ng-template`,null,0,jS)}function $i(t,a){if(t&1&&(pa(0,`span`),DS(1),Cd()),t&2){let e=Hb();AI(),yv(e.label()??`empty`)}}function Ri(t,a){t&1&&Qm(0)}var Ki=[`item`];var Gi=[`header`];var ji=[`emptyfilter`];var qi=[`empty`];var Ui=[`itemcheckboxicon`];var Qi=[`headercheckboxicon`];var Wi=[`group`];var Yi=[`loader`];var Xi=[`filter`];var Zi=[`footer`];var Ji=[`selecteditems`];var en=[`loadingicon`];var tn=[`filtericon`];var nn=[`removetokenicon`];var on=[`chipicon`];var ln=[`clearicon`];var an=[`dropdownicon`];var sn=[`overlay`];var rn=[`filterInput`];var cn=[`focusInput`];var dn=[`items`];var pn=[`scroller`];var un=[`lastHiddenFocusableEl`];var mn=[`firstHiddenFocusableEl`];var hn=[`headerCheckbox`];var _n=[[[`p-header`]],[[`p-footer`]]];var fn=[`p-header`,`p-footer`];var gn=()=>({class:`p-multiselect-chip-icon`});var bn=(t,a)=>({$implicit:t,removeChip:a});var Cn=t=>({dataP:t});var ni=t=>({options:t});var vn=(t,a,e)=>({checked:t,partialSelected:a,class:e});var Ke=t=>({height:t});var oi=(t,a)=>({$implicit:t,options:a});var xn=()=>({});function yn(t,a){if(t&1&&(Td(0),DS(1),_d()),t&2){let e=Hb(2);AI(),yv(e.label()||`empty`)}}function kn(t,a){if(t&1&&DS(0),t&2)Rd(` `,Hb(3).getSelectedItemsLabel(),` `)}function In(t,a){t&1&&Qm(0)}function Tn(t,a){if(t&1){let e=Bb();pa(0,`span`,22),Aa(`click`,function(i){Jh(e);let o=Hb(3).$implicit;return ep(Hb(4).removeOption(o,i))}),Gm(1,In,1,0,`ng-container`,23),Cd()}if(t&2){let e=Hb(7);uS(e.cx(`chipIcon`)),Wm(`pBind`,e.ptm(`chipIcon`)),Na(`aria-hidden`,!0),AI(),Wm(`ngTemplateOutlet`,e.chipIconTemplate||e._chipIconTemplate||e.removeTokenIconTemplate||e._removeTokenIconTemplate)(`ngTemplateOutletContext`,AS(6,gn))}}function Sn(t,a){if(t&1&&Nb(0,Tn,2,7,`span`,21),t&2){let e=Hb(6);Rb(!e.$disabled()&&!e.readonly()?0:-1)}}function Mn(t,a){t&1&&Gm(0,Sn,1,1,`ng-template`,null,4,jS)}function On(t,a){if(t&1){let e=Bb();pa(0,`div`,17,3)(2,`p-chip`,20),Aa(`onRemove`,function(i){let o=Jh(e).$implicit;return ep(Hb(4).removeOption(o,i))}),Nb(3,Mn,2,0),Cd()()}if(t&2){let e=a.$implicit,n=Hb(4);uS(n.cx(`chipItem`)),Wm(`pBind`,n.ptm(`chipItem`)),AI(2),uS(n.cx(`pcChip`)),Wm(`pt`,n.ptm(`pcChip`))(`unstyled`,n.unstyled())(`label`,n.getLabelByValue(e))(`removable`,!n.$disabled()&&!n.readonly())(`removeIcon`,n.chipIcon()),AI(),Rb(n.chipIconTemplate||n._chipIconTemplate||n.removeTokenIconTemplate||n._removeTokenIconTemplate?3:-1)}}function wn(t,a){if(t&1&&Ob(0,On,4,11,`div`,19,xb),t&2)kb(Hb(3).chipSelectedItems())}function Vn(t,a){if(t&1&&(Td(0),DS(1),_d()),t&2){let e=Hb(3);AI(),yv(e.placeholder()||`empty`)}}function Dn(t,a){if(t&1&&(Nb(0,kn,1,1)(1,wn,2,0),Nb(2,Vn,2,1,`ng-container`)),t&2){let e=Hb(2);Rb(e.chipSelectedItems()&&e.chipSelectedItems().length===e.maxSelectedLabels?0:1),AI(2),Rb(!e.modelValue()||e.modelValue().length===0?2:-1)}}function Fn(t,a){if(t&1&&(Nb(0,yn,2,1,`ng-container`),Nb(1,Dn,3,2)),t&2){let e=Hb();Rb(e.display()===`comma`?0:-1),AI(),Rb(e.display()===`chip`?1:-1)}}function En(t,a){t&1&&Qm(0)}function Nn(t,a){if(t&1&&(Td(0),DS(1),_d()),t&2){let e=Hb(2);AI(),yv(e.placeholder()||`empty`)}}function Ln(t,a){if(t&1&&(Gm(0,En,1,0,`ng-container`,23),Nb(1,Nn,2,1,`ng-container`)),t&2){let e=Hb();Wm(`ngTemplateOutlet`,e.selectedItemsTemplate||e._selectedItemsTemplate)(`ngTemplateOutletContext`,OS(3,bn,e.selectedOptions,e.removeOption.bind(e))),AI(),Rb(!e.modelValue()||e.modelValue().length===0?1:-1)}}function Bn(t,a){if(t&1){let e=Bb();dp(),pa(0,`svg`,25),Aa(`click`,function(i){Jh(e);return ep(Hb(2).clear(i))}),Cd()}if(t&2){let e=Hb(2);uS(e.cx(`clearIcon`)),Wm(`pBind`,e.ptm(`clearIcon`)),Na(`aria-hidden`,!0)}}function An(t,a){}function Pn(t,a){t&1&&Gm(0,An,0,0,`ng-template`)}function zn(t,a){if(t&1){let e=Bb();pa(0,`span`,22),Aa(`click`,function(i){Jh(e);return ep(Hb(2).clear(i))}),Gm(1,Pn,1,0,null,26),Cd()}if(t&2){let e=Hb(2);uS(e.cx(`clearIcon`)),Wm(`pBind`,e.ptm(`clearIcon`)),Na(`aria-hidden`,!0),AI(),Wm(`ngTemplateOutlet`,e.clearIconTemplate||e._clearIconTemplate)}}function Hn(t,a){if(t&1&&(Td(0),Nb(1,Bn,1,4,`:svg:svg`,24),Nb(2,zn,2,5,`span`,19),_d()),t&2){let e=Hb();AI(),Rb(!e.clearIconTemplate&&!e._clearIconTemplate?1:-1),AI(),Rb(e.clearIconTemplate||e._clearIconTemplate?2:-1)}}function $n(t,a){t&1&&Qm(0)}function Rn(t,a){if(t&1&&Gm(0,$n,1,0,`ng-container`,26),t&2){let e=Hb(2);Wm(`ngTemplateOutlet`,e.loadingIconTemplate||e._loadingIconTemplate)}}function Kn(t,a){if(t&1&&Ra(0,`span`,17),t&2){let e=Hb(3);uS(e.cn(e.cx(`loadingIcon`),`pi-spin `+e.loadingIcon())),Wm(`pBind`,e.ptm(`loadingIcon`)),Na(`aria-hidden`,!0)}}function Gn(t,a){if(t&1&&Ra(0,`span`,17),t&2){let e=Hb(3);uS(e.cn(e.cx(`loadingIcon`),`pi pi-spinner pi-spin`)),Wm(`pBind`,e.ptm(`loadingIcon`)),Na(`aria-hidden`,!0)}}function jn(t,a){if(t&1&&(Td(0),Nb(1,Kn,1,4,`span`,19),Nb(2,Gn,1,4,`span`,19),_d()),t&2){let e=Hb(2);AI(),Rb(e.loadingIcon()?1:-1),AI(),Rb(e.loadingIcon()?-1:2)}}function qn(t,a){if(t&1&&(Td(0),Nb(1,Rn,1,1,`ng-container`),Nb(2,jn,3,2,`ng-container`),_d()),t&2){let e=Hb();AI(),Rb(e.loadingIconTemplate||e._loadingIconTemplate?1:-1),AI(),Rb(!e.loadingIconTemplate&&!e._loadingIconTemplate?2:-1)}}function Un(t,a){if(t&1&&Ra(0,`span`,29),t&2){let e=Hb(3);uS(e.cx(`dropdownIcon`)),Wm(`pBind`,e.ptm(`dropdownIcon`))(`ngClass`,e.dropdownIcon()),Na(`aria-hidden`,!0)(`data-p`,e.dropdownIconDataP)}}function Qn(t,a){if(t&1&&(dp(),Ra(0,`svg`,30)),t&2){let e=Hb(3);uS(e.cx(`dropdownIcon`)),Wm(`pBind`,e.ptm(`dropdownIcon`)),Na(`aria-hidden`,!0)(`data-p`,e.dropdownIconDataP)}}function Wn(t,a){if(t&1&&(Td(0),Nb(1,Un,1,6,`span`,27),Nb(2,Qn,1,5,`:svg:svg`,28),_d()),t&2){let e=Hb(2);AI(),Rb(e.dropdownIcon()?1:-1),AI(),Rb(e.dropdownIcon()?-1:2)}}function Yn(t,a){}function Xn(t,a){t&1&&Gm(0,Yn,0,0,`ng-template`)}function Zn(t,a){if(t&1&&(pa(0,`span`,17),Gm(1,Xn,1,0,null,23),Cd()),t&2){let e=Hb(2);uS(e.cx(`dropdownIcon`)),Wm(`pBind`,e.ptm(`dropdownIcon`)),Na(`aria-hidden`,!0),AI(),Wm(`ngTemplateOutlet`,e.dropdownIconTemplate||e._dropdownIconTemplate)(`ngTemplateOutletContext`,xS(6,Cn,e.dropdownIconDataP))}}function Jn(t,a){if(t&1&&(Nb(0,Wn,3,2,`ng-container`),Nb(1,Zn,2,8,`span`,19)),t&2){let e=Hb();Rb(!e.dropdownIconTemplate&&!e._dropdownIconTemplate?0:-1),AI(),Rb(e.dropdownIconTemplate||e._dropdownIconTemplate?1:-1)}}function eo(t,a){t&1&&Qm(0)}function to(t,a){t&1&&Qm(0)}function io(t,a){if(t&1&&Gm(0,to,1,0,`ng-container`,23),t&2){let e=Hb(3);Wm(`ngTemplateOutlet`,e.filterTemplate||e._filterTemplate)(`ngTemplateOutletContext`,xS(2,ni,e.filterOptions))}}function no(t,a){if(t&1&&(dp(),Ra(0,`svg`,38)),t&2){let e=Hb().class,n=Hb(5);uS(e),Wm(`pBind`,n.getHeaderCheckboxPTOptions(`pcHeaderCheckbox.icon`))}}function oo(t,a){}function lo(t,a){t&1&&Gm(0,oo,0,0,`ng-template`)}function ao(t,a){if(t&1&&(Nb(0,no,1,3,`:svg:svg`,37),Gm(1,lo,1,0,null,23)),t&2){let e=a.class,n=Hb(5);Rb(!n.headerCheckboxIconTemplate()&&!n._headerCheckboxIconTemplate&&n.allSelected()?0:-1),AI(),Wm(`ngTemplateOutlet`,n.headerCheckboxIconTemplate()||n._headerCheckboxIconTemplate)(`ngTemplateOutletContext`,kS(3,vn,n.allSelected(),n.partialSelected(),e))}}function so(t,a){if(t&1){let e=Bb();pa(0,`p-checkbox`,36,8),Aa(`onChange`,function(i){Jh(e);return ep(Hb(4).onToggleAll(i))}),Gm(2,ao,2,7,`ng-template`,null,9,jS),Cd(),DC()}if(t&2){let e=Hb(4);Wm(`pt`,e.getHeaderCheckboxPTOptions(`pcHeaderCheckbox`))(`ngModel`,e.allSelected())(`ariaLabel`,e.toggleAllAriaLabel)(`binary`,!0)(`variant`,e.$variant())(`disabled`,e.$disabled())(`unstyled`,e.unstyled()),wC()}}function ro(t,a){if(t&1&&(dp(),Ra(0,`svg`,41)),t&2)Wm(`pBind`,Hb(5).ptm(`filterIcon`))}function co(t,a){}function po(t,a){t&1&&Gm(0,co,0,0,`ng-template`)}function uo(t,a){if(t&1&&(pa(0,`span`,42),Gm(1,po,1,0,null,26),Cd()),t&2){let e=Hb(5);Wm(`pBind`,e.ptm(`filterIcon`)),AI(),Wm(`ngTemplateOutlet`,e.filterIconTemplate||e._filterIconTemplate)}}function mo(t,a){if(t&1){let e=Bb();pa(0,`p-iconfield`,39)(1,`input`,40,10),Aa(`input`,function(i){Jh(e);return ep(Hb(4).onFilterInputChange(i))})(`keydown`,function(i){Jh(e);return ep(Hb(4).onFilterKeyDown(i))})(`click`,function(i){Jh(e);return ep(Hb(4).onInputClick(i))})(`blur`,function(i){Jh(e);return ep(Hb(4).onFilterBlur(i))}),Cd(),pa(3,`p-inputicon`,39),Nb(4,ro,1,1,`:svg:svg`,41),Nb(5,uo,2,2,`span`,42),Cd()()}if(t&2){let e=Hb(4);uS(e.cx(`pcFilterContainer`)),Wm(`pt`,e.ptm(`pcFilterContainer`))(`unstyled`,e.unstyled()),AI(),uS(e.cx(`pcFilter`)),Wm(`pt`,e.ptm(`pcFilter`))(`variant`,e.$variant())(`value`,e._filterValue()||``)(`unstyled`,e.unstyled()),Na(`autocomplete`,e.autocomplete())(`aria-owns`,e.id()+`_list`)(`aria-activedescendant`,e.focusedOptionId)(`disabled`,e.$disabled()?``:void 0)(`placeholder`,e.filterPlaceHolder())(`aria-label`,e.ariaFilterLabel()),AI(2),Wm(`pt`,e.ptm(`pcFilterIconContainer`))(`unstyled`,e.unstyled()),AI(),Rb(!e.filterIconTemplate&&!e._filterIconTemplate?4:-1),AI(),Rb(e.filterIconTemplate||e._filterIconTemplate?5:-1)}}function ho(t,a){if(t&1&&(Nb(0,so,4,7,`p-checkbox`,34),Nb(1,mo,6,20,`p-iconfield`,35)),t&2){let e=Hb(3);Rb(e.showToggleAll()&&!e.selectionLimit()?0:-1),AI(),Rb(e.filter()?1:-1)}}function _o(t,a){if(t&1&&(pa(0,`div`,17),Gb(1),Nb(2,io,1,4,`ng-container`)(3,ho,2,2),Cd()),t&2){let e=Hb(2);uS(e.cx(`header`)),Wm(`pBind`,e.ptm(`header`)),AI(2),Rb(e.filterTemplate||e._filterTemplate?2:3)}}function fo(t,a){t&1&&Qm(0)}function go(t,a){if(t&1&&Gm(0,fo,1,0,`ng-container`,23),t&2){let e=a.$implicit,n=a.options;Hb(2);Wm(`ngTemplateOutlet`,Zb(9))(`ngTemplateOutletContext`,OS(2,oi,e,n))}}function bo(t,a){t&1&&Qm(0)}function Co(t,a){if(t&1&&Gm(0,bo,1,0,`ng-container`,23),t&2){let e=a.options,n=Hb(4);Wm(`ngTemplateOutlet`,n.loaderTemplate||n._loaderTemplate)(`ngTemplateOutletContext`,xS(2,ni,e))}}function vo(t,a){t&1&&Gm(0,Co,1,4,`ng-template`,null,12,jS)}function xo(t,a){if(t&1){let e=Bb();pa(0,`p-scroller`,43,11),Aa(`onLazyLoad`,function(i){Jh(e);return ep(Hb(2).onLazyLoad.emit(i))}),Gm(2,go,1,5,`ng-template`,null,2,jS),Nb(4,vo,2,0),Cd()}if(t&2){let e=Hb(2);aS(xS(9,Ke,e.scrollHeight())),Wm(`items`,e.visibleOptions())(`itemSize`,e.virtualScrollItemSize())(`autoSize`,!0)(`tabindex`,-1)(`lazy`,e.lazy())(`options`,e.virtualScrollOptions()),AI(4),Rb(e.loaderTemplate||e._loaderTemplate?4:-1)}}function yo(t,a){t&1&&Qm(0)}function ko(t,a){if(t&1&&Gm(0,yo,1,0,`ng-container`,23),t&2){Hb();let e=Zb(9),n=Hb();Wm(`ngTemplateOutlet`,e)(`ngTemplateOutletContext`,OS(3,oi,n.visibleOptions(),AS(2,xn)))}}function Io(t,a){if(t&1&&(pa(0,`span`),DS(1),Cd()),t&2){let e=Hb(2).$implicit,n=Hb(3);AI(),yv(n.getOptionGroupLabel(e.optionGroup))}}function To(t,a){if(t&1&&Qm(0,48),t&2){let e=Hb(2).$implicit;Wm(`ngTemplateOutlet`,Hb(3).groupTemplate)(`ngTemplateOutletContext`,xS(2,ii,e.optionGroup))}}function So(t,a){if(t&1&&(pa(0,`li`,47),Nb(1,Io,2,1,`span`),Nb(2,To,1,4,`ng-container`,48),Cd()),t&2){let e=Hb(),n=e.$implicit,i=e.$index,o=Hb().options,l=Hb(2);uS(l.cx(`optionGroup`)),Wm(`pBind`,l.ptm(`optionGroup`))(`ngStyle`,xS(7,Ke,o.itemSize+`px`)),Na(`id`,l.id()+`_`+l.getOptionIndex(i,o)),AI(),Rb(!l.groupTemplate&&n.optionGroup?1:-1),AI(),Rb(n.optionGroup&&l.groupTemplate?2:-1)}}function Mo(t,a){if(t&1){let e=Bb();pa(0,`li`,49),Aa(`onClick`,function(i){Jh(e);let o=Hb().$index,l=Hb().options,x=Hb(2);return ep(x.onOptionSelect(i,!1,x.getOptionIndex(o,l)))})(`onMouseEnter`,function(i){Jh(e);let o=Hb().$index,l=Hb().options,x=Hb(2);return ep(x.onOptionMouseEnter(i,x.getOptionIndex(o,l)))}),Cd()}if(t&2){let e=Hb(),n=e.$implicit,i=e.$index,o=Hb().options,l=Hb(2);Wm(`pBind`,l.getPTOptions(n,l.getItemOptions,i,`option`))(`id`,l.id()+`_`+l.getOptionIndex(i,o))(`option`,n)(`selected`,l.isSelected(n))(`label`,l.getOptionLabel(n))(`disabled`,l.isOptionDisabled(n))(`template`,l.itemTemplate()||l._itemTemplate)(`itemCheckboxIconTemplate`,l.itemCheckboxIconTemplate()||l._itemCheckboxIconTemplate)(`itemSize`,o.itemSize)(`focused`,l.focusedOptionIndex()===l.getOptionIndex(i,o))(`ariaPosInset`,l.getAriaPosInset(l.getOptionIndex(i,o)))(`ariaSetSize`,l.ariaSetSize)(`variant`,l.$variant())(`highlightOnSelect`,l.highlightOnSelect())(`pt`,l.pt)(`unstyled`,l.unstyled())}}function Oo(t,a){if(t&1&&(Nb(0,So,3,9,`li`,45),Nb(1,Mo,1,16,`li`,46)),t&2){let e=a.$implicit,n=Hb(3);Rb(n.isOptionGroup(e)?0:-1),AI(),Rb(n.isOptionGroup(e)?-1:1)}}function wo(t,a){if(t&1&&DS(0),t&2)Rd(` `,Hb(4).emptyFilterMessageLabel,` `)}function Vo(t,a){t&1&&Qm(0)}function Do(t,a){if(t&1&&Gm(0,Vo,1,0,`ng-container`,26),t&2){let e=Hb(4);Wm(`ngTemplateOutlet`,e.emptyFilterTemplate()||e._emptyFilterTemplate||e.emptyTemplate()||e._emptyFilterTemplate)}}function Fo(t,a){if(t&1&&(pa(0,`li`,47),Nb(1,wo,1,1)(2,Do,1,1,`ng-container`),Cd()),t&2){let e=Hb().options,n=Hb(2);uS(n.cx(`emptyMessage`)),Wm(`pBind`,n.ptm(`emptyMessage`))(`ngStyle`,xS(5,Ke,e.itemSize+`px`)),AI(),Rb(!n.emptyFilterTemplate()&&!n._emptyFilterTemplate&&!n.emptyTemplate()&&!n._emptyTemplate?1:2)}}function Eo(t,a){if(t&1&&DS(0),t&2)Rd(` `,Hb(4).emptyMessageLabel,` `)}function No(t,a){t&1&&Qm(0)}function Lo(t,a){if(t&1&&Gm(0,No,1,0,`ng-container`,26),t&2){let e=Hb(4);Wm(`ngTemplateOutlet`,e.emptyTemplate()||e._emptyTemplate)}}function Bo(t,a){if(t&1&&(pa(0,`li`,47),Nb(1,Eo,1,1)(2,Lo,1,1,`ng-container`),Cd()),t&2){let e=Hb().options,n=Hb(2);uS(n.cx(`emptyMessage`)),Wm(`pBind`,n.ptm(`emptyMessage`))(`ngStyle`,xS(5,Ke,e.itemSize+`px`)),AI(),Rb(!n.emptyTemplate()&&!n._emptyTemplate?1:2)}}function Ao(t,a){if(t&1&&(pa(0,`ul`,44,13),Ob(2,Oo,2,2,null,null,xb),Nb(4,Fo,3,7,`li`,45),Nb(5,Bo,3,7,`li`,45),Cd()),t&2){let e=a.$implicit,n=a.options,i=Hb(2);aS(n.contentStyle),uS(i.cn(i.cx(`list`),n.contentStyleClass)),Wm(`pBind`,i.ptm(`list`)),Na(`aria-label`,i.listLabel),AI(2),kb(e),AI(2),Rb(i.hasFilter()&&i.isEmpty()?4:-1),AI(),Rb(!i.hasFilter()&&i.isEmpty()?5:-1)}}function Po(t,a){t&1&&Qm(0)}function zo(t,a){if(t&1&&(pa(0,`div`),Gb(1,1),Gm(2,Po,1,0,`ng-container`,26),Cd()),t&2){let e=Hb(2);AI(2),Wm(`ngTemplateOutlet`,e.footerTemplate||e._footerTemplate)}}function Ho(t,a){if(t&1){let e=Bb();pa(0,`div`,31)(1,`span`,32,5),Aa(`focus`,function(i){Jh(e);return ep(Hb().onFirstHiddenFocus(i))}),Cd(),Gm(3,eo,1,0,`ng-container`,26),Nb(4,_o,4,4,`div`,19),pa(5,`div`,17),Nb(6,xo,5,11,`p-scroller`,33),Nb(7,ko,1,6,`ng-container`),Gm(8,Ao,6,8,`ng-template`,null,6,jS),Cd(),Nb(10,zo,3,1,`div`),pa(11,`span`,32,7),Aa(`focus`,function(i){Jh(e);return ep(Hb().onLastHiddenFocus(i))}),Cd()()}if(t&2){let e=Hb();uS(e.cn(e.cx(`overlay`),e.panelStyleClass())),Wm(`pBind`,e.ptm(`overlay`))(`ngStyle`,e.panelStyle()),Na(`data-p`,e.overlayDataP)(`id`,e.id()+`_list`),AI(),Wm(`pBind`,e.ptm(`firstHiddenFocusableEl`)),Na(`tabindex`,0)(`data-p-hidden-accessible`,!0)(`data-p-hidden-focusable`,!0),AI(2),Wm(`ngTemplateOutlet`,e.headerTemplate()||e._headerTemplate),AI(),Rb(e.showHeader()?4:-1),AI(),uS(e.cx(`listContainer`)),cv(`max-height`,e.virtualScroll()?`auto`:e.scrollHeight()||`auto`),Wm(`pBind`,e.ptm(`listContainer`)),AI(),Rb(e.virtualScroll()?6:-1),AI(),Rb(e.virtualScroll()?-1:7),AI(3),Rb(e.footerFacet()||e.footerTemplate||e._footerTemplate?10:-1),AI(),Wm(`pBind`,e.ptm(`lastHiddenFocusableEl`)),Na(`tabindex`,0)(`data-p-hidden-accessible`,!0)(`data-p-hidden-focusable`,!0)}}var $o=`
    ${ei}

    /* For ngx-prime */
   .p-multiselect.ng-invalid.ng-dirty {
        border-color: dt('multiselect.invalid.border.color');
    }
    p-multiSelect.ng-invalid.ng-dirty .p-multiselect-label.p-placeholder,
    p-multi-select.ng-invalid.ng-dirty .p-multiselect-label.p-placeholder,
    p-multiselect.ng-invalid.ng-dirty .p-multiselect-label.p-placeholder {
        color: dt('multiselect.invalid.placeholder.color');
    }
`;var Ro={root:({instance:t})=>({position:t.$appendTo()===`self`?`relative`:void 0})};var Ko={root:({instance:t})=>[`p-multiselect p-component p-inputwrapper`,{"p-multiselect p-component p-inputwrapper":!0,"p-multiselect-display-chip":t.display===`chip`,"p-disabled":t.$disabled(),"p-invalid":t.invalid(),"p-variant-filled":t.$variant()===`filled`,"p-focus":t.focused,"p-inputwrapper-filled":t.$filled(),"p-inputwrapper-focus":t.focused||t.overlayVisible,"p-multiselect-open":t.overlayVisible,"p-multiselect-fluid":t.hasFluid,"p-multiselect-sm p-inputfield-sm":t.size()===`small`,"p-multiselect-lg p-inputfield-lg":t.size()===`large`}],labelContainer:`p-multiselect-label-container`,label:({instance:t})=>({"p-multiselect-label":!0,"p-placeholder":t.label()===t.placeholder(),"p-multiselect-label-empty":!t.placeholder()&&!t.defaultLabel&&(!t.modelValue()||t.modelValue().length===0)}),chipItem:`p-multiselect-chip-item`,pcChip:`p-multiselect-chip`,chipIcon:`p-multiselect-chip-icon`,dropdown:`p-multiselect-dropdown`,loadingIcon:`p-multiselect-loading-icon`,dropdownIcon:`p-multiselect-dropdown-icon`,overlay:`p-multiselect-overlay p-component-overlay p-component`,header:`p-multiselect-header`,pcFilterContainer:`p-multiselect-filter-container`,pcFilter:`p-multiselect-filter`,listContainer:`p-multiselect-list-container`,list:`p-multiselect-list`,optionGroup:`p-multiselect-option-group`,option:({instance:t})=>({"p-multiselect-option":!0,"p-multiselect-option-selected":t.selected&&t.highlightOnSelect,"p-disabled":t.disabled,"p-focus":t.focused}),emptyMessage:`p-multiselect-empty-message`,clearIcon:`p-multiselect-clear-icon`};var Re=(()=>{class t extends Y{name=`multiselect`;style=$o;classes=Ko;inlineStyles=Ro;static ɵfac=(()=>{let e;return function(i){return(e||(e=Ig(t)))(i||t)}})();static ɵprov=M({token:t,factory:t.ɵfac})}return t})();var ti=new D(`MULTISELECT_INSTANCE`);var Go=new D(`MULTISELECT_ITEM_INSTANCE`);var jo={provide:K,useExisting:Is(()=>Ge),multi:!0};var qo=(()=>{class t extends As{$pcMultiSelectItem=p(Go,{optional:!0,skipSelf:!0})??void 0;hostName=`MultiSelect`;getPTOptions(e){return this.ptm(e,{context:{selected:this.selected(),focused:this.focused(),disabled:this.disabled()}})}option=Fa();selected=Fa(void 0,{transform:hi$1});label=Fa();disabled=Fa(void 0,{transform:hi$1});itemSize=Fa(void 0,{transform:TT});focused=Fa(void 0,{transform:hi$1});ariaPosInset=Fa();ariaSetSize=Fa();variant=Fa(void 0);template=Fa();checkIconTemplate=Fa();itemCheckboxIconTemplate=Fa();highlightOnSelect=Fa(void 0,{transform:hi$1});onClick=sV();onMouseEnter=sV();_componentStyle=p(Re);onOptionClick(e){this.onClick.emit({originalEvent:e,option:this.option(),selected:this.selected()}),e.stopPropagation(),e.preventDefault()}onOptionMouseEnter(e){this.onMouseEnter.emit({originalEvent:e,option:this.option(),selected:this.selected()})}static ɵfac=(()=>{let e;return function(i){return(e||(e=Ig(t)))(i||t)}})();static ɵcmp=yd({type:t,selectors:[[`li`,`pMultiSelectItem`,``]],hostAttrs:[`role`,`option`],hostVars:13,hostBindings:function(n,i){n&1&&Aa(`click`,function(l){return i.onOptionClick(l)})(`mouseenter`,function(l){return i.onOptionMouseEnter(l)}),n&2&&(Na(`aria-label`,i.label())(`aria-setsize`,i.ariaSetSize())(`aria-posinset`,i.ariaPosInset())(`aria-selected`,i.selected())(`data-p-selected`,i.selected())(`data-p-focused`,i.focused())(`data-p-highlight`,i.selected())(`data-p-disabled`,i.disabled())(`aria-checked`,i.selected()),uS(i.cx(`option`)),cv(`height`,i.itemSize(),`px`))},inputs:{option:[1,`option`],selected:[1,`selected`],label:[1,`label`],disabled:[1,`disabled`],itemSize:[1,`itemSize`],focused:[1,`focused`],ariaPosInset:[1,`ariaPosInset`],ariaSetSize:[1,`ariaSetSize`],variant:[1,`variant`],template:[1,`template`],checkIconTemplate:[1,`checkIconTemplate`],itemCheckboxIconTemplate:[1,`itemCheckboxIconTemplate`],highlightOnSelect:[1,`highlightOnSelect`]},outputs:{onClick:`onClick`,onMouseEnter:`onMouseEnter`},features:[RS([Re]),$m],decls:4,vars:13,consts:[[`icon`,``],[3,`ngModel`,`binary`,`tabindex`,`variant`,`ariaLabel`,`pt`,`unstyled`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`]],template:function(n,i){n&1&&(pa(0,`p-checkbox`,1),Nb(1,Hi,2,0),Cd(),DC(),Nb(2,$i,2,1,`span`),Gm(3,Ri,1,0,`ng-container`,2)),n&2&&(Wm(`ngModel`,i.selected())(`binary`,!0)(`tabindex`,-1)(`variant`,i.variant())(`ariaLabel`,i.label())(`pt`,i.getPTOptions(`pcOptionCheckbox`))(`unstyled`,i.unstyled()),wC(),AI(),Rb(i.itemCheckboxIconTemplate()?1:-1),AI(),Rb(i.template()?-1:2),AI(),Wm(`ngTemplateOutlet`,i.template())(`ngTemplateOutletContext`,xS(11,ii,i.option())))},dependencies:[Kv,kT,$e,Fn$1,Dn$2,Yt$1,Dn$1],encapsulation:2})}return t})();var Ge=(()=>{class t extends xe{zone=p(he);filterService=p(Ln$1);overlayService=p(Rn$1);componentName=`MultiSelect`;id=Fa();_generatedId;get resolvedId(){return this.id()||(this._generatedId??=At(`pn_id_`))}ariaLabel=Fa();styleClass=Fa();panelStyle=Fa();panelStyleClass=Fa();inputId=Fa();readonly=Fa(void 0,{transform:hi$1});group=Fa(void 0,{transform:hi$1});filter=Fa(!0,{transform:hi$1});filterPlaceHolder=Fa();filterLocale=Fa();overlayVisible=aV(!1);tabindex=Fa(0,{transform:TT});dataKey=Fa();ariaLabelledBy=Fa();displaySelectedLabel=Fa(!0);maxSelectedLabels=Fa(3);selectionLimit=Fa(void 0,{transform:TT});selectedItemsLabel=Fa();showToggleAll=Fa(!0,{transform:hi$1});emptyFilterMessage=Fa(``);emptyMessage=Fa(``);resetFilterOnHide=Fa(!1,{transform:hi$1});dropdownIcon=Fa();chipIcon=Fa();optionLabel=Fa();optionValue=Fa();optionDisabled=Fa();optionGroupLabel=Fa(`label`);optionGroupChildren=Fa(`items`);showHeader=Fa(!0,{transform:hi$1});filterBy=Fa();scrollHeight=Fa(`200px`);lazy=Fa(!1,{transform:hi$1});virtualScroll=Fa(void 0,{transform:hi$1});loading=Fa(!1,{transform:hi$1});virtualScrollItemSize=Fa(void 0,{transform:TT});loadingIcon=Fa();virtualScrollOptions=Fa();overlayOptions=Fa();ariaFilterLabel=Fa();filterMatchMode=Fa(`contains`);tooltip=Fa(``);tooltipPosition=Fa(`right`);tooltipPositionStyle=Fa(`absolute`);tooltipStyleClass=Fa();autofocusFilter=Fa(!1,{transform:hi$1});display=Fa(`comma`);autocomplete=Fa(`off`);showClear=Fa(!1,{transform:hi$1});autofocus=Fa(void 0,{transform:hi$1});placeholder=Fa();options=Fa();filterValue=Fa();selectAll=Fa();focusOnHover=Fa(!0,{transform:hi$1});filterFields=Fa();selectOnFocus=Fa(!1,{transform:hi$1});autoOptionFocus=Fa(!1,{transform:hi$1});highlightOnSelect=Fa(!0,{transform:hi$1});size=Fa();variant=Fa();fluid=Fa(void 0,{transform:hi$1});appendTo=Fa(void 0);motionOptions=Fa(void 0);onChange=sV();onFilter=sV();onFocus=sV();onBlur=sV();onClick=sV();onClear=sV();onPanelShow=sV();onPanelHide=sV();onLazyLoad=sV();onRemove=sV();onSelectAllChange=sV();overlayViewChild=cV(`overlay`);filterInputChild=cV(`filterInput`);focusInputViewChild=cV(`focusInput`);itemsViewChild=cV(`items`);scroller=cV(`scroller`);lastHiddenFocusableElementOnOverlay=cV(`lastHiddenFocusableEl`);firstHiddenFocusableElementOnOverlay=cV(`firstHiddenFocusableEl`);headerCheckboxViewChild=cV(`headerCheckbox`);footerFacet=uV(In$1);headerFacet=uV(wn$1);_componentStyle=p(Re);bindDirectiveInstance=p(Ds,{self:!0});searchValue;searchTimeout;_selectAll=null;_placeholder=ne(void 0);_disableTooltip=!1;value;_filteredOptions;focus;filtered;itemTemplate=uV(`item`,{descendants:!1});groupTemplate;loaderTemplate;headerTemplate=uV(`header`,{descendants:!1});filterTemplate;footerTemplate;emptyFilterTemplate=uV(`emptyfilter`,{descendants:!1});emptyTemplate=uV(`empty`,{descendants:!1});selectedItemsTemplate;loadingIconTemplate;filterIconTemplate;removeTokenIconTemplate;chipIconTemplate;clearIconTemplate;dropdownIconTemplate;itemCheckboxIconTemplate=uV(`itemcheckboxicon`,{descendants:!1});headerCheckboxIconTemplate=uV(`headercheckboxicon`,{descendants:!1});templates=lV(Pn$1);_itemTemplate;_groupTemplate;_loaderTemplate;_headerTemplate;_filterTemplate;_footerTemplate;_emptyFilterTemplate;_emptyTemplate;_selectedItemsTemplate;_loadingIconTemplate;_filterIconTemplate;_removeTokenIconTemplate;_chipIconTemplate;_clearIconTemplate;_dropdownIconTemplate;_itemCheckboxIconTemplate;_headerCheckboxIconTemplate;$variant=di$1(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());$appendTo=di$1(()=>this.appendTo()||this.config.overlayAppendTo());$pcMultiSelect=p(ti,{optional:!0,skipSelf:!0})??void 0;pcFluid=p(H,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}onAfterContentInit(){this.templates().forEach(e=>{switch(e.getType()){case`item`:this._itemTemplate=e.template;break;case`group`:this._groupTemplate=e.template;break;case`selectedItems`:case`selecteditems`:this._selectedItemsTemplate=e.template;break;case`header`:this._headerTemplate=e.template;break;case`filter`:this._filterTemplate=e.template;break;case`emptyfilter`:this._emptyFilterTemplate=e.template;break;case`empty`:this._emptyTemplate=e.template;break;case`footer`:this._footerTemplate=e.template;break;case`loader`:this._loaderTemplate=e.template;break;case`headercheckboxicon`:this._headerCheckboxIconTemplate=e.template;break;case`loadingicon`:this._loadingIconTemplate=e.template;break;case`filtericon`:this._filterIconTemplate=e.template;break;case`removetokenicon`:this._removeTokenIconTemplate=e.template;break;case`clearicon`:this._clearIconTemplate=e.template;break;case`dropdownicon`:this._dropdownIconTemplate=e.template;break;case`itemcheckboxicon`:this._itemCheckboxIconTemplate=e.template;break;case`chipicon`:this._chipIconTemplate=e.template;break;default:this._itemTemplate=e.template;break}})}headerCheckboxFocus;filterOptions;preventModelTouched;focused=!1;itemsWrapper;_displaySelectedLabel=!0;_maxSelectedLabels=3;modelValue=ne(null);_filterValue=ne(null);_options=ne([]);startRangeIndex=ne(-1);focusedOptionIndex=ne(-1);selectedOptions;clickInProgress=!1;get emptyMessageLabel(){return this.emptyMessage()||this.config.getTranslation(Mn$1.EMPTY_MESSAGE)}get emptyFilterMessageLabel(){return this.emptyFilterMessage()||this.config.getTranslation(Mn$1.EMPTY_FILTER_MESSAGE)}get isVisibleClearIcon(){return this.modelValue()!=null&&this.modelValue()!==``&&y(this.modelValue())&&this.showClear()&&!this.$disabled()&&!this.readonly()&&this.$filled()}get toggleAllAriaLabel(){return this.config.translation.aria?this.config.translation.aria[this.allSelected()?`selectAll`:`unselectAll`]:void 0}get listLabel(){return this.config.getTranslation(Mn$1.ARIA).listLabel}getAllVisibleAndNonVisibleOptions(){return this.group()?this.flatOptions(this._options()):this._options()||[]}visibleOptions=di$1(()=>{let e=this.getAllVisibleAndNonVisibleOptions(),n=Be(e)&&Ce.isObject(e[0]);if(this._filterValue()){let i;if(n?i=this.filterService.filter(e,this.searchFields(),this._filterValue(),this.filterMatchMode(),this.filterLocale()):i=e.filter(o=>o.toString().toLocaleLowerCase().includes(this._filterValue().toLocaleLowerCase())),this.group()){let o=this._options()||[],l=[];return o.forEach(x=>{let Z=this.getOptionGroupChildren(x).filter(ai=>i.includes(ai)),Xe=this.optionGroupChildren();Z.length>0&&l.push(s(r({},x),{[typeof Xe==`string`?Xe:`items`]:[...Z]}))}),this.flatOptions(l)}return i}return e});label=di$1(()=>{let e,n=this.modelValue();if(n&&n?.length&&this.displaySelectedLabel()){if(y(this.maxSelectedLabels())&&n?.length>(this.maxSelectedLabels()||0))return this.getSelectedItemsLabel();e=``;for(let i=0;i<n.length;i++)i!==0&&(e+=`, `),e+=this.getLabelByValue(n[i])}else e=this.placeholder()||``;return e});chipSelectedItems=di$1(()=>y(this.maxSelectedLabels())&&this.modelValue()&&this.modelValue()?.length>(this.maxSelectedLabels()||0)?this.modelValue()?.slice(0,this.maxSelectedLabels()):this.modelValue());constructor(){super(),Qu(()=>{let e=this.modelValue(),n=this.getAllVisibleAndNonVisibleOptions();n&&y(n)&&(this.optionValue()&&this.optionLabel()&&e?this.selectedOptions=n.filter(i=>e.includes(i[this.optionLabel()])||e.includes(i[this.optionValue()])):this.selectedOptions=e,this.cd.markForCheck())}),Qu(()=>{this._placeholder.set(this.placeholder())}),Qu(()=>{let e=this.options();Ti$1(this._options(),e)||this._options.set(e||[])}),Qu(()=>{this._filterValue.set(this.filterValue())})}onInit(){this.autoUpdateModel(),this.filterBy()&&(this.filterOptions={filter:e=>this.onFilterInputChange(e),reset:()=>this.resetFilter()})}maxSelectionLimitReached(){let e=this.selectionLimit();return e&&this.modelValue()&&this.modelValue().length===e}onAfterViewInit(){this.overlayVisible()&&this.show()}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`])),this.filtered&&(this.zone.runOutsideAngular(()=>{setTimeout(()=>{this.overlayViewChild()?.alignOverlay()},1)}),this.filtered=!1)}flatOptions(e){return(e||[]).reduce((n,i,o)=>{n.push({optionGroup:i,group:!0,index:o});let l=this.getOptionGroupChildren(i);return l&&l.forEach(x=>n.push(x)),n},[])}autoUpdateModel(){if(this.selectOnFocus()&&this.autoOptionFocus()&&!this.hasSelectedOption()){this.focusedOptionIndex.set(this.findFirstFocusedOptionIndex());let e=this.getOptionValue(this.visibleOptions()[this.focusedOptionIndex()]);this.onOptionSelect({originalEvent:null,option:[e]})}}updateModel(e,n){this.value=e,this.onModelChange(e),this.writeValue(e)}onInputClick(e){e.stopPropagation(),e.preventDefault(),this.focusedOptionIndex.set(-1)}onOptionSelect(e,n=!1,i=-1){let{originalEvent:o,option:l}=e;if(this.$disabled()||this.isOptionDisabled(l))return;let x=this.isSelected(l),v=[];x?v=this.modelValue().filter(Z=>!ie(Z,this.getOptionValue(l),this.equalityKey()||``)):v=[...this.modelValue()||[],this.getOptionValue(l)],this.updateModel(v,o),i!==-1&&this.focusedOptionIndex.set(i),n&&qi$1(this.focusInputViewChild()?.nativeElement),this.onChange.emit({originalEvent:e,value:v,itemValue:l})}findSelectedOptionIndex(){return this.hasSelectedOption()?this.visibleOptions().findIndex(e=>this.isValidSelectedOption(e)):-1}onOptionSelectRange(e,n=-1,i=-1){if(n===-1&&(n=this.findNearestSelectedOptionIndex(i,!0)),i===-1&&(i=this.findNearestSelectedOptionIndex(n)),n!==-1&&i!==-1){let o=Math.min(n,i),l=Math.max(n,i),x=this.visibleOptions().slice(o,l+1).filter(v=>this.isValidOption(v)).map(v=>this.getOptionValue(v));this.updateModel(x,e)}}searchFields(){return(this.filterBy()||this.optionLabel()||`label`).split(`,`)}findNearestSelectedOptionIndex(e,n=!1){let i=-1;return this.hasSelectedOption()&&(n?(i=this.findPrevSelectedOptionIndex(e),i=i===-1?this.findNextSelectedOptionIndex(e):i):(i=this.findNextSelectedOptionIndex(e),i=i===-1?this.findPrevSelectedOptionIndex(e):i)),i>-1?i:e}findPrevSelectedOptionIndex(e){let n=this.hasSelectedOption()&&e>0?hn$1(this.visibleOptions().slice(0,e),i=>this.isValidSelectedOption(i)):-1;return n>-1?n:-1}findFirstFocusedOptionIndex(){let e=this.findFirstSelectedOptionIndex();return e<0?this.findFirstOptionIndex():e}findFirstOptionIndex(){return this.visibleOptions().findIndex(e=>this.isValidOption(e))}findFirstSelectedOptionIndex(){return this.hasSelectedOption()?this.visibleOptions().findIndex(e=>this.isValidSelectedOption(e)):-1}findNextSelectedOptionIndex(e){let n=this.hasSelectedOption()&&e<this.visibleOptions().length-1?this.visibleOptions().slice(e+1).findIndex(i=>this.isValidSelectedOption(i)):-1;return n>-1?n+e+1:-1}equalityKey(){return this.optionValue()?null:this.dataKey()}hasSelectedOption(){return y(this.modelValue())}isValidSelectedOption(e){return this.isValidOption(e)&&this.isSelected(e)}isOptionGroup(e){return e&&(this.group()||this.optionGroupLabel())&&e.optionGroup&&e.group}isValidOption(e){return e&&!(this.isOptionDisabled(e)||this.isOptionGroup(e))}isOptionDisabled(e){if(this.maxSelectionLimitReached()&&!this.isSelected(e))return!0;let n=this.optionDisabled();return n?Re$1(e,n):e&&e.disabled!==void 0?e.disabled:!1}isSelected(e){let n=this.getOptionValue(e);return(this.modelValue()||[]).some(i=>ie(i,n,this.equalityKey()||``))}isOptionMatched(e){return this.isValidOption(e)&&this.getOptionLabel(e).toString().toLocaleLowerCase(this.filterLocale()).startsWith(this.searchValue?.toLocaleLowerCase(this.filterLocale()))}isEmpty(){return!this._options()||this.visibleOptions()&&this.visibleOptions().length===0}getOptionIndex(e,n){return this.virtualScrollerDisabled?e:n&&n.getItemOptions(e).index}getAriaPosInset(e){return(this.optionGroupLabel()?e-this.visibleOptions().slice(0,e).filter(n=>this.isOptionGroup(n)).length:e)+1}get ariaSetSize(){return this.visibleOptions().filter(e=>!this.isOptionGroup(e)).length}getLabelByValue(e){let i=(this.group()?this.flatOptions(this._options()):this._options()||[]).find(o=>!this.isOptionGroup(o)&&ie(this.getOptionValue(o),e,this.equalityKey()||``));return i?this.getOptionLabel(i):null}getSelectedItemsLabel(){let e=/{(.*?)}/,i=this.selectedItemsLabel()||this.config.getTranslation(Mn$1.SELECTION_MESSAGE);return e.test(i)?i.replace(i.match(e)[0],this.modelValue().length+``):i}getOptionLabel(e){let n=this.optionLabel();return n?Re$1(e,n):e&&e.label!=null?e.label:e}getOptionValue(e){let n=this.optionValue();return n?Re$1(e,n):!this.optionLabel()&&e&&e.value!==void 0?e.value:e}getOptionGroupLabel(e){let n=this.optionGroupLabel();return n?Re$1(e,n):e&&e.label!=null?e.label:e}getOptionGroupChildren(e){let n=this.optionGroupChildren();return e?n?Re$1(e,n):e.items:[]}onKeyDown(e){if(this.$disabled()){e.preventDefault();return}let n=e.metaKey||e.ctrlKey;switch(e.code){case`ArrowDown`:this.onArrowDownKey(e);break;case`ArrowUp`:this.onArrowUpKey(e);break;case`Home`:this.onHomeKey(e);break;case`End`:this.onEndKey(e);break;case`PageDown`:this.onPageDownKey(e);break;case`PageUp`:this.onPageUpKey(e);break;case`Enter`:case`Space`:this.onEnterKey(e);break;case`Escape`:this.onEscapeKey(e);break;case`Tab`:this.onTabKey(e);break;case`ShiftLeft`:case`ShiftRight`:this.onShiftKey();break;default:if(e.code===`KeyA`&&n){let i=this.visibleOptions().filter(o=>this.isValidOption(o)).map(o=>this.getOptionValue(o));this.updateModel(i,e),e.preventDefault();break}!n&&fn$1(e.key)&&(!this.overlayVisible()&&this.show(),this.searchOptions(e,e.key),e.preventDefault());break}}onFilterKeyDown(e){switch(e.code){case`ArrowDown`:this.onArrowDownKey(e);break;case`ArrowUp`:this.onArrowUpKey(e,!0);break;case`ArrowLeft`:case`ArrowRight`:this.onArrowLeftKey(e,!0);break;case`Home`:this.onHomeKey(e,!0);break;case`End`:this.onEndKey(e,!0);break;case`Enter`:case`NumpadEnter`:this.onEnterKey(e);break;case`Escape`:this.onEscapeKey(e);break;case`Tab`:this.onTabKey(e,!0);break;default:break}}onArrowLeftKey(e,n=!1){n&&this.focusedOptionIndex.set(-1)}onArrowDownKey(e){let n=this.focusedOptionIndex()!==-1?this.findNextOptionIndex(this.focusedOptionIndex()):this.findFirstFocusedOptionIndex();e.shiftKey&&this.onOptionSelectRange(e,this.startRangeIndex(),n),this.changeFocusedOptionIndex(e,n),!this.overlayVisible()&&this.show(),e.preventDefault(),e.stopPropagation()}onArrowUpKey(e,n=!1){if(e.altKey&&!n)this.focusedOptionIndex()!==-1&&this.onOptionSelect(e,this.visibleOptions()[this.focusedOptionIndex()]),this.overlayVisible()&&this.hide(),e.preventDefault();else{let i=this.focusedOptionIndex()!==-1?this.findPrevOptionIndex(this.focusedOptionIndex()):this.findLastFocusedOptionIndex();e.shiftKey&&this.onOptionSelectRange(e,i,this.startRangeIndex()),this.changeFocusedOptionIndex(e,i),!this.overlayVisible()&&this.show(),e.preventDefault()}e.stopPropagation()}onHomeKey(e,n=!1){let{currentTarget:i}=e;if(n){let o=i.value.length;i.setSelectionRange(0,e.shiftKey?o:0),this.focusedOptionIndex.set(-1)}else{let o=e.metaKey||e.ctrlKey,l=this.findFirstOptionIndex();e.shiftKey&&o&&this.onOptionSelectRange(e,l,this.startRangeIndex()),this.changeFocusedOptionIndex(e,l),!this.overlayVisible()&&this.show()}e.preventDefault()}onEndKey(e,n=!1){let{currentTarget:i}=e;if(n){let o=i.value.length;i.setSelectionRange(e.shiftKey?0:o,o),this.focusedOptionIndex.set(-1)}else{let o=e.metaKey||e.ctrlKey,l=this.findLastFocusedOptionIndex();e.shiftKey&&o&&this.onOptionSelectRange(e,this.startRangeIndex(),l),this.changeFocusedOptionIndex(e,l),!this.overlayVisible()&&this.show()}e.preventDefault()}onPageDownKey(e){this.scrollInView(this.visibleOptions().length-1),e.preventDefault()}onPageUpKey(e){this.scrollInView(0),e.preventDefault()}onEnterKey(e){this.overlayVisible()?this.focusedOptionIndex()!==-1&&(e.shiftKey?this.onOptionSelectRange(e,this.focusedOptionIndex()):this.onOptionSelect({originalEvent:e,option:this.visibleOptions()[this.focusedOptionIndex()]})):this.onArrowDownKey(e),e.preventDefault()}onEscapeKey(e){this.overlayVisible()&&(this.hide(!0),e.stopPropagation(),e.preventDefault())}onTabKey(e,n=!1){if(!n){let i=this.overlayVisible();if(i&&this.hasFocusableElements())qi$1(e.shiftKey?this.lastHiddenFocusableElementOnOverlay()?.nativeElement:this.firstHiddenFocusableElementOnOverlay()?.nativeElement),e.preventDefault();else{if(this.focusedOptionIndex()!==-1){let o=this.visibleOptions()[this.focusedOptionIndex()];!this.isSelected(o)&&this.onOptionSelect({originalEvent:e,option:o})}i&&this.hide(this.filter())}}}onShiftKey(){this.startRangeIndex.set(this.focusedOptionIndex())}onContainerClick(e){let n=this.focusInputViewChild();if(this.$disabled()||this.loading()||this.readonly()||e.target?.isSameNode?.(n?.nativeElement))return;let i=this.overlayViewChild();if(!i||!i.el.nativeElement.contains(e.target)){if(this.clickInProgress)return;this.clickInProgress=!0,setTimeout(()=>{this.clickInProgress=!1},150),this.overlayVisible()?this.hide(!0):this.show(!0)}n?.nativeElement.focus({preventScroll:!0}),this.onClick.emit(e),this.cd.detectChanges()}onFirstHiddenFocus(e){let n=this.focusInputViewChild();qi$1(e.relatedTarget===n?.nativeElement?Yi$1(this.overlayViewChild()?.overlayViewChild()?.nativeElement,`:not([data-p-hidden-focusable="true"])`):n?.nativeElement)}onInputFocus(e){this.focused=!0;let n=this.focusedOptionIndex()!==-1?this.focusedOptionIndex():this.overlayVisible()&&this.autoOptionFocus()?this.findFirstFocusedOptionIndex():-1;this.focusedOptionIndex.set(n),this.overlayVisible()&&this.scrollInView(this.focusedOptionIndex()),this.onFocus.emit({originalEvent:e})}onInputBlur(e){this.focused=!1,this.onBlur.emit({originalEvent:e}),this.preventModelTouched||this.onModelTouched(),this.preventModelTouched=!1}onFilterInputChange(e){let n=e.target.value;this._filterValue.set(n),this.focusedOptionIndex.set(-1),this.onFilter.emit({originalEvent:e,filter:this._filterValue()}),!this.virtualScrollerDisabled&&this.scroller()?.scrollToIndex(0),setTimeout(()=>{this.overlayViewChild()?.alignOverlay()})}onLastHiddenFocus(e){let n=this.focusInputViewChild();qi$1(e.relatedTarget===n?.nativeElement?Xi$1(this.overlayViewChild()?.overlayViewChild()?.nativeElement,`:not([data-p-hidden-focusable="true"])`):n?.nativeElement)}onOptionMouseEnter(e,n){this.focusOnHover()&&this.changeFocusedOptionIndex(e,n)}onFilterBlur(){this.focusedOptionIndex.set(-1)}onToggleAll(e){if(!(this.$disabled()||this.readonly())){if(this.selectAll()!=null)this.onSelectAllChange.emit({originalEvent:e,checked:!this.allSelected()});else{let n=this.getAllVisibleAndNonVisibleOptions().filter(v=>{let Z=this.optionDisabled();return this.isSelected(v)&&(Z?Re$1(v,Z):v&&v.disabled!==void 0?v.disabled:!1)}),i=this.allSelected()?this.visibleOptions().filter(v=>!this.isValidOption(v)&&this.isSelected(v)):this.visibleOptions().filter(v=>this.isSelected(v)||this.isValidOption(v)),l=[...this.filter()&&!this.allSelected()?this.getAllVisibleAndNonVisibleOptions().filter(v=>this.isSelected(v)&&this.isValidOption(v)):[],...n,...i].map(v=>this.getOptionValue(v)),x=[...new Set(l)];this.updateModel(x,e),(!x.length||x.length===this.getAllVisibleAndNonVisibleOptions().length)&&this.onSelectAllChange.emit({originalEvent:e,checked:!!x.length})}this.partialSelected()&&(this.selectedOptions=[],this.cd.markForCheck()),this.onChange.emit({originalEvent:e,value:this.value}),xt.focus(this.headerCheckboxViewChild()?.inputViewChild()?.nativeElement),this.headerCheckboxFocus=!0,e.originalEvent.preventDefault(),e.originalEvent.stopPropagation()}}changeFocusedOptionIndex(e,n){this.focusedOptionIndex()!==n&&(this.focusedOptionIndex.set(n),this.scrollInView())}get virtualScrollerDisabled(){return!this.virtualScroll()}scrollInView(e=-1){let n=e!==-1?`${this.resolvedId}_${e}`:this.focusedOptionId,i=this.itemsViewChild();if(i&&i.nativeElement){let o=Ki$1(i.nativeElement,`li[id="${n}"]`);o?o.scrollIntoView&&o.scrollIntoView({block:`nearest`,inline:`nearest`}):this.virtualScrollerDisabled||setTimeout(()=>{this.virtualScroll()&&this.scroller()?.scrollToIndex(e!==-1?e:this.focusedOptionIndex())},0)}}get focusedOptionId(){return this.focusedOptionIndex()!==-1?`${this.resolvedId}_${this.focusedOptionIndex()}`:null}allSelected(){return this.selectAll!==null?this.selectAll:y(this.visibleOptions())&&this.visibleOptions().every(e=>this.isOptionGroup(e)||this.isOptionDisabled(e)||this.isSelected(e))}partialSelected(){return this.selectedOptions&&this.selectedOptions.length>0&&this.selectedOptions.length<(this._options()?.length||0)}show(e){this.overlayVisible.set(!0);let n=this.focusedOptionIndex()!==-1?this.focusedOptionIndex():this.autoOptionFocus()?this.findFirstFocusedOptionIndex():this.findSelectedOptionIndex();this.focusedOptionIndex.set(n),e&&qi$1(this.focusInputViewChild()?.nativeElement),this.cd.markForCheck()}hide(e){this.overlayVisible.set(!1),this.focusedOptionIndex.set(-1),this.filter()&&this.resetFilterOnHide()&&this.resetFilter(),this.overlayOptions()?.mode===`modal`&&qe(),e&&qi$1(this.focusInputViewChild()?.nativeElement),this.cd.markForCheck()}onOverlayBeforeEnter(e){if(this.itemsWrapper=Ki$1(this.overlayViewChild()?.overlayViewChild()?.nativeElement,this.virtualScroll()?`[data-pc-name="virtualscroller"]`:`[data-pc-section="listcontainer"]`),this.virtualScroll()&&this.scroller()?.setContentEl(this.itemsViewChild()?.nativeElement),this._options()&&this._options().length)if(this.virtualScroll()){let i=this.modelValue()?this.focusedOptionIndex():-1;i!==-1&&this.scroller()?.scrollToIndex(i)}else{let i=Ki$1(this.itemsWrapper,`[data-pc-section="option"][data-p-selected="true"]`);i&&i.scrollIntoView({block:`nearest`,inline:`nearest`})}let n=this.filterInputChild();n&&n.nativeElement&&(this.preventModelTouched=!0,this.autofocusFilter()&&n.nativeElement.focus()),this.onPanelShow.emit(e)}onOverlayAfterLeave(e){this.itemsWrapper=null,this.onModelTouched(),this.onPanelHide.emit(e)}resetFilter(){let e=this.filterInputChild();e&&e.nativeElement&&(e.nativeElement.value=``),this._filterValue.set(null),this._filteredOptions=null}onOverlayHide(){this.focusedOptionIndex.set(-1),this.filter()&&this.resetFilterOnHide()&&this.resetFilter()}close(e){this.hide(),e.preventDefault(),e.stopPropagation()}clear(e){this.value=[],this.updateModel(null,e),this.selectedOptions=[],this.onClear.emit(),this._disableTooltip=!0,e.stopPropagation()}labelContainerMouseLeave(){this._disableTooltip&&(this._disableTooltip=!1)}removeOption(e,n){let i=this.modelValue().filter(o=>!ie(o,e,this.equalityKey()||``));this.updateModel(i,n),this.onChange.emit({originalEvent:n,value:i,itemValue:e}),this.onRemove.emit({newValue:i,removed:e}),n&&n.stopPropagation()}findNextOptionIndex(e){let n=e<this.visibleOptions().length-1?this.visibleOptions().slice(e+1).findIndex(i=>this.isValidOption(i)):-1;return n>-1?n+e+1:e}findPrevOptionIndex(e){let n=e>0?hn$1(this.visibleOptions().slice(0,e),i=>this.isValidOption(i)):-1;return n>-1?n:e}findLastSelectedOptionIndex(){return this.hasSelectedOption()?hn$1(this.visibleOptions(),e=>this.isValidSelectedOption(e)):-1}findLastFocusedOptionIndex(){let e=this.findLastSelectedOptionIndex();return e<0?this.findLastOptionIndex():e}findLastOptionIndex(){return hn$1(this.visibleOptions(),e=>this.isValidOption(e))}searchOptions(e,n){this.searchValue=(this.searchValue||``)+n;let i=-1,o=!1;return this.focusedOptionIndex()!==-1?(i=this.visibleOptions().slice(this.focusedOptionIndex()).findIndex(l=>this.isOptionMatched(l)),i=i===-1?this.visibleOptions().slice(0,this.focusedOptionIndex()).findIndex(l=>this.isOptionMatched(l)):i+this.focusedOptionIndex()):i=this.visibleOptions().findIndex(l=>this.isOptionMatched(l)),i!==-1&&(o=!0),i===-1&&this.focusedOptionIndex()===-1&&(i=this.findFirstFocusedOptionIndex()),i!==-1&&this.changeFocusedOptionIndex(e,i),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(()=>{this.searchValue=``,this.searchTimeout=null},500),o}hasFocusableElements(){return mt(this.overlayViewChild()?.overlayViewChild()?.nativeElement,`:not([data-p-hidden-focusable="true"])`).length>0}hasFilter(){return this._filterValue()&&this._filterValue().trim().length>0}get containerDataP(){return this.cn({invalid:this.invalid(),disabled:this.$disabled(),focus:this.focused,fluid:this.hasFluid,filled:this.$variant()===`filled`,[this.size()]:this.size()})}get labelDataP(){return this.cn({placeholder:this.label()===this.placeholder(),clearable:this.showClear(),disabled:this.disabled,[this.size()]:this.size(),"has-chip":this.display()===`chip`&&this.value&&this.value.length&&(this.maxSelectedLabels()?this.value.length<=this.maxSelectedLabels():!0),empty:!this.placeholder()&&!this.$filled})}get dropdownIconDataP(){return this.cn({[this.size()]:this.size()})}get overlayDataP(){return this.cn({[`overlay-`+this.appendTo]:`overlay-`+this.appendTo})}writeControlValue(e,n){this.value=e,n(e),this.cd.markForCheck()}getHeaderCheckboxPTOptions(e){return this.ptm(e,{context:{selected:this.allSelected()}})}getPTOptions(e,n,i,o){return this.ptm(o,{context:{selected:this.isSelected(e),focused:this.focusedOptionIndex()===this.getOptionIndex(i,n),disabled:this.isOptionDisabled(e)}})}static ɵfac=function(n){return new(n||t)};static ɵcmp=yd({type:t,selectors:[[`p-multiSelect`],[`p-multiselect`],[`p-multi-select`]],contentQueries:function(n,i,o){if(n&1&&(nv(o,i.footerFacet,In$1,5)(o,i.headerFacet,wn$1,5)(o,i.itemTemplate,Ki,4)(o,i.headerTemplate,Gi,4)(o,i.emptyFilterTemplate,ji,4)(o,i.emptyTemplate,qi,4)(o,i.itemCheckboxIconTemplate,Ui,4)(o,i.headerCheckboxIconTemplate,Qi,4)(o,i.templates,Pn$1,4),xa(o,Wi,4)(o,Yi,4)(o,Xi,4)(o,Zi,4)(o,Ji,4)(o,en,4)(o,tn,4)(o,nn,4)(o,on,4)(o,ln,4)(o,an,4)),n&2){Wb(9);let l;Md(l=Nd())&&(i.groupTemplate=l.first),Md(l=Nd())&&(i.loaderTemplate=l.first),Md(l=Nd())&&(i.filterTemplate=l.first),Md(l=Nd())&&(i.footerTemplate=l.first),Md(l=Nd())&&(i.selectedItemsTemplate=l.first),Md(l=Nd())&&(i.loadingIconTemplate=l.first),Md(l=Nd())&&(i.filterIconTemplate=l.first),Md(l=Nd())&&(i.removeTokenIconTemplate=l.first),Md(l=Nd())&&(i.chipIconTemplate=l.first),Md(l=Nd())&&(i.clearIconTemplate=l.first),Md(l=Nd())&&(i.dropdownIconTemplate=l.first)}},viewQuery:function(n,i){n&1&&rv(i.overlayViewChild,sn,5)(i.filterInputChild,rn,5)(i.focusInputViewChild,cn,5)(i.itemsViewChild,dn,5)(i.scroller,pn,5)(i.lastHiddenFocusableElementOnOverlay,un,5)(i.firstHiddenFocusableElementOnOverlay,mn,5)(i.headerCheckboxViewChild,hn,5),n&2&&Wb(8)},hostVars:6,hostBindings:function(n,i){n&1&&Aa(`click`,function(l){return i.onContainerClick(l)}),n&2&&(Na(`id`,i.resolvedId)(`data-p`,i.containerDataP),aS(i.sx(`root`)),uS(i.cn(i.cx(`root`),i.styleClass())))},inputs:{id:[1,`id`],ariaLabel:[1,`ariaLabel`],styleClass:[1,`styleClass`],panelStyle:[1,`panelStyle`],panelStyleClass:[1,`panelStyleClass`],inputId:[1,`inputId`],readonly:[1,`readonly`],group:[1,`group`],filter:[1,`filter`],filterPlaceHolder:[1,`filterPlaceHolder`],filterLocale:[1,`filterLocale`],overlayVisible:[1,`overlayVisible`],tabindex:[1,`tabindex`],dataKey:[1,`dataKey`],ariaLabelledBy:[1,`ariaLabelledBy`],displaySelectedLabel:[1,`displaySelectedLabel`],maxSelectedLabels:[1,`maxSelectedLabels`],selectionLimit:[1,`selectionLimit`],selectedItemsLabel:[1,`selectedItemsLabel`],showToggleAll:[1,`showToggleAll`],emptyFilterMessage:[1,`emptyFilterMessage`],emptyMessage:[1,`emptyMessage`],resetFilterOnHide:[1,`resetFilterOnHide`],dropdownIcon:[1,`dropdownIcon`],chipIcon:[1,`chipIcon`],optionLabel:[1,`optionLabel`],optionValue:[1,`optionValue`],optionDisabled:[1,`optionDisabled`],optionGroupLabel:[1,`optionGroupLabel`],optionGroupChildren:[1,`optionGroupChildren`],showHeader:[1,`showHeader`],filterBy:[1,`filterBy`],scrollHeight:[1,`scrollHeight`],lazy:[1,`lazy`],virtualScroll:[1,`virtualScroll`],loading:[1,`loading`],virtualScrollItemSize:[1,`virtualScrollItemSize`],loadingIcon:[1,`loadingIcon`],virtualScrollOptions:[1,`virtualScrollOptions`],overlayOptions:[1,`overlayOptions`],ariaFilterLabel:[1,`ariaFilterLabel`],filterMatchMode:[1,`filterMatchMode`],tooltip:[1,`tooltip`],tooltipPosition:[1,`tooltipPosition`],tooltipPositionStyle:[1,`tooltipPositionStyle`],tooltipStyleClass:[1,`tooltipStyleClass`],autofocusFilter:[1,`autofocusFilter`],display:[1,`display`],autocomplete:[1,`autocomplete`],showClear:[1,`showClear`],autofocus:[1,`autofocus`],placeholder:[1,`placeholder`],options:[1,`options`],filterValue:[1,`filterValue`],selectAll:[1,`selectAll`],focusOnHover:[1,`focusOnHover`],filterFields:[1,`filterFields`],selectOnFocus:[1,`selectOnFocus`],autoOptionFocus:[1,`autoOptionFocus`],highlightOnSelect:[1,`highlightOnSelect`],size:[1,`size`],variant:[1,`variant`],fluid:[1,`fluid`],appendTo:[1,`appendTo`],motionOptions:[1,`motionOptions`]},outputs:{overlayVisible:`overlayVisibleChange`,onChange:`onChange`,onFilter:`onFilter`,onFocus:`onFocus`,onBlur:`onBlur`,onClick:`onClick`,onClear:`onClear`,onPanelShow:`onPanelShow`,onPanelHide:`onPanelHide`,onLazyLoad:`onLazyLoad`,onRemove:`onRemove`,onSelectAllChange:`onSelectAllChange`},features:[RS([jo,Re,{provide:ti,useExisting:t},{provide:xi$1,useExisting:t}]),hb([Ds]),$m],ngContentSelectors:fn,decls:15,vars:50,consts:[[`focusInput`,``],[`overlay`,``],[`content`,``],[`token`,``],[`removeicon`,``],[`firstHiddenFocusableEl`,``],[`buildInItems`,``],[`lastHiddenFocusableEl`,``],[`headerCheckbox`,``],[`icon`,``],[`filterInput`,``],[`scroller`,``],[`loader`,``],[`items`,``],[1,`p-hidden-accessible`,3,`pBind`],[`role`,`combobox`,3,`focus`,`blur`,`keydown`,`pTooltip`,`pTooltipUnstyled`,`tooltipPosition`,`positionStyle`,`tooltipStyleClass`,`pAutoFocus`,`pBind`],[3,`mouseleave`,`pBind`,`pTooltip`,`pTooltipUnstyled`,`tooltipDisabled`,`tooltipPosition`,`positionStyle`,`tooltipStyleClass`],[3,`pBind`],[3,`visibleChange`,`onBeforeEnter`,`onAfterLeave`,`onHide`,`hostAttrSelector`,`visible`,`options`,`target`,`appendTo`,`unstyled`,`pt`,`motionOptions`],[3,`pBind`,`class`],[3,`onRemove`,`pt`,`unstyled`,`label`,`removable`,`removeIcon`],[3,`class`,`pBind`],[3,`click`,`pBind`],[4,`ngTemplateOutlet`,`ngTemplateOutletContext`],[`data-p-icon`,`times`,3,`pBind`,`class`],[`data-p-icon`,`times`,3,`click`,`pBind`],[4,`ngTemplateOutlet`],[3,`pBind`,`class`,`ngClass`],[`data-p-icon`,`chevron-down`,3,`pBind`,`class`],[3,`pBind`,`ngClass`],[`data-p-icon`,`chevron-down`,3,`pBind`],[3,`pBind`,`ngStyle`],[`role`,`presentation`,1,`p-hidden-accessible`,`p-hidden-focusable`,3,`focus`,`pBind`],[3,`items`,`style`,`itemSize`,`autoSize`,`tabindex`,`lazy`,`options`],[3,`pt`,`ngModel`,`ariaLabel`,`binary`,`variant`,`disabled`,`unstyled`],[3,`pt`,`class`,`unstyled`],[3,`onChange`,`pt`,`ngModel`,`ariaLabel`,`binary`,`variant`,`disabled`,`unstyled`],[`data-p-icon`,`check`,3,`class`,`pBind`],[`data-p-icon`,`check`,3,`pBind`],[3,`pt`,`unstyled`],[`pInputText`,``,`type`,`text`,`role`,`searchbox`,3,`input`,`keydown`,`click`,`blur`,`pt`,`variant`,`value`,`unstyled`],[`data-p-icon`,`search`,3,`pBind`],[1,`p-multiselect-filter-icon`,3,`pBind`],[3,`onLazyLoad`,`items`,`itemSize`,`autoSize`,`tabindex`,`lazy`,`options`],[`role`,`listbox`,`aria-multiselectable`,`true`,3,`pBind`],[`role`,`option`,3,`pBind`,`class`,`ngStyle`],[`pMultiSelectItem`,``,`pRipple`,``,3,`pBind`,`id`,`option`,`selected`,`label`,`disabled`,`template`,`itemCheckboxIconTemplate`,`itemSize`,`focused`,`ariaPosInset`,`ariaSetSize`,`variant`,`highlightOnSelect`,`pt`,`unstyled`],[`role`,`option`,3,`pBind`,`ngStyle`],[3,`ngTemplateOutlet`,`ngTemplateOutletContext`],[`pMultiSelectItem`,``,`pRipple`,``,3,`onClick`,`onMouseEnter`,`pBind`,`id`,`option`,`selected`,`label`,`disabled`,`template`,`itemCheckboxIconTemplate`,`itemSize`,`focused`,`ariaPosInset`,`ariaSetSize`,`variant`,`highlightOnSelect`,`pt`,`unstyled`]],template:function(n,i){n&1&&(zb(_n),pa(0,`div`,14)(1,`input`,15,0),Aa(`focus`,function(l){return i.onInputFocus(l)})(`blur`,function(l){return i.onInputBlur(l)})(`keydown`,function(l){return i.onKeyDown(l)}),Cd()(),pa(3,`div`,16),Aa(`mouseleave`,function(){return i.labelContainerMouseLeave()}),pa(4,`div`,17),Nb(5,Fn,2,2),Nb(6,Ln,2,6),Cd()(),Nb(7,Hn,3,2,`ng-container`),pa(8,`div`,17),Nb(9,qn,3,2,`ng-container`)(10,Jn,2,2),Cd(),pa(11,`p-overlay`,18,1),Aa(`visibleChange`,function(l){return i.overlayVisible.set(l)})(`onBeforeEnter`,function(l){return i.onOverlayBeforeEnter(l)})(`onAfterLeave`,function(l){return i.onOverlayAfterLeave(l)})(`onHide`,function(){return i.onOverlayHide()}),Gm(13,Ho,13,24,`ng-template`,null,2,jS),Cd()),n&2&&(Wm(`pBind`,i.ptm(`hiddenInputContainer`)),Na(`data-p-hidden-accessible`,!0),AI(),Wm(`pTooltip`,i.tooltip())(`pTooltipUnstyled`,i.unstyled())(`tooltipPosition`,i.tooltipPosition())(`positionStyle`,i.tooltipPositionStyle())(`tooltipStyleClass`,i.tooltipStyleClass())(`pAutoFocus`,i.autofocus())(`pBind`,i.ptm(`hiddenInput`)),Na(`aria-disabled`,i.$disabled())(`id`,i.inputId())(`aria-label`,i.ariaLabel())(`aria-labelledby`,i.ariaLabelledBy())(`aria-haspopup`,`listbox`)(`aria-expanded`,i.overlayVisible()??!1)(`aria-controls`,i.overlayVisible()?i.id()+`_list`:null)(`tabindex`,i.$disabled()?-1:i.tabindex())(`aria-activedescendant`,i.focused?i.focusedOptionId:void 0)(`value`,i.modelValue())(`name`,i.name())(`required`,i.required()?``:void 0)(`disabled`,i.$disabled()?``:void 0),AI(2),uS(i.cx(`labelContainer`)),Wm(`pBind`,i.ptm(`labelContainer`))(`pTooltip`,i.tooltip())(`pTooltipUnstyled`,i.unstyled())(`tooltipDisabled`,i._disableTooltip)(`tooltipPosition`,i.tooltipPosition())(`positionStyle`,i.tooltipPositionStyle())(`tooltipStyleClass`,i.tooltipStyleClass()),AI(),uS(i.cx(`label`)),Wm(`pBind`,i.ptm(`label`)),Na(`data-p`,i.labelDataP),AI(),Rb(!i.selectedItemsTemplate&&!i._selectedItemsTemplate?5:-1),AI(),Rb(i.selectedItemsTemplate||i._selectedItemsTemplate?6:-1),AI(),Rb(i.isVisibleClearIcon?7:-1),AI(),uS(i.cx(`dropdown`)),Wm(`pBind`,i.ptm(`dropdown`)),AI(),Rb(i.loading()?9:10),AI(2),Wm(`hostAttrSelector`,i.$attrSelector)(`visible`,i.overlayVisible())(`options`,i.overlayOptions())(`target`,`@parent`)(`appendTo`,i.$appendTo())(`unstyled`,i.unstyled())(`pt`,i.ptm(`pcOverlay`))(`motionOptions`,i.motionOptions()))},dependencies:[Kv,xT,kT,OT,qo,mt$1,Dn$1,mi$1,ci$1,Yt$2,f,ii$1,f$1,d,ei$1,li$1,et,Jt,$e,Fn$1,Dn$2,Yt$1,Ms,Ds],encapsulation:2})}return t})();var li=(()=>{class t{static ɵfac=function(n){return new(n||t)};static ɵmod=$r({type:t});static ɵinj=An$1({imports:[Ge,Dn$1,Dn$1]})}return t})();var Qo=(t,a)=>a.offering._id;function Wo(t,a){if(t&1){let e=Bb();pa(0,`div`,11),Aa(`click`,function(){let i=Jh(e).$implicit;return ep(Hb().view(i.offering))}),pa(1,`app-offering-short`,12),Aa(`relationClick`,function(i){Jh(e);return ep(Hb().viewRelation(i))}),Cd()()}if(t&2){let e=a.$implicit;AI(),Wm(`entity`,e.offering)(`stylist`,e.relations.stylist)(`boutique`,e.relations.boutique)(`brand`,e.relations.brand)(`collection`,e.relations.collection)}}function Yo(t,a){t&1&&(pa(0,`p`,10),DS(1,` За заданими критеріями оголошень не знайдено. `),Cd())}var Xo={dress:`Сукня`,gown:`Вечірня сукня`,suit:`Костюм`,bag:`Сумка`,shoes:`Взуття`,accessory:`Аксесуар`,jewelry:`Прикраси`,outerwear:`Верхній одяг`,"suiting-set":`Комплект`,headpiece:`Головний убір`,lingerie:`Білизна`,menswear:`Чоловічий одяг`,"made-to-measure":`Пошив на замовлення`};var Zo={sale:`Продаж`,rental:`Оренда`,"try-on-appointment":`Запис на примірку`,"custom-order":`Індивідуальне замовлення`,consignment:`Комісія`,other:`Інше`};var Jo={draft:`Чернетка`,"pending-review":`На розгляді`,active:`Активне`,reserved:`Заброньоване`,rented:`Здано в оренду`,sold:`Продано`,expired:`Термін минув`,paused:`Призупинено`,rejected:`Відхилено`,archived:`Архівоване`};var La=(()=>{class t{constructor(){this._router=p(pn$1),this.itemTypeOptions=Object.entries(Xo).map(([e,n])=>({value:e,label:n})),this.offeringTypeOptions=Object.entries(Zo).map(([e,n])=>({value:e,label:n})),this.offeringStatusOptions=Object.entries(Jo).map(([e,n])=>({value:e,label:n})),this.searchTerm=ne(``),this.selectedItemTypes=ne([]),this.selectedOfferingType=ne(null),this.selectedStatus=ne(null),this.results=di$1(()=>{let e=this.searchTerm().trim().toLowerCase(),n=this.selectedItemTypes(),i=this.selectedOfferingType(),o=this.selectedStatus();return z.filter(l=>{let x=p$1(l);return!(e&&![l.title,l.publicLocation,x?.city,x?.address].filter(Boolean).join(` `).toLowerCase().includes(e)||n.length&&(!x||!n.includes(x.type))||i&&l.offeringType!==i||o&&l.status!==o)}).map(l=>({offering:l,relations:B(l)}))})}view(e){this._router.navigate([`/offering`,e._id])}viewRelation(e){this._router.navigate([`/`,e.type,e.id])}static{this.ɵfac=function(n){return new(n||t)}}static{this.ɵcmp=yd({type:t,selectors:[[`ng-component`]],decls:14,vars:10,consts:[[1,`explore`],[1,`explore__header`],[1,`explore__title`],[`pInputText`,``,`type`,`text`,`placeholder`,`Адреса, місто або назва оголошення`,1,`explore__search`,3,`ngModelChange`,`ngModel`],[`appendTo`,`body`,`scrollHeight`,`auto`,`optionLabel`,`label`,`optionValue`,`value`,`placeholder`,`Тип нерухомості`,1,`explore__filter`,3,`ngModelChange`,`options`,`ngModel`],[`appendTo`,`body`,`scrollHeight`,`auto`,`optionLabel`,`label`,`optionValue`,`value`,`placeholder`,`Тип угоди`,1,`explore__filter`,3,`ngModelChange`,`options`,`showClear`,`ngModel`],[`appendTo`,`body`,`scrollHeight`,`auto`,`optionLabel`,`label`,`optionValue`,`value`,`placeholder`,`Статус`,1,`explore__filter`,3,`ngModelChange`,`options`,`showClear`,`ngModel`],[`pButton`,``,`routerLink`,`/map`,`severity`,`secondary`,`size`,`small`,1,`explore__map-link`],[1,`explore__grid`],[1,`explore__row`],[1,`explore__empty`],[1,`explore__row`,3,`click`],[3,`relationClick`,`entity`,`stylist`,`boutique`,`brand`,`collection`]],template:function(n,i){n&1&&(pa(0,`div`,0)(1,`div`,1)(2,`h1`,2),DS(3,`Пошук`),Cd(),pa(4,`input`,3),Aa(`ngModelChange`,function(l){return i.searchTerm.set(l)}),Cd(),DC(),pa(5,`p-multiSelect`,4),Aa(`ngModelChange`,function(l){return i.selectedItemTypes.set(l)}),Cd(),DC(),pa(6,`p-select`,5),Aa(`ngModelChange`,function(l){return i.selectedOfferingType.set(l)}),Cd(),DC(),pa(7,`p-select`,6),Aa(`ngModelChange`,function(l){return i.selectedStatus.set(l)}),Cd(),DC(),pa(8,`a`,7),DS(9,`Карта`),Cd()(),pa(10,`div`,8),Ob(11,Wo,2,5,`div`,9,Qo,!1,Yo,2,0,`p`,10),Cd()()),n&2&&(AI(4),Wm(`ngModel`,i.searchTerm()),wC(),AI(),Wm(`options`,i.itemTypeOptions)(`ngModel`,i.selectedItemTypes()),wC(),AI(),Wm(`options`,i.offeringTypeOptions)(`showClear`,!0)(`ngModel`,i.selectedOfferingType()),wC(),AI(),Wm(`options`,i.offeringStatusOptions)(`showClear`,!0)(`ngModel`,i.selectedStatus()),wC(),AI(4),kb(i.results()))},dependencies:[A,Fn$1,We,Dn$2,Yt$1,bc,Kn$1,Jn$1,nt,et,vs,Ci$1,li,Ge],styles:[`.explore__header[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;gap:var(--%NS%sp-2);margin-bottom:var(--%NS%sp-4)}.explore__title[_ngcontent-%COMP%]{margin:0 var(--%NS%sp-4) 0 0}.explore__search[_ngcontent-%COMP%]{min-width:220px;flex:1 1 220px}.explore__filter[_ngcontent-%COMP%]{min-width:180px}.explore__map-link[_ngcontent-%COMP%]{margin-left:auto}.explore__grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;gap:var(--%NS%sp-4)}.explore__row[_ngcontent-%COMP%]{cursor:pointer}.explore__empty[_ngcontent-%COMP%]{color:var(--%NS%c-text-muted)}`]})}}return t})();export{La as ExploreComponent};