(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{eMxF:function(e,o,t){"use strict";t.r(o),t.d(o,"CoreUserAppLazyModule",(function(){return E}));var r=t("L3Fv"),c=t("tyNb"),l=t("9+EE"),i=t("mv9v"),n=t("j3ag"),a=t("pHTc"),s=t("fjkH"),p=t("bFG1"),d=t("51eS"),f=t("fXoL"),u=t("TEn/"),m=t("ofXK"),g=t("ACYt"),P=t("3CSS"),_=t("nt/U"),C=t("sYmb");function CoreUserCompleteProfilePage_h1_6_Template(e,o){1&e&&(f.Ec(0,"h1"),f.pd(1),f.Pc(2,"translate"),f.Dc()),2&e&&(f.lc(1),f.qd(f.Qc(2,1,"core.user.completeyourprofile")))}function CoreUserCompleteProfilePage_h1_7_Template(e,o){1&e&&(f.Ec(0,"h1"),f.pd(1),f.Pc(2,"translate"),f.Dc()),2&e&&(f.lc(1),f.qd(f.Qc(2,1,"core.login.reconnecttosite")))}function CoreUserCompleteProfilePage_ng_container_14_Template(e,o){if(1&e){const e=f.Fc();f.Cc(0),f.Ec(1,"ion-item",7),f.Ec(2,"ion-label"),f.Ec(3,"p"),f.pd(4),f.Pc(5,"translate"),f.Dc(),f.Dc(),f.Dc(),f.Ec(6,"ion-button",9),f.Mc("click",(function CoreUserCompleteProfilePage_ng_container_14_Template_ion_button_click_6_listener(){f.fd(e);return f.Oc().openCompleteProfilePage()})),f.pd(7),f.Pc(8,"translate"),f.Dc(),f.Bc()}2&e&&(f.lc(4),f.qd(f.Qc(5,2,"core.user.completeprofilenotice")),f.lc(3),f.rd(" ",f.Qc(8,4,"core.user.completeprofile")," "))}function CoreUserCompleteProfilePage_ng_container_15_Template(e,o){if(1&e){const e=f.Fc();f.Cc(0),f.Ec(1,"ion-item",7),f.Ec(2,"ion-label"),f.Ec(3,"p"),f.pd(4),f.Pc(5,"translate"),f.Dc(),f.Dc(),f.Dc(),f.Ec(6,"ion-button",9),f.Mc("click",(function CoreUserCompleteProfilePage_ng_container_15_Template_ion_button_click_6_listener(){f.fd(e);return f.Oc().login()})),f.pd(7),f.Pc(8,"translate"),f.Dc(),f.Bc()}2&e&&(f.lc(4),f.qd(f.Qc(5,2,"core.user.completeprofilereconnectinstructions")),f.lc(3),f.rd(" ",f.Qc(8,4,"core.login.reconnect")," "))}let b=(()=>{class CoreUserCompleteProfilePage{constructor(){this.editingProfile=!1,this.logoutLabel=i.a.getLogoutLabel()}showHelp(){d.a.showHelp(n.I.instant("core.user.completeprofilehelp"),n.I.instant("core.user.completeprofilesupportsubject"))}openCompleteProfilePage(){i.a.openInAppForEdit(l.c.getCurrentSiteId(),"/user/edit.php",void 0,!0),this.editingProfile=!0,this.detectProileEdited()}login(){a.a.navigateToSiteHome(),this.editingProfile=!1}logout(){l.c.logout(),this.editingProfile=!1}detectProileEdited(){this.urlLoadedObserver||(this.urlLoadedObserver=s.b.on(s.b.IAB_LOAD_START,(e=>{e.url.match(/\/user\/preferences.php/)&&(p.a.closeInAppBrowser(),this.login())})),this.browserClosedObserver=s.b.on(s.b.IAB_EXIT,(()=>{var e,o;null===(e=this.urlLoadedObserver)||void 0===e?void 0:e.off(),null===(o=this.browserClosedObserver)||void 0===o||o.off(),delete this.urlLoadedObserver,delete this.browserClosedObserver})))}ngOnDestroy(){var e,o;null===(e=this.urlLoadedObserver)||void 0===e?void 0:e.off(),null===(o=this.browserClosedObserver)||void 0===o||o.off()}}return CoreUserCompleteProfilePage.ɵfac=function CoreUserCompleteProfilePage_Factory(e){return new(e||CoreUserCompleteProfilePage)},CoreUserCompleteProfilePage.ɵcmp=f.sc({type:CoreUserCompleteProfilePage,selectors:[["page-core-user-complete-profile"]],decls:24,vars:16,consts:[["slot","start"],[3,"text"],[4,"ngIf"],["slot","end"],["fill","clear",3,"click"],["slot","icon-only","name","far-circle-question","aria-hidden","true"],[1,"list-item-limited-width"],[1,"ion-text-wrap"],["expand","block","fill","outline",1,"ion-text-wrap","ion-margin",3,"click"],["expand","block",1,"ion-text-wrap","ion-margin",3,"click"]],template:function CoreUserCompleteProfilePage_Template(e,o){1&e&&(f.Ec(0,"ion-header"),f.Ec(1,"ion-toolbar"),f.Ec(2,"ion-buttons",0),f.zc(3,"ion-back-button",1),f.Pc(4,"translate"),f.Dc(),f.Ec(5,"ion-title"),f.nd(6,CoreUserCompleteProfilePage_h1_6_Template,3,3,"h1",2),f.nd(7,CoreUserCompleteProfilePage_h1_7_Template,3,3,"h1",2),f.Dc(),f.Ec(8,"ion-buttons",3),f.Ec(9,"ion-button",4),f.Mc("click",(function CoreUserCompleteProfilePage_Template_ion_button_click_9_listener(){return o.showHelp()})),f.Pc(10,"translate"),f.zc(11,"ion-icon",5),f.Dc(),f.Dc(),f.Dc(),f.Dc(),f.Ec(12,"ion-content"),f.Ec(13,"ion-list",6),f.nd(14,CoreUserCompleteProfilePage_ng_container_14_Template,9,6,"ng-container",2),f.nd(15,CoreUserCompleteProfilePage_ng_container_15_Template,9,6,"ng-container",2),f.Ec(16,"ion-item",7),f.Ec(17,"ion-label"),f.Ec(18,"p"),f.pd(19),f.Pc(20,"translate"),f.Dc(),f.Dc(),f.Dc(),f.Ec(21,"ion-button",8),f.Mc("click",(function CoreUserCompleteProfilePage_Template_ion_button_click_21_listener(){return o.logout()})),f.pd(22),f.Pc(23,"translate"),f.Dc(),f.Dc(),f.Dc()),2&e&&(f.lc(3),f.Vc("text",f.Qc(4,8,"core.back")),f.lc(3),f.Vc("ngIf",!o.editingProfile),f.lc(1),f.Vc("ngIf",o.editingProfile),f.lc(2),f.mc("aria-label",f.Qc(10,10,"core.help")),f.lc(5),f.Vc("ngIf",!o.editingProfile),f.lc(1),f.Vc("ngIf",o.editingProfile),f.lc(4),f.qd(f.Qc(20,12,"core.wanttochangesite")),f.lc(3),f.rd(" ",f.Qc(23,14,o.logoutLabel)," "))},directives:[u.C,u.Ab,u.m,u.h,u.i,u.yb,m.t,g.a,u.l,u.D,P.a,_.a,u.v,u.P,u.I,u.O],pipes:[C.d],encapsulation:2}),CoreUserCompleteProfilePage})();const h=[{path:"completeprofile",component:b}];let E=(()=>{class CoreUserAppLazyModule{}return CoreUserAppLazyModule.ɵmod=f.wc({type:CoreUserAppLazyModule}),CoreUserAppLazyModule.ɵinj=f.vc({factory:function CoreUserAppLazyModule_Factory(e){return new(e||CoreUserAppLazyModule)},imports:[[c.m.forChild(h),r.a],c.m]}),CoreUserAppLazyModule})();void(("undefined"==typeof ngJitMode||ngJitMode)&&f.kd(E,{declarations:[b],imports:[c.m,r.a],exports:[c.m]}))}}]);