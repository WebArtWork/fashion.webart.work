import{Ct as Wb,Dn as p,Et as Wm,F as Ig,Hn as uS,It as aS,J as Nb,K as Md,S as Fa,T as Gm,Tn as nv,U as Kv,Un as uV,W as M,Y as Nd,a as AI,at as RS,cr as zb,ct as Rd,f as Cd,h as DS,i as $r,ir as yd,it as Qu,k as Hb,kn as pa,l as An,n as $m,p as D,rt as Qm,sn as hb,st as Rb,tr as xa,w as Gb,wn as ne$1,xn as lV,yn as kT}from"./chunk-DLsS5aj0.js";import{A as Y,W as ie$1,_ as Ms,a as Dn,ct as xi,d as In,o as Ds,st as wn,t as As,y as Pn}from"./chunk-lAT3Uo9Q.js";var ee=`
    .p-card {
        background: dt('card.background');
        color: dt('card.color');
        box-shadow: dt('card.shadow');
        border-radius: dt('card.border.radius');
        display: flex;
        flex-direction: column;
    }

    .p-card-caption {
        display: flex;
        flex-direction: column;
        gap: dt('card.caption.gap');
    }

    .p-card-body {
        padding: dt('card.body.padding');
        display: flex;
        flex-direction: column;
        gap: dt('card.body.gap');
    }

    .p-card-title {
        font-size: dt('card.title.font.size');
        font-weight: dt('card.title.font.weight');
    }

    .p-card-subtitle {
        color: dt('card.subtitle.color');
    }
`;var ie=[`content`];var ae=[`header`];var oe=[`title`];var re=[`subtitle`];var le=[`footer`];var de=[`*`,[[`p-header`]],[[`p-footer`]]];var ce=[`*`,`p-header`,`p-footer`];function pe(t,r){t&1&&Qm(0)}function se(t,r){if(t&1&&(pa(0,`div`,1),Gb(1,1),Gm(2,pe,1,0,`ng-container`,2),Cd()),t&2){let e=Hb();uS(e.cx(`header`)),Wm(`pBind`,e.ptm(`header`)),AI(2),Wm(`ngTemplateOutlet`,e.headerTemplate||e._headerTemplate)}}function me(t,r){if(t&1&&DS(0),t&2)Rd(` `,Hb(2).header(),` `)}function ue(t,r){t&1&&Qm(0)}function fe(t,r){if(t&1&&(pa(0,`div`,1),Nb(1,me,1,1),Gm(2,ue,1,0,`ng-container`,2),Cd()),t&2){let e=Hb();uS(e.cx(`title`)),Wm(`pBind`,e.ptm(`title`)),AI(),Rb(e.header()&&!e._titleTemplate&&!e.titleTemplate?1:-1),AI(),Wm(`ngTemplateOutlet`,e.titleTemplate||e._titleTemplate)}}function _e(t,r){if(t&1&&DS(0),t&2)Rd(` `,Hb(2).subheader(),` `)}function he(t,r){t&1&&Qm(0)}function ye(t,r){if(t&1&&(pa(0,`div`,1),Nb(1,_e,1,1),Gm(2,he,1,0,`ng-container`,2),Cd()),t&2){let e=Hb();uS(e.cx(`subtitle`)),Wm(`pBind`,e.ptm(`subtitle`)),AI(),Rb(e.subheader()&&!e._subtitleTemplate&&!e.subtitleTemplate?1:-1),AI(),Wm(`ngTemplateOutlet`,e.subtitleTemplate||e._subtitleTemplate)}}function Te(t,r){t&1&&Qm(0)}function ge(t,r){t&1&&Qm(0)}function be(t,r){if(t&1&&(pa(0,`div`,1),Gb(1,2),Gm(2,ge,1,0,`ng-container`,2),Cd()),t&2){let e=Hb();uS(e.cx(`footer`)),Wm(`pBind`,e.ptm(`footer`)),AI(2),Wm(`ngTemplateOutlet`,e.footerTemplate||e._footerTemplate)}}var ve=`
    ${ee}

    .p-card {
        display: block;
    }
`;var Ce={root:`p-card p-component`,header:`p-card-header`,body:`p-card-body`,caption:`p-card-caption`,title:`p-card-title`,subtitle:`p-card-subtitle`,content:`p-card-content`,footer:`p-card-footer`};var te=(()=>{class t extends Y{name=`card`;style=ve;classes=Ce;static ɵfac=(()=>{let e;return function(n){return(e||(e=Ig(t)))(n||t)}})();static ɵprov=M({token:t,factory:t.ɵfac})}return t})();var ne=new D(`CARD_INSTANCE`);var Me=(()=>{class t extends As{componentName=`Card`;$pcCard=p(ne,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=p(Ds,{self:!0});_componentStyle=p(te);onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms([`host`,`root`]))}header=Fa();subheader=Fa();style=Fa();styleClass=Fa();headerFacet=uV(wn);footerFacet=uV(In);headerTemplate;titleTemplate;subtitleTemplate;contentTemplate=uV(`content`,{descendants:!1});footerTemplate;_headerTemplate;_titleTemplate;_subtitleTemplate;_contentTemplate;_footerTemplate;_style=ne$1(null);constructor(){super(),Qu(()=>{let e=this.style();ie$1(this._style(),e)||(this._style.set(e),this.el?.nativeElement&&e&&Object.keys(e).forEach(i=>{this.el.nativeElement.style[i]=e[i]}))})}getBlockableElement(){return this.el.nativeElement}templates=lV(Pn);onAfterContentInit(){this.templates().forEach(e=>{switch(e.getType()){case`header`:this._headerTemplate=e.template;break;case`title`:this._titleTemplate=e.template;break;case`subtitle`:this._subtitleTemplate=e.template;break;case`content`:this._contentTemplate=e.template;break;case`footer`:this._footerTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}static ɵfac=function(i){return new(i||t)};static ɵcmp=yd({type:t,selectors:[[`p-card`]],contentQueries:function(i,n,l){if(i&1&&(nv(l,n.headerFacet,wn,5)(l,n.footerFacet,In,5)(l,n.contentTemplate,ie,4)(l,n.templates,Pn,4),xa(l,ae,4)(l,oe,4)(l,re,4)(l,le,4)),i&2){Wb(4);let d;Md(d=Nd())&&(n.headerTemplate=d.first),Md(d=Nd())&&(n.titleTemplate=d.first),Md(d=Nd())&&(n.subtitleTemplate=d.first),Md(d=Nd())&&(n.footerTemplate=d.first)}},hostVars:4,hostBindings:function(i,n){i&2&&(aS(n._style()),uS(n.cn(n.cx(`root`),n.styleClass())))},inputs:{header:[1,`header`],subheader:[1,`subheader`],style:[1,`style`],styleClass:[1,`styleClass`]},features:[RS([te,{provide:ne,useExisting:t},{provide:xi,useExisting:t}]),hb([Ds]),$m],ngContentSelectors:ce,decls:8,vars:11,consts:[[3,`pBind`,`class`],[3,`pBind`],[4,`ngTemplateOutlet`]],template:function(i,n){i&1&&(zb(de),Nb(0,se,3,4,`div`,0),pa(1,`div`,1),Nb(2,fe,3,5,`div`,0),Nb(3,ye,3,5,`div`,0),pa(4,`div`,1),Gb(5),Gm(6,Te,1,0,`ng-container`,2),Cd(),Nb(7,be,3,4,`div`,0),Cd()),i&2&&(Rb(n.headerFacet()||n.headerTemplate||n._headerTemplate?0:-1),AI(),uS(n.cx(`body`)),Wm(`pBind`,n.ptm(`body`)),AI(),Rb(n.header()||n.titleTemplate||n._titleTemplate?2:-1),AI(),Rb(n.subheader()||n.subtitleTemplate||n._subtitleTemplate?3:-1),AI(),uS(n.cx(`content`)),Wm(`pBind`,n.ptm(`content`)),AI(2),Wm(`ngTemplateOutlet`,n.contentTemplate()||n._contentTemplate),AI(),Rb(n.footerFacet()||n.footerTemplate||n._footerTemplate?7:-1))},dependencies:[Kv,kT,Dn,Ms,Ds],encapsulation:2})}return t})();var Ve=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵmod=$r({type:t});static ɵinj=An({imports:[Me,Dn,Ms,Dn,Ms]})}return t})();export{Ve as n,Me as t};