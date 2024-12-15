import './polyfills.server.mjs';
import {
  ActivatedRoute,
  BrowserModule,
  DomRendererFactory2,
  DomSanitizer,
  HttpClient,
  NavigationEnd,
  Router,
  RouterModule,
  ServerModule,
  provideClientHydration
} from "./chunk-3IUATXN4.mjs";
import {
  ANIMATION_MODULE_TYPE,
  APP_ID,
  Attribute,
  BehaviorSubject,
  CSP_NONCE,
  ChangeDetectionScheduler,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  ContentChildren,
  DOCUMENT,
  Directive,
  ElementRef,
  ErrorHandler,
  EventEmitter,
  HostBinding,
  HostListener,
  Inject,
  Injectable,
  InjectionToken,
  Input,
  InputFlags,
  LOCALE_ID,
  LocationStrategy,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  NgStyle,
  NgTemplateOutlet,
  NgZone,
  Observable,
  Optional,
  Output,
  PLATFORM_ID,
  Renderer2,
  RendererFactory2,
  RuntimeError,
  SecurityContext,
  SkipSelf,
  Subject,
  Subscription,
  TemplateRef,
  Version,
  ViewChild,
  ViewEncapsulation$1,
  animate,
  booleanAttribute,
  catchError,
  combineLatest,
  concat,
  debounceTime,
  delay,
  distinctUntilChanged,
  filter,
  finalize,
  first,
  forkJoin,
  from,
  fromEvent,
  inject,
  isDevMode,
  isPlatformBrowser,
  makeEnvironmentProviders,
  map,
  merge,
  of,
  performanceMarkFeature,
  setClassMetadata,
  share,
  skip,
  startWith,
  state,
  style,
  switchMap,
  take,
  takeUntil,
  tap,
  throwError,
  toArray,
  transition,
  trigger,
  ɵsetClassDebugInfo,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵhostProperty,
  ɵɵinject,
  ɵɵinjectAttribute,
  ɵɵinvalidFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction4,
  ɵɵpureFunction5,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-QGL4KPPF.mjs";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-24VIC3GD.mjs";

// src/app/app-routing.module.ts
var routes = [];
var _AppRoutingModule = class _AppRoutingModule {
};
_AppRoutingModule.\u0275fac = function AppRoutingModule_Factory(t) {
  return new (t || _AppRoutingModule)();
};
_AppRoutingModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AppRoutingModule });
_AppRoutingModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forRoot(routes), RouterModule] });
var AppRoutingModule = _AppRoutingModule;

// src/app/components/header/header.component.ts
var _HeaderComponent = class _HeaderComponent {
};
_HeaderComponent.\u0275fac = function HeaderComponent_Factory(t) {
  return new (t || _HeaderComponent)();
};
_HeaderComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HeaderComponent, selectors: [["app-header"]], decls: 24, vars: 0, consts: [[1, "header"], [1, "main-header"], [1, "logo"], ["src", "../../../assets/images/infra.png", "alt", "", 1, "logoImg"], [1, "nav-menu"], ["href", "#about-infra"], ["href", "#targeted-sectors"], ["href", "#objectives"], ["href", "#news"], ["href", "#board-of-directors"], [1, "header-icons"], ["href", "#"], ["src", "../../../assets/images/path894.png", "alt", "Path 894"], ["src", "../../../assets/images/path886.png", "alt", "Path 886"], ["src", "../../../assets/images/youtube.png", "alt", "YouTube"], ["src", "../../../assets/images/linkedin.png", "alt", "LinkedIn"]], template: function HeaderComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
    \u0275\u0275element(3, "img", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 4)(5, "a", 5);
    \u0275\u0275text(6, "ABOUT INFRA");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 6);
    \u0275\u0275text(8, "TARGETED SECTORS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "a", 7);
    \u0275\u0275text(10, "OBJECTIVES");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "a", 8);
    \u0275\u0275text(12, "NEWS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "a", 9);
    \u0275\u0275text(14, "BOARD OF DIRECTORS");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 10)(16, "a", 11);
    \u0275\u0275element(17, "img", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "a", 11);
    \u0275\u0275element(19, "img", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "a", 11);
    \u0275\u0275element(21, "img", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "a", 11);
    \u0275\u0275element(23, "img", 15);
    \u0275\u0275elementEnd()()();
  }
}, styles: ["\n\n/*# sourceMappingURL=header.component.css.map */"] });
var HeaderComponent = _HeaderComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HeaderComponent, { className: "HeaderComponent", filePath: "src\\app\\components\\header\\header.component.ts", lineNumber: 8 });
})();

// src/app/components/about-the-fund/about-the-fund.component.ts
var _AboutTheFundComponent = class _AboutTheFundComponent {
};
_AboutTheFundComponent.\u0275fac = function AboutTheFundComponent_Factory(t) {
  return new (t || _AboutTheFundComponent)();
};
_AboutTheFundComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AboutTheFundComponent, selectors: [["app-about-the-fund"]], decls: 21, vars: 0, consts: [["id", "about-infra", 1, "about-section"], [1, "overlay"], [1, "content"], ["src", "../../../assets/images/infra1.png", "alt", "", 1, "infra1"], [1, "main-title"], [1, "main-text"]], template: function AboutTheFundComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2);
    \u0275\u0275element(3, "img", 3);
    \u0275\u0275elementStart(4, "div", 4)(5, "h1");
    \u0275\u0275text(6, "About the Fund");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p", 5);
    \u0275\u0275text(8, " The National Infrastructure Fund (INFRA) is the Kingdom\u2019s lead developmental financing partner for infrastructure. It facilitates higher levels of private sector investment to accelerate the delivery of infrastructure projects critical to the Kingdom\u2019s ongoing social and economic transformation.");
    \u0275\u0275element(9, "br")(10, "br");
    \u0275\u0275text(11, " INFRA partners with local and global investors to build long term depth in the Kingdom\u2019s infrastructure financing markets. Its specialist expertise supports innovation across all sectors and project types.");
    \u0275\u0275element(12, "br")(13, "br");
    \u0275\u0275text(14, " INFRA operates under a professional investment framework to ensure its financial sustainability over the long term.");
    \u0275\u0275element(15, "br")(16, "br");
    \u0275\u0275text(17, " As a developmental impact investor, it prioritizes projects with positive social and economic outcomes, and it is committed to increasing investment in the Kingdom\u2019s sustainable infrastructure to ensure a green and prosperous future.");
    \u0275\u0275element(18, "br")(19, "br");
    \u0275\u0275text(20, " INFRA is a supervised entity of the National Development Fund. ");
    \u0275\u0275elementEnd()()()();
  }
}, styles: ["\n\n/*# sourceMappingURL=about-the-fund.component.css.map */"] });
var AboutTheFundComponent = _AboutTheFundComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AboutTheFundComponent, { className: "AboutTheFundComponent", filePath: "src\\app\\components\\about-the-fund\\about-the-fund.component.ts", lineNumber: 8 });
})();

// src/app/services/data-service.service.ts
var _DataService = class _DataService {
  constructor() {
    this.data = {
      "sectors": [
        {
          "title": "Energy",
          "span": "",
          "image": "../../../assets/images/English V.5_img6.png"
        },
        {
          "title": "Water",
          "span": "",
          "image": "../../../assets/images/English V.5_img3.png"
        },
        {
          "title": "Transport ",
          "span": "and Logistics Services",
          "image": "../../../assets/images/English V.5_img2.png"
        },
        {
          "title": "Health",
          "span": "",
          "image": "../../../assets/images/English V.5_img4.png"
        },
        {
          "title": "Education",
          "span": "",
          "image": "../../../assets/images/English V.5_img5.png"
        },
        {
          "title": "Communication",
          "span": "Communication & Digital Infrastructure",
          "image": "../../../assets/images/English V.5_img0.png"
        },
        {
          "title": "Municipal Projects",
          "span": "",
          "image": "../../../assets/images/English V.5_img7.png"
        },
        {
          "title": "Energy ",
          "span": "Transition",
          "image": "../../../assets/images/English V.5_img1.png"
        }
      ],
      "objectives": [
        {
          "title": "Broaden",
          "image": "../../../assets/images/English V.5_img13.png"
        },
        {
          "title": "Deepen",
          "image": "../../../assets/images/English V.5_img12.png"
        },
        {
          "title": "Raising",
          "image": "../../../assets/images/English V.5_img11.png"
        },
        {
          "title": "Provide",
          "image": "../../../assets/images/English V.5_img10.png"
        },
        {
          "title": "Accelerate",
          "image": "../../../assets/images/English V.5_img9.png"
        }
      ],
      "news": {
        "newsTitle": "INFRA agrees MoU with Macquarie to boost private sector investment in KSA infrastructure",
        "content": [
          ` Riyadh, 12 February 2024 <br><br>The National Infrastructure Fund (INFRA) today
        announced that it has signed a Memorandum of Understanding (MoU) with
        Macquarie Asset Management(Macquarie) focused on increasing long-term
        institutional and foreign investment in the Kingdom\u2019s high-growth
        infrastructure market.<br><br> INFRA, with its unique local market knowledge, will
        collaborate strategically with Macquarie to identify and progress broad
        sector infrastructure investment opportunities, including those that
        advance the Kingdom\u2019s ambitious energy transition objectives in line with
        the Saudi Green Initiative.<br><br> INFRA will leverage its extensive expertise
        and Macquarie\u2019s global experience as the world\u2019s largest infrastructure
        asset grow long-term private sector participation in the Kingdom\u2019s
        infrastructure market.<br><br> INFRA and Macquarie will also prioritise
        initiatives to promote the participation of women in the infrastructure
        sector and the sharing of Environment, Social and Governance (ESG) best
        practices.<br><br> INFRA was inaugurated by the National Development Fund (NDF)
        and established as a supervised entity of NDF upon the enactment of the
        NIF Law on 6 February 2024.<br><br> INFRA will be chaired by His Excellency Faisal
        F. Alibrahim, Minister of Economy and Planning.<br><br> With the recent enactment
        of the National Infrastructure Fund Law and is eager to see INFRA build on
        its track record and expand its impact through this strategic
        collaboration with Macquarie.<br><br> INFRA\u2019s collaboration with Macquarie and its
        global network of relationships is an important step in growing long-term
        institutional investment across the Kingdom\u2019s infrastructure segment.\u201D<br><br>
        Esmail Alsallom, CEO of INFRA added: \u201COur strategic collaboration with
        Macquarie is a testament to INFRA\u2019s strategic vision.<br><br> It is an exciting
        step in expanding INFRA\u2019s innovative approach to financing and positioning
        as a key partner to global capital providers.<br><br> We are focused on working
        together to drive the evolution of the Kingdom's infrastructure market and
        supporting the energy transition imperative.\u201D<br><br> Ben Way, Group Head of
        Macquarie Asset Management, said: \u201CAs the Kingdom\u2019s economic
        transformation and energy transition gain pace, unlocking private sector
        investment and innovation in local infrastructure will be vital to
        achieving the Kingdom\u2019s Vision 2030 ambitions and beyond.<br><br> We are delighted
        to be partnering with INFRA to contribute to accelerating investments,
        aiming to deliver world-class infrastructure that underpins the Kingdom\u2019s
        dynamic economy and future-looking objectives.\u201D<br><br> Mark Dooley, Global Head
        of Green Investments at Macquarie Asset Management, added: \u201CThe
        opportunity to deepen our relationships with like-minded partners in Saudi
        Arabia represents a key growth opportunity for our business.<br><br> The progress
        achieved in the Kingdom, underpinned by its ambitious and highly capable
        workforce, has been impressive so far.<br><br> It is a very exciting time and we
        are honoured to contribute to the transformative initiatives the Kingdom
        is undertaking.\u201D `
        ]
      },
      "members": [
        {
          "name": "HE Dr. Nabeel Alamudi",
          "title": "Board Member",
          "image": "../../../assets/images/image744.png"
        },
        {
          "name": "HE Abdulaziz Alarif",
          "title": "Board Member",
          "image": "../../../assets/images/image758.png"
        },
        {
          "name": "Dr Stephen Paul Groff",
          "title": "Board Member",
          "image": "../../../assets/images/image773.png"
        },
        {
          "name": "Eng. Esmail Alsallom",
          "title": "Board Member",
          "image": "../../../assets/images/image787.png"
        },
        {
          "name": "Ms. Stephanie Von Friedeburg",
          "title": "Board Member",
          "image": "../../../assets/images/image801.png"
        },
        {
          "name": "Ms. Marie Lam-Frendo",
          "title": "Board Member",
          "image": "../../../assets/images/image815.png"
        }
      ]
    };
  }
  getData() {
    return this.data;
  }
};
_DataService.\u0275fac = function DataService_Factory(t) {
  return new (t || _DataService)();
};
_DataService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DataService, factory: _DataService.\u0275fac, providedIn: "root" });
var DataService = _DataService;

// src/app/components/targeted-sectors/targeted-sectors.component.ts
function TargetedSectorsComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "img", 7);
    \u0275\u0275elementStart(2, "div", 8)(3, "div", 9)(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const sector_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275propertyInterpolate("src", sector_r1.image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(sector_r1.title);
  }
}
var _TargetedSectorsComponent = class _TargetedSectorsComponent {
  constructor(dataService) {
    this.dataService = dataService;
  }
  ngOnInit() {
    this.data = this.dataService.getData();
  }
};
_TargetedSectorsComponent.\u0275fac = function TargetedSectorsComponent_Factory(t) {
  return new (t || _TargetedSectorsComponent)(\u0275\u0275directiveInject(DataService));
};
_TargetedSectorsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TargetedSectorsComponent, selectors: [["app-targeted-sectors"]], decls: 8, vars: 1, consts: [["id", "sectors", 1, "sectors-section"], [1, "top"], ["src", "../../../assets/images/infra2.png", "alt", "", 1, "infra2"], [1, "sectors-title"], [1, "sectors-images"], ["class", "image-container", 4, "ngFor", "ngForOf"], [1, "image-container"], ["alt", "", 3, "src"], [1, "sector-overlay"], [1, "animated-overlay"]], template: function TargetedSectorsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
    \u0275\u0275element(2, "img", 2);
    \u0275\u0275elementStart(3, "div", 3)(4, "h1");
    \u0275\u0275text(5, "Targeted Sectors");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "div", 4);
    \u0275\u0275template(7, TargetedSectorsComponent_div_7_Template, 6, 2, "div", 5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx.data.sectors);
  }
}, dependencies: [NgForOf], styles: ['\n\n.sectors-section[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: auto;\n  gap: 12rem;\n  background-color: rgb(208, 190, 169);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.sectors-images[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n}\n.top[_ngcontent-%COMP%] {\n  margin-bottom: 5rem;\n}\n.infra2[_ngcontent-%COMP%] {\n  width: 300px;\n  position: absolute;\n  top: 3rem;\n  left: 0;\n}\n.sectors-title[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5rem;\n  right: 0rem;\n  color: #18372f;\n  width: 360px;\n  font-size: 30px;\n  display: flex;\n  text-align: center;\n  justify-content: flex-start;\n}\n.sectors-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  display: inline;\n  width: fit-content;\n}\n.sectors-title[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: 30px;\n  width: 100%;\n  height: 3px;\n  background-color: #18372f;\n}\n.sectors-images[_ngcontent-%COMP%] {\n  display: flex;\n}\n.image-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 12.5%;\n  height: 500px;\n  z-index: 10;\n}\n.image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  z-index: 100;\n}\n.sector-overlay[_ngcontent-%COMP%] {\n  background-color: rgba(132, 104, 71, 0.4);\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  bottom: 0;\n  left: 0;\n  z-index: 100;\n}\n.animated-overlay[_ngcontent-%COMP%] {\n  background-color: transparent;\n  position: absolute;\n  width: 100%;\n  height: 20%;\n  bottom: 0;\n  left: 0;\n  z-index: 200;\n  color: white;\n  transition: height 0.3s ease-in-out;\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n  overflow: hidden;\n  text-align: center;\n}\n.animated-overlay[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 500;\n  z-index: 1000;\n}\n.animated-overlay[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 300;\n  margin-bottom: 10px;\n  display: block;\n  align-self: center;\n  z-index: 1000;\n}\n.sector-overlay[_ngcontent-%COMP%]:hover   .animated-overlay[_ngcontent-%COMP%] {\n  height: 100%;\n  align-items: flex-start;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n@media (min-width: 320px) {\n  .sectors-images[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    row-gap: 1rem;\n  }\n  .image-container[_ngcontent-%COMP%] {\n    position: relative;\n    height: 500px;\n    z-index: 10;\n    width: 50%;\n  }\n  .infra2[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .sectors-title[_ngcontent-%COMP%] {\n    top: 4rem;\n    right: 50%;\n    transform: translateX(50%);\n    width: 360px !important;\n    font-size: 20px;\n    justify-content: center;\n  }\n  .sectors-title[_ngcontent-%COMP%]:after {\n    width: 63%;\n    bottom: 20px;\n  }\n}\n@media (min-width: 576px) {\n  .sectors-images[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    row-gap: 1rem;\n  }\n  .image-container[_ngcontent-%COMP%] {\n    position: relative;\n    width: 25%;\n    height: 500px;\n    z-index: 10;\n  }\n  .infra2[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .sectors-title[_ngcontent-%COMP%] {\n    top: 4rem;\n    right: 50%;\n    transform: translateX(50%);\n    width: 360px !important;\n    font-size: 22px;\n    justify-content: center;\n  }\n  .sectors-title[_ngcontent-%COMP%]::after {\n    width: 70%;\n    bottom: 20px;\n  }\n}\n@media (min-width: 768px) {\n  .sectors-images[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    row-gap: 1rem;\n  }\n  .image-container[_ngcontent-%COMP%] {\n    position: relative;\n    width: 25%;\n    height: 500px;\n    z-index: 10;\n  }\n  .infra2[_ngcontent-%COMP%] {\n    display: inline;\n    width: 300px;\n    position: absolute;\n    top: 2rem;\n    left: 0;\n  }\n  .sectors-title[_ngcontent-%COMP%] {\n    top: 4rem;\n    right: 0rem;\n    transform: translateX(0%);\n    width: 360px !important;\n    font-size: 30px;\n    justify-content: flex-start;\n  }\n  .sectors-title[_ngcontent-%COMP%]::after {\n    width: 100%;\n    bottom: 30px;\n  }\n}\n@media (min-width: 992px) {\n  .sectors-images[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: nowrap;\n    row-gap: 0rem;\n  }\n  .image-container[_ngcontent-%COMP%] {\n    position: relative;\n    width: 12.5%;\n    height: 500px;\n    z-index: 10;\n  }\n  .infra2[_ngcontent-%COMP%] {\n    display: inline;\n    width: 300px;\n    position: absolute;\n    top: 3rem;\n    left: 0;\n  }\n  .sectors-title[_ngcontent-%COMP%] {\n    top: 4rem;\n    right: 0rem;\n    transform: translateX(0%);\n    width: 350px;\n    font-size: 28px;\n    justify-content: flex-start;\n  }\n  .sectors-title[_ngcontent-%COMP%]::after {\n    width: 100%;\n    bottom: 30px;\n  }\n}\n/*# sourceMappingURL=targeted-sectors.component.css.map */'] });
var TargetedSectorsComponent = _TargetedSectorsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TargetedSectorsComponent, { className: "TargetedSectorsComponent", filePath: "src\\app\\components\\targeted-sectors\\targeted-sectors.component.ts", lineNumber: 9 });
})();

// src/app/components/news/news.component.ts
var _NewsComponent = class _NewsComponent {
  constructor(dataService) {
    this.dataService = dataService;
  }
  ngOnInit() {
    this.data = this.dataService.getData();
  }
};
_NewsComponent.\u0275fac = function NewsComponent_Factory(t) {
  return new (t || _NewsComponent)(\u0275\u0275directiveInject(DataService));
};
_NewsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewsComponent, selectors: [["app-news"]], decls: 63, vars: 1, consts: [["id", "news", 1, "news-section"], [1, "top"], ["src", "../../../assets/images/infra2.png", "alt", "", 1, "infra2"], [1, "news-title"], [1, "news-content"], [1, "news"], [1, "heading"], [1, "news-container"], ["src", "../../../assets/images/news.png", "alt", "", 1, "news-img"], [1, "bottom-news"]], template: function NewsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
    \u0275\u0275element(2, "img", 2);
    \u0275\u0275elementStart(3, "div", 3)(4, "h1");
    \u0275\u0275text(5, "News");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "div", 4)(7, "div", 5)(8, "div", 6);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 7)(11, "div");
    \u0275\u0275text(12, " Riyadh, 12 February 2024 ");
    \u0275\u0275element(13, "br")(14, "br");
    \u0275\u0275text(15, "The National Infrastructure Fund (INFRA) today announced that it has signed a Memorandum of Understanding (MoU) with Macquarie Asset Management(Macquarie) focused on increasing long-term institutional and foreign investment in the Kingdom\u2019s high-growth infrastructure market.");
    \u0275\u0275element(16, "br")(17, "br");
    \u0275\u0275text(18, " INFRA, with its unique local market knowledge, will collaborate strategically with Macquarie to identify and progress broad sector infrastructure investment opportunities, including those that advance the Kingdom\u2019s ambitious energy transition objectives in line with the Saudi Green Initiative.");
    \u0275\u0275element(19, "br")(20, "br");
    \u0275\u0275text(21, " INFRA will leverage its extensive expertise and Macquarie\u2019s global experience as the world\u2019s largest infrastructure asset grow long-term private sector participation in the Kingdom\u2019s infrastructure market.");
    \u0275\u0275element(22, "br")(23, "br");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(24, "img", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 9);
    \u0275\u0275element(26, "br");
    \u0275\u0275text(27, "INFRA and Macquarie will also prioritise initiatives to promote the participation of women in the infrastructure sector and the sharing of Environment, Social and Governance (ESG) best practices.");
    \u0275\u0275element(28, "br")(29, "br");
    \u0275\u0275text(30, " INFRA was inaugurated by the National Development Fund (NDF) and established as a supervised entity of NDF upon the enactment of the NIF Law on 6 February 2024.");
    \u0275\u0275element(31, "br")(32, "br");
    \u0275\u0275text(33, " INFRA will be chaired by His Excellency Faisal F. Alibrahim, Minister of Economy and Planning.");
    \u0275\u0275element(34, "br")(35, "br");
    \u0275\u0275text(36, " With the recent enactment of the National Infrastructure Fund Law and is eager to see INFRA build on its track record and expand its impact through this strategic collaboration with Macquarie.");
    \u0275\u0275element(37, "br");
    \u0275\u0275text(38, " INFRA\u2019s collaboration with Macquarie and its global network of relationships is an important step in growing long-term institutional investment across the Kingdom\u2019s infrastructure segment.\u201D");
    \u0275\u0275element(39, "br")(40, "br");
    \u0275\u0275text(41, " Esmail Alsallom, CEO of INFRA added: \u201COur strategic collaboration with Macquarie is a testament to INFRA\u2019s strategic vision.");
    \u0275\u0275element(42, "br")(43, "br");
    \u0275\u0275text(44, " It is an exciting step in expanding INFRA\u2019s innovative approach to financing and positioning as a key partner to global capital providers.");
    \u0275\u0275element(45, "br")(46, "br");
    \u0275\u0275text(47, " We are focused on working together to drive the evolution of the Kingdom's infrastructure market and supporting the energy transition imperative.\u201D");
    \u0275\u0275element(48, "br")(49, "br");
    \u0275\u0275text(50, " Ben Way, Group Head of Macquarie Asset Management, said: \u201CAs the Kingdom\u2019s economic transformation and energy transition gain pace, unlocking private sector investment and innovation in local infrastructure will be vital to achieving the Kingdom\u2019s Vision 2030 ambitions and beyond.");
    \u0275\u0275element(51, "br")(52, "br");
    \u0275\u0275text(53, " We are delighted to be partnering with INFRA to contribute to accelerating investments, aiming to deliver world-class infrastructure that underpins the Kingdom\u2019s dynamic economy and future-looking objectives.\u201D");
    \u0275\u0275element(54, "br")(55, "br");
    \u0275\u0275text(56, " Mark Dooley, Global Head of Green Investments at Macquarie Asset Management, added: \u201CThe opportunity to deepen our relationships with like-minded partners in Saudi Arabia represents a key growth opportunity for our business.");
    \u0275\u0275element(57, "br")(58, "br");
    \u0275\u0275text(59, " The progress achieved in the Kingdom, underpinned by its ambitious and highly capable workforce, has been impressive so far.");
    \u0275\u0275element(60, "br")(61, "br");
    \u0275\u0275text(62, " It is a very exciting time and we are honoured to contribute to the transformative initiatives the Kingdom is undertaking.\u201D ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1(" ", ctx.data.news.newsTitle, " ");
  }
}, styles: ['\n\n.news-section[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: auto;\n  flex-direction: column;\n  background-color: #bfded9;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding-bottom: 3rem;\n}\n.top[_ngcontent-%COMP%] {\n  margin: 6rem;\n}\n.infra2[_ngcontent-%COMP%] {\n  width: 300px;\n  position: absolute;\n  top: 3rem;\n  left: 0;\n}\n.news-title[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 4rem;\n  right: 0rem;\n  color: #18372f;\n  width: 300px !important;\n  font-size: 30px;\n  display: flex;\n  text-align: center;\n  justify-content: flex-start;\n  margin-bottom: 3rem;\n}\n.news-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  display: inline;\n  width: fit-content;\n}\n.news-title[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: 30px;\n  width: 100%;\n  height: 3px;\n  background-color: #18372f;\n}\n.news-content[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  row-gap: 2rem;\n  color: #18372f;\n  margin-top: 3rem;\n}\n.news[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: justify;\n  font-weight: 600;\n  padding-left: 1rem;\n}\n.news-container[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.bottom-news[_ngcontent-%COMP%] {\n  width: 98%;\n  text-align: justify;\n  font-weight: 600;\n  color: #18372f;\n}\n.heading[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 22px;\n  margin-bottom: 2rem;\n}\n.news-img[_ngcontent-%COMP%] {\n  width: 50%;\n  float: right;\n}\n@media (min-width: 320px) {\n  .news-content[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    column-gap: 2rem;\n  }\n  .infra2[_ngcontent-%COMP%] {\n    width: 200px;\n    top: 2rem;\n    margin-bottom: 5rem;\n  }\n  .news-title[_ngcontent-%COMP%] {\n    top: 3rem;\n    right: 50%;\n    transform: translateX(50%);\n    width: 300px !important;\n    font-size: 23px;\n    justify-content: center;\n    margin-bottom: 6rem;\n  }\n  .news-title[_ngcontent-%COMP%]::after {\n    width: 30%;\n  }\n  .news[_ngcontent-%COMP%] {\n    order: 2;\n    width: 90%;\n    padding-left: 0rem;\n  }\n  .bottom-news[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n  .heading[_ngcontent-%COMP%] {\n    font-size: 16px;\n    margin-bottom: 2rem;\n  }\n  .news-img[_ngcontent-%COMP%] {\n    order: 1;\n    width: 90%;\n  }\n}\n@media (min-width: 576px) {\n  .news-content[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    column-gap: 2rem;\n  }\n  .infra2[_ngcontent-%COMP%] {\n    width: 250px;\n    top: 2rem;\n    margin-bottom: 5rem;\n  }\n  .news-title[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 4rem;\n    right: 50%;\n    transform: translateX(50%);\n    width: 300px !important;\n    font-size: 25px;\n    justify-content: center;\n  }\n  .news-title[_ngcontent-%COMP%]::after {\n    width: 32%;\n  }\n  .news[_ngcontent-%COMP%] {\n    order: 2;\n    width: 90%;\n    padding-left: 0rem;\n  }\n  .bottom-news[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n  .heading[_ngcontent-%COMP%] {\n    font-size: 20px;\n    margin-bottom: 2rem;\n  }\n  .news-img[_ngcontent-%COMP%] {\n    order: 1;\n    width: 90%;\n  }\n}\n@media (min-width: 768px) {\n  .news-content[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    align-items: flex-start;\n    gap: 2rem;\n  }\n  .infra2[_ngcontent-%COMP%] {\n    width: 300px;\n    top: 2rem;\n    margin-bottom: 5rem;\n  }\n  .news-title[_ngcontent-%COMP%] {\n    top: 3rem;\n    right: 0rem;\n    transform: translateX(0%);\n    width: 300px !important;\n    font-size: 30px;\n    justify-content: flex-start;\n    margin-bottom: 3rem;\n  }\n  .news-title[_ngcontent-%COMP%]::after {\n    width: 100%;\n  }\n  .news[_ngcontent-%COMP%] {\n    order: 1;\n    width: 90%;\n    padding-left: 1rem;\n  }\n  .bottom-news[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n  .heading[_ngcontent-%COMP%] {\n    font-size: 22px;\n    margin-bottom: 2rem;\n  }\n  .news-img[_ngcontent-%COMP%] {\n    order: 2;\n    width: 40%;\n  }\n}\n@media (min-width: 992px) {\n  .news-content[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    align-items: flex-start;\n    gap: 2rem;\n  }\n  .infra2[_ngcontent-%COMP%] {\n    width: 300px;\n    top: 3rem;\n    margin-bottom: 2rem;\n  }\n  .news-title[_ngcontent-%COMP%] {\n    top: 4rem;\n    right: 0rem;\n    transform: translateX(0%);\n    width: 300px !important;\n    font-size: 30px;\n    justify-content: flex-start;\n    margin-bottom: 3rem;\n  }\n  .news-title[_ngcontent-%COMP%]::after {\n    width: 100%;\n  }\n  .news[_ngcontent-%COMP%] {\n    order: 1;\n    width: 50%;\n    padding-left: 1rem;\n  }\n  .bottom-news[_ngcontent-%COMP%] {\n    width: 98%;\n  }\n  .heading[_ngcontent-%COMP%] {\n    font-size: 22px;\n    margin-bottom: 2rem;\n  }\n  .news-img[_ngcontent-%COMP%] {\n    order: 2;\n    width: 50%;\n  }\n}\n/*# sourceMappingURL=news.component.css.map */'] });
var NewsComponent = _NewsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewsComponent, { className: "NewsComponent", filePath: "src\\app\\components\\news\\news.component.ts", lineNumber: 9 });
})();

// node_modules/ngx-owl-carousel-o/fesm2022/ngx-owl-carousel-o.mjs
var _c0 = (a0, a1, a2, a3, a4) => ({
  "width": a0,
  "transform": a1,
  "transition": a2,
  "padding-left": a3,
  "padding-right": a4
});
var _c1 = (a0, a1, a2, a3) => ({
  "width": a0,
  "margin-left": a1,
  "margin-right": a2,
  "left": a3
});
var _c2 = (a0, a1) => ({
  $implicit: a0,
  index: a1
});
function StageComponent_ng_container_2_2_ng_template_0_Template(rf, ctx) {
}
function StageComponent_ng_container_2_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StageComponent_ng_container_2_2_ng_template_0_Template, 0, 0, "ng-template", 4);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    const slide_r2 = ctx_r3.$implicit;
    const i_r5 = ctx_r3.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", slide_r2.tplRef)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c2, ctx_r2.preparePublicSlide(slide_r2), i_r5));
  }
}
function StageComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 2);
    \u0275\u0275listener("animationend", function StageComponent_ng_container_2_Template_div_animationend_1_listener() {
      const slide_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clear(slide_r2.id));
    });
    \u0275\u0275template(2, StageComponent_ng_container_2_2_Template, 1, 5, null, 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const slide_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", slide_r2.classes)("ngStyle", \u0275\u0275pureFunction4(4, _c1, slide_r2.width + "px", slide_r2.marginL ? slide_r2.marginL + "px" : "", slide_r2.marginR ? slide_r2.marginR + "px" : "", slide_r2.left))("@autoHeight", slide_r2.heightState);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", slide_r2.load);
  }
}
var _c3 = (a0, a1, a2, a3, a4) => ({
  "owl-rtl": a0,
  "owl-loaded": a1,
  "owl-responsive": a2,
  "owl-drag": a3,
  "owl-grab": a4
});
var _c4 = (a0, a1) => ({
  "isMouseDragable": a0,
  "isTouchDragable": a1
});
var _c5 = (a0) => ({
  "disabled": a0
});
var _c6 = (a0, a1) => ({
  "active": a0,
  "owl-dot-text": a1
});
function CarouselComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "owl-stage", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("owlDraggable", \u0275\u0275pureFunction2(3, _c4, ctx_r1.owlDOMData == null ? null : ctx_r1.owlDOMData.isMouseDragable, ctx_r1.owlDOMData == null ? null : ctx_r1.owlDOMData.isTouchDragable))("stageData", ctx_r1.stageData)("slidesData", ctx_r1.slidesData);
  }
}
function CarouselComponent_ng_container_3_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275listener("click", function CarouselComponent_ng_container_3_div_5_Template_div_click_0_listener() {
      const dot_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.moveByDot(dot_r5.id));
    });
    \u0275\u0275element(1, "span", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const dot_r5 = ctx.$implicit;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(2, _c6, dot_r5.active, dot_r5.showInnerContent));
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", dot_r5.innerContent, \u0275\u0275sanitizeHtml);
  }
}
function CarouselComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 6)(2, "div", 7);
    \u0275\u0275listener("click", function CarouselComponent_ng_container_3_Template_div_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.prev());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 8);
    \u0275\u0275listener("click", function CarouselComponent_ng_container_3_Template_div_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.next());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 9);
    \u0275\u0275template(5, CarouselComponent_ng_container_3_div_5_Template, 2, 5, "div", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(7, _c5, ctx_r1.navData == null ? null : ctx_r1.navData.disabled));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(9, _c5, ctx_r1.navData == null ? null : ctx_r1.navData.prev == null ? null : ctx_r1.navData.prev.disabled))("innerHTML", ctx_r1.navData == null ? null : ctx_r1.navData.prev == null ? null : ctx_r1.navData.prev.htmlText, \u0275\u0275sanitizeHtml);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(11, _c5, ctx_r1.navData == null ? null : ctx_r1.navData.next == null ? null : ctx_r1.navData.next.disabled))("innerHTML", ctx_r1.navData == null ? null : ctx_r1.navData.next == null ? null : ctx_r1.navData.next.htmlText, \u0275\u0275sanitizeHtml);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(13, _c5, ctx_r1.dotsData == null ? null : ctx_r1.dotsData.disabled));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.dotsData == null ? null : ctx_r1.dotsData.dots);
  }
}
var OwlCarouselOConfig = class {
  items = 3;
  skip_validateItems = false;
  loop = false;
  center = false;
  rewind = false;
  mouseDrag = true;
  touchDrag = true;
  pullDrag = true;
  freeDrag = false;
  margin = 0;
  stagePadding = 0;
  merge = false;
  mergeFit = true;
  autoWidth = false;
  startPosition = 0;
  rtl = false;
  smartSpeed = 250;
  fluidSpeed = false;
  dragEndSpeed = false;
  responsive = {};
  responsiveRefreshRate = 200;
  // defaults to Navigation
  nav = false;
  navText = ["prev", "next"];
  navSpeed = false;
  slideBy = 1;
  // stage moves on 1 width of slide; if slideBy = 2, stage moves on 2 widths of slide
  dots = true;
  dotsEach = false;
  dotsData = false;
  dotsSpeed = false;
  // defaults to Autoplay
  autoplay = false;
  autoplayTimeout = 5e3;
  autoplayHoverPause = false;
  autoplaySpeed = false;
  autoplayMouseleaveTimeout = 1;
  // defaults to LazyLoading
  lazyLoad = false;
  lazyLoadEager = 0;
  // defaults to Animate
  slideTransition = "";
  animateOut = false;
  animateIn = false;
  // defaults to AutoHeight
  autoHeight = false;
  // defaults to Hash
  URLhashListener = false;
  constructor() {
  }
};
var OwlOptionsMockedTypes = class {
  items = "number";
  skip_validateItems = "boolean";
  loop = "boolean";
  center = "boolean";
  rewind = "boolean";
  mouseDrag = "boolean";
  touchDrag = "boolean";
  pullDrag = "boolean";
  freeDrag = "boolean";
  margin = "number";
  stagePadding = "number";
  merge = "boolean";
  mergeFit = "boolean";
  autoWidth = "boolean";
  startPosition = "number|string";
  rtl = "boolean";
  smartSpeed = "number";
  fluidSpeed = "boolean";
  dragEndSpeed = "number|boolean";
  responsive = {};
  responsiveRefreshRate = "number";
  // defaults to Navigation
  nav = "boolean";
  navText = "string[]";
  navSpeed = "number|boolean";
  slideBy = "number|string";
  // stage moves on 1 width of slide; if slideBy = 2, stage moves on 2 widths of slide
  dots = "boolean";
  dotsEach = "number|boolean";
  dotsData = "boolean";
  dotsSpeed = "number|boolean";
  // defaults to Autoplay
  autoplay = "boolean";
  autoplayTimeout = "number";
  autoplayHoverPause = "boolean";
  autoplaySpeed = "number|boolean";
  autoplayMouseleaveTimeout = "number";
  // defaults to LazyLoading
  lazyLoad = "boolean";
  lazyLoadEager = "number";
  // defaults to Animate
  slideTransition = "string";
  animateOut = "string|boolean";
  animateIn = "string|boolean";
  // defaults to AutoHeight
  autoHeight = "boolean";
  // defaults to Hash
  URLhashListener = "boolean";
  constructor() {
  }
};
var OwlLogger = class _OwlLogger {
  errorHandler;
  constructor(errorHandler) {
    this.errorHandler = errorHandler;
  }
  log(value, ...rest) {
    if (isDevMode()) {
      console.log(value, ...rest);
    }
  }
  error(error) {
    this.errorHandler.handleError(error);
  }
  warn(value, ...rest) {
    console.warn(value, ...rest);
  }
  static \u0275fac = function OwlLogger_Factory(t) {
    return new (t || _OwlLogger)(\u0275\u0275inject(ErrorHandler));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _OwlLogger,
    factory: _OwlLogger.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OwlLogger, [{
    type: Injectable
  }], () => [{
    type: ErrorHandler
  }], null);
})();
var Type;
(function(Type2) {
  Type2["Event"] = "event";
  Type2["State"] = "state";
})(Type || (Type = {}));
var Width;
(function(Width2) {
  Width2["Default"] = "default";
  Width2["Inner"] = "inner";
  Width2["Outer"] = "outer";
})(Width || (Width = {}));
var CarouselService = class _CarouselService {
  logger;
  /**
   * Subject for passing data needed for managing View
   */
  _viewSettingsShipper$ = new Subject();
  /**
   * Subject for notification when the carousel got initializes
   */
  _initializedCarousel$ = new Subject();
  /**
   * Subject for notification when the carousel's settings start changinf
   */
  _changeSettingsCarousel$ = new Subject();
  /**
   * Subject for notification when the carousel's settings have changed
   */
  _changedSettingsCarousel$ = new Subject();
  /**
   * Subject for notification when the carousel starts translating or moving
   */
  _translateCarousel$ = new Subject();
  /**
   * Subject for notification when the carousel stopped translating or moving
   */
  _translatedCarousel$ = new Subject();
  /**
   * Subject for notification when the carousel's rebuilding caused by 'resize' event starts
   */
  _resizeCarousel$ = new Subject();
  /**
   * Subject for notification  when the carousel's rebuilding caused by 'resize' event is ended
   */
  _resizedCarousel$ = new Subject();
  /**
   * Subject for notification when the refresh of carousel starts
   */
  _refreshCarousel$ = new Subject();
  /**
   * Subject for notification when the refresh of carousel is ended
   */
  _refreshedCarousel$ = new Subject();
  /**
   * Subject for notification when the dragging of carousel starts
   */
  _dragCarousel$ = new Subject();
  /**
   * Subject for notification when the dragging of carousel is ended
   */
  _draggedCarousel$ = new Subject();
  /**
   * Current settings for the carousel.
   */
  settings = {
    items: 0
  };
  /**
   * Initial data for setting classes to element .owl-carousel
   */
  owlDOMData = {
    rtl: false,
    isResponsive: false,
    isRefreshed: false,
    isLoaded: false,
    isLoading: false,
    isMouseDragable: false,
    isGrab: false,
    isTouchDragable: false
  };
  /**
   * Initial data of .owl-stage
   */
  stageData = {
    transform: "translate3d(0px,0px,0px)",
    transition: "0s",
    width: 0,
    paddingL: 0,
    paddingR: 0
  };
  /**
   *  Data of every slide
   */
  slidesData;
  /**
   * Data of navigation block
   */
  navData;
  /**
   * Data of dots block
   */
  dotsData;
  /**
   * Carousel width
   */
  _width;
  /**
   * All real items.
   */
  _items = [];
  // is equal to this.slides
  /**
   * Array with width of every slide.
   */
  _widths = [];
  /**
   * Currently suppressed events to prevent them from beeing retriggered.
   */
  _supress = {};
  /**
   * References to the running plugins of this carousel.
   */
  _plugins = {};
  /**
   * Absolute current position.
   */
  _current = null;
  /**
   * All cloned items.
   */
  _clones = [];
  /**
   * Merge values of all items.
   * @todo Maybe this could be part of a plugin.
   */
  _mergers = [];
  /**
   * Animation speed in milliseconds.
   */
  _speed = null;
  /**
   * Coordinates of all items in pixel.
   * @todo The name of this member is missleading.
   */
  _coordinates = [];
  /**
   * Current breakpoint.
   * @todo Real media queries would be nice.
   */
  _breakpoint = null;
  /**
   * Prefix for id of cloned slides
   */
  clonedIdPrefix = "cloned-";
  /**
   * Current options set by the caller including defaults.
   */
  _options = {};
  /**
   * Invalidated parts within the update process.
   */
  _invalidated = {};
  // Is needed for tests
  get invalidated() {
    return this._invalidated;
  }
  /**
   * Current state information and their tags.
   */
  _states = {
    current: {},
    tags: {
      initializing: ["busy"],
      animating: ["busy"],
      dragging: ["interacting"]
    }
  };
  // is needed for tests
  get states() {
    return this._states;
  }
  /**
       * Ordered list of workers for the update process.
   */
  _pipe = [
    // {
    //   filter: ['width', 'settings'],
    //   run: () => {
    //     this._width = this.carouselWindowWidth;
    //   }
    // },
    {
      filter: ["width", "items", "settings"],
      run: (cache) => {
        cache.current = this._items && this._items[this.relative(this._current)]?.id;
      }
    },
    // {
    //   filter: ['items', 'settings'],
    //   run: function() {
    //     // this.$stage.children('.cloned').remove();
    //   }
    // },
    {
      filter: ["width", "items", "settings"],
      run: (cache) => {
        const margin = this.settings.margin || "", grid = !this.settings.autoWidth, rtl = this.settings.rtl, css = {
          "margin-left": rtl ? margin : "",
          "margin-right": rtl ? "" : margin
        };
        if (!grid) {
          this.slidesData.forEach((slide) => {
            slide.marginL = css["margin-left"];
            slide.marginR = css["margin-right"];
          });
        }
        cache.css = css;
      }
    },
    {
      filter: ["width", "items", "settings"],
      run: (cache) => {
        const width = +(this.width() / this.settings.items).toFixed(3) - this.settings.margin, grid = !this.settings.autoWidth, widths = [];
        let merge2 = null, iterator = this._items.length;
        cache.items = {
          merge: false,
          width
        };
        while (iterator-- > 0) {
          merge2 = this._mergers[iterator];
          merge2 = this.settings.mergeFit && Math.min(merge2, this.settings.items) || merge2;
          cache.items.merge = merge2 > 1 || cache.items.merge;
          widths[iterator] = !grid ? this._items[iterator].width ? this._items[iterator].width : width : width * merge2;
        }
        this._widths = widths;
        this.slidesData.forEach((slide, i) => {
          slide.width = this._widths[i];
          slide.marginR = cache.css["margin-right"];
          slide.marginL = cache.css["margin-left"];
        });
      }
    },
    {
      filter: ["items", "settings"],
      run: () => {
        const clones = [], items = this._items, settings = this.settings, view = Math.max(settings.items * 2, 4), size = Math.ceil(items.length / 2) * 2;
        let append = [], prepend = [], repeat = settings.loop && items.length ? settings.rewind ? view : Math.max(view, size) : 0;
        repeat /= 2;
        while (repeat-- > 0) {
          clones.push(this.normalize(clones.length / 2, true));
          append.push(__spreadValues({}, this.slidesData[clones[clones.length - 1]]));
          clones.push(this.normalize(items.length - 1 - (clones.length - 1) / 2, true));
          prepend.unshift(__spreadValues({}, this.slidesData[clones[clones.length - 1]]));
        }
        this._clones = clones;
        append = append.map((slide) => {
          slide.id = `${this.clonedIdPrefix}${slide.id}`;
          slide.isActive = false;
          slide.isCloned = true;
          return slide;
        });
        prepend = prepend.map((slide) => {
          slide.id = `${this.clonedIdPrefix}${slide.id}`;
          slide.isActive = false;
          slide.isCloned = true;
          return slide;
        });
        this.slidesData = prepend.concat(this.slidesData).concat(append);
      }
    },
    {
      filter: ["width", "items", "settings"],
      run: () => {
        const rtl = this.settings.rtl ? 1 : -1, size = this._clones.length + this._items.length, coordinates = [];
        let iterator = -1, previous = 0, current = 0;
        while (++iterator < size) {
          previous = coordinates[iterator - 1] || 0;
          current = this._widths[this.relative(iterator)] + this.settings.margin;
          coordinates.push(previous + current * rtl);
        }
        this._coordinates = coordinates;
      }
    },
    {
      filter: ["width", "items", "settings"],
      run: () => {
        const padding = this.settings.stagePadding, coordinates = this._coordinates, css = {
          "width": Math.ceil(Math.abs(coordinates[coordinates.length - 1])) + padding * 2,
          "padding-left": padding || "",
          "padding-right": padding || ""
        };
        this.stageData.width = css.width;
        this.stageData.paddingL = css["padding-left"];
        this.stageData.paddingR = css["padding-right"];
      }
    },
    {
      //   filter: [ 'width', 'items', 'settings' ],
      //   run: cache => {
      // 		// this method sets the width for every slide, but I set it in different way earlier
      // 		const grid = !this.settings.autoWidth,
      // 		items = this.$stage.children(); // use this.slidesData
      //     let iterator = this._coordinates.length;
      //     if (grid && cache.items.merge) {
      //       while (iterator--) {
      //         cache.css.width = this._widths[this.relative(iterator)];
      //         items.eq(iterator).css(cache.css);
      //       }
      //     } else if (grid) {
      //       cache.css.width = cache.items.width;
      //       items.css(cache.css);
      //     }
      //   }
      // }, {
      //   filter: [ 'items' ],
      //   run: function() {
      //     this._coordinates.length < 1 && this.$stage.removeAttr('style');
      //   }
      // }, {
      filter: ["width", "items", "settings"],
      run: (cache) => {
        let current = cache.current ? this.slidesData.findIndex((slide) => slide.id === cache.current) : 0;
        current = Math.max(this.minimum(), Math.min(this.maximum(), current));
        this.reset(current);
      }
    },
    {
      filter: ["position"],
      run: () => {
        this.animate(this.coordinates(this._current));
      }
    },
    {
      filter: ["width", "position", "items", "settings"],
      run: () => {
        const rtl = this.settings.rtl ? 1 : -1, padding = this.settings.stagePadding * 2, matches = [];
        let begin, end, inner, outer, i, n;
        begin = this.coordinates(this.current());
        if (typeof begin === "number") {
          begin += padding;
        } else {
          begin = 0;
        }
        end = begin + this.width() * rtl;
        if (rtl === -1 && this.settings.center) {
          const result = this._coordinates.filter((element) => {
            return this.settings.items % 2 === 1 ? element >= begin : element > begin;
          });
          begin = result.length ? result[result.length - 1] : begin;
        }
        for (i = 0, n = this._coordinates.length; i < n; i++) {
          inner = Math.ceil(this._coordinates[i - 1] || 0);
          outer = Math.ceil(Math.abs(this._coordinates[i]) + padding * rtl);
          if (this._op(inner, "<=", begin) && this._op(inner, ">", end) || this._op(outer, "<", begin) && this._op(outer, ">", end)) {
            matches.push(i);
          }
        }
        this.slidesData.forEach((slide) => {
          slide.isActive = false;
          return slide;
        });
        matches.forEach((item) => {
          this.slidesData[item].isActive = true;
        });
        if (this.settings.center) {
          this.slidesData.forEach((slide) => {
            slide.isCentered = false;
            return slide;
          });
          this.slidesData[this.current()].isCentered = true;
        }
      }
    }
  ];
  constructor(logger) {
    this.logger = logger;
  }
  /**
   * Makes _viewSettingsShipper$ Subject become Observable
   * @returns Observable of _viewSettingsShipper$ Subject
   */
  getViewCurSettings() {
    return this._viewSettingsShipper$.asObservable();
  }
  /**
   * Makes _initializedCarousel$ Subject become Observable
   * @returns Observable of _initializedCarousel$ Subject
   */
  getInitializedState() {
    return this._initializedCarousel$.asObservable();
  }
  /**
   * Makes _changeSettingsCarousel$ Subject become Observable
   * @returns Observable of _changeSettingsCarousel$ Subject
   */
  getChangeState() {
    return this._changeSettingsCarousel$.asObservable();
  }
  /**
   * Makes _changedSettingsCarousel$ Subject become Observable
   * @returns Observable of _changedSettingsCarousel$ Subject
   */
  getChangedState() {
    return this._changedSettingsCarousel$.asObservable();
  }
  /**
   * Makes _translateCarousel$ Subject become Observable
   * @returns Observable of _translateCarousel$ Subject
   */
  getTranslateState() {
    return this._translateCarousel$.asObservable();
  }
  /**
   * Makes _translatedCarousel$ Subject become Observable
   * @returns Observable of _translatedCarousel$ Subject
   */
  getTranslatedState() {
    return this._translatedCarousel$.asObservable();
  }
  /**
   * Makes _resizeCarousel$ Subject become Observable
   * @returns Observable of _resizeCarousel$ Subject
   */
  getResizeState() {
    return this._resizeCarousel$.asObservable();
  }
  /**
   * Makes _resizedCarousel$ Subject become Observable
   * @returns Observable of _resizedCarousel$ Subject
   */
  getResizedState() {
    return this._resizedCarousel$.asObservable();
  }
  /**
   * Makes _refreshCarousel$ Subject become Observable
   * @returns Observable of _refreshCarousel$ Subject
   */
  getRefreshState() {
    return this._refreshCarousel$.asObservable();
  }
  /**
   * Makes _refreshedCarousel$ Subject become Observable
   * @returns Observable of _refreshedCarousel$ Subject
   */
  getRefreshedState() {
    return this._refreshedCarousel$.asObservable();
  }
  /**
   * Makes _dragCarousel$ Subject become Observable
   * @returns Observable of _dragCarousel$ Subject
   */
  getDragState() {
    return this._dragCarousel$.asObservable();
  }
  /**
   * Makes _draggedCarousel$ Subject become Observable
   * @returns Observable of _draggedCarousel$ Subject
   */
  getDraggedState() {
    return this._draggedCarousel$.asObservable();
  }
  /**
   * Setups custom options expanding default options
   * @param options custom options
   */
  setOptions(options) {
    const configOptions = new OwlCarouselOConfig();
    const checkedOptions = this._validateOptions(options, configOptions);
    this._options = __spreadValues(__spreadValues({}, configOptions), checkedOptions);
  }
  /**
   * Checks whether user's option are set properly. Cheking is based on typings;
   * @param options options set by user
   * @param configOptions default options
   * @returns checked and modified (if it's needed) user's options
   *
   * Notes:
   * 	- if user set option with wrong type, it'll be written in console
   */
  _validateOptions(options, configOptions) {
    const checkedOptions = __spreadValues({}, options);
    const mockedTypes = new OwlOptionsMockedTypes();
    const setRightOption = (type, key) => {
      this.logger.log(`options.${key} must be type of ${type}; ${key}=${options[key]} skipped to defaults: ${key}=${configOptions[key]}`);
      return configOptions[key];
    };
    for (const key in checkedOptions) {
      if (checkedOptions.hasOwnProperty(key)) {
        if (mockedTypes[key] === "number") {
          if (this._isNumeric(checkedOptions[key])) {
            checkedOptions[key] = +checkedOptions[key];
            checkedOptions[key] = key === "items" ? this._validateItems(checkedOptions[key], checkedOptions.skip_validateItems) : checkedOptions[key];
          } else {
            checkedOptions[key] = setRightOption(mockedTypes[key], key);
          }
        } else if (mockedTypes[key] === "boolean" && typeof checkedOptions[key] !== "boolean") {
          checkedOptions[key] = setRightOption(mockedTypes[key], key);
        } else if (mockedTypes[key] === "number|boolean" && !this._isNumberOrBoolean(checkedOptions[key])) {
          checkedOptions[key] = setRightOption(mockedTypes[key], key);
        } else if (mockedTypes[key] === "number|string" && !this._isNumberOrString(checkedOptions[key])) {
          checkedOptions[key] = setRightOption(mockedTypes[key], key);
        } else if (mockedTypes[key] === "string|boolean" && !this._isStringOrBoolean(checkedOptions[key])) {
          checkedOptions[key] = setRightOption(mockedTypes[key], key);
        } else if (mockedTypes[key] === "string[]") {
          if (Array.isArray(checkedOptions[key])) {
            let isString = false;
            checkedOptions[key].forEach((element) => {
              isString = typeof element === "string" ? true : false;
            });
            if (!isString) {
              checkedOptions[key] = setRightOption(mockedTypes[key], key);
            }
            ;
          } else {
            checkedOptions[key] = setRightOption(mockedTypes[key], key);
          }
        }
      }
    }
    return checkedOptions;
  }
  /**
   * Checks the option `items` set by user and if it bigger than number of slides, the function returns number of slides
   * @param items option items set by user
   * @param skip_validateItems option `skip_validateItems` set by user
   * @returns right number of items
   */
  _validateItems(items, skip_validateItems) {
    let result = items;
    if (items > this._items.length) {
      if (skip_validateItems) {
        this.logger.log("The option 'items' in your options is bigger than the number of slides. The navigation got disabled");
      } else {
        result = this._items.length;
        this.logger.log("The option 'items' in your options is bigger than the number of slides. This option is updated to the current number of slides and the navigation got disabled");
      }
    } else {
      if (items === this._items.length && (this.settings.dots || this.settings.nav)) {
        this.logger.log("Option 'items' in your options is equal to the number of slides. So the navigation got disabled");
      }
    }
    return result;
  }
  /**
   * Set current width of carousel
   * @param width width of carousel Window
   */
  setCarouselWidth(width) {
    this._width = width;
  }
  /**
   * Setups the current settings.
   * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
   * @todo Support for media queries by using `matchMedia` would be nice.
   * @param carouselWidth width of carousel
   * @param slides array of slides
   * @param options options set by user
   */
  setup(carouselWidth, slides, options) {
    this.setCarouselWidth(carouselWidth);
    this.setItems(slides);
    this._defineSlidesData();
    this.setOptions(options);
    this.settings = __spreadValues({}, this._options);
    this.setOptionsForViewport();
    this._trigger("change", {
      property: {
        name: "settings",
        value: this.settings
      }
    });
    this.invalidate("settings");
    this._trigger("changed", {
      property: {
        name: "settings",
        value: this.settings
      }
    });
  }
  /**
   * Set options for current viewport
   */
  setOptionsForViewport() {
    const viewport = this._width, overwrites = this._options.responsive;
    let match = -1;
    if (!Object.keys(overwrites).length) {
      return;
    }
    if (!viewport) {
      this.settings.items = 1;
      return;
    }
    for (const key in overwrites) {
      if (overwrites.hasOwnProperty(key)) {
        if (+key <= viewport && +key > match) {
          match = Number(key);
        }
      }
    }
    this.settings = __spreadProps(__spreadValues(__spreadValues({}, this._options), overwrites[match]), {
      items: overwrites[match] && overwrites[match].items ? this._validateItems(overwrites[match].items, this._options.skip_validateItems) : this._options.items
    });
    delete this.settings.responsive;
    this.owlDOMData.isResponsive = true;
    this.owlDOMData.isMouseDragable = this.settings.mouseDrag;
    this.owlDOMData.isTouchDragable = this.settings.touchDrag;
    const mergers = [];
    this._items.forEach((item) => {
      const mergeN = this.settings.merge ? item.dataMerge : 1;
      mergers.push(mergeN);
    });
    this._mergers = mergers;
    this._breakpoint = match;
    this.invalidate("settings");
  }
  /**
   * Initializes the carousel.
   * @param slides array of CarouselSlideDirective
   */
  initialize(slides) {
    this.enter("initializing");
    this.owlDOMData.rtl = this.settings.rtl;
    if (this._mergers.length) {
      this._mergers = [];
    }
    slides.forEach((item) => {
      const mergeN = this.settings.merge ? item.dataMerge : 1;
      this._mergers.push(mergeN);
    });
    this._clones = [];
    this.reset(this._isNumeric(this.settings.startPosition) ? +this.settings.startPosition : 0);
    this.invalidate("items");
    this.refresh();
    this.owlDOMData.isLoaded = true;
    this.owlDOMData.isMouseDragable = this.settings.mouseDrag;
    this.owlDOMData.isTouchDragable = this.settings.touchDrag;
    this.sendChanges();
    this.leave("initializing");
    this._trigger("initialized");
  }
  /**
   * Sends all data needed for View
   */
  sendChanges() {
    this._viewSettingsShipper$.next({
      owlDOMData: this.owlDOMData,
      stageData: this.stageData,
      slidesData: this.slidesData,
      navData: this.navData,
      dotsData: this.dotsData
    });
  }
  /**
   * Updates option logic if necessery
   */
  _optionsLogic() {
    if (this.settings.autoWidth) {
      this.settings.stagePadding = 0;
      this.settings.merge = false;
    }
  }
  /**
   * Updates the view
   */
  update() {
    let i = 0;
    const n = this._pipe.length, filter2 = (item) => this._invalidated[item], cache = {};
    while (i < n) {
      const filteredPipe = this._pipe[i].filter.filter(filter2);
      if (this._invalidated.all || filteredPipe.length > 0) {
        this._pipe[i].run(cache);
      }
      i++;
    }
    this.slidesData.forEach((slide) => slide.classes = this.setCurSlideClasses(slide));
    this.sendChanges();
    this._invalidated = {};
    if (!this.is("valid")) {
      this.enter("valid");
    }
  }
  /**
   * Gets the width of the view.
   * @param [dimension=Width.Default] The dimension to return
   * @returns The width of the view in pixel.
   */
  width(dimension) {
    dimension = dimension || Width.Default;
    switch (dimension) {
      case Width.Inner:
      case Width.Outer:
        return this._width;
      default:
        return this._width - this.settings.stagePadding * 2 + this.settings.margin;
    }
  }
  /**
   * Refreshes the carousel primarily for adaptive purposes.
   */
  refresh() {
    this.enter("refreshing");
    this._trigger("refresh");
    this._defineSlidesData();
    this.setOptionsForViewport();
    this._optionsLogic();
    this.update();
    this.leave("refreshing");
    this._trigger("refreshed");
  }
  /**
   * Checks window `resize` event.
   * @param curWidth width of .owl-carousel
   */
  onResize(curWidth) {
    if (!this._items.length) {
      return false;
    }
    this.setCarouselWidth(curWidth);
    this.enter("resizing");
    this._trigger("resize");
    this.invalidate("width");
    this.refresh();
    this.leave("resizing");
    this._trigger("resized");
  }
  /**
   * Prepares data for dragging carousel. It starts after firing `touchstart` and `mousedown` events.
   * @todo Horizontal swipe threshold as option
   * @todo #261
   * @param event - The event arguments.
   * @returns stage - object with 'x' and 'y' coordinates of .owl-stage
   */
  prepareDragging(event) {
    let stage = null, transformArr;
    transformArr = this.stageData.transform.replace(/.*\(|\)| |[^,-\d]\w|\)/g, "").split(",");
    stage = {
      x: +transformArr[0],
      y: +transformArr[1]
    };
    if (this.is("animating")) {
      this.invalidate("position");
    }
    if (event.type === "mousedown") {
      this.owlDOMData.isGrab = true;
    }
    this.speed(0);
    return stage;
  }
  /**
   * Enters into a 'dragging' state
   */
  enterDragging() {
    this.enter("dragging");
    this._trigger("drag");
  }
  /**
   * Defines new coords for .owl-stage while dragging it
   * @todo #261
   * @param event the event arguments.
   * @param dragData initial data got after starting dragging
   * @returns coords or false
   */
  defineNewCoordsDrag(event, dragData) {
    let minimum = null, maximum = null, pull = null;
    const delta = this.difference(dragData.pointer, this.pointer(event)), stage = this.difference(dragData.stage.start, delta);
    if (!this.is("dragging")) {
      return false;
    }
    if (this.settings.loop) {
      minimum = this.coordinates(this.minimum());
      maximum = +this.coordinates(this.maximum() + 1) - minimum;
      stage.x = ((stage.x - minimum) % maximum + maximum) % maximum + minimum;
    } else {
      minimum = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
      maximum = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
      pull = this.settings.pullDrag ? -1 * delta.x / 5 : 0;
      stage.x = Math.max(Math.min(stage.x, minimum + pull), maximum + pull);
    }
    return stage;
  }
  /**
   * Finishes dragging of carousel when `touchend` and `mouseup` events fire.
   * @todo #261
   * @todo Threshold for click event
   * @param event the event arguments.
   * @param dragObj the object with dragging settings and states
   * @param clickAttacher function which attaches click handler to slide or its children elements in order to prevent event bubling
   */
  finishDragging(event, dragObj, clickAttacher) {
    const directions = ["right", "left"], delta = this.difference(dragObj.pointer, this.pointer(event)), stage = dragObj.stage.current, direction = directions[+(this.settings.rtl ? delta.x < +this.settings.rtl : delta.x > +this.settings.rtl)];
    let currentSlideI, current, newCurrent;
    if (delta.x !== 0 && this.is("dragging") || !this.is("valid")) {
      this.speed(+this.settings.dragEndSpeed || this.settings.smartSpeed);
      currentSlideI = this.closest(stage.x, delta.x !== 0 ? direction : dragObj.direction);
      current = this.current();
      newCurrent = this.current(currentSlideI === -1 ? void 0 : currentSlideI);
      if (current !== newCurrent) {
        this.invalidate("position");
        this.update();
      }
      dragObj.direction = direction;
      if (Math.abs(delta.x) > 3 || (/* @__PURE__ */ new Date()).getTime() - dragObj.time > 300) {
        clickAttacher();
      }
    }
    if (!this.is("dragging")) {
      return;
    }
    this.leave("dragging");
    this._trigger("dragged");
  }
  /**
   * Gets absolute position of the closest item for a coordinate.
   * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
   * @param coordinate The coordinate in pixel.
   * @param direction The direction to check for the closest item. Ether `left` or `right`.
   * @returns The absolute position of the closest item.
   */
  closest(coordinate, direction) {
    const pull = 30, width = this.width();
    let coordinates = this.coordinates(), position = -1;
    if (this.settings.center) {
      coordinates = coordinates.map((item) => {
        if (item === 0) {
          item += 1e-6;
        }
        return item;
      });
    }
    for (let i = 0; i < coordinates.length; i++) {
      if (direction === "left" && coordinate > coordinates[i] - pull && coordinate < coordinates[i] + pull) {
        position = i;
      } else if (direction === "right" && coordinate > coordinates[i] - width - pull && coordinate < coordinates[i] - width + pull) {
        position = i + 1;
      } else if (this._op(coordinate, "<", coordinates[i]) && this._op(coordinate, ">", coordinates[i + 1] || coordinates[i] - width)) {
        position = direction === "left" ? i + 1 : i;
      } else if (direction === null && coordinate > coordinates[i] - pull && coordinate < coordinates[i] + pull) {
        position = i;
      }
      if (position !== -1) {
        break;
      }
      ;
    }
    if (!this.settings.loop) {
      if (this._op(coordinate, ">", coordinates[this.minimum()])) {
        position = coordinate = this.minimum();
      } else if (this._op(coordinate, "<", coordinates[this.maximum()])) {
        position = coordinate = this.maximum();
      }
    }
    return position;
  }
  /**
   * Animates the stage.
   * @todo #270
   * @param coordinate The coordinate in pixels.
   */
  animate(coordinate) {
    const animate2 = this.speed() > 0;
    if (this.is("animating")) {
      this.onTransitionEnd();
    }
    if (animate2) {
      this.enter("animating");
      this._trigger("translate");
    }
    this.stageData.transform = "translate3d(" + coordinate + "px,0px,0px)";
    this.stageData.transition = this.speed() / 1e3 + "s" + (this.settings.slideTransition ? " " + this.settings.slideTransition : "");
  }
  /**
   * Checks whether the carousel is in a specific state or not.
   * @param state The state to check.
   * @returns The flag which indicates if the carousel is busy.
   */
  is(state2) {
    return this._states.current[state2] && this._states.current[state2] > 0;
  }
  /**
   * Sets the absolute position of the current item.
   * @param position The new absolute position or nothing to leave it unchanged.
   * @returns The absolute position of the current item.
   */
  current(position) {
    if (position === void 0) {
      return this._current;
    }
    if (this._items.length === 0) {
      return void 0;
    }
    position = this.normalize(position);
    if (this._current !== position) {
      const event = this._trigger("change", {
        property: {
          name: "position",
          value: position
        }
      });
      this._current = position;
      this.invalidate("position");
      this._trigger("changed", {
        property: {
          name: "position",
          value: this._current
        }
      });
    }
    return this._current;
  }
  /**
   * Invalidates the given part of the update routine.
   * @param part The part to invalidate.
   * @returns The invalidated parts.
   */
  invalidate(part) {
    if (typeof part === "string") {
      this._invalidated[part] = true;
      if (this.is("valid")) {
        this.leave("valid");
      }
    }
    return Object.keys(this._invalidated);
  }
  /**
   * Resets the absolute position of the current item.
   * @param position the absolute position of the new item.
   */
  reset(position) {
    position = this.normalize(position);
    if (position === void 0) {
      return;
    }
    this._speed = 0;
    this._current = position;
    this._suppress(["translate", "translated"]);
    this.animate(this.coordinates(position));
    this._release(["translate", "translated"]);
  }
  /**
   * Normalizes an absolute or a relative position of an item.
   * @param position The absolute or relative position to normalize.
   * @param relative Whether the given position is relative or not.
   * @returns The normalized position.
   */
  normalize(position, relative) {
    const n = this._items.length, m = relative ? 0 : this._clones.length;
    if (!this._isNumeric(position) || n < 1) {
      position = void 0;
    } else if (position < 0 || position >= n + m) {
      position = ((position - m / 2) % n + n) % n + m / 2;
    }
    return position;
  }
  /**
   * Converts an absolute position of an item into a relative one.
   * @param position The absolute position to convert.
   * @returns The converted position.
   */
  relative(position) {
    position -= this._clones.length / 2;
    return this.normalize(position, true);
  }
  /**
   * Gets the maximum position for the current item.
   * @param relative Whether to return an absolute position or a relative position.
   * @returns number of maximum position
   */
  maximum(relative = false) {
    const settings = this.settings;
    let maximum = this._coordinates.length, iterator, reciprocalItemsWidth, elementWidth;
    if (settings.loop) {
      maximum = this._clones.length / 2 + this._items.length - 1;
    } else if (settings.autoWidth || settings.merge) {
      iterator = this._items.length;
      reciprocalItemsWidth = this.slidesData[--iterator].width;
      elementWidth = this._width;
      while (iterator-- > 0) {
        reciprocalItemsWidth += +this.slidesData[iterator].width + this.settings.margin;
        if (reciprocalItemsWidth > elementWidth) {
          break;
        }
      }
      maximum = iterator + 1;
    } else if (settings.center) {
      maximum = this._items.length - 1;
    } else {
      maximum = this._items.length - settings.items;
    }
    if (relative) {
      maximum -= this._clones.length / 2;
    }
    return Math.max(maximum, 0);
  }
  /**
   * Gets the minimum position for the current item.
   * @param relative Whether to return an absolute position or a relative position.
   * @returns number of minimum position
   */
  minimum(relative = false) {
    return relative ? 0 : this._clones.length / 2;
  }
  /**
   * Gets an item at the specified relative position.
   * @param position The relative position of the item.
   * @returns The item at the given position or all items if no position was given.
   */
  items(position) {
    if (position === void 0) {
      return this._items.slice();
    }
    position = this.normalize(position, true);
    return [this._items[position]];
  }
  /**
   * Gets an item at the specified relative position.
   * @param position The relative position of the item.
   * @returns The item at the given position or all items if no position was given.
   */
  mergers(position) {
    if (position === void 0) {
      return this._mergers.slice();
    }
    position = this.normalize(position, true);
    return this._mergers[position];
  }
  /**
   * Gets the absolute positions of clones for an item.
   * @param position The relative position of the item.
   * @returns The absolute positions of clones for the item or all if no position was given.
   */
  clones(position) {
    const odd = this._clones.length / 2, even = odd + this._items.length, map2 = (index) => index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2;
    if (position === void 0) {
      return this._clones.map((v, i) => map2(i));
    }
    return this._clones.map((v, i) => v === position ? map2(i) : null).filter((item) => item);
  }
  /**
   * Sets the current animation speed.
   * @param speed The animation speed in milliseconds or nothing to leave it unchanged.
   * @returns The current animation speed in milliseconds.
   */
  speed(speed) {
    if (speed !== void 0) {
      this._speed = speed;
    }
    return this._speed;
  }
  /**
   * Gets the coordinate of an item.
   * @todo The name of this method is missleanding.
   * @param position The absolute position of the item within `minimum()` and `maximum()`.
   * @returns The coordinate of the item in pixel or all coordinates.
   */
  coordinates(position) {
    let multiplier = 1, newPosition = position - 1, coordinate, result;
    if (position === void 0) {
      result = this._coordinates.map((item, index) => {
        return this.coordinates(index);
      });
      return result;
    }
    if (this.settings.center) {
      if (this.settings.rtl) {
        multiplier = -1;
        newPosition = position + 1;
      }
      coordinate = this._coordinates[position];
      coordinate += (this.width() - coordinate + (this._coordinates[newPosition] || 0)) / 2 * multiplier;
    } else {
      coordinate = this._coordinates[newPosition] || 0;
    }
    coordinate = Math.ceil(coordinate);
    return coordinate;
  }
  /**
   * Calculates the speed for a translation.
   * @param from The absolute position of the start item.
   * @param to The absolute position of the target item.
   * @param factor [factor=undefined] - The time factor in milliseconds.
   * @returns The time in milliseconds for the translation.
   */
  _duration(from2, to, factor) {
    if (factor === 0) {
      return 0;
    }
    return Math.min(Math.max(Math.abs(to - from2), 1), 6) * Math.abs(+factor || this.settings.smartSpeed);
  }
  /**
   * Slides to the specified item.
   * @param position The position of the item.
   * @param speed The time in milliseconds for the transition.
   */
  to(position, speed) {
    let current = this.current(), revert = null, distance = position - this.relative(current), maximum = this.maximum(), delayForLoop = 0;
    const direction = +(distance > 0) - +(distance < 0), items = this._items.length, minimum = this.minimum();
    if (this.settings.loop) {
      if (!this.settings.rewind && Math.abs(distance) > items / 2) {
        distance += direction * -1 * items;
      }
      position = current + distance;
      revert = ((position - minimum) % items + items) % items + minimum;
      if (revert !== position && revert - distance <= maximum && revert - distance > 0) {
        current = revert - distance;
        position = revert;
        delayForLoop = 30;
        this.reset(current);
        this.sendChanges();
      }
    } else if (this.settings.rewind) {
      maximum += 1;
      position = (position % maximum + maximum) % maximum;
    } else {
      position = Math.max(minimum, Math.min(maximum, position));
    }
    setTimeout(() => {
      this.speed(this._duration(current, position, speed));
      this.current(position);
      this.update();
    }, delayForLoop);
  }
  /**
   * Slides to the next item.
   * @param speed The time in milliseconds for the transition.
   */
  next(speed) {
    speed = speed || false;
    this.to(this.relative(this.current()) + 1, speed);
  }
  /**
   * Slides to the previous item.
   * @param speed The time in milliseconds for the transition.
   */
  prev(speed) {
    speed = speed || false;
    this.to(this.relative(this.current()) - 1, speed);
  }
  /**
   * Handles the end of an animation.
   * @param event - The event arguments.
   */
  onTransitionEnd(event) {
    if (event !== void 0) {
      return false;
    }
    this.leave("animating");
    this._trigger("translated");
  }
  /**
   * Gets viewport width.
   * @returns - The width in pixel.
   */
  _viewport() {
    let width;
    if (this._width) {
      width = this._width;
    } else {
      this.logger.log("Can not detect viewport width.");
    }
    return width;
  }
  /**
   * Sets _items
   * @param content The list of slides put into CarouselSlideDirectives.
   */
  setItems(content) {
    this._items = content;
  }
  /**
   * Sets slidesData using this._items
   */
  _defineSlidesData() {
    let loadMap;
    if (this.slidesData && this.slidesData.length) {
      loadMap = /* @__PURE__ */ new Map();
      this.slidesData.forEach((item) => {
        if (item.load) {
          loadMap.set(item.id, item.load);
        }
      });
    }
    this.slidesData = this._items.map((slide) => {
      return {
        id: `${slide.id}`,
        isActive: false,
        tplRef: slide.tplRef,
        dataMerge: slide.dataMerge,
        width: 0,
        isCloned: false,
        load: loadMap ? loadMap.get(slide.id) : false,
        hashFragment: slide.dataHash
      };
    });
  }
  /**
   * Sets current classes for slide
   * @param slide Slide of carousel
   * @returns object with names of css-classes which are keys and true/false values
   */
  setCurSlideClasses(slide) {
    const currentClasses = {
      "active": slide.isActive,
      "center": slide.isCentered,
      "cloned": slide.isCloned,
      "animated": slide.isAnimated,
      "owl-animated-in": slide.isDefAnimatedIn,
      "owl-animated-out": slide.isDefAnimatedOut
    };
    if (this.settings.animateIn) {
      currentClasses[this.settings.animateIn] = slide.isCustomAnimatedIn;
    }
    if (this.settings.animateOut) {
      currentClasses[this.settings.animateOut] = slide.isCustomAnimatedOut;
    }
    return currentClasses;
  }
  /**
   * Operators to calculate right-to-left and left-to-right.
   * @param a - The left side operand.
   * @param o - The operator.
   * @param b - The right side operand.
   * @returns true/false meaning right-to-left or left-to-right
   */
  _op(a, o, b) {
    const rtl = this.settings.rtl;
    switch (o) {
      case "<":
        return rtl ? a > b : a < b;
      case ">":
        return rtl ? a < b : a > b;
      case ">=":
        return rtl ? a <= b : a >= b;
      case "<=":
        return rtl ? a >= b : a <= b;
      default:
        break;
    }
  }
  /**
   * Triggers a public event.
   * @todo Remove `status`, `relatedTarget` should be used instead.
   * @param name The event name.
   * @param data The event data.
   * @param namespace The event namespace.
   * @param state The state which is associated with the event.
   * @param enter Indicates if the call enters the specified state or not.
   */
  _trigger(name, data, namespace, state2, enter) {
    switch (name) {
      case "initialized":
        this._initializedCarousel$.next(name);
        break;
      case "change":
        this._changeSettingsCarousel$.next(data);
        break;
      case "changed":
        this._changedSettingsCarousel$.next(data);
        break;
      case "drag":
        this._dragCarousel$.next(name);
        break;
      case "dragged":
        this._draggedCarousel$.next(name);
        break;
      case "resize":
        this._resizeCarousel$.next(name);
        break;
      case "resized":
        this._resizedCarousel$.next(name);
        break;
      case "refresh":
        this._refreshCarousel$.next(name);
        break;
      case "refreshed":
        this._refreshedCarousel$.next(name);
        break;
      case "translate":
        this._translateCarousel$.next(name);
        break;
      case "translated":
        this._translatedCarousel$.next(name);
        break;
      default:
        break;
    }
  }
  /**
   * Enters a state.
   * @param name - The state name.
   */
  enter(name) {
    [name].concat(this._states.tags[name] || []).forEach((stateName) => {
      if (this._states.current[stateName] === void 0) {
        this._states.current[stateName] = 0;
      }
      this._states.current[stateName]++;
    });
  }
  /**
   * Leaves a state.
   * @param name - The state name.
   */
  leave(name) {
    [name].concat(this._states.tags[name] || []).forEach((stateName) => {
      if (this._states.current[stateName] === 0 || !!this._states.current[stateName]) {
        this._states.current[stateName]--;
      }
    });
  }
  /**
   * Registers an event or state.
   * @param object - The event or state to register.
   */
  register(object) {
    if (object.type === Type.State) {
      if (!this._states.tags[object.name]) {
        this._states.tags[object.name] = object.tags;
      } else {
        this._states.tags[object.name] = this._states.tags[object.name].concat(object.tags);
      }
      this._states.tags[object.name] = this._states.tags[object.name].filter((tag, i) => {
        return this._states.tags[object.name].indexOf(tag) === i;
      });
    }
  }
  /**
   * Suppresses events.
   * @param events The events to suppress.
   */
  _suppress(events) {
    events.forEach((event) => {
      this._supress[event] = true;
    });
  }
  /**
   * Releases suppressed events.
   * @param events The events to release.
   */
  _release(events) {
    events.forEach((event) => {
      delete this._supress[event];
    });
  }
  /**
   * Gets unified pointer coordinates from event.
   * @todo #261
   * @param event The `mousedown` or `touchstart` event.
   * @returns Object Coords which contains `x` and `y` coordinates of current pointer position.
   */
  pointer(event) {
    const result = {
      x: null,
      y: null
    };
    event = event.originalEvent || event || window.event;
    event = event.touches && event.touches.length ? event.touches[0] : event.changedTouches && event.changedTouches.length ? event.changedTouches[0] : event;
    if (event.pageX) {
      result.x = event.pageX;
      result.y = event.pageY;
    } else {
      result.x = event.clientX;
      result.y = event.clientY;
    }
    return result;
  }
  /**
   * Determines if the input is a Number or something that can be coerced to a Number
   * @param number The input to be tested
   * @returns An indication if the input is a Number or can be coerced to a Number
   */
  _isNumeric(number) {
    return !isNaN(parseFloat(number));
  }
  /**
   * Determines whether value is number or boolean type
   * @param value The input to be tested
   * @returns An indication if the input is a Number or can be coerced to a Number, or Boolean
   */
  _isNumberOrBoolean(value) {
    return this._isNumeric(value) || typeof value === "boolean";
  }
  /**
   * Determines whether value is number or string type
   * @param value The input to be tested
   * @returns An indication if the input is a Number or can be coerced to a Number, or String
   */
  _isNumberOrString(value) {
    return this._isNumeric(value) || typeof value === "string";
  }
  /**
   * Determines whether value is number or string type
   * @param value The input to be tested
   * @returns An indication if the input is a Number or can be coerced to a Number, or String
   */
  _isStringOrBoolean(value) {
    return typeof value === "string" || typeof value === "boolean";
  }
  /**
   * Gets the difference of two vectors.
   * @todo #261
   * @param first The first vector.
   * @param second The second vector.
   * @returns The difference.
   */
  difference(first2, second) {
    if (null === first2 || null === second) {
      return {
        x: 0,
        y: 0
      };
    }
    return {
      x: first2.x - second.x,
      y: first2.y - second.y
    };
  }
  static \u0275fac = function CarouselService_Factory(t) {
    return new (t || _CarouselService)(\u0275\u0275inject(OwlLogger));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _CarouselService,
    factory: _CarouselService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CarouselService, [{
    type: Injectable
  }], () => [{
    type: OwlLogger
  }], null);
})();
var NavigationService = class _NavigationService {
  carouselService;
  /**
   * Subscrioption to merge Observable  from CarouselService
   */
  navSubscription;
  /**
   * Indicates whether the plugin is initialized or not.
   */
  _initialized = false;
  /**
   * The current paging indexes.
   */
  _pages = [];
  /**
   * Data for navigation elements of the user interface.
   */
  _navData = {
    disabled: false,
    prev: {
      disabled: false,
      htmlText: ""
    },
    next: {
      disabled: false,
      htmlText: ""
    }
  };
  /**
   * Data for dot elements of the user interface.
   */
  _dotsData = {
    disabled: false,
    dots: []
  };
  constructor(carouselService) {
    this.carouselService = carouselService;
    this.spyDataStreams();
  }
  ngOnDestroy() {
    this.navSubscription.unsubscribe();
  }
  /**
   * Defines Observables which service must observe
   */
  spyDataStreams() {
    const initializedCarousel$ = this.carouselService.getInitializedState().pipe(tap((state2) => {
      this.initialize();
      this._updateNavPages();
      this.draw();
      this.update();
      this.carouselService.sendChanges();
    }));
    const changedSettings$ = this.carouselService.getChangedState().pipe(filter((data) => data.property.name === "position"), tap((data) => {
      this.update();
    }));
    const refreshedCarousel$ = this.carouselService.getRefreshedState().pipe(tap(() => {
      this._updateNavPages();
      this.draw();
      this.update();
      this.carouselService.sendChanges();
    }));
    const navMerge$ = merge(initializedCarousel$, changedSettings$, refreshedCarousel$);
    this.navSubscription = navMerge$.subscribe(() => {
    });
  }
  /**
     * Initializes the layout of the plugin and extends the carousel.
     */
  initialize() {
    this._navData.disabled = true;
    this._navData.prev.htmlText = this.carouselService.settings.navText[0];
    this._navData.next.htmlText = this.carouselService.settings.navText[1];
    this._dotsData.disabled = true;
    this.carouselService.navData = this._navData;
    this.carouselService.dotsData = this._dotsData;
  }
  /**
   * Calculates internal states and updates prop _pages
   */
  _updateNavPages() {
    let i, j, k;
    const lower = this.carouselService.clones().length / 2, upper = lower + this.carouselService.items().length, maximum = this.carouselService.maximum(true), pages = [], settings = this.carouselService.settings;
    let size = settings.center || settings.autoWidth || settings.dotsData ? 1 : Math.floor(Number(settings.dotsEach)) || Math.floor(settings.items);
    size = +size;
    if (settings.slideBy !== "page") {
      settings.slideBy = Math.min(+settings.slideBy, settings.items);
    }
    if (settings.dots || settings.slideBy === "page") {
      for (i = lower, j = 0, k = 0; i < upper; i++) {
        if (j >= size || j === 0) {
          pages.push({
            start: Math.min(maximum, i - lower),
            end: i - lower + size - 1
          });
          if (Math.min(maximum, i - lower) === maximum) {
            break;
          }
          j = 0, ++k;
        }
        j += this.carouselService.mergers(this.carouselService.relative(i));
      }
    }
    this._pages = pages;
  }
  /**
     * Draws the user interface.
     * @todo The option `dotsData` wont work.
     */
  draw() {
    let difference;
    const settings = this.carouselService.settings, items = this.carouselService.items(), disabled = items.length <= settings.items;
    this._navData.disabled = !settings.nav || disabled;
    this._dotsData.disabled = !settings.dots || disabled;
    if (settings.dots) {
      difference = this._pages.length - this._dotsData.dots.length;
      if (settings.dotsData && difference !== 0) {
        this._dotsData.dots = [];
        items.forEach((item) => {
          this._dotsData.dots.push({
            active: false,
            id: `dot-${item.id}`,
            innerContent: item.dotContent,
            showInnerContent: true
          });
        });
      } else if (difference > 0) {
        const startI = this._dotsData.dots.length > 0 ? this._dotsData.dots.length : 0;
        for (let i = 0; i < difference; i++) {
          this._dotsData.dots.push({
            active: false,
            id: `dot-${i + startI}`,
            innerContent: "",
            showInnerContent: false
          });
        }
      } else if (difference < 0) {
        this._dotsData.dots.splice(difference, Math.abs(difference));
      }
    }
    this.carouselService.navData = this._navData;
    this.carouselService.dotsData = this._dotsData;
  }
  /**
   * Updates navigation buttons's and dots's states
   */
  update() {
    this._updateNavButtons();
    this._updateDots();
  }
  /**
   * Changes state of nav buttons (disabled, enabled)
   */
  _updateNavButtons() {
    const settings = this.carouselService.settings, loop = settings.loop || settings.rewind, index = this.carouselService.relative(this.carouselService.current());
    if (settings.nav) {
      this._navData.prev.disabled = !loop && index <= this.carouselService.minimum(true);
      this._navData.next.disabled = !loop && index >= this.carouselService.maximum(true);
    }
    this.carouselService.navData = this._navData;
  }
  /**
   * Changes active dot if page becomes changed
   */
  _updateDots() {
    let curActiveDotI;
    if (!this.carouselService.settings.dots) {
      return;
    }
    this._dotsData.dots.forEach((item) => {
      if (item.active === true) {
        item.active = false;
      }
    });
    curActiveDotI = this._current();
    if (this._dotsData.dots.length) {
      this._dotsData.dots[curActiveDotI].active = true;
    }
    this.carouselService.dotsData = this._dotsData;
  }
  /**
     * Gets the current page position of the carousel.
     * @returns the current page position of the carousel
     */
  _current() {
    const current = this.carouselService.relative(this.carouselService.current());
    let finalCurrent;
    const pages = this._pages.filter((page, index) => {
      return page.start <= current && page.end >= current;
    }).pop();
    finalCurrent = this._pages.findIndex((page) => {
      return page.start === pages.start && page.end === pages.end;
    });
    return finalCurrent;
  }
  /**
     * Gets the current succesor/predecessor position.
   * @param sussessor position of slide
     * @returns the current succesor/predecessor position
     */
  _getPosition(successor) {
    let position, length;
    const settings = this.carouselService.settings;
    if (settings.slideBy === "page") {
      position = this._current();
      length = this._pages.length;
      successor ? ++position : --position;
      position = this._pages[(position % length + length) % length].start;
    } else {
      position = this.carouselService.relative(this.carouselService.current());
      length = this.carouselService.items().length;
      successor ? position += +settings.slideBy : position -= +settings.slideBy;
    }
    return position;
  }
  /**
     * Slides to the next item or page.
     * @param speed The time in milliseconds for the transition.
     */
  next(speed) {
    this.carouselService.to(this._getPosition(true), speed);
  }
  /**
   * Slides to the previous item or page.
   * @param speed The time in milliseconds for the transition.
   */
  prev(speed) {
    this.carouselService.to(this._getPosition(false), speed);
  }
  /**
   * Slides to the specified item or page.
   * @param position - The position of the item or page.
   * @param speed - The time in milliseconds for the transition.
   * @param standard - Whether to use the standard behaviour or not. Default meaning false
   */
  to(position, speed, standard) {
    let length;
    if (!standard && this._pages.length) {
      length = this._pages.length;
      this.carouselService.to(this._pages[(position % length + length) % length].start, speed);
    } else {
      this.carouselService.to(position, speed);
    }
  }
  /**
   * Moves carousel after user's clicking on any dots
   */
  moveByDot(dotId) {
    const index = this._dotsData.dots.findIndex((dot) => dotId === dot.id);
    this.to(index, this.carouselService.settings.dotsSpeed);
  }
  /**
   * rewinds carousel to slide with needed id
   * @param id id of slide
   */
  toSlideById(id) {
    const position = this.carouselService.slidesData.findIndex((slide) => slide.id === id && slide.isCloned === false);
    if (position === -1 || position === this.carouselService.current()) {
      return;
    }
    this.carouselService.to(this.carouselService.relative(position), false);
  }
  static \u0275fac = function NavigationService_Factory(t) {
    return new (t || _NavigationService)(\u0275\u0275inject(CarouselService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _NavigationService,
    factory: _NavigationService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NavigationService, [{
    type: Injectable
  }], () => [{
    type: CarouselService
  }], null);
})();
var WINDOW = new InjectionToken("WindowToken");
var WindowRef = class {
  get nativeWindow() {
    throw new Error("Not implemented.");
  }
};
var BrowserWindowRef = class _BrowserWindowRef extends WindowRef {
  constructor() {
    super();
  }
  /**
   * @returns window object
   */
  get nativeWindow() {
    return window;
  }
  static \u0275fac = function BrowserWindowRef_Factory(t) {
    return new (t || _BrowserWindowRef)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _BrowserWindowRef,
    factory: _BrowserWindowRef.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrowserWindowRef, [{
    type: Injectable
  }], () => [], null);
})();
function windowFactory(browserWindowRef, platformId) {
  if (isPlatformBrowser(platformId)) {
    return browserWindowRef.nativeWindow;
  }
  const obj = {
    setTimeout: (func, time) => {
    },
    clearTimeout: (a) => {
    }
  };
  return obj;
}
var browserWindowProvider = {
  provide: WindowRef,
  useClass: BrowserWindowRef
};
var windowProvider = {
  provide: WINDOW,
  useFactory: windowFactory,
  deps: [WindowRef, PLATFORM_ID]
};
var WINDOW_PROVIDERS = [browserWindowProvider, windowProvider];
var DOCUMENT2 = new InjectionToken("DocumentToken");
var DocumentRef = class {
  get nativeDocument() {
    throw new Error("Not implemented.");
  }
};
var BrowserDocumentRef = class _BrowserDocumentRef extends DocumentRef {
  constructor() {
    super();
  }
  /**
   * @returns Document object
   */
  get nativeDocument() {
    return document;
  }
  static \u0275fac = function BrowserDocumentRef_Factory(t) {
    return new (t || _BrowserDocumentRef)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _BrowserDocumentRef,
    factory: _BrowserDocumentRef.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrowserDocumentRef, [{
    type: Injectable
  }], () => [], null);
})();
function documentFactory(browserDocumentRef, platformId) {
  if (isPlatformBrowser(platformId)) {
    return browserDocumentRef.nativeDocument;
  }
  const doc = {
    hidden: false,
    visibilityState: "visible"
  };
  return doc;
}
var browserDocumentProvider = {
  provide: DocumentRef,
  useClass: BrowserDocumentRef
};
var documentProvider = {
  provide: DOCUMENT2,
  useFactory: documentFactory,
  deps: [DocumentRef, PLATFORM_ID]
};
var DOCUMENT_PROVIDERS = [browserDocumentProvider, documentProvider];
var AutoplayService = class _AutoplayService {
  carouselService;
  ngZone;
  /**
   * Subscrioption to merge Observables from CarouselService
   */
  autoplaySubscription;
  /**
   * The autoplay timeout.
   */
  _timeout = null;
  /**
   * Indicates whenever the autoplay is paused.
   */
  _paused = false;
  /**
   * Shows whether the code (the plugin) changed the option 'AutoplayTimeout' for own needs
   */
  _isArtificialAutoplayTimeout;
  /**
   * Shows whether the autoplay is paused for unlimited time by the developer.
   * Use to prevent autoplaying in case of firing `mouseleave` by adding layers to `<body>` like `mat-menu` does
   */
  _isAutoplayStopped = false;
  get isAutoplayStopped() {
    return this._isAutoplayStopped;
  }
  set isAutoplayStopped(value) {
    this._isAutoplayStopped = value;
  }
  winRef;
  docRef;
  constructor(carouselService, winRef, docRef, ngZone) {
    this.carouselService = carouselService;
    this.ngZone = ngZone;
    this.winRef = winRef;
    this.docRef = docRef;
    this.spyDataStreams();
  }
  ngOnDestroy() {
    this.autoplaySubscription.unsubscribe();
  }
  /**
   * Defines Observables which service must observe
   */
  spyDataStreams() {
    const initializedCarousel$ = this.carouselService.getInitializedState().pipe(tap(() => {
      if (this.carouselService.settings.autoplay) {
        this.play();
      }
    }));
    const changedSettings$ = this.carouselService.getChangedState().pipe(tap((data) => {
      this._handleChangeObservable(data);
    }));
    const resized$ = this.carouselService.getResizedState().pipe(tap(() => {
      if (this.carouselService.settings.autoplay && !this._isAutoplayStopped) {
        this.play();
      } else {
        this.stop();
      }
    }));
    const autoplayMerge$ = merge(initializedCarousel$, changedSettings$, resized$);
    this.autoplaySubscription = autoplayMerge$.subscribe(() => {
    });
  }
  /**
     * Starts the autoplay.
     * @param timeout The interval before the next animation starts.
     * @param speed The animation speed for the animations.
     */
  play(timeout, speed) {
    if (this._paused) {
      this._paused = false;
      this._setAutoPlayInterval(this.carouselService.settings.autoplayMouseleaveTimeout);
    }
    if (this.carouselService.is("rotating")) {
      return;
    }
    this.carouselService.enter("rotating");
    this._setAutoPlayInterval();
  }
  /**
     * Gets a new timeout
     * @param timeout - The interval before the next animation starts.
     * @param speed - The animation speed for the animations.
     * @return
     */
  _getNextTimeout(timeout, speed) {
    if (this._timeout) {
      this.winRef.clearTimeout(this._timeout);
    }
    this._isArtificialAutoplayTimeout = timeout ? true : false;
    return this.ngZone.runOutsideAngular(() => {
      return this.winRef.setTimeout(() => {
        this.ngZone.run(() => {
          if (this._paused || this.carouselService.is("busy") || this.carouselService.is("interacting") || this.docRef.hidden) {
            return;
          }
          this.carouselService.next(speed || this.carouselService.settings.autoplaySpeed);
        });
      }, timeout || this.carouselService.settings.autoplayTimeout);
    });
  }
  /**
     * Sets autoplay in motion.
     */
  _setAutoPlayInterval(timeout) {
    this._timeout = this._getNextTimeout(timeout);
  }
  /**
   * Stops the autoplay.
   */
  stop() {
    if (!this.carouselService.is("rotating")) {
      return;
    }
    this._paused = true;
    this.winRef.clearTimeout(this._timeout);
    this.carouselService.leave("rotating");
  }
  /**
     * Stops the autoplay.
     */
  pause() {
    if (!this.carouselService.is("rotating")) {
      return;
    }
    this._paused = true;
  }
  /**
   * Manages by autoplaying according to data passed by _changedSettingsCarousel$ Obsarvable
   * @param data object with current position of carousel and type of change
   */
  _handleChangeObservable(data) {
    if (data.property.name === "settings") {
      if (this.carouselService.settings.autoplay) {
        this.play();
      } else {
        this.stop();
      }
    } else if (data.property.name === "position") {
      if (this.carouselService.settings.autoplay) {
        this._setAutoPlayInterval();
      }
    }
  }
  /**
   * Starts autoplaying of the carousel in the case when user leaves the carousel before it starts translateing (moving)
   */
  _playAfterTranslated() {
    of("translated").pipe(switchMap((data) => this.carouselService.getTranslatedState()), first(), filter(() => this._isArtificialAutoplayTimeout), tap(() => this._setAutoPlayInterval())).subscribe(() => {
    });
  }
  /**
   * Starts pausing
   */
  startPausing() {
    if (this.carouselService.settings.autoplayHoverPause && this.carouselService.is("rotating")) {
      this.pause();
    }
  }
  /**
   * Starts playing after mouse leaves carousel
   */
  startPlayingMouseLeave() {
    if (this.carouselService.settings.autoplayHoverPause && this.carouselService.is("rotating")) {
      this.play();
      this._playAfterTranslated();
    }
  }
  /**
   * Starts playing after touch ends
   */
  startPlayingTouchEnd() {
    if (this.carouselService.settings.autoplayHoverPause && this.carouselService.is("rotating")) {
      this.play();
      this._playAfterTranslated();
    }
  }
  static \u0275fac = function AutoplayService_Factory(t) {
    return new (t || _AutoplayService)(\u0275\u0275inject(CarouselService), \u0275\u0275inject(WINDOW), \u0275\u0275inject(DOCUMENT2), \u0275\u0275inject(NgZone));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _AutoplayService,
    factory: _AutoplayService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AutoplayService, [{
    type: Injectable
  }], () => [{
    type: CarouselService
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [WINDOW]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT2]
    }]
  }, {
    type: NgZone
  }], null);
})();
var LazyLoadService = class _LazyLoadService {
  carouselService;
  /**
   * Subscrioption to merge Observable  from CarouselService
   */
  lazyLoadSubscription;
  constructor(carouselService) {
    this.carouselService = carouselService;
    this.spyDataStreams();
  }
  ngOnDestroy() {
    this.lazyLoadSubscription.unsubscribe();
  }
  /**
   * Defines Observables which service must observe
   */
  spyDataStreams() {
    const initializedCarousel$ = this.carouselService.getInitializedState().pipe(tap(() => {
      const isLazyLoad = this.carouselService.settings && !this.carouselService.settings.lazyLoad;
      this.carouselService.slidesData.forEach((item) => item.load = isLazyLoad ? true : false);
    }));
    const changeSettings$ = this.carouselService.getChangeState();
    const resizedCarousel$ = this.carouselService.getResizedState();
    const lazyLoadMerge$ = merge(initializedCarousel$, changeSettings$, resizedCarousel$).pipe(tap((data) => this._defineLazyLoadSlides(data)));
    this.lazyLoadSubscription = lazyLoadMerge$.subscribe(() => {
    });
  }
  _defineLazyLoadSlides(data) {
    if (!this.carouselService.settings || !this.carouselService.settings.lazyLoad) {
      return;
    }
    if (data.property && data.property.name === "position" || data === "initialized" || data === "resized") {
      const settings = this.carouselService.settings, clones = this.carouselService.clones().length;
      let n = settings.center && Math.ceil(settings.items / 2) || settings.items, i = settings.center && n * -1 || 0, position = (data.property && data.property.value !== void 0 ? data.property.value : this.carouselService.current()) + i;
      if (settings.lazyLoadEager > 0) {
        n += settings.lazyLoadEager;
        if (settings.loop) {
          position -= settings.lazyLoadEager;
          n++;
        }
      }
      while (i++ < n) {
        this._load(clones / 2 + this.carouselService.relative(position));
        if (clones) {
          this.carouselService.clones(this.carouselService.relative(position)).forEach((value) => this._load(value));
        }
        position++;
      }
    }
  }
  /**
     * Loads all resources of an item at the specified position.
     * @param position - The absolute position of the item.
     */
  _load(position) {
    if (this.carouselService.slidesData[position].load) {
      return;
    }
    this.carouselService.slidesData[position].load = true;
  }
  static \u0275fac = function LazyLoadService_Factory(t) {
    return new (t || _LazyLoadService)(\u0275\u0275inject(CarouselService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _LazyLoadService,
    factory: _LazyLoadService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LazyLoadService, [{
    type: Injectable
  }], () => [{
    type: CarouselService
  }], null);
})();
var AnimateService = class _AnimateService {
  carouselService;
  /**
   * Subscrioption to merge Observable  from CarouselService
   */
  animateSubscription;
  /**
   * s
   */
  swapping = true;
  /**
   * active slide before translating
   */
  previous = void 0;
  /**
   * new active slide after translating
   */
  next = void 0;
  constructor(carouselService) {
    this.carouselService = carouselService;
    this.spyDataStreams();
  }
  ngOnDestroy() {
    this.animateSubscription.unsubscribe();
  }
  /**
   * Defines Observables which service must observe
   */
  spyDataStreams() {
    const changeSettings$ = this.carouselService.getChangeState().pipe(tap((data) => {
      if (data.property.name === "position") {
        this.previous = this.carouselService.current();
        this.next = data.property.value;
      }
    }));
    const dragCarousel$ = this.carouselService.getDragState();
    const draggedCarousel$ = this.carouselService.getDraggedState();
    const translatedCarousel$ = this.carouselService.getTranslatedState();
    const dragTranslatedMerge$ = merge(dragCarousel$, draggedCarousel$, translatedCarousel$).pipe(tap((data) => this.swapping = data === "translated"));
    const translateCarousel$ = this.carouselService.getTranslateState().pipe(tap((data) => {
      if (this.swapping && (this.carouselService._options.animateOut || this.carouselService._options.animateIn)) {
        this._swap();
      }
    }));
    const animateMerge$ = merge(changeSettings$, translateCarousel$, dragTranslatedMerge$).pipe();
    this.animateSubscription = animateMerge$.subscribe(() => {
    });
  }
  /**
     * Toggles the animation classes whenever an translations starts.
     * @returns
     */
  _swap() {
    if (this.carouselService.settings.items !== 1) {
      return;
    }
    this.carouselService.speed(0);
    let left;
    const previous = this.carouselService.slidesData[this.previous], next = this.carouselService.slidesData[this.next], incoming = this.carouselService.settings.animateIn, outgoing = this.carouselService.settings.animateOut;
    if (this.carouselService.current() === this.previous) {
      return;
    }
    if (outgoing) {
      left = +this.carouselService.coordinates(this.previous) - +this.carouselService.coordinates(this.next);
      this.carouselService.slidesData.forEach((slide) => {
        if (slide.id === previous.id) {
          slide.left = `${left}px`;
          slide.isAnimated = true;
          slide.isDefAnimatedOut = true;
          slide.isCustomAnimatedOut = true;
        }
      });
    }
    if (incoming) {
      this.carouselService.slidesData.forEach((slide) => {
        if (slide.id === next.id) {
          slide.isAnimated = true;
          slide.isDefAnimatedIn = true;
          slide.isCustomAnimatedIn = true;
        }
      });
    }
  }
  /**
   * Handles the end of 'animationend' event
   * @param id Id of slides
   */
  clear(id) {
    this.carouselService.slidesData.forEach((slide) => {
      if (slide.id === id) {
        slide.left = "";
        slide.isAnimated = false;
        slide.isDefAnimatedOut = false;
        slide.isCustomAnimatedOut = false;
        slide.isDefAnimatedIn = false;
        slide.isCustomAnimatedIn = false;
        slide.classes = this.carouselService.setCurSlideClasses(slide);
      }
    });
    this.carouselService.onTransitionEnd();
  }
  static \u0275fac = function AnimateService_Factory(t) {
    return new (t || _AnimateService)(\u0275\u0275inject(CarouselService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _AnimateService,
    factory: _AnimateService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnimateService, [{
    type: Injectable
  }], () => [{
    type: CarouselService
  }], null);
})();
var AutoHeightService = class _AutoHeightService {
  carouselService;
  /**
   * Subscrioption to merge Observable  from CarouselService
   */
  autoHeightSubscription;
  constructor(carouselService) {
    this.carouselService = carouselService;
    this.spyDataStreams();
  }
  ngOnDestroy() {
    this.autoHeightSubscription.unsubscribe();
  }
  /**
   * Defines Observables which service must observe
   */
  spyDataStreams() {
    const initializedCarousel$ = this.carouselService.getInitializedState().pipe(tap((data) => {
      if (this.carouselService.settings.autoHeight) {
        this.update();
      } else {
        this.carouselService.slidesData.forEach((slide) => slide.heightState = "full");
      }
    }));
    const changedSettings$ = this.carouselService.getChangedState().pipe(tap((data) => {
      if (this.carouselService.settings.autoHeight && data.property.name === "position") {
        this.update();
      }
    }));
    const refreshedCarousel$ = this.carouselService.getRefreshedState().pipe(tap((data) => {
      if (this.carouselService.settings.autoHeight) {
        this.update();
      }
    }));
    const autoHeight$ = merge(initializedCarousel$, changedSettings$, refreshedCarousel$);
    this.autoHeightSubscription = autoHeight$.subscribe(() => {
    });
  }
  /**
   * Updates the prop 'heightState' of slides
   */
  update() {
    const items = this.carouselService.settings.items;
    let start = this.carouselService.current(), end = start + items;
    if (this.carouselService.settings.center) {
      start = items % 2 === 1 ? start - (items - 1) / 2 : start - items / 2;
      end = items % 2 === 1 ? start + items : start + items + 1;
    }
    this.carouselService.slidesData.forEach((slide, i) => {
      slide.heightState = i >= start && i < end ? "full" : "nulled";
    });
  }
  static \u0275fac = function AutoHeightService_Factory(t) {
    return new (t || _AutoHeightService)(\u0275\u0275inject(CarouselService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _AutoHeightService,
    factory: _AutoHeightService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AutoHeightService, [{
    type: Injectable
  }], () => [{
    type: CarouselService
  }], null);
})();
var HashService = class _HashService {
  carouselService;
  route;
  router;
  /**
   * Subscription to merge Observable from CarouselService
   */
  hashSubscription;
  /**
   * Current url fragment (hash)
   */
  currentHashFragment;
  constructor(carouselService, route, router) {
    this.carouselService = carouselService;
    this.route = route;
    this.router = router;
    this.spyDataStreams();
    if (!this.route) {
      this.route = {
        fragment: of("no route").pipe(take(1))
      };
    }
    ;
    if (!this.router) {
      this.router = {
        navigate: (commands, extras) => {
          return;
        }
      };
    }
  }
  ngOnDestroy() {
    this.hashSubscription.unsubscribe();
  }
  /**
   * Defines Observables which service must observe
   */
  spyDataStreams() {
    const initializedCarousel$ = this.carouselService.getInitializedState().pipe(tap(() => this.listenToRoute()));
    const changedSettings$ = this.carouselService.getChangedState().pipe(tap((data) => {
      if (this.carouselService.settings.URLhashListener && data.property.name === "position") {
        const newCurSlide = this.carouselService.current();
        const newCurFragment = this.carouselService.slidesData[newCurSlide].hashFragment;
        if (!newCurFragment || newCurFragment === this.currentHashFragment) {
          return;
        }
        this.router.navigate(["./"], {
          fragment: newCurFragment,
          relativeTo: this.route
        });
      }
    }));
    const hashFragment$ = merge(initializedCarousel$, changedSettings$);
    this.hashSubscription = hashFragment$.subscribe(() => {
    });
  }
  /**
   * rewinds carousel to slide which has the same hashFragment as fragment of current url
   * @param fragment fragment of url
   */
  rewind(fragment) {
    const position = this.carouselService.slidesData.findIndex((slide) => slide.hashFragment === fragment && slide.isCloned === false);
    if (position === -1 || position === this.carouselService.current()) {
      return;
    }
    this.carouselService.to(this.carouselService.relative(position), false);
  }
  /**
   * Initiate listening to ActivatedRoute.fragment
   */
  listenToRoute() {
    const count = this.carouselService.settings.startPosition === "URLHash" ? 0 : 2;
    this.route.fragment.pipe(skip(count)).subscribe((fragment) => {
      this.currentHashFragment = fragment;
      this.rewind(fragment);
    });
  }
  static \u0275fac = function HashService_Factory(t) {
    return new (t || _HashService)(\u0275\u0275inject(CarouselService), \u0275\u0275inject(ActivatedRoute, 8), \u0275\u0275inject(Router, 8));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _HashService,
    factory: _HashService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HashService, [{
    type: Injectable
  }], () => [{
    type: CarouselService
  }, {
    type: ActivatedRoute,
    decorators: [{
      type: Optional
    }]
  }, {
    type: Router,
    decorators: [{
      type: Optional
    }]
  }], null);
})();
var nextId = 0;
var CarouselSlideDirective = class _CarouselSlideDirective {
  tplRef;
  /**
   * Unique slide identifier. Must be unique for the entire document for proper accessibility support.
   * Will be auto-generated if not provided.
   */
  id = `owl-slide-${nextId++}`;
  /**
   * Defines how much widths of common slide will current slide have
   * e.g. if _mergeData=2, the slide will twice wider then slides with _mergeData=1
   */
  _dataMerge = 1;
  set dataMerge(data) {
    this._dataMerge = this.isNumeric(data) ? data : 1;
  }
  get dataMerge() {
    return this._dataMerge;
  }
  /**
   * Width of slide
   */
  width = 0;
  /**
   * Inner content of dot for certain slide; can be html-markup
   */
  dotContent = "";
  /**
   * Hash (fragment) of url which corresponds to certain slide
   */
  dataHash = "";
  constructor(tplRef) {
    this.tplRef = tplRef;
  }
  /**
     * Determines if the input is a Number or something that can be coerced to a Number
     * @param - The input to be tested
     * @returns - An indication if the input is a Number or can be coerced to a Number
     */
  isNumeric(number) {
    return !isNaN(parseFloat(number));
  }
  static \u0275fac = function CarouselSlideDirective_Factory(t) {
    return new (t || _CarouselSlideDirective)(\u0275\u0275directiveInject(TemplateRef));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CarouselSlideDirective,
    selectors: [["ng-template", "carouselSlide", ""]],
    inputs: {
      id: "id",
      dataMerge: "dataMerge",
      width: "width",
      dotContent: "dotContent",
      dataHash: "dataHash"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CarouselSlideDirective, [{
    type: Directive,
    args: [{
      selector: "ng-template[carouselSlide]"
    }]
  }], () => [{
    type: TemplateRef
  }], {
    id: [{
      type: Input
    }],
    dataMerge: [{
      type: Input
    }],
    width: [{
      type: Input
    }],
    dotContent: [{
      type: Input
    }],
    dataHash: [{
      type: Input
    }]
  });
})();
var ResizeService = class _ResizeService {
  resizeObservable$;
  /**
   * Makes resizeSubject become Observable
   * @returns Observable of resizeSubject
   */
  get onResize$() {
    return this.resizeObservable$;
  }
  constructor(winRef, platformId) {
    this.resizeObservable$ = isPlatformBrowser(platformId) ? fromEvent(winRef, "resize") : new Subject().asObservable();
  }
  static \u0275fac = function ResizeService_Factory(t) {
    return new (t || _ResizeService)(\u0275\u0275inject(WINDOW), \u0275\u0275inject(PLATFORM_ID));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ResizeService,
    factory: _ResizeService.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResizeService, [{
    type: Injectable
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [WINDOW]
    }]
  }, {
    type: Object,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }], null);
})();
var StageComponent = class _StageComponent {
  zone;
  el;
  renderer;
  carouselService;
  animateService;
  /**
   * Object with settings which make carousel draggable by touch or mouse
   */
  owlDraggable;
  /**
   * Data of owl-stage
   */
  stageData;
  /**
   *  Data of every slide
   */
  slidesData;
  /**
   * Function wich will be returned after attaching listener to 'mousemove' event
   */
  listenerMouseMove;
  /**
   * Function wich will be returned after attaching listener to 'touchmove' event
   */
  listenerTouchMove;
  /**
   * Function wich will be returned after attaching listener to 'mousemove' event
   */
  listenerOneMouseMove;
  /**
   * Function wich will be returned after attaching listener to 'touchmove' event
   */
  listenerOneTouchMove;
  /**
   * Function wich will be returned after attaching listener to 'mouseup' event
   */
  listenerMouseUp;
  /**
   * Function wich will be returned after attaching listener to 'touchend' event
   */
  listenerTouchEnd;
  /**
   * Function wich will be returned after attaching listener to 'click' event
   */
  listenerOneClick;
  listenerATag;
  /**
   * Object with data needed for dragging
   */
  _drag = {
    time: null,
    target: null,
    pointer: null,
    stage: {
      start: null,
      current: null
    },
    direction: null,
    active: false,
    moving: false
  };
  /**
   * Subject for notification when the carousel's rebuilding caused by resize event starts
   */
  _oneDragMove$ = new Subject();
  /**
   * Subsctiption to _oneDragMove$ Subject
   */
  _oneMoveSubsription;
  preparePublicSlide = (slide) => {
    const newSlide = __spreadValues({}, slide);
    delete newSlide.tplRef;
    return newSlide;
  };
  constructor(zone, el, renderer, carouselService, animateService) {
    this.zone = zone;
    this.el = el;
    this.renderer = renderer;
    this.carouselService = carouselService;
    this.animateService = animateService;
  }
  onMouseDown(event) {
    if (this.owlDraggable.isMouseDragable) {
      this._onDragStart(event);
    }
  }
  onTouchStart(event) {
    if (event.targetTouches.length >= 2) {
      return false;
    }
    if (this.owlDraggable.isTouchDragable) {
      this._onDragStart(event);
    }
  }
  onTouchCancel(event) {
    this._onDragEnd(event);
  }
  onDragStart() {
    if (this.owlDraggable.isMouseDragable) {
      return false;
    }
  }
  onSelectStart() {
    if (this.owlDraggable.isMouseDragable) {
      return false;
    }
  }
  ngOnInit() {
    this._oneMoveSubsription = this._oneDragMove$.pipe(first()).subscribe(() => {
      this._sendChanges();
    });
  }
  ngOnDestroy() {
    this._oneMoveSubsription.unsubscribe();
  }
  /**
   * Passes this to _oneMouseTouchMove();
   */
  bindOneMouseTouchMove = (ev) => {
    this._oneMouseTouchMove(ev);
  };
  /**
   * Passes this to _onDragMove();
   */
  bindOnDragMove = (ev) => {
    this._onDragMove(ev);
  };
  /**
   * Passes this to _onDragMove();
   */
  bindOnDragEnd = (ev) => {
    this._onDragEnd(ev);
  };
  /**
     * Handles `touchstart` and `mousedown` events.
     * @todo Horizontal swipe threshold as option
     * @todo #261
     * @param event - The event arguments.
     */
  _onDragStart(event) {
    let stage = null;
    if (event.which === 3) {
      return;
    }
    stage = this._prepareDragging(event);
    this._drag.time = (/* @__PURE__ */ new Date()).getTime();
    this._drag.target = event.target;
    this._drag.stage.start = stage;
    this._drag.stage.current = stage;
    this._drag.pointer = this._pointer(event);
    this.listenerMouseUp = this.renderer.listen(document, "mouseup", this.bindOnDragEnd);
    this.listenerTouchEnd = this.renderer.listen(document, "touchend", this.bindOnDragEnd);
    this.zone.runOutsideAngular(() => {
      this.listenerOneMouseMove = this.renderer.listen(document, "mousemove", this.bindOneMouseTouchMove);
      this.listenerOneTouchMove = this.renderer.listen(document, "touchmove", this.bindOneMouseTouchMove);
    });
  }
  /**
   * Attaches listeners to `touchmove` and `mousemove` events; initiates updating carousel after starting dragging
   * @param event event objech of mouse or touch event
   */
  _oneMouseTouchMove(event) {
    const delta = this._difference(this._drag.pointer, this._pointer(event));
    if (this.listenerATag) {
      this.listenerATag();
    }
    if (Math.abs(delta.x) < 3 && Math.abs(delta.y) < 3 && this._is("valid")) {
      return;
    }
    if (Math.abs(delta.x) < 3 && Math.abs(delta.x) < Math.abs(delta.y) && this._is("valid")) {
      return;
    }
    this.listenerOneMouseMove();
    this.listenerOneTouchMove();
    this._drag.moving = true;
    this.blockClickAnchorInDragging(event);
    this.listenerMouseMove = this.renderer.listen(document, "mousemove", this.bindOnDragMove);
    this.listenerTouchMove = this.renderer.listen(document, "touchmove", this.bindOnDragMove);
    event.preventDefault();
    this._enterDragging();
    this._oneDragMove$.next(event);
  }
  /**
   * Attaches handler to HTMLAnchorElement for preventing click while carousel is being dragged
   * @param event event object
   */
  blockClickAnchorInDragging(event) {
    let target = event.target;
    while (target && !(target instanceof HTMLAnchorElement)) {
      target = target.parentElement;
    }
    if (target instanceof HTMLAnchorElement) {
      this.listenerATag = this.renderer.listen(target, "click", () => false);
    }
  }
  /**
   * Handles the `touchmove` and `mousemove` events.
   * @todo #261
   * @param event - The event arguments.
   */
  _onDragMove(event) {
    let stage;
    const stageOrExit = this.carouselService.defineNewCoordsDrag(event, this._drag);
    if (stageOrExit === false) {
      return;
    }
    stage = stageOrExit;
    event.preventDefault();
    this._drag.stage.current = stage;
    this._animate(stage.x - this._drag.stage.start.x);
  }
  /**
   * Moves .owl-stage left-right
   * @param coordinate coordinate to be set to .owl-stage
   */
  _animate(coordinate) {
    this.renderer.setStyle(this.el.nativeElement.children[0], "transform", `translate3d(${coordinate}px,0px,0px`);
    this.renderer.setStyle(this.el.nativeElement.children[0], "transition", "0s");
  }
  /**
     * Handles the `touchend` and `mouseup` events.
     * @todo #261
     * @todo Threshold for click event
     * @param event - The event arguments.
     */
  _onDragEnd(event) {
    this.carouselService.owlDOMData.isGrab = false;
    this.listenerOneMouseMove();
    this.listenerOneTouchMove();
    if (this._drag.moving) {
      this.renderer.setStyle(this.el.nativeElement.children[0], "transform", ``);
      this.renderer.setStyle(this.el.nativeElement.children[0], "transition", this.carouselService.speed(+this.carouselService.settings.dragEndSpeed || this.carouselService.settings.smartSpeed) / 1e3 + "s");
      this._finishDragging(event);
      this.listenerMouseMove();
      this.listenerTouchMove();
    }
    this._drag = {
      time: null,
      target: null,
      pointer: null,
      stage: {
        start: null,
        current: null
      },
      direction: null,
      active: false,
      moving: false
    };
    this.listenerMouseUp();
    this.listenerTouchEnd();
  }
  /**
     * Prepares data for dragging carousel. It starts after firing `touchstart` and `mousedown` events.
     * @param event - The event arguments.
     * @returns stage - object with 'x' and 'y' coordinates of .owl-stage
     */
  _prepareDragging(event) {
    return this.carouselService.prepareDragging(event);
  }
  /**
   * Attaches handler for 'click' event on any element in .owl-stage in order to prevent dragging when moving of cursor is less than 3px
   */
  _oneClickHandler = () => {
    this.listenerOneClick = this.renderer.listen(this._drag.target, "click", () => false);
    this.listenerOneClick();
  };
  /**
   * Finishes dragging
   * @param event object event of 'mouseUp' of 'touchend' events
   */
  _finishDragging(event) {
    this.carouselService.finishDragging(event, this._drag, this._oneClickHandler);
  }
  /**
     * Gets unified pointer coordinates from event.
     * @param event The `mousedown` or `touchstart` event.
     * @returns Contains `x` and `y` coordinates of current pointer position.
     */
  _pointer(event) {
    return this.carouselService.pointer(event);
  }
  /**
     * Gets the difference of two vectors.
     * @param first The first vector.
     * @param second The second vector.
     * @returns The difference.
     */
  _difference(firstC, second) {
    return this.carouselService.difference(firstC, second);
  }
  /**
     * Checks whether the carousel is in a specific state or not.
     * @param specificState The state to check.
     * @returns The flag which indicates if the carousel is busy.
     */
  _is(specificState) {
    return this.carouselService.is(specificState);
  }
  /**
  * Enters a state.
  * @param name The state name.
  */
  _enter(name) {
    this.carouselService.enter(name);
  }
  /**
     * Sends all data needed for View.
     */
  _sendChanges() {
    this.carouselService.sendChanges();
  }
  /**
   * Handler for transitioend event
   */
  onTransitionEnd() {
    this.carouselService.onTransitionEnd();
  }
  /**
     * Enters into a 'dragging' state
     */
  _enterDragging() {
    this.carouselService.enterDragging();
  }
  /**
   * Handles the end of 'animationend' event
   * @param id Id of slides
   */
  clear(id) {
    this.animateService.clear(id);
  }
  static \u0275fac = function StageComponent_Factory(t) {
    return new (t || _StageComponent)(\u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(CarouselService), \u0275\u0275directiveInject(AnimateService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _StageComponent,
    selectors: [["owl-stage"]],
    hostBindings: function StageComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("mousedown", function StageComponent_mousedown_HostBindingHandler($event) {
          return ctx.onMouseDown($event);
        })("touchstart", function StageComponent_touchstart_HostBindingHandler($event) {
          return ctx.onTouchStart($event);
        })("touchcancel", function StageComponent_touchcancel_HostBindingHandler($event) {
          return ctx.onTouchCancel($event);
        })("dragstart", function StageComponent_dragstart_HostBindingHandler() {
          return ctx.onDragStart();
        })("selectstart", function StageComponent_selectstart_HostBindingHandler() {
          return ctx.onSelectStart();
        });
      }
    },
    inputs: {
      owlDraggable: "owlDraggable",
      stageData: "stageData",
      slidesData: "slidesData"
    },
    decls: 3,
    vars: 8,
    consts: [[1, "owl-stage", 3, "transitionend", "ngStyle"], [4, "ngFor", "ngForOf"], [1, "owl-item", 3, "animationend", "ngClass", "ngStyle"], [4, "ngIf"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function StageComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div")(1, "div", 0);
        \u0275\u0275listener("transitionend", function StageComponent_Template_div_transitionend_1_listener() {
          return ctx.onTransitionEnd();
        });
        \u0275\u0275template(2, StageComponent_ng_container_2_Template, 3, 9, "ng-container", 1);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngStyle", \u0275\u0275pureFunction5(2, _c0, ctx.stageData.width + "px", ctx.stageData.transform, ctx.stageData.transition, ctx.stageData.paddingL ? ctx.stageData.paddingL + "px" : "", ctx.stageData.paddingR ? ctx.stageData.paddingR + "px" : ""));
        \u0275\u0275advance();
        \u0275\u0275property("ngForOf", ctx.slidesData);
      }
    },
    dependencies: [NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle],
    encapsulation: 2,
    data: {
      animation: [trigger("autoHeight", [state("nulled", style({
        height: 0
      })), state("full", style({
        height: "*"
      })), transition("full => nulled", [
        // style({height: '*'}),
        animate("700ms 350ms")
      ]), transition("nulled => full", [
        // style({height: 0}),
        animate(350)
      ])])]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StageComponent, [{
    type: Component,
    args: [{
      selector: "owl-stage",
      template: `
    <div>
      <div class="owl-stage" [ngStyle]="{'width': stageData.width + 'px',
                                        'transform': stageData.transform,
                                        'transition': stageData.transition,
                                        'padding-left': stageData.paddingL ? stageData.paddingL + 'px' : '',
                                        'padding-right': stageData.paddingR ? stageData.paddingR + 'px' : '' }"
          (transitionend)="onTransitionEnd()">
        <ng-container *ngFor="let slide of slidesData; let i = index">
          <div class="owl-item" [ngClass]="slide.classes"
                                [ngStyle]="{'width': slide.width + 'px',
                                            'margin-left': slide.marginL ? slide.marginL + 'px' : '',
                                            'margin-right': slide.marginR ? slide.marginR + 'px' : '',
                                            'left': slide.left}"
                                (animationend)="clear(slide.id)"
                                [@autoHeight]="slide.heightState">
            <ng-template *ngIf="slide.load" [ngTemplateOutlet]="slide.tplRef" [ngTemplateOutletContext]="{ $implicit: preparePublicSlide(slide), index: i }"></ng-template>
          </div><!-- /.owl-item -->
        </ng-container>
      </div><!-- /.owl-stage -->
    </div>
  `,
      animations: [trigger("autoHeight", [state("nulled", style({
        height: 0
      })), state("full", style({
        height: "*"
      })), transition("full => nulled", [
        // style({height: '*'}),
        animate("700ms 350ms")
      ]), transition("nulled => full", [
        // style({height: 0}),
        animate(350)
      ])])]
    }]
  }], () => [{
    type: NgZone
  }, {
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: CarouselService
  }, {
    type: AnimateService
  }], {
    owlDraggable: [{
      type: Input
    }],
    stageData: [{
      type: Input
    }],
    slidesData: [{
      type: Input
    }],
    onMouseDown: [{
      type: HostListener,
      args: ["mousedown", ["$event"]]
    }],
    onTouchStart: [{
      type: HostListener,
      args: ["touchstart", ["$event"]]
    }],
    onTouchCancel: [{
      type: HostListener,
      args: ["touchcancel", ["$event"]]
    }],
    onDragStart: [{
      type: HostListener,
      args: ["dragstart"]
    }],
    onSelectStart: [{
      type: HostListener,
      args: ["selectstart"]
    }]
  });
})();
var CarouselComponent = class _CarouselComponent {
  el;
  resizeService;
  carouselService;
  navigationService;
  autoplayService;
  lazyLoadService;
  animateService;
  autoHeightService;
  hashService;
  logger;
  changeDetectorRef;
  slides;
  translated = new EventEmitter();
  dragging = new EventEmitter();
  change = new EventEmitter();
  changed = new EventEmitter();
  initialized = new EventEmitter();
  /**
   * Width of carousel window (tag with class .owl-carousel), in wich we can see moving sliders
   */
  carouselWindowWidth;
  /**
   * Subscription to 'resize' event
   */
  resizeSubscription;
  /**
   * Subscription merge Observable, which merges all Observables in the component except 'resize' Observable and this.slides.changes()
   */
  _allObservSubscription;
  /**
   * Subscription to `this.slides.changes().
   * It could be included in 'this._allObservSubscription', but that subcription get created during the initializing of component
   * and 'this.slides' are undefined at that moment. So it's needed to wait for initialization of content.
   */
  _slidesChangesSubscription;
  /**
   * Current settings for the carousel.
   */
  owlDOMData;
  /**
   * Data of owl-stage
   */
  stageData;
  /**
   *  Data of every slide
   */
  slidesData = [];
  /**
   * Data of navigation block
   */
  navData;
  /**
   * Data of dots block
   */
  dotsData;
  /**
   * Data, wich are passed out of carousel after ending of transioning of carousel
   */
  slidesOutputData;
  /**
   * Shows whether carousel is loaded of not.
   */
  carouselLoaded = false;
  /**
   * User's options
   */
  options;
  prevOptions;
  /**
   * Observable for getting current View Settings
   */
  _viewCurSettings$;
  /**
   * Observable for catching the end of transition of carousel
   */
  _translatedCarousel$;
  /**
   * Observable for catching the start of dragging of the carousel
   */
  _draggingCarousel$;
  /**
   * Observable for catching the start of changing of the carousel
   */
  _changeCarousel$;
  /**
   * Observable for catching the moment when the data about slides changed, more exactly when the position changed.
   */
  _changedCarousel$;
  /**
   * Observable for catching the initialization of changing the carousel
   */
  _initializedCarousel$;
  /**
   * Observable for merging all Observables and creating one subscription
   */
  _carouselMerge$;
  docRef;
  constructor(el, resizeService, carouselService, navigationService, autoplayService, lazyLoadService, animateService, autoHeightService, hashService, logger, changeDetectorRef, docRef) {
    this.el = el;
    this.resizeService = resizeService;
    this.carouselService = carouselService;
    this.navigationService = navigationService;
    this.autoplayService = autoplayService;
    this.lazyLoadService = lazyLoadService;
    this.animateService = animateService;
    this.autoHeightService = autoHeightService;
    this.hashService = hashService;
    this.logger = logger;
    this.changeDetectorRef = changeDetectorRef;
    this.docRef = docRef;
  }
  onVisibilityChange(ev) {
    if (!this.carouselService.settings.autoplay)
      return;
    switch (this.docRef.visibilityState) {
      case "visible":
        !this.autoplayService.isAutoplayStopped && this.autoplayService.play();
        break;
      case "hidden":
        this.autoplayService.pause();
        break;
      default:
        break;
    }
  }
  ngOnInit() {
    this.spyDataStreams();
    this.carouselWindowWidth = this.el.nativeElement.querySelector(".owl-carousel").clientWidth;
  }
  ngOnChanges() {
    if (this.prevOptions !== this.options) {
      if (this.prevOptions && this.slides?.toArray().length) {
        this.carouselService.setup(this.carouselWindowWidth, this.slides.toArray(), this.options);
        this.carouselService.initialize(this.slides.toArray());
      } else if (this.prevOptions && !this.slides?.toArray().length) {
        this.carouselLoaded = false;
        this.logger.log(`There are no slides to show. So the carousel won't be re-rendered`);
      } else {
        this.carouselLoaded = false;
      }
      this.prevOptions = this.options;
    }
  }
  ngAfterContentInit() {
    if (this.slides.toArray().length) {
      this.carouselService.setup(this.carouselWindowWidth, this.slides.toArray(), this.options);
      this.carouselService.initialize(this.slides.toArray());
      this._winResizeWatcher();
    } else {
      this.logger.log(`There are no slides to show. So the carousel won't be rendered`);
    }
    this._slidesChangesSubscription = this.slides.changes.pipe(tap((slides) => {
      this.carouselService.setup(this.carouselWindowWidth, slides.toArray(), this.options);
      this.carouselService.initialize(slides.toArray());
      if (!slides.toArray().length) {
        this.carouselLoaded = false;
      }
      if (slides.toArray().length && !this.resizeSubscription) {
        this._winResizeWatcher();
      }
    })).subscribe(() => {
    });
  }
  ngOnDestroy() {
    if (this.resizeSubscription) {
      this.resizeSubscription.unsubscribe();
    }
    if (this._slidesChangesSubscription) {
      this._slidesChangesSubscription.unsubscribe();
    }
    if (this._allObservSubscription) {
      this._allObservSubscription.unsubscribe();
    }
  }
  /**
   * Joins the observable login in one place: sets values to some observables, merges this observables and
   * subcribes to merge func
   */
  spyDataStreams() {
    this._viewCurSettings$ = this.carouselService.getViewCurSettings().pipe(tap((data) => {
      this.owlDOMData = data.owlDOMData;
      this.stageData = data.stageData;
      this.slidesData = data.slidesData;
      if (!this.carouselLoaded) {
        this.carouselLoaded = true;
      }
      this.navData = data.navData;
      this.dotsData = data.dotsData;
      this.changeDetectorRef.markForCheck();
    }));
    this._initializedCarousel$ = this.carouselService.getInitializedState().pipe(tap(() => {
      this.gatherTranslatedData();
      this.initialized.emit(this.slidesOutputData);
    }));
    this._translatedCarousel$ = this.carouselService.getTranslatedState().pipe(tap(() => {
      this.gatherTranslatedData();
      this.translated.emit(this.slidesOutputData);
    }));
    this._changeCarousel$ = this.carouselService.getChangeState().pipe(tap(() => {
      this.gatherTranslatedData();
      this.change.emit(this.slidesOutputData);
    }));
    this._changedCarousel$ = this.carouselService.getChangeState().pipe(switchMap((value) => {
      const changedPosition = of(value).pipe(filter(() => value.property.name === "position"), switchMap(() => from(this.slidesData)), skip(value.property.value), take(this.carouselService.settings.items), map((slide) => {
        const clonedIdPrefix = this.carouselService.clonedIdPrefix;
        const id = slide.id.indexOf(clonedIdPrefix) >= 0 ? slide.id.slice(clonedIdPrefix.length) : slide.id;
        return __spreadProps(__spreadValues({}, slide), {
          id,
          isActive: true
        });
      }), toArray(), map((slides) => {
        return {
          slides,
          startPosition: this.carouselService.relative(value.property.value)
        };
      }));
      return merge(changedPosition);
    }), tap((slidesData) => {
      this.gatherTranslatedData();
      this.changed.emit(slidesData.slides.length ? slidesData : this.slidesOutputData);
    }));
    this._draggingCarousel$ = this.carouselService.getDragState().pipe(tap(() => {
      this.gatherTranslatedData();
      this.dragging.emit({
        dragging: true,
        data: this.slidesOutputData
      });
    }), switchMap(() => this.carouselService.getDraggedState().pipe(map(() => !!this.carouselService.is("animating")))), switchMap((anim) => {
      if (anim) {
        return this.carouselService.getTranslatedState().pipe(first());
      } else {
        return of("not animating");
      }
    }), tap(() => {
      this.dragging.emit({
        dragging: false,
        data: this.slidesOutputData
      });
    }));
    this._carouselMerge$ = merge(this._viewCurSettings$, this._translatedCarousel$, this._draggingCarousel$, this._changeCarousel$, this._changedCarousel$, this._initializedCarousel$);
    this._allObservSubscription = this._carouselMerge$.subscribe(() => {
    });
  }
  /**
   * Init subscription to resize event and attaches handler for this event
   */
  _winResizeWatcher() {
    if (Object.keys(this.carouselService._options.responsive).length) {
      this.resizeSubscription = this.resizeService.onResize$.pipe(filter(() => this.carouselWindowWidth !== this.el.nativeElement.querySelector(".owl-carousel").clientWidth), delay(this.carouselService.settings.responsiveRefreshRate)).subscribe(() => {
        this.carouselService.onResize(this.el.nativeElement.querySelector(".owl-carousel").clientWidth);
        this.carouselWindowWidth = this.el.nativeElement.querySelector(".owl-carousel").clientWidth;
      });
    }
  }
  /**
   * Handler for transitioend event
   */
  onTransitionEnd() {
    this.carouselService.onTransitionEnd();
  }
  /**
   * Handler for click event, attached to next button
   */
  next() {
    if (!this.carouselLoaded)
      return;
    this.navigationService.next(this.carouselService.settings.navSpeed);
  }
  /**
   * Handler for click event, attached to prev button
   */
  prev() {
    if (!this.carouselLoaded)
      return;
    this.navigationService.prev(this.carouselService.settings.navSpeed);
  }
  /**
   * Handler for click event, attached to dots
   */
  moveByDot(dotId) {
    if (!this.carouselLoaded)
      return;
    this.navigationService.moveByDot(dotId);
  }
  /**
   * rewinds carousel to slide with needed id
   * @param id fragment of url
   */
  to(id) {
    if (!this.carouselLoaded)
      return;
    this.navigationService.toSlideById(id);
  }
  /**
   * Gathers and prepares data intended for passing to the user by means of firing event translatedCarousel
   */
  gatherTranslatedData() {
    let startPosition;
    const clonedIdPrefix = this.carouselService.clonedIdPrefix;
    const activeSlides = this.slidesData.filter((slide) => slide.isActive === true).map((slide) => {
      const id = slide.id.indexOf(clonedIdPrefix) >= 0 ? slide.id.slice(clonedIdPrefix.length) : slide.id;
      return {
        id,
        width: slide.width,
        marginL: slide.marginL,
        marginR: slide.marginR,
        center: slide.isCentered
      };
    });
    startPosition = this.carouselService.relative(this.carouselService.current());
    this.slidesOutputData = {
      startPosition,
      slides: activeSlides
    };
  }
  /**
   * Starts pausing
   */
  startPausing() {
    this.autoplayService.startPausing();
  }
  /**
   * Starts playing after mouse leaves carousel
   */
  startPlayML() {
    this.autoplayService.startPlayingMouseLeave();
  }
  /**
   * Starts playing after touch ends
   */
  startPlayTE() {
    this.autoplayService.startPlayingTouchEnd();
  }
  stopAutoplay() {
    this.autoplayService.isAutoplayStopped = true;
    this.autoplayService.stop();
  }
  startAutoplay() {
    this.autoplayService.isAutoplayStopped = false;
    this.autoplayService.play();
  }
  static \u0275fac = function CarouselComponent_Factory(t) {
    return new (t || _CarouselComponent)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ResizeService), \u0275\u0275directiveInject(CarouselService), \u0275\u0275directiveInject(NavigationService), \u0275\u0275directiveInject(AutoplayService), \u0275\u0275directiveInject(LazyLoadService), \u0275\u0275directiveInject(AnimateService), \u0275\u0275directiveInject(AutoHeightService), \u0275\u0275directiveInject(HashService), \u0275\u0275directiveInject(OwlLogger), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(DOCUMENT2));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _CarouselComponent,
    selectors: [["owl-carousel-o"]],
    contentQueries: function CarouselComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, CarouselSlideDirective, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.slides = _t);
      }
    },
    hostBindings: function CarouselComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("visibilitychange", function CarouselComponent_visibilitychange_HostBindingHandler($event) {
          return ctx.onVisibilityChange($event);
        }, false, \u0275\u0275resolveDocument);
      }
    },
    inputs: {
      options: "options"
    },
    outputs: {
      translated: "translated",
      dragging: "dragging",
      change: "change",
      changed: "changed",
      initialized: "initialized"
    },
    features: [\u0275\u0275ProvidersFeature([NavigationService, AutoplayService, CarouselService, LazyLoadService, AnimateService, AutoHeightService, HashService]), \u0275\u0275NgOnChangesFeature],
    decls: 4,
    vars: 9,
    consts: [["owlCarousel", ""], [1, "owl-carousel", "owl-theme", 3, "mouseover", "mouseleave", "touchstart", "touchend", "ngClass"], ["class", "owl-stage-outer", 4, "ngIf"], [4, "ngIf"], [1, "owl-stage-outer"], [3, "owlDraggable", "stageData", "slidesData"], [1, "owl-nav", 3, "ngClass"], [1, "owl-prev", 3, "click", "ngClass", "innerHTML"], [1, "owl-next", 3, "click", "ngClass", "innerHTML"], [1, "owl-dots", 3, "ngClass"], ["class", "owl-dot", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "owl-dot", 3, "click", "ngClass"], [3, "innerHTML"]],
    template: function CarouselComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1, 0);
        \u0275\u0275listener("mouseover", function CarouselComponent_Template_div_mouseover_0_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.startPausing());
        })("mouseleave", function CarouselComponent_Template_div_mouseleave_0_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.startPlayML());
        })("touchstart", function CarouselComponent_Template_div_touchstart_0_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.startPausing());
        })("touchend", function CarouselComponent_Template_div_touchend_0_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.startPlayTE());
        });
        \u0275\u0275template(2, CarouselComponent_div_2_Template, 2, 6, "div", 2)(3, CarouselComponent_ng_container_3_Template, 6, 15, "ng-container", 3);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction5(3, _c3, ctx.owlDOMData == null ? null : ctx.owlDOMData.rtl, ctx.owlDOMData == null ? null : ctx.owlDOMData.isLoaded, ctx.owlDOMData == null ? null : ctx.owlDOMData.isResponsive, ctx.owlDOMData == null ? null : ctx.owlDOMData.isMouseDragable, ctx.owlDOMData == null ? null : ctx.owlDOMData.isGrab));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngIf", ctx.carouselLoaded);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.slides.toArray().length);
      }
    },
    dependencies: [NgClass, NgForOf, NgIf, StageComponent],
    styles: [".owl-theme[_ngcontent-%COMP%]{display:block}"],
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CarouselComponent, [{
    type: Component,
    args: [{
      selector: "owl-carousel-o",
      template: `
    <div class="owl-carousel owl-theme" #owlCarousel
      [ngClass]="{'owl-rtl': owlDOMData?.rtl,
                  'owl-loaded': owlDOMData?.isLoaded,
                  'owl-responsive': owlDOMData?.isResponsive,
                  'owl-drag': owlDOMData?.isMouseDragable,
                  'owl-grab': owlDOMData?.isGrab}"
      (mouseover)="startPausing()"
      (mouseleave)="startPlayML()"
      (touchstart)="startPausing()"
      (touchend)="startPlayTE()">

      <div *ngIf="carouselLoaded" class="owl-stage-outer">
        <owl-stage [owlDraggable]="{'isMouseDragable': owlDOMData?.isMouseDragable, 'isTouchDragable': owlDOMData?.isTouchDragable}"
                    [stageData]="stageData"
                    [slidesData]="slidesData"></owl-stage>
      </div> <!-- /.owl-stage-outer -->
      <ng-container *ngIf="slides.toArray().length">
        <div class="owl-nav" [ngClass]="{'disabled': navData?.disabled}">
          <div class="owl-prev" [ngClass]="{'disabled': navData?.prev?.disabled}" (click)="prev()" [innerHTML]="navData?.prev?.htmlText"></div>
          <div class="owl-next" [ngClass]="{'disabled': navData?.next?.disabled}" (click)="next()" [innerHTML]="navData?.next?.htmlText"></div>
        </div> <!-- /.owl-nav -->
        <div class="owl-dots" [ngClass]="{'disabled': dotsData?.disabled}">
          <div *ngFor="let dot of dotsData?.dots" class="owl-dot" [ngClass]="{'active': dot.active, 'owl-dot-text': dot.showInnerContent}" (click)="moveByDot(dot.id)">
            <span [innerHTML]="dot.innerContent"></span>
          </div>
        </div> <!-- /.owl-dots -->
      </ng-container>
    </div> <!-- /.owl-carousel owl-loaded -->
  `,
      providers: [NavigationService, AutoplayService, CarouselService, LazyLoadService, AnimateService, AutoHeightService, HashService],
      changeDetection: ChangeDetectionStrategy.OnPush,
      styles: [".owl-theme{display:block}\n"]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: ResizeService
  }, {
    type: CarouselService
  }, {
    type: NavigationService
  }, {
    type: AutoplayService
  }, {
    type: LazyLoadService
  }, {
    type: AnimateService
  }, {
    type: AutoHeightService
  }, {
    type: HashService
  }, {
    type: OwlLogger
  }, {
    type: ChangeDetectorRef
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT2]
    }]
  }], {
    slides: [{
      type: ContentChildren,
      args: [CarouselSlideDirective]
    }],
    translated: [{
      type: Output
    }],
    dragging: [{
      type: Output
    }],
    change: [{
      type: Output
    }],
    changed: [{
      type: Output
    }],
    initialized: [{
      type: Output
    }],
    options: [{
      type: Input
    }],
    onVisibilityChange: [{
      type: HostListener,
      args: ["document:visibilitychange", ["$event"]]
    }]
  });
})();
var OwlRouterLinkDirective = class _OwlRouterLinkDirective {
  router;
  route;
  // TODO(issue/24571): remove '!'.
  queryParams;
  // TODO(issue/24571): remove '!'.
  fragment;
  // TODO(issue/24571): remove '!'.
  queryParamsHandling;
  // TODO(issue/24571): remove '!'.
  preserveFragment;
  // TODO(issue/24571): remove '!'.
  skipLocationChange;
  // TODO(issue/24571): remove '!'.
  replaceUrl;
  stopLink = false;
  commands = [];
  // TODO(issue/24571): remove '!'.
  preserve;
  constructor(router, route, tabIndex, renderer, el) {
    this.router = router;
    this.route = route;
    if (tabIndex == null) {
      renderer.setAttribute(el.nativeElement, "tabindex", "0");
    }
  }
  set owlRouterLink(commands) {
    if (commands != null) {
      this.commands = Array.isArray(commands) ? commands : [commands];
    } else {
      this.commands = [];
    }
  }
  /**
   * @deprecated 4.0.0 use `queryParamsHandling` instead.
   */
  set preserveQueryParams(value) {
    if (isDevMode() && console && console.warn) {
      console.warn("preserveQueryParams is deprecated!, use queryParamsHandling instead.");
    }
    this.preserve = value;
  }
  onClick() {
    const extras = {
      skipLocationChange: attrBoolValue(this.skipLocationChange),
      replaceUrl: attrBoolValue(this.replaceUrl)
    };
    if (this.stopLink) {
      return false;
    }
    this.router.navigateByUrl(this.urlTree, extras);
    return true;
  }
  get urlTree() {
    return this.router.createUrlTree(this.commands, {
      relativeTo: this.route,
      queryParams: this.queryParams,
      fragment: this.fragment,
      queryParamsHandling: this.queryParamsHandling,
      preserveFragment: attrBoolValue(this.preserveFragment)
    });
  }
  static \u0275fac = function OwlRouterLinkDirective_Factory(t) {
    return new (t || _OwlRouterLinkDirective)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275injectAttribute("tabindex"), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(ElementRef));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _OwlRouterLinkDirective,
    selectors: [["", "owlRouterLink", "", 5, "a"]],
    hostBindings: function OwlRouterLinkDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function OwlRouterLinkDirective_click_HostBindingHandler() {
          return ctx.onClick();
        });
      }
    },
    inputs: {
      queryParams: "queryParams",
      fragment: "fragment",
      queryParamsHandling: "queryParamsHandling",
      preserveFragment: "preserveFragment",
      skipLocationChange: "skipLocationChange",
      replaceUrl: "replaceUrl",
      stopLink: "stopLink",
      owlRouterLink: "owlRouterLink",
      preserveQueryParams: "preserveQueryParams"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OwlRouterLinkDirective, [{
    type: Directive,
    args: [{
      selector: ":not(a)[owlRouterLink]"
    }]
  }], () => [{
    type: Router
  }, {
    type: ActivatedRoute
  }, {
    type: void 0,
    decorators: [{
      type: Attribute,
      args: ["tabindex"]
    }]
  }, {
    type: Renderer2
  }, {
    type: ElementRef
  }], {
    queryParams: [{
      type: Input
    }],
    fragment: [{
      type: Input
    }],
    queryParamsHandling: [{
      type: Input
    }],
    preserveFragment: [{
      type: Input
    }],
    skipLocationChange: [{
      type: Input
    }],
    replaceUrl: [{
      type: Input
    }],
    stopLink: [{
      type: Input
    }],
    owlRouterLink: [{
      type: Input
    }],
    preserveQueryParams: [{
      type: Input
    }],
    onClick: [{
      type: HostListener,
      args: ["click"]
    }]
  });
})();
var OwlRouterLinkWithHrefDirective = class _OwlRouterLinkWithHrefDirective {
  router;
  route;
  locationStrategy;
  // TODO(issue/24571): remove '!'.
  target;
  // TODO(issue/24571): remove '!'.
  queryParams;
  // TODO(issue/24571): remove '!'.
  fragment;
  // TODO(issue/24571): remove '!'.
  queryParamsHandling;
  // TODO(issue/24571): remove '!'.
  preserveFragment;
  // TODO(issue/24571): remove '!'.
  skipLocationChange;
  // TODO(issue/24571): remove '!'.
  replaceUrl;
  stopLink = false;
  commands = [];
  subscription;
  // TODO(issue/24571): remove '!'.
  preserve;
  // the url displayed on the anchor element.
  // TODO(issue/24571): remove '!'.
  href;
  constructor(router, route, locationStrategy) {
    this.router = router;
    this.route = route;
    this.locationStrategy = locationStrategy;
    this.subscription = router.events.subscribe((s) => {
      if (s instanceof NavigationEnd) {
        this.updateTargetUrlAndHref();
      }
    });
  }
  set owlRouterLink(commands) {
    if (commands != null) {
      this.commands = Array.isArray(commands) ? commands : [commands];
    } else {
      this.commands = [];
    }
  }
  set preserveQueryParams(value) {
    if (isDevMode() && console && console.warn) {
      console.warn("preserveQueryParams is deprecated, use queryParamsHandling instead.");
    }
    this.preserve = value;
  }
  ngOnChanges(changes) {
    this.updateTargetUrlAndHref();
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  onClick(button, ctrlKey, metaKey, shiftKey) {
    if (button !== 0 || ctrlKey || metaKey || shiftKey) {
      return true;
    }
    if (typeof this.target === "string" && this.target !== "_self") {
      return true;
    }
    if (this.stopLink) {
      return false;
    }
    const extras = {
      skipLocationChange: attrBoolValue(this.skipLocationChange),
      replaceUrl: attrBoolValue(this.replaceUrl)
    };
    this.router.navigateByUrl(this.urlTree, extras);
    return false;
  }
  updateTargetUrlAndHref() {
    this.href = this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.urlTree));
  }
  get urlTree() {
    return this.router.createUrlTree(this.commands, {
      relativeTo: this.route,
      queryParams: this.queryParams,
      fragment: this.fragment,
      queryParamsHandling: this.queryParamsHandling,
      preserveFragment: attrBoolValue(this.preserveFragment)
    });
  }
  static \u0275fac = function OwlRouterLinkWithHrefDirective_Factory(t) {
    return new (t || _OwlRouterLinkWithHrefDirective)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(LocationStrategy));
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _OwlRouterLinkWithHrefDirective,
    selectors: [["a", "owlRouterLink", ""]],
    hostVars: 2,
    hostBindings: function OwlRouterLinkWithHrefDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function OwlRouterLinkWithHrefDirective_click_HostBindingHandler($event) {
          return ctx.onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey);
        });
      }
      if (rf & 2) {
        \u0275\u0275hostProperty("href", ctx.href, \u0275\u0275sanitizeUrl);
        \u0275\u0275attribute("target", ctx.target);
      }
    },
    inputs: {
      target: "target",
      queryParams: "queryParams",
      fragment: "fragment",
      queryParamsHandling: "queryParamsHandling",
      preserveFragment: "preserveFragment",
      skipLocationChange: "skipLocationChange",
      replaceUrl: "replaceUrl",
      stopLink: "stopLink",
      owlRouterLink: "owlRouterLink",
      preserveQueryParams: "preserveQueryParams"
    },
    features: [\u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OwlRouterLinkWithHrefDirective, [{
    type: Directive,
    args: [{
      selector: "a[owlRouterLink]"
    }]
  }], () => [{
    type: Router
  }, {
    type: ActivatedRoute
  }, {
    type: LocationStrategy
  }], {
    target: [{
      type: HostBinding,
      args: ["attr.target"]
    }, {
      type: Input
    }],
    queryParams: [{
      type: Input
    }],
    fragment: [{
      type: Input
    }],
    queryParamsHandling: [{
      type: Input
    }],
    preserveFragment: [{
      type: Input
    }],
    skipLocationChange: [{
      type: Input
    }],
    replaceUrl: [{
      type: Input
    }],
    stopLink: [{
      type: Input
    }],
    href: [{
      type: HostBinding
    }],
    owlRouterLink: [{
      type: Input
    }],
    preserveQueryParams: [{
      type: Input
    }],
    onClick: [{
      type: HostListener,
      args: ["click", ["$event.button", "$event.ctrlKey", "$event.metaKey", "$event.shiftKey"]]
    }]
  });
})();
function attrBoolValue(s) {
  return s === "" || !!s;
}
var CarouselModule = class _CarouselModule {
  static \u0275fac = function CarouselModule_Factory(t) {
    return new (t || _CarouselModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _CarouselModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [WINDOW_PROVIDERS, ResizeService, DOCUMENT_PROVIDERS, OwlLogger],
    imports: [CommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CarouselModule, [{
    type: NgModule,
    args: [{
      imports: [
        CommonModule
        // BrowserAnimationsModule, // there's an issue with this import while using lazy loading of module consuming this library. I don't remove it because it could be needed during future enhancement of this lib.
        // RouterModule.forChild(routes)
      ],
      declarations: [CarouselComponent, CarouselSlideDirective, StageComponent, OwlRouterLinkDirective, OwlRouterLinkWithHrefDirective],
      exports: [CarouselComponent, CarouselSlideDirective, OwlRouterLinkDirective, OwlRouterLinkWithHrefDirective],
      providers: [WINDOW_PROVIDERS, ResizeService, DOCUMENT_PROVIDERS, OwlLogger]
    }]
  }], null, null);
})();

// src/app/components/objectives/objectives.component.ts
function ObjectivesComponent_7_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 7);
    \u0275\u0275elementStart(1, "div", 8)(2, "div", 9)(3, "h4");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const objective_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275propertyInterpolate("src", objective_r1.image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(objective_r1.title);
  }
}
function ObjectivesComponent_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ObjectivesComponent_7_ng_template_0_Template, 5, 2, "ng-template", 6);
  }
}
var _ObjectivesComponent = class _ObjectivesComponent {
  constructor(dataService) {
    this.dataService = dataService;
    this.customOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: false,
      dots: false,
      navSpeed: 700,
      navText: ['<i class="fa-solid fa-chevron-left"></i>', '<i class="fa-solid fa-chevron-right"></i>'],
      responsive: {
        0: {
          items: 1
        },
        420: {
          items: 2
        },
        576: {
          items: 3
        },
        768: {
          items: 4
        },
        1024: {
          items: 5
        }
      },
      nav: true
    };
  }
  ngOnInit() {
    this.data = this.dataService.getData();
  }
};
_ObjectivesComponent.\u0275fac = function ObjectivesComponent_Factory(t) {
  return new (t || _ObjectivesComponent)(\u0275\u0275directiveInject(DataService));
};
_ObjectivesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ObjectivesComponent, selectors: [["app-objectives"]], decls: 8, vars: 2, consts: [["id", "objectives", 1, "objectives-section"], [1, "top"], ["src", "../../../assets/images/infra2.png", "alt", "", 1, "infra2"], [1, "objectives-title"], [1, "carousel", 3, "options"], [4, "ngFor", "ngForOf"], ["carouselSlide", ""], ["alt", "img", 3, "src"], [1, "caro-overlay"], [1, "after"]], template: function ObjectivesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0)(1, "div", 1);
    \u0275\u0275element(2, "img", 2);
    \u0275\u0275elementStart(3, "div", 3)(4, "h1");
    \u0275\u0275text(5, "Objectives");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "owl-carousel-o", 4);
    \u0275\u0275template(7, ObjectivesComponent_7_Template, 1, 0, null, 5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275property("options", ctx.customOptions);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx.data.objectives);
  }
}, dependencies: [NgForOf, CarouselComponent, CarouselSlideDirective], styles: ['\n\n.objectives-section[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 120vh;\n  flex-direction: column;\n  gap: 4rem;\n  background-color: #bfded9;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.objectives-section[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.objectives-section[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%] {\n  margin-bottom: 5rem;\n}\n.objectives-section[_ngcontent-%COMP%]   .infra2[_ngcontent-%COMP%] {\n  width: 300px;\n  position: absolute;\n  top: 3rem;\n  left: 0;\n}\n.objectives-section[_ngcontent-%COMP%]   .objectives-title[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 4rem;\n  right: 0rem;\n  color: #18372f;\n  width: 300px !important;\n  font-size: 30px;\n  display: flex;\n  text-align: center;\n  justify-content: flex-start;\n  margin-bottom: 3rem;\n}\n.objectives-section[_ngcontent-%COMP%]   .objectives-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  display: inline;\n  width: fit-content;\n}\n.objectives-section[_ngcontent-%COMP%]   .objectives-title[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: 30px;\n  width: 100%;\n  height: 3px;\n  background-color: #18372f;\n}\n.objectives-section[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 84%;\n  position: relative;\n}\n.objectives-section[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  object-fit: cover;\n  height: 350px;\n  margin: 0;\n  padding: 0;\n  transition: transform 0.3s ease-in-out;\n  position: relative;\n}\n.objectives-section[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .caro-overlay[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.3);\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  bottom: 0;\n  left: 0;\n  z-index: 10;\n}\n.objectives-section[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .after[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1200;\n  text-align: center;\n  color: rgb(208, 190, 169);\n  font-size: 18px;\n  font-weight: 500;\n  left: 0;\n  bottom: 0px;\n  width: 100%;\n  height: 20%;\n  background-color: #17372e;\n  transition: height 0.3s ease-in-out;\n}\n.objectives-section[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .after[_ngcontent-%COMP%]:hover {\n  height: 60%;\n}\n.objectives-section[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .owl-carousel.owl-drag[_ngcontent-%COMP%]   .owl-item[_ngcontent-%COMP%] {\n  width: 200px !important;\n}\n.objectives-section[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .owl-carousel[_ngcontent-%COMP%]   .owl-stage[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center !important;\n  gap: 1rem !important;\n}\n.objectives-section[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .carousel-controls[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  width: calc(100% + 60px);\n  display: flex;\n  justify-content: space-between;\n}\n.objectives-section[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .owl-nav[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 45%;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.objectives-section[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .owl-prev[_ngcontent-%COMP%], .objectives-section[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .owl-next[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  width: 26px;\n  height: 26px;\n  color: #18372f;\n  border-radius: 6px;\n  background-color: transparent;\n  border: 1.5px solid #18372f;\n  text-align: center;\n  line-height: 30px;\n  cursor: pointer;\n  font-size: 15px;\n  align-self: center;\n}\n.objectives-section[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .owl-prev[_ngcontent-%COMP%]:hover, .objectives-section[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .owl-next[_ngcontent-%COMP%]:hover {\n  background-color: transparent;\n  color: #18372f;\n}\n.objectives-section[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .owl-prev[_ngcontent-%COMP%] {\n  left: -90px;\n}\n.objectives-section[_ngcontent-%COMP%]   .carousel[_ngcontent-%COMP%]   .owl-next[_ngcontent-%COMP%] {\n  right: -90px;\n}\n/*# sourceMappingURL=objectives.component.css.map */'] });
var ObjectivesComponent = _ObjectivesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ObjectivesComponent, { className: "ObjectivesComponent", filePath: "src\\app\\components\\objectives\\objectives.component.ts", lineNumber: 11 });
})();

// src/app/components/footer/footer.component.ts
function FooterComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "div", 7)(2, "img", 25);
    \u0275\u0275elementStart(3, "div", 9)(4, "h2", 10);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 11);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const member_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", member_r1.image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(member_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(member_r1.title);
  }
}
var _FooterComponent = class _FooterComponent {
  constructor(dataService) {
    this.dataService = dataService;
  }
  ngOnInit() {
    this.data = this.dataService.getData();
  }
};
_FooterComponent.\u0275fac = function FooterComponent_Factory(t) {
  return new (t || _FooterComponent)(\u0275\u0275directiveInject(DataService));
};
_FooterComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FooterComponent, selectors: [["app-footer"]], decls: 35, vars: 1, consts: [["id", "directors", 1, "directors-section"], [1, "directors-overlay"], [1, "directors-title"], [1, "directors-content"], [1, "row1"], ["src", "../../../assets/images/leftlines.png", "alt", "", 1, "left-lines"], [1, "member-card"], [1, "card-overlay"], ["src", "../../../assets/images/image724.png", "alt", "Person Image", 1, "member1-image"], [1, "card-content"], [1, "member-name"], [1, "member-title"], ["src", "../../../assets/images/rightlines.png", "alt", "", 1, "right-lines"], [1, "row2"], ["class", "member-card", 4, "ngFor", "ngForOf"], [1, "footer"], [1, "top-footer"], [1, "left-footer"], ["src", "../../../assets/images/lines.png", "alt", "img", 1, "footer-lines"], [1, "right-footer"], ["src", "../../../assets/images/path501.png", "alt", "img", 1, "fund-img"], ["src", "../../../assets/images/path176.png", "alt", "img", 1, "vision-img"], [1, "info"], [1, "bottom-footer"], ["src", "../../../assets/images/path508.png", "alt", "", 1, "infra-footer"], ["alt", "Person Image", 1, "member-image", 3, "src"]], template: function FooterComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0);
    \u0275\u0275element(1, "div", 1);
    \u0275\u0275elementStart(2, "div", 2)(3, "h1");
    \u0275\u0275text(4, "Board of Directors");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 3)(6, "div", 4);
    \u0275\u0275element(7, "img", 5);
    \u0275\u0275elementStart(8, "div", 6);
    \u0275\u0275element(9, "div", 7)(10, "img", 8);
    \u0275\u0275elementStart(11, "div", 9)(12, "h2", 10);
    \u0275\u0275text(13, "HE Faisal Alibrahim");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "p", 11);
    \u0275\u0275text(15, "Chair man");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(16, "img", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 13);
    \u0275\u0275template(18, FooterComponent_div_18_Template, 8, 3, "div", 14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "footer", 15)(20, "div", 16)(21, "div", 17);
    \u0275\u0275element(22, "img", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 19);
    \u0275\u0275element(24, "img", 20)(25, "img", 21);
    \u0275\u0275elementStart(26, "div", 22)(27, "p");
    \u0275\u0275text(28, "Contact: info--infra.gov.sa");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "p");
    \u0275\u0275text(30, "All rights reserved");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "p");
    \u0275\u0275text(32, "National Infrastructure Fund 2024");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(33, "div", 23);
    \u0275\u0275element(34, "img", 24);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(18);
    \u0275\u0275property("ngForOf", ctx.data.members);
  }
}, dependencies: [NgForOf], styles: ['\n\n.directors-section[_ngcontent-%COMP%] {\n  background-color: #17372e;\n  height: auto;\n  position: relative;\n  overflow: hidden;\n  padding: 12rem 0;\n}\n.directors-overlay[_ngcontent-%COMP%] {\n  background-image: url("./media/overlay.png");\n  background-size: cover;\n  background-position: center;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: 10;\n}\n.directors-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 20;\n  display: flex;\n  gap: 5rem;\n  flex-direction: column;\n  align-items: center;\n}\n.directors-title[_ngcontent-%COMP%] {\n  z-index: 10000;\n  position: absolute;\n  top: 5rem;\n  right: 0rem;\n  color: rgb(208, 190, 169);\n  width: 360px;\n  font-size: 23px;\n  display: flex;\n  text-align: center;\n  justify-content: flex-start;\n  margin-bottom: 3rem;\n}\n.directors-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  display: inline;\n  width: fit-content;\n}\n.directors-title[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: 20px;\n  width: 100%;\n  height: 3px;\n  background-color: rgb(208, 190, 169);\n}\n.row1[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  padding: 0;\n}\n.row1[_ngcontent-%COMP%]   .right-lines[_ngcontent-%COMP%] {\n  width: 500px;\n  height: 30px;\n  margin-top: 7rem;\n}\n.row1[_ngcontent-%COMP%]   .left-lines[_ngcontent-%COMP%] {\n  margin-top: 3rem;\n  width: 500px;\n  height: 30px;\n}\n.member-card[_ngcontent-%COMP%] {\n  background-color: #234d42;\n  width: 190px;\n  height: 190px;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border-radius: 8px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  position: relative;\n  transition: transform 0.3s ease-in-out;\n}\n.card-overlay[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      to bottom,\n      rgba(218, 204, 187, 0),\n      rgba(61, 60, 59, 0.4));\n  border-radius: 10px;\n  position: absolute;\n  width: 100%;\n  height: 30%;\n  bottom: 0;\n  left: 0;\n  z-index: 10;\n}\n.member1-image[_ngcontent-%COMP%] {\n  width: 160px;\n  height: 160px;\n  object-fit: cover;\n  margin-top: 10px;\n}\n.member-image[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  object-fit: cover;\n  margin-top: 10px;\n  position: relative;\n  border: 1px solid rgb(208, 190, 169);\n}\n.member-image[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: -10px;\n  right: -10px;\n  width: 20px;\n  height: 20px;\n  background-color: rgb(206, 188, 166);\n  border-radius: 50%;\n  z-index: 120000;\n}\n.card-content[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.card-content[_ngcontent-%COMP%]   .member-name[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  font-weight: 600;\n  color: rgb(208, 190, 169);\n}\n.card-content[_ngcontent-%COMP%]   .member-title[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-size: 0.7rem;\n  font-weight: 400;\n  color: white;\n}\n.row2[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 1rem;\n  width: 100%;\n  padding: 1rem 1rem;\n  flex-wrap: nowrap;\n}\n@media (min-width: 320px) {\n  .row1[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    padding: 0;\n  }\n  .row1[_ngcontent-%COMP%]   .right-lines[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .row1[_ngcontent-%COMP%]   .left-lines[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .row2[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    gap: 3rem;\n  }\n}\n@media (min-width: 576px) {\n  .row1[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    padding: 0;\n  }\n  .row1[_ngcontent-%COMP%]   .right-lines[_ngcontent-%COMP%] {\n    display: block;\n    width: 180px;\n    height: 30px;\n    margin-top: 7rem;\n  }\n  .row1[_ngcontent-%COMP%]   .left-lines[_ngcontent-%COMP%] {\n    display: block;\n    margin-top: 3rem;\n    width: 180px;\n    height: 30px;\n  }\n  .row2[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    gap: 5rem;\n    padding: 0 5rem;\n  }\n}\n@media (min-width: 768px) {\n  .row1[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    padding: 0;\n  }\n  .row1[_ngcontent-%COMP%]   .right-lines[_ngcontent-%COMP%] {\n    display: block;\n    width: 280px;\n    height: 30px;\n    margin-top: 7rem;\n  }\n  .row1[_ngcontent-%COMP%]   .left-lines[_ngcontent-%COMP%] {\n    display: block;\n    margin-top: 3rem;\n    width: 280px;\n    height: 30px;\n  }\n  .row2[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap !important;\n    justify-content: center;\n    gap: 5rem !important;\n    padding: 0 5rem;\n  }\n}\n@media (min-width: 992px) {\n  .row1[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    justify-content: space-between;\n    padding: 0;\n  }\n  .row1[_ngcontent-%COMP%]   .right-lines[_ngcontent-%COMP%] {\n    display: block;\n    width: 400px;\n    height: 30px;\n    margin-top: 7rem;\n  }\n  .row1[_ngcontent-%COMP%]   .left-lines[_ngcontent-%COMP%] {\n    display: block;\n    margin-top: 3rem;\n    width: 400px;\n    height: 30px;\n  }\n  .row2[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: nowrap !important;\n    justify-content: center;\n    gap: 1rem !important;\n    padding: 0rem 1rem;\n  }\n}\n.footer[_ngcontent-%COMP%] {\n  height: auto;\n  background-color: #17372e;\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 2rem;\n  padding-right: 8rem;\n}\n.top-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.top-footer[_ngcontent-%COMP%]   .fund-img[_ngcontent-%COMP%], .top-footer[_ngcontent-%COMP%]   .vision-img[_ngcontent-%COMP%] {\n  width: 90px;\n  height: 50px;\n  margin-right: 3rem;\n}\n.footer-lines[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 100px;\n}\n.right-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding-right: 2rem;\n}\n.bottom-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  margin-right: 2rem;\n}\n.bottom-footer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 150px;\n}\n.info[_ngcontent-%COMP%] {\n  display: inline;\n  color: rgb(208, 190, 169);\n  font-size: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 3px;\n  padding: 0;\n}\n@media (min-width: 320px) {\n  .footer[_ngcontent-%COMP%] {\n    padding-right: 0rem;\n  }\n  .top-footer[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .directors-title[_ngcontent-%COMP%] {\n    top: 2rem;\n    right: 50%;\n    transform: translateX(50%);\n    width: 360px !important;\n    font-size: 18px;\n    justify-content: center;\n    margin-bottom: 6rem;\n  }\n  .directors-title[_ngcontent-%COMP%]:after {\n    width: 62%;\n    bottom: 20px;\n  }\n  .right-footer[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    padding-top: 1rem;\n    gap: 2rem;\n    justify-content: space-between;\n  }\n  .footer-lines[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .infra-footer[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .inf[_ngcontent-%COMP%] {\n    order: 1;\n  }\n  .vision-img[_ngcontent-%COMP%] {\n    order: 2;\n    margin-right: 0rem !important;\n  }\n  .fund-img[_ngcontent-%COMP%] {\n    width: 90px;\n    height: 50px;\n    margin-right: 0rem !important;\n    order: 3;\n  }\n}\n@media (min-width: 576px) {\n  .footer[_ngcontent-%COMP%] {\n    padding-right: 0rem !important;\n  }\n  .directors-title[_ngcontent-%COMP%] {\n    top: 2rem;\n    right: 50%;\n    transform: translateX(50%);\n    width: 360px !important;\n    font-size: 20px;\n    justify-content: center;\n    margin-bottom: 6rem;\n  }\n  .directors-title[_ngcontent-%COMP%]:after {\n    width: 70%;\n    bottom: 20px;\n  }\n  .right-footer[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    padding-top: 1rem;\n    gap: 2rem;\n    justify-content: space-between;\n  }\n  .footer-lines[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .infra-footer[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .top-footer[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .info[_ngcontent-%COMP%] {\n    order: 3;\n  }\n  .vision-img[_ngcontent-%COMP%] {\n    order: 2;\n    margin-right: 3rem;\n  }\n  .fund-img[_ngcontent-%COMP%] {\n    width: 90px;\n    height: 50px;\n    margin-right: 3rem;\n    order: 1;\n  }\n}\n@media (min-width: 768px) {\n  .footer[_ngcontent-%COMP%] {\n    padding-right: 8rem;\n  }\n  .directors-title[_ngcontent-%COMP%] {\n    top: 2rem;\n    right: 0rem;\n    transform: translateX(0%);\n    width: 360px !important;\n    font-size: 23px;\n    justify-content: flex-start;\n  }\n  .directors-title[_ngcontent-%COMP%]::after {\n    width: 100%;\n    bottom: 20px;\n  }\n  .right-footer[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    padding-top: 0rem;\n    gap: 2rem;\n    align-items: center;\n    justify-content: space-between;\n  }\n  .footer-lines[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .infra-footer[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .top-footer[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  }\n  .info[_ngcontent-%COMP%] {\n    order: 3;\n  }\n  .vision-img[_ngcontent-%COMP%] {\n    order: 2;\n    margin-right: 3rem;\n  }\n  .fund-img[_ngcontent-%COMP%] {\n    width: 90px;\n    height: 50px;\n    margin-right: 3rem;\n    order: 1;\n  }\n}\n@media (min-width: 992px) {\n  .footer[_ngcontent-%COMP%] {\n    padding-right: 8rem;\n  }\n  .directors-title[_ngcontent-%COMP%] {\n    top: 2rem;\n    right: 0rem;\n    transform: translateX(0%);\n    width: 360px !important;\n    font-size: 24px;\n    justify-content: flex-start;\n  }\n  .directors-title[_ngcontent-%COMP%]::after {\n    width: 100%;\n    bottom: 20px;\n  }\n  .right-footer[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    padding-top: 0rem;\n    gap: 2rem;\n    align-items: center;\n    justify-content: space-between;\n  }\n  .footer-lines[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .infra-footer[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .top-footer[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  }\n  .fund-img[_ngcontent-%COMP%], .vision-img[_ngcontent-%COMP%] {\n    width: 90px;\n    height: 50px;\n    margin-right: 3rem;\n  }\n  .info[_ngcontent-%COMP%] {\n    order: 3;\n  }\n  .vision-img[_ngcontent-%COMP%] {\n    order: 2;\n  }\n  .fund-img[_ngcontent-%COMP%] {\n    width: 90px;\n    height: 50px;\n    margin-right: 3rem;\n    order: 1;\n  }\n}\n/*# sourceMappingURL=footer.component.css.map */'] });
var FooterComponent = _FooterComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FooterComponent, { className: "FooterComponent", filePath: "src\\app\\components\\footer\\footer.component.ts", lineNumber: 10 });
})();

// src/app/app.component.ts
var _AppComponent = class _AppComponent {
  constructor() {
    this.title = "INFRA";
  }
};
_AppComponent.\u0275fac = function AppComponent_Factory(t) {
  return new (t || _AppComponent)();
};
_AppComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 6, vars: 0, template: function AppComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-header")(1, "app-about-the-fund")(2, "app-objectives")(3, "app-targeted-sectors")(4, "app-news")(5, "app-footer");
  }
}, dependencies: [HeaderComponent, AboutTheFundComponent, TargetedSectorsComponent, NewsComponent, ObjectivesComponent, FooterComponent] });
var AppComponent = _AppComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src\\app\\app.component.ts", lineNumber: 8 });
})();

// node_modules/@angular/platform-browser/fesm2022/animations/async.mjs
var ANIMATION_PREFIX = "@";
var _AsyncAnimationRendererFactory = class _AsyncAnimationRendererFactory {
  /**
   *
   * @param moduleImpl allows to provide a mock implmentation (or will load the animation module)
   */
  constructor(doc, delegate, zone, animationType, moduleImpl) {
    this.doc = doc;
    this.delegate = delegate;
    this.zone = zone;
    this.animationType = animationType;
    this.moduleImpl = moduleImpl;
    this._rendererFactoryPromise = null;
    this.scheduler = inject(ChangeDetectionScheduler, {
      optional: true
    });
  }
  /** @nodoc */
  ngOnDestroy() {
    this._engine?.flush();
  }
  /**
   * @internal
   */
  loadImpl() {
    const moduleImpl = this.moduleImpl ?? import("./chunk-K7SF2VFL.mjs");
    return moduleImpl.catch((e) => {
      throw new RuntimeError(5300, (typeof ngDevMode === "undefined" || ngDevMode) && "Async loading for animations package was enabled, but loading failed. Angular falls back to using regular rendering. No animations will be displayed and their styles won't be applied.");
    }).then(({
      \u0275createEngine,
      \u0275AnimationRendererFactory
    }) => {
      this._engine = \u0275createEngine(this.animationType, this.doc, this.scheduler);
      const rendererFactory = new \u0275AnimationRendererFactory(this.delegate, this._engine, this.zone);
      this.delegate = rendererFactory;
      return rendererFactory;
    });
  }
  /**
   * This method is delegating the renderer creation to the factories.
   * It uses default factory while the animation factory isn't loaded
   * and will rely on the animation factory once it is loaded.
   *
   * Calling this method will trigger as side effect the loading of the animation module
   * if the renderered component uses animations.
   */
  createRenderer(hostElement, rendererType) {
    const renderer = this.delegate.createRenderer(hostElement, rendererType);
    if (renderer.\u0275type === 0) {
      return renderer;
    }
    if (typeof renderer.throwOnSyntheticProps === "boolean") {
      renderer.throwOnSyntheticProps = false;
    }
    const dynamicRenderer = new DynamicDelegationRenderer(renderer);
    if (rendererType?.data?.["animation"] && !this._rendererFactoryPromise) {
      this._rendererFactoryPromise = this.loadImpl();
    }
    this._rendererFactoryPromise?.then((animationRendererFactory) => {
      const animationRenderer = animationRendererFactory.createRenderer(hostElement, rendererType);
      dynamicRenderer.use(animationRenderer);
    }).catch((e) => {
      dynamicRenderer.use(renderer);
    });
    return dynamicRenderer;
  }
  begin() {
    this.delegate.begin?.();
  }
  end() {
    this.delegate.end?.();
  }
  whenRenderingDone() {
    return this.delegate.whenRenderingDone?.() ?? Promise.resolve();
  }
};
_AsyncAnimationRendererFactory.\u0275fac = function AsyncAnimationRendererFactory_Factory(t) {
  \u0275\u0275invalidFactory();
};
_AsyncAnimationRendererFactory.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _AsyncAnimationRendererFactory,
  factory: _AsyncAnimationRendererFactory.\u0275fac
});
var AsyncAnimationRendererFactory = _AsyncAnimationRendererFactory;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsyncAnimationRendererFactory, [{
    type: Injectable
  }], () => [{
    type: Document
  }, {
    type: RendererFactory2
  }, {
    type: NgZone
  }, {
    type: void 0
  }, {
    type: Promise
  }], null);
})();
var DynamicDelegationRenderer = class {
  constructor(delegate) {
    this.delegate = delegate;
    this.replay = [];
    this.\u0275type = 1;
  }
  use(impl) {
    this.delegate = impl;
    if (this.replay !== null) {
      for (const fn of this.replay) {
        fn(impl);
      }
      this.replay = null;
    }
  }
  get data() {
    return this.delegate.data;
  }
  destroy() {
    this.replay = null;
    this.delegate.destroy();
  }
  createElement(name, namespace) {
    return this.delegate.createElement(name, namespace);
  }
  createComment(value) {
    return this.delegate.createComment(value);
  }
  createText(value) {
    return this.delegate.createText(value);
  }
  get destroyNode() {
    return this.delegate.destroyNode;
  }
  appendChild(parent, newChild) {
    this.delegate.appendChild(parent, newChild);
  }
  insertBefore(parent, newChild, refChild, isMove) {
    this.delegate.insertBefore(parent, newChild, refChild, isMove);
  }
  removeChild(parent, oldChild, isHostElement) {
    this.delegate.removeChild(parent, oldChild, isHostElement);
  }
  selectRootElement(selectorOrNode, preserveContent) {
    return this.delegate.selectRootElement(selectorOrNode, preserveContent);
  }
  parentNode(node) {
    return this.delegate.parentNode(node);
  }
  nextSibling(node) {
    return this.delegate.nextSibling(node);
  }
  setAttribute(el, name, value, namespace) {
    this.delegate.setAttribute(el, name, value, namespace);
  }
  removeAttribute(el, name, namespace) {
    this.delegate.removeAttribute(el, name, namespace);
  }
  addClass(el, name) {
    this.delegate.addClass(el, name);
  }
  removeClass(el, name) {
    this.delegate.removeClass(el, name);
  }
  setStyle(el, style2, value, flags) {
    this.delegate.setStyle(el, style2, value, flags);
  }
  removeStyle(el, style2, flags) {
    this.delegate.removeStyle(el, style2, flags);
  }
  setProperty(el, name, value) {
    if (this.shouldReplay(name)) {
      this.replay.push((renderer) => renderer.setProperty(el, name, value));
    }
    this.delegate.setProperty(el, name, value);
  }
  setValue(node, value) {
    this.delegate.setValue(node, value);
  }
  listen(target, eventName, callback) {
    if (this.shouldReplay(eventName)) {
      this.replay.push((renderer) => renderer.listen(target, eventName, callback));
    }
    return this.delegate.listen(target, eventName, callback);
  }
  shouldReplay(propOrEventName) {
    return this.replay !== null && propOrEventName.startsWith(ANIMATION_PREFIX);
  }
};
function provideAnimationsAsync(type = "animations") {
  performanceMarkFeature("NgAsyncAnimations");
  return makeEnvironmentProviders([{
    provide: RendererFactory2,
    useFactory: (doc, renderer, zone) => {
      return new AsyncAnimationRendererFactory(doc, renderer, zone, type);
    },
    deps: [DOCUMENT, DomRendererFactory2, NgZone]
  }, {
    provide: ANIMATION_MODULE_TYPE,
    useValue: type === "noop" ? "NoopAnimations" : "BrowserAnimations"
  }]);
}

// node_modules/@angular/cdk/fesm2022/platform.mjs
var hasV8BreakIterator;
try {
  hasV8BreakIterator = typeof Intl !== "undefined" && Intl.v8BreakIterator;
} catch {
  hasV8BreakIterator = false;
}
var _Platform = class _Platform {
  constructor(_platformId) {
    this._platformId = _platformId;
    this.isBrowser = this._platformId ? isPlatformBrowser(this._platformId) : typeof document === "object" && !!document;
    this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
    this.TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent);
    this.BLINK = this.isBrowser && !!(window.chrome || hasV8BreakIterator) && typeof CSS !== "undefined" && !this.EDGE && !this.TRIDENT;
    this.WEBKIT = this.isBrowser && /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
    this.IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) && !("MSStream" in window);
    this.FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
    this.ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT;
    this.SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
  }
};
_Platform.\u0275fac = function Platform_Factory(t) {
  return new (t || _Platform)(\u0275\u0275inject(PLATFORM_ID));
};
_Platform.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _Platform,
  factory: _Platform.\u0275fac,
  providedIn: "root"
});
var Platform = _Platform;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Platform, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Object,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }], null);
})();
var _PlatformModule = class _PlatformModule {
};
_PlatformModule.\u0275fac = function PlatformModule_Factory(t) {
  return new (t || _PlatformModule)();
};
_PlatformModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _PlatformModule
});
_PlatformModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
var PlatformModule = _PlatformModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlatformModule, [{
    type: NgModule,
    args: [{}]
  }], null, null);
})();
var supportsPassiveEvents;
function supportsPassiveEventListeners() {
  if (supportsPassiveEvents == null && typeof window !== "undefined") {
    try {
      window.addEventListener("test", null, Object.defineProperty({}, "passive", {
        get: () => supportsPassiveEvents = true
      }));
    } finally {
      supportsPassiveEvents = supportsPassiveEvents || false;
    }
  }
  return supportsPassiveEvents;
}
function normalizePassiveListenerOptions(options) {
  return supportsPassiveEventListeners() ? options : !!options.capture;
}
var RtlScrollAxisType;
(function(RtlScrollAxisType2) {
  RtlScrollAxisType2[RtlScrollAxisType2["NORMAL"] = 0] = "NORMAL";
  RtlScrollAxisType2[RtlScrollAxisType2["NEGATED"] = 1] = "NEGATED";
  RtlScrollAxisType2[RtlScrollAxisType2["INVERTED"] = 2] = "INVERTED";
})(RtlScrollAxisType || (RtlScrollAxisType = {}));
var shadowDomIsSupported;
function _supportsShadowDom() {
  if (shadowDomIsSupported == null) {
    const head = typeof document !== "undefined" ? document.head : null;
    shadowDomIsSupported = !!(head && (head.createShadowRoot || head.attachShadow));
  }
  return shadowDomIsSupported;
}
function _getShadowRoot(element) {
  if (_supportsShadowDom()) {
    const rootNode = element.getRootNode ? element.getRootNode() : null;
    if (typeof ShadowRoot !== "undefined" && ShadowRoot && rootNode instanceof ShadowRoot) {
      return rootNode;
    }
  }
  return null;
}
function _getFocusedElementPierceShadowDom() {
  let activeElement = typeof document !== "undefined" && document ? document.activeElement : null;
  while (activeElement && activeElement.shadowRoot) {
    const newActiveElement = activeElement.shadowRoot.activeElement;
    if (newActiveElement === activeElement) {
      break;
    } else {
      activeElement = newActiveElement;
    }
  }
  return activeElement;
}
function _getEventTarget(event) {
  return event.composedPath ? event.composedPath()[0] : event.target;
}
function _isTestEnvironment() {
  return (
    // @ts-ignore
    typeof __karma__ !== "undefined" && !!__karma__ || // @ts-ignore
    typeof jasmine !== "undefined" && !!jasmine || // @ts-ignore
    typeof jest !== "undefined" && !!jest || // @ts-ignore
    typeof Mocha !== "undefined" && !!Mocha
  );
}

// node_modules/@angular/cdk/fesm2022/keycodes.mjs
var ENTER = 13;
var SHIFT = 16;
var CONTROL = 17;
var ALT = 18;
var SPACE = 32;
var META = 91;
var MAC_META = 224;
function hasModifierKey(event, ...modifiers) {
  if (modifiers.length) {
    return modifiers.some((modifier) => event[modifier]);
  }
  return event.altKey || event.shiftKey || event.ctrlKey || event.metaKey;
}

// node_modules/@angular/cdk/fesm2022/coercion.mjs
function coerceNumberProperty(value, fallbackValue = 0) {
  return _isNumberValue(value) ? Number(value) : fallbackValue;
}
function _isNumberValue(value) {
  return !isNaN(parseFloat(value)) && !isNaN(Number(value));
}
function coerceArray(value) {
  return Array.isArray(value) ? value : [value];
}
function coerceElement(elementOrRef) {
  return elementOrRef instanceof ElementRef ? elementOrRef.nativeElement : elementOrRef;
}

// node_modules/@angular/cdk/fesm2022/observers.mjs
function shouldIgnoreRecord(record) {
  if (record.type === "characterData" && record.target instanceof Comment) {
    return true;
  }
  if (record.type === "childList") {
    for (let i = 0; i < record.addedNodes.length; i++) {
      if (!(record.addedNodes[i] instanceof Comment)) {
        return false;
      }
    }
    for (let i = 0; i < record.removedNodes.length; i++) {
      if (!(record.removedNodes[i] instanceof Comment)) {
        return false;
      }
    }
    return true;
  }
  return false;
}
var _MutationObserverFactory = class _MutationObserverFactory {
  create(callback) {
    return typeof MutationObserver === "undefined" ? null : new MutationObserver(callback);
  }
};
_MutationObserverFactory.\u0275fac = function MutationObserverFactory_Factory(t) {
  return new (t || _MutationObserverFactory)();
};
_MutationObserverFactory.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _MutationObserverFactory,
  factory: _MutationObserverFactory.\u0275fac,
  providedIn: "root"
});
var MutationObserverFactory = _MutationObserverFactory;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MutationObserverFactory, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _ContentObserver = class _ContentObserver {
  constructor(_mutationObserverFactory) {
    this._mutationObserverFactory = _mutationObserverFactory;
    this._observedElements = /* @__PURE__ */ new Map();
  }
  ngOnDestroy() {
    this._observedElements.forEach((_, element) => this._cleanupObserver(element));
  }
  observe(elementOrRef) {
    const element = coerceElement(elementOrRef);
    return new Observable((observer) => {
      const stream = this._observeElement(element);
      const subscription = stream.pipe(map((records) => records.filter((record) => !shouldIgnoreRecord(record))), filter((records) => !!records.length)).subscribe(observer);
      return () => {
        subscription.unsubscribe();
        this._unobserveElement(element);
      };
    });
  }
  /**
   * Observes the given element by using the existing MutationObserver if available, or creating a
   * new one if not.
   */
  _observeElement(element) {
    if (!this._observedElements.has(element)) {
      const stream = new Subject();
      const observer = this._mutationObserverFactory.create((mutations) => stream.next(mutations));
      if (observer) {
        observer.observe(element, {
          characterData: true,
          childList: true,
          subtree: true
        });
      }
      this._observedElements.set(element, {
        observer,
        stream,
        count: 1
      });
    } else {
      this._observedElements.get(element).count++;
    }
    return this._observedElements.get(element).stream;
  }
  /**
   * Un-observes the given element and cleans up the underlying MutationObserver if nobody else is
   * observing this element.
   */
  _unobserveElement(element) {
    if (this._observedElements.has(element)) {
      this._observedElements.get(element).count--;
      if (!this._observedElements.get(element).count) {
        this._cleanupObserver(element);
      }
    }
  }
  /** Clean up the underlying MutationObserver for the specified element. */
  _cleanupObserver(element) {
    if (this._observedElements.has(element)) {
      const {
        observer,
        stream
      } = this._observedElements.get(element);
      if (observer) {
        observer.disconnect();
      }
      stream.complete();
      this._observedElements.delete(element);
    }
  }
};
_ContentObserver.\u0275fac = function ContentObserver_Factory(t) {
  return new (t || _ContentObserver)(\u0275\u0275inject(MutationObserverFactory));
};
_ContentObserver.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _ContentObserver,
  factory: _ContentObserver.\u0275fac,
  providedIn: "root"
});
var ContentObserver = _ContentObserver;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContentObserver, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: MutationObserverFactory
  }], null);
})();
var _CdkObserveContent = class _CdkObserveContent {
  /**
   * Whether observing content is disabled. This option can be used
   * to disconnect the underlying MutationObserver until it is needed.
   */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = value;
    this._disabled ? this._unsubscribe() : this._subscribe();
  }
  /** Debounce interval for emitting the changes. */
  get debounce() {
    return this._debounce;
  }
  set debounce(value) {
    this._debounce = coerceNumberProperty(value);
    this._subscribe();
  }
  constructor(_contentObserver, _elementRef, _ngZone) {
    this._contentObserver = _contentObserver;
    this._elementRef = _elementRef;
    this._ngZone = _ngZone;
    this.event = new EventEmitter();
    this._disabled = false;
    this._currentSubscription = null;
  }
  ngAfterContentInit() {
    if (!this._currentSubscription && !this.disabled) {
      this._subscribe();
    }
  }
  ngOnDestroy() {
    this._unsubscribe();
  }
  _subscribe() {
    this._unsubscribe();
    const stream = this._contentObserver.observe(this._elementRef);
    this._ngZone.runOutsideAngular(() => {
      this._currentSubscription = (this.debounce ? stream.pipe(debounceTime(this.debounce)) : stream).subscribe(this.event);
    });
  }
  _unsubscribe() {
    this._currentSubscription?.unsubscribe();
  }
};
_CdkObserveContent.\u0275fac = function CdkObserveContent_Factory(t) {
  return new (t || _CdkObserveContent)(\u0275\u0275directiveInject(ContentObserver), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
};
_CdkObserveContent.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _CdkObserveContent,
  selectors: [["", "cdkObserveContent", ""]],
  inputs: {
    disabled: [InputFlags.HasDecoratorInputTransform, "cdkObserveContentDisabled", "disabled", booleanAttribute],
    debounce: "debounce"
  },
  outputs: {
    event: "cdkObserveContent"
  },
  exportAs: ["cdkObserveContent"],
  standalone: true,
  features: [\u0275\u0275InputTransformsFeature]
});
var CdkObserveContent = _CdkObserveContent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkObserveContent, [{
    type: Directive,
    args: [{
      selector: "[cdkObserveContent]",
      exportAs: "cdkObserveContent",
      standalone: true
    }]
  }], () => [{
    type: ContentObserver
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }], {
    event: [{
      type: Output,
      args: ["cdkObserveContent"]
    }],
    disabled: [{
      type: Input,
      args: [{
        alias: "cdkObserveContentDisabled",
        transform: booleanAttribute
      }]
    }],
    debounce: [{
      type: Input
    }]
  });
})();
var _ObserversModule = class _ObserversModule {
};
_ObserversModule.\u0275fac = function ObserversModule_Factory(t) {
  return new (t || _ObserversModule)();
};
_ObserversModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _ObserversModule
});
_ObserversModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [MutationObserverFactory]
});
var ObserversModule = _ObserversModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ObserversModule, [{
    type: NgModule,
    args: [{
      imports: [CdkObserveContent],
      exports: [CdkObserveContent],
      providers: [MutationObserverFactory]
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/layout.mjs
var _LayoutModule = class _LayoutModule {
};
_LayoutModule.\u0275fac = function LayoutModule_Factory(t) {
  return new (t || _LayoutModule)();
};
_LayoutModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _LayoutModule
});
_LayoutModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
var LayoutModule = _LayoutModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LayoutModule, [{
    type: NgModule,
    args: [{}]
  }], null, null);
})();
var mediaQueriesForWebkitCompatibility = /* @__PURE__ */ new Set();
var mediaQueryStyleNode;
var _MediaMatcher = class _MediaMatcher {
  constructor(_platform, _nonce) {
    this._platform = _platform;
    this._nonce = _nonce;
    this._matchMedia = this._platform.isBrowser && window.matchMedia ? (
      // matchMedia is bound to the window scope intentionally as it is an illegal invocation to
      // call it from a different scope.
      window.matchMedia.bind(window)
    ) : noopMatchMedia;
  }
  /**
   * Evaluates the given media query and returns the native MediaQueryList from which results
   * can be retrieved.
   * Confirms the layout engine will trigger for the selector query provided and returns the
   * MediaQueryList for the query provided.
   */
  matchMedia(query) {
    if (this._platform.WEBKIT || this._platform.BLINK) {
      createEmptyStyleRule(query, this._nonce);
    }
    return this._matchMedia(query);
  }
};
_MediaMatcher.\u0275fac = function MediaMatcher_Factory(t) {
  return new (t || _MediaMatcher)(\u0275\u0275inject(Platform), \u0275\u0275inject(CSP_NONCE, 8));
};
_MediaMatcher.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _MediaMatcher,
  factory: _MediaMatcher.\u0275fac,
  providedIn: "root"
});
var MediaMatcher = _MediaMatcher;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MediaMatcher, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Platform
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [CSP_NONCE]
    }]
  }], null);
})();
function createEmptyStyleRule(query, nonce) {
  if (mediaQueriesForWebkitCompatibility.has(query)) {
    return;
  }
  try {
    if (!mediaQueryStyleNode) {
      mediaQueryStyleNode = document.createElement("style");
      if (nonce) {
        mediaQueryStyleNode.setAttribute("nonce", nonce);
      }
      mediaQueryStyleNode.setAttribute("type", "text/css");
      document.head.appendChild(mediaQueryStyleNode);
    }
    if (mediaQueryStyleNode.sheet) {
      mediaQueryStyleNode.sheet.insertRule(`@media ${query} {body{ }}`, 0);
      mediaQueriesForWebkitCompatibility.add(query);
    }
  } catch (e) {
    console.error(e);
  }
}
function noopMatchMedia(query) {
  return {
    matches: query === "all" || query === "",
    media: query,
    addListener: () => {
    },
    removeListener: () => {
    }
  };
}
var _BreakpointObserver = class _BreakpointObserver {
  constructor(_mediaMatcher, _zone) {
    this._mediaMatcher = _mediaMatcher;
    this._zone = _zone;
    this._queries = /* @__PURE__ */ new Map();
    this._destroySubject = new Subject();
  }
  /** Completes the active subject, signalling to all other observables to complete. */
  ngOnDestroy() {
    this._destroySubject.next();
    this._destroySubject.complete();
  }
  /**
   * Whether one or more media queries match the current viewport size.
   * @param value One or more media queries to check.
   * @returns Whether any of the media queries match.
   */
  isMatched(value) {
    const queries = splitQueries(coerceArray(value));
    return queries.some((mediaQuery) => this._registerQuery(mediaQuery).mql.matches);
  }
  /**
   * Gets an observable of results for the given queries that will emit new results for any changes
   * in matching of the given queries.
   * @param value One or more media queries to check.
   * @returns A stream of matches for the given queries.
   */
  observe(value) {
    const queries = splitQueries(coerceArray(value));
    const observables = queries.map((query) => this._registerQuery(query).observable);
    let stateObservable = combineLatest(observables);
    stateObservable = concat(stateObservable.pipe(take(1)), stateObservable.pipe(skip(1), debounceTime(0)));
    return stateObservable.pipe(map((breakpointStates) => {
      const response = {
        matches: false,
        breakpoints: {}
      };
      breakpointStates.forEach(({
        matches,
        query
      }) => {
        response.matches = response.matches || matches;
        response.breakpoints[query] = matches;
      });
      return response;
    }));
  }
  /** Registers a specific query to be listened for. */
  _registerQuery(query) {
    if (this._queries.has(query)) {
      return this._queries.get(query);
    }
    const mql = this._mediaMatcher.matchMedia(query);
    const queryObservable = new Observable((observer) => {
      const handler = (e) => this._zone.run(() => observer.next(e));
      mql.addListener(handler);
      return () => {
        mql.removeListener(handler);
      };
    }).pipe(startWith(mql), map(({
      matches
    }) => ({
      query,
      matches
    })), takeUntil(this._destroySubject));
    const output = {
      observable: queryObservable,
      mql
    };
    this._queries.set(query, output);
    return output;
  }
};
_BreakpointObserver.\u0275fac = function BreakpointObserver_Factory(t) {
  return new (t || _BreakpointObserver)(\u0275\u0275inject(MediaMatcher), \u0275\u0275inject(NgZone));
};
_BreakpointObserver.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _BreakpointObserver,
  factory: _BreakpointObserver.\u0275fac,
  providedIn: "root"
});
var BreakpointObserver = _BreakpointObserver;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BreakpointObserver, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: MediaMatcher
  }, {
    type: NgZone
  }], null);
})();
function splitQueries(queries) {
  return queries.map((query) => query.split(",")).reduce((a1, a2) => a1.concat(a2)).map((query) => query.trim());
}

// node_modules/@angular/cdk/fesm2022/a11y.mjs
var ID_DELIMITER = " ";
function addAriaReferencedId(el, attr, id) {
  const ids = getAriaReferenceIds(el, attr);
  id = id.trim();
  if (ids.some((existingId) => existingId.trim() === id)) {
    return;
  }
  ids.push(id);
  el.setAttribute(attr, ids.join(ID_DELIMITER));
}
function removeAriaReferencedId(el, attr, id) {
  const ids = getAriaReferenceIds(el, attr);
  id = id.trim();
  const filteredIds = ids.filter((val) => val !== id);
  if (filteredIds.length) {
    el.setAttribute(attr, filteredIds.join(ID_DELIMITER));
  } else {
    el.removeAttribute(attr);
  }
}
function getAriaReferenceIds(el, attr) {
  const attrValue = el.getAttribute(attr);
  return attrValue?.match(/\S+/g) ?? [];
}
var CDK_DESCRIBEDBY_ID_PREFIX = "cdk-describedby-message";
var CDK_DESCRIBEDBY_HOST_ATTRIBUTE = "cdk-describedby-host";
var nextId2 = 0;
var _AriaDescriber = class _AriaDescriber {
  constructor(_document, _platform) {
    this._platform = _platform;
    this._messageRegistry = /* @__PURE__ */ new Map();
    this._messagesContainer = null;
    this._id = `${nextId2++}`;
    this._document = _document;
    this._id = inject(APP_ID) + "-" + nextId2++;
  }
  describe(hostElement, message, role) {
    if (!this._canBeDescribed(hostElement, message)) {
      return;
    }
    const key = getKey(message, role);
    if (typeof message !== "string") {
      setMessageId(message, this._id);
      this._messageRegistry.set(key, {
        messageElement: message,
        referenceCount: 0
      });
    } else if (!this._messageRegistry.has(key)) {
      this._createMessageElement(message, role);
    }
    if (!this._isElementDescribedByMessage(hostElement, key)) {
      this._addMessageReference(hostElement, key);
    }
  }
  removeDescription(hostElement, message, role) {
    if (!message || !this._isElementNode(hostElement)) {
      return;
    }
    const key = getKey(message, role);
    if (this._isElementDescribedByMessage(hostElement, key)) {
      this._removeMessageReference(hostElement, key);
    }
    if (typeof message === "string") {
      const registeredMessage = this._messageRegistry.get(key);
      if (registeredMessage && registeredMessage.referenceCount === 0) {
        this._deleteMessageElement(key);
      }
    }
    if (this._messagesContainer?.childNodes.length === 0) {
      this._messagesContainer.remove();
      this._messagesContainer = null;
    }
  }
  /** Unregisters all created message elements and removes the message container. */
  ngOnDestroy() {
    const describedElements = this._document.querySelectorAll(`[${CDK_DESCRIBEDBY_HOST_ATTRIBUTE}="${this._id}"]`);
    for (let i = 0; i < describedElements.length; i++) {
      this._removeCdkDescribedByReferenceIds(describedElements[i]);
      describedElements[i].removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
    }
    this._messagesContainer?.remove();
    this._messagesContainer = null;
    this._messageRegistry.clear();
  }
  /**
   * Creates a new element in the visually hidden message container element with the message
   * as its content and adds it to the message registry.
   */
  _createMessageElement(message, role) {
    const messageElement = this._document.createElement("div");
    setMessageId(messageElement, this._id);
    messageElement.textContent = message;
    if (role) {
      messageElement.setAttribute("role", role);
    }
    this._createMessagesContainer();
    this._messagesContainer.appendChild(messageElement);
    this._messageRegistry.set(getKey(message, role), {
      messageElement,
      referenceCount: 0
    });
  }
  /** Deletes the message element from the global messages container. */
  _deleteMessageElement(key) {
    this._messageRegistry.get(key)?.messageElement?.remove();
    this._messageRegistry.delete(key);
  }
  /** Creates the global container for all aria-describedby messages. */
  _createMessagesContainer() {
    if (this._messagesContainer) {
      return;
    }
    const containerClassName = "cdk-describedby-message-container";
    const serverContainers = this._document.querySelectorAll(`.${containerClassName}[platform="server"]`);
    for (let i = 0; i < serverContainers.length; i++) {
      serverContainers[i].remove();
    }
    const messagesContainer = this._document.createElement("div");
    messagesContainer.style.visibility = "hidden";
    messagesContainer.classList.add(containerClassName);
    messagesContainer.classList.add("cdk-visually-hidden");
    if (this._platform && !this._platform.isBrowser) {
      messagesContainer.setAttribute("platform", "server");
    }
    this._document.body.appendChild(messagesContainer);
    this._messagesContainer = messagesContainer;
  }
  /** Removes all cdk-describedby messages that are hosted through the element. */
  _removeCdkDescribedByReferenceIds(element) {
    const originalReferenceIds = getAriaReferenceIds(element, "aria-describedby").filter((id) => id.indexOf(CDK_DESCRIBEDBY_ID_PREFIX) != 0);
    element.setAttribute("aria-describedby", originalReferenceIds.join(" "));
  }
  /**
   * Adds a message reference to the element using aria-describedby and increments the registered
   * message's reference count.
   */
  _addMessageReference(element, key) {
    const registeredMessage = this._messageRegistry.get(key);
    addAriaReferencedId(element, "aria-describedby", registeredMessage.messageElement.id);
    element.setAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE, this._id);
    registeredMessage.referenceCount++;
  }
  /**
   * Removes a message reference from the element using aria-describedby
   * and decrements the registered message's reference count.
   */
  _removeMessageReference(element, key) {
    const registeredMessage = this._messageRegistry.get(key);
    registeredMessage.referenceCount--;
    removeAriaReferencedId(element, "aria-describedby", registeredMessage.messageElement.id);
    element.removeAttribute(CDK_DESCRIBEDBY_HOST_ATTRIBUTE);
  }
  /** Returns true if the element has been described by the provided message ID. */
  _isElementDescribedByMessage(element, key) {
    const referenceIds = getAriaReferenceIds(element, "aria-describedby");
    const registeredMessage = this._messageRegistry.get(key);
    const messageId = registeredMessage && registeredMessage.messageElement.id;
    return !!messageId && referenceIds.indexOf(messageId) != -1;
  }
  /** Determines whether a message can be described on a particular element. */
  _canBeDescribed(element, message) {
    if (!this._isElementNode(element)) {
      return false;
    }
    if (message && typeof message === "object") {
      return true;
    }
    const trimmedMessage = message == null ? "" : `${message}`.trim();
    const ariaLabel = element.getAttribute("aria-label");
    return trimmedMessage ? !ariaLabel || ariaLabel.trim() !== trimmedMessage : false;
  }
  /** Checks whether a node is an Element node. */
  _isElementNode(element) {
    return element.nodeType === this._document.ELEMENT_NODE;
  }
};
_AriaDescriber.\u0275fac = function AriaDescriber_Factory(t) {
  return new (t || _AriaDescriber)(\u0275\u0275inject(DOCUMENT), \u0275\u0275inject(Platform));
};
_AriaDescriber.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _AriaDescriber,
  factory: _AriaDescriber.\u0275fac,
  providedIn: "root"
});
var AriaDescriber = _AriaDescriber;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AriaDescriber, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: Platform
  }], null);
})();
function getKey(message, role) {
  return typeof message === "string" ? `${role || ""}/${message}` : message;
}
function setMessageId(element, serviceId) {
  if (!element.id) {
    element.id = `${CDK_DESCRIBEDBY_ID_PREFIX}-${serviceId}-${nextId2++}`;
  }
}
var _InteractivityChecker = class _InteractivityChecker {
  constructor(_platform) {
    this._platform = _platform;
  }
  /**
   * Gets whether an element is disabled.
   *
   * @param element Element to be checked.
   * @returns Whether the element is disabled.
   */
  isDisabled(element) {
    return element.hasAttribute("disabled");
  }
  /**
   * Gets whether an element is visible for the purposes of interactivity.
   *
   * This will capture states like `display: none` and `visibility: hidden`, but not things like
   * being clipped by an `overflow: hidden` parent or being outside the viewport.
   *
   * @returns Whether the element is visible.
   */
  isVisible(element) {
    return hasGeometry(element) && getComputedStyle(element).visibility === "visible";
  }
  /**
   * Gets whether an element can be reached via Tab key.
   * Assumes that the element has already been checked with isFocusable.
   *
   * @param element Element to be checked.
   * @returns Whether the element is tabbable.
   */
  isTabbable(element) {
    if (!this._platform.isBrowser) {
      return false;
    }
    const frameElement = getFrameElement(getWindow(element));
    if (frameElement) {
      if (getTabIndexValue(frameElement) === -1) {
        return false;
      }
      if (!this.isVisible(frameElement)) {
        return false;
      }
    }
    let nodeName = element.nodeName.toLowerCase();
    let tabIndexValue = getTabIndexValue(element);
    if (element.hasAttribute("contenteditable")) {
      return tabIndexValue !== -1;
    }
    if (nodeName === "iframe" || nodeName === "object") {
      return false;
    }
    if (this._platform.WEBKIT && this._platform.IOS && !isPotentiallyTabbableIOS(element)) {
      return false;
    }
    if (nodeName === "audio") {
      if (!element.hasAttribute("controls")) {
        return false;
      }
      return tabIndexValue !== -1;
    }
    if (nodeName === "video") {
      if (tabIndexValue === -1) {
        return false;
      }
      if (tabIndexValue !== null) {
        return true;
      }
      return this._platform.FIREFOX || element.hasAttribute("controls");
    }
    return element.tabIndex >= 0;
  }
  /**
   * Gets whether an element can be focused by the user.
   *
   * @param element Element to be checked.
   * @param config The config object with options to customize this method's behavior
   * @returns Whether the element is focusable.
   */
  isFocusable(element, config) {
    return isPotentiallyFocusable(element) && !this.isDisabled(element) && (config?.ignoreVisibility || this.isVisible(element));
  }
};
_InteractivityChecker.\u0275fac = function InteractivityChecker_Factory(t) {
  return new (t || _InteractivityChecker)(\u0275\u0275inject(Platform));
};
_InteractivityChecker.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _InteractivityChecker,
  factory: _InteractivityChecker.\u0275fac,
  providedIn: "root"
});
var InteractivityChecker = _InteractivityChecker;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InteractivityChecker, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Platform
  }], null);
})();
function getFrameElement(window2) {
  try {
    return window2.frameElement;
  } catch {
    return null;
  }
}
function hasGeometry(element) {
  return !!(element.offsetWidth || element.offsetHeight || typeof element.getClientRects === "function" && element.getClientRects().length);
}
function isNativeFormElement(element) {
  let nodeName = element.nodeName.toLowerCase();
  return nodeName === "input" || nodeName === "select" || nodeName === "button" || nodeName === "textarea";
}
function isHiddenInput(element) {
  return isInputElement(element) && element.type == "hidden";
}
function isAnchorWithHref(element) {
  return isAnchorElement(element) && element.hasAttribute("href");
}
function isInputElement(element) {
  return element.nodeName.toLowerCase() == "input";
}
function isAnchorElement(element) {
  return element.nodeName.toLowerCase() == "a";
}
function hasValidTabIndex(element) {
  if (!element.hasAttribute("tabindex") || element.tabIndex === void 0) {
    return false;
  }
  let tabIndex = element.getAttribute("tabindex");
  return !!(tabIndex && !isNaN(parseInt(tabIndex, 10)));
}
function getTabIndexValue(element) {
  if (!hasValidTabIndex(element)) {
    return null;
  }
  const tabIndex = parseInt(element.getAttribute("tabindex") || "", 10);
  return isNaN(tabIndex) ? -1 : tabIndex;
}
function isPotentiallyTabbableIOS(element) {
  let nodeName = element.nodeName.toLowerCase();
  let inputType = nodeName === "input" && element.type;
  return inputType === "text" || inputType === "password" || nodeName === "select" || nodeName === "textarea";
}
function isPotentiallyFocusable(element) {
  if (isHiddenInput(element)) {
    return false;
  }
  return isNativeFormElement(element) || isAnchorWithHref(element) || element.hasAttribute("contenteditable") || hasValidTabIndex(element);
}
function getWindow(node) {
  return node.ownerDocument && node.ownerDocument.defaultView || window;
}
var FocusTrap = class {
  /** Whether the focus trap is active. */
  get enabled() {
    return this._enabled;
  }
  set enabled(value) {
    this._enabled = value;
    if (this._startAnchor && this._endAnchor) {
      this._toggleAnchorTabIndex(value, this._startAnchor);
      this._toggleAnchorTabIndex(value, this._endAnchor);
    }
  }
  constructor(_element, _checker, _ngZone, _document, deferAnchors = false) {
    this._element = _element;
    this._checker = _checker;
    this._ngZone = _ngZone;
    this._document = _document;
    this._hasAttached = false;
    this.startAnchorListener = () => this.focusLastTabbableElement();
    this.endAnchorListener = () => this.focusFirstTabbableElement();
    this._enabled = true;
    if (!deferAnchors) {
      this.attachAnchors();
    }
  }
  /** Destroys the focus trap by cleaning up the anchors. */
  destroy() {
    const startAnchor = this._startAnchor;
    const endAnchor = this._endAnchor;
    if (startAnchor) {
      startAnchor.removeEventListener("focus", this.startAnchorListener);
      startAnchor.remove();
    }
    if (endAnchor) {
      endAnchor.removeEventListener("focus", this.endAnchorListener);
      endAnchor.remove();
    }
    this._startAnchor = this._endAnchor = null;
    this._hasAttached = false;
  }
  /**
   * Inserts the anchors into the DOM. This is usually done automatically
   * in the constructor, but can be deferred for cases like directives with `*ngIf`.
   * @returns Whether the focus trap managed to attach successfully. This may not be the case
   * if the target element isn't currently in the DOM.
   */
  attachAnchors() {
    if (this._hasAttached) {
      return true;
    }
    this._ngZone.runOutsideAngular(() => {
      if (!this._startAnchor) {
        this._startAnchor = this._createAnchor();
        this._startAnchor.addEventListener("focus", this.startAnchorListener);
      }
      if (!this._endAnchor) {
        this._endAnchor = this._createAnchor();
        this._endAnchor.addEventListener("focus", this.endAnchorListener);
      }
    });
    if (this._element.parentNode) {
      this._element.parentNode.insertBefore(this._startAnchor, this._element);
      this._element.parentNode.insertBefore(this._endAnchor, this._element.nextSibling);
      this._hasAttached = true;
    }
    return this._hasAttached;
  }
  /**
   * Waits for the zone to stabilize, then focuses the first tabbable element.
   * @returns Returns a promise that resolves with a boolean, depending
   * on whether focus was moved successfully.
   */
  focusInitialElementWhenReady(options) {
    return new Promise((resolve) => {
      this._executeOnStable(() => resolve(this.focusInitialElement(options)));
    });
  }
  /**
   * Waits for the zone to stabilize, then focuses
   * the first tabbable element within the focus trap region.
   * @returns Returns a promise that resolves with a boolean, depending
   * on whether focus was moved successfully.
   */
  focusFirstTabbableElementWhenReady(options) {
    return new Promise((resolve) => {
      this._executeOnStable(() => resolve(this.focusFirstTabbableElement(options)));
    });
  }
  /**
   * Waits for the zone to stabilize, then focuses
   * the last tabbable element within the focus trap region.
   * @returns Returns a promise that resolves with a boolean, depending
   * on whether focus was moved successfully.
   */
  focusLastTabbableElementWhenReady(options) {
    return new Promise((resolve) => {
      this._executeOnStable(() => resolve(this.focusLastTabbableElement(options)));
    });
  }
  /**
   * Get the specified boundary element of the trapped region.
   * @param bound The boundary to get (start or end of trapped region).
   * @returns The boundary element.
   */
  _getRegionBoundary(bound) {
    const markers = this._element.querySelectorAll(`[cdk-focus-region-${bound}], [cdkFocusRegion${bound}], [cdk-focus-${bound}]`);
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      for (let i = 0; i < markers.length; i++) {
        if (markers[i].hasAttribute(`cdk-focus-${bound}`)) {
          console.warn(`Found use of deprecated attribute 'cdk-focus-${bound}', use 'cdkFocusRegion${bound}' instead. The deprecated attribute will be removed in 8.0.0.`, markers[i]);
        } else if (markers[i].hasAttribute(`cdk-focus-region-${bound}`)) {
          console.warn(`Found use of deprecated attribute 'cdk-focus-region-${bound}', use 'cdkFocusRegion${bound}' instead. The deprecated attribute will be removed in 8.0.0.`, markers[i]);
        }
      }
    }
    if (bound == "start") {
      return markers.length ? markers[0] : this._getFirstTabbableElement(this._element);
    }
    return markers.length ? markers[markers.length - 1] : this._getLastTabbableElement(this._element);
  }
  /**
   * Focuses the element that should be focused when the focus trap is initialized.
   * @returns Whether focus was moved successfully.
   */
  focusInitialElement(options) {
    const redirectToElement = this._element.querySelector(`[cdk-focus-initial], [cdkFocusInitial]`);
    if (redirectToElement) {
      if ((typeof ngDevMode === "undefined" || ngDevMode) && redirectToElement.hasAttribute(`cdk-focus-initial`)) {
        console.warn(`Found use of deprecated attribute 'cdk-focus-initial', use 'cdkFocusInitial' instead. The deprecated attribute will be removed in 8.0.0`, redirectToElement);
      }
      if ((typeof ngDevMode === "undefined" || ngDevMode) && !this._checker.isFocusable(redirectToElement)) {
        console.warn(`Element matching '[cdkFocusInitial]' is not focusable.`, redirectToElement);
      }
      if (!this._checker.isFocusable(redirectToElement)) {
        const focusableChild = this._getFirstTabbableElement(redirectToElement);
        focusableChild?.focus(options);
        return !!focusableChild;
      }
      redirectToElement.focus(options);
      return true;
    }
    return this.focusFirstTabbableElement(options);
  }
  /**
   * Focuses the first tabbable element within the focus trap region.
   * @returns Whether focus was moved successfully.
   */
  focusFirstTabbableElement(options) {
    const redirectToElement = this._getRegionBoundary("start");
    if (redirectToElement) {
      redirectToElement.focus(options);
    }
    return !!redirectToElement;
  }
  /**
   * Focuses the last tabbable element within the focus trap region.
   * @returns Whether focus was moved successfully.
   */
  focusLastTabbableElement(options) {
    const redirectToElement = this._getRegionBoundary("end");
    if (redirectToElement) {
      redirectToElement.focus(options);
    }
    return !!redirectToElement;
  }
  /**
   * Checks whether the focus trap has successfully been attached.
   */
  hasAttached() {
    return this._hasAttached;
  }
  /** Get the first tabbable element from a DOM subtree (inclusive). */
  _getFirstTabbableElement(root) {
    if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
      return root;
    }
    const children = root.children;
    for (let i = 0; i < children.length; i++) {
      const tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ? this._getFirstTabbableElement(children[i]) : null;
      if (tabbableChild) {
        return tabbableChild;
      }
    }
    return null;
  }
  /** Get the last tabbable element from a DOM subtree (inclusive). */
  _getLastTabbableElement(root) {
    if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
      return root;
    }
    const children = root.children;
    for (let i = children.length - 1; i >= 0; i--) {
      const tabbableChild = children[i].nodeType === this._document.ELEMENT_NODE ? this._getLastTabbableElement(children[i]) : null;
      if (tabbableChild) {
        return tabbableChild;
      }
    }
    return null;
  }
  /** Creates an anchor element. */
  _createAnchor() {
    const anchor = this._document.createElement("div");
    this._toggleAnchorTabIndex(this._enabled, anchor);
    anchor.classList.add("cdk-visually-hidden");
    anchor.classList.add("cdk-focus-trap-anchor");
    anchor.setAttribute("aria-hidden", "true");
    return anchor;
  }
  /**
   * Toggles the `tabindex` of an anchor, based on the enabled state of the focus trap.
   * @param isEnabled Whether the focus trap is enabled.
   * @param anchor Anchor on which to toggle the tabindex.
   */
  _toggleAnchorTabIndex(isEnabled, anchor) {
    isEnabled ? anchor.setAttribute("tabindex", "0") : anchor.removeAttribute("tabindex");
  }
  /**
   * Toggles the`tabindex` of both anchors to either trap Tab focus or allow it to escape.
   * @param enabled: Whether the anchors should trap Tab.
   */
  toggleAnchors(enabled) {
    if (this._startAnchor && this._endAnchor) {
      this._toggleAnchorTabIndex(enabled, this._startAnchor);
      this._toggleAnchorTabIndex(enabled, this._endAnchor);
    }
  }
  /** Executes a function when the zone is stable. */
  _executeOnStable(fn) {
    if (this._ngZone.isStable) {
      fn();
    } else {
      this._ngZone.onStable.pipe(take(1)).subscribe(fn);
    }
  }
};
var _FocusTrapFactory = class _FocusTrapFactory {
  constructor(_checker, _ngZone, _document) {
    this._checker = _checker;
    this._ngZone = _ngZone;
    this._document = _document;
  }
  /**
   * Creates a focus-trapped region around the given element.
   * @param element The element around which focus will be trapped.
   * @param deferCaptureElements Defers the creation of focus-capturing elements to be done
   *     manually by the user.
   * @returns The created focus trap instance.
   */
  create(element, deferCaptureElements = false) {
    return new FocusTrap(element, this._checker, this._ngZone, this._document, deferCaptureElements);
  }
};
_FocusTrapFactory.\u0275fac = function FocusTrapFactory_Factory(t) {
  return new (t || _FocusTrapFactory)(\u0275\u0275inject(InteractivityChecker), \u0275\u0275inject(NgZone), \u0275\u0275inject(DOCUMENT));
};
_FocusTrapFactory.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _FocusTrapFactory,
  factory: _FocusTrapFactory.\u0275fac,
  providedIn: "root"
});
var FocusTrapFactory = _FocusTrapFactory;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FocusTrapFactory, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: InteractivityChecker
  }, {
    type: NgZone
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var _CdkTrapFocus = class _CdkTrapFocus {
  /** Whether the focus trap is active. */
  get enabled() {
    return this.focusTrap?.enabled || false;
  }
  set enabled(value) {
    if (this.focusTrap) {
      this.focusTrap.enabled = value;
    }
  }
  constructor(_elementRef, _focusTrapFactory, _document) {
    this._elementRef = _elementRef;
    this._focusTrapFactory = _focusTrapFactory;
    this._previouslyFocusedElement = null;
    const platform = inject(Platform);
    if (platform.isBrowser) {
      this.focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement, true);
    }
  }
  ngOnDestroy() {
    this.focusTrap?.destroy();
    if (this._previouslyFocusedElement) {
      this._previouslyFocusedElement.focus();
      this._previouslyFocusedElement = null;
    }
  }
  ngAfterContentInit() {
    this.focusTrap?.attachAnchors();
    if (this.autoCapture) {
      this._captureFocus();
    }
  }
  ngDoCheck() {
    if (this.focusTrap && !this.focusTrap.hasAttached()) {
      this.focusTrap.attachAnchors();
    }
  }
  ngOnChanges(changes) {
    const autoCaptureChange = changes["autoCapture"];
    if (autoCaptureChange && !autoCaptureChange.firstChange && this.autoCapture && this.focusTrap?.hasAttached()) {
      this._captureFocus();
    }
  }
  _captureFocus() {
    this._previouslyFocusedElement = _getFocusedElementPierceShadowDom();
    this.focusTrap?.focusInitialElementWhenReady();
  }
};
_CdkTrapFocus.\u0275fac = function CdkTrapFocus_Factory(t) {
  return new (t || _CdkTrapFocus)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(FocusTrapFactory), \u0275\u0275directiveInject(DOCUMENT));
};
_CdkTrapFocus.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _CdkTrapFocus,
  selectors: [["", "cdkTrapFocus", ""]],
  inputs: {
    enabled: [InputFlags.HasDecoratorInputTransform, "cdkTrapFocus", "enabled", booleanAttribute],
    autoCapture: [InputFlags.HasDecoratorInputTransform, "cdkTrapFocusAutoCapture", "autoCapture", booleanAttribute]
  },
  exportAs: ["cdkTrapFocus"],
  standalone: true,
  features: [\u0275\u0275InputTransformsFeature, \u0275\u0275NgOnChangesFeature]
});
var CdkTrapFocus = _CdkTrapFocus;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTrapFocus, [{
    type: Directive,
    args: [{
      selector: "[cdkTrapFocus]",
      exportAs: "cdkTrapFocus",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: FocusTrapFactory
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], {
    enabled: [{
      type: Input,
      args: [{
        alias: "cdkTrapFocus",
        transform: booleanAttribute
      }]
    }],
    autoCapture: [{
      type: Input,
      args: [{
        alias: "cdkTrapFocusAutoCapture",
        transform: booleanAttribute
      }]
    }]
  });
})();
var ConfigurableFocusTrap = class extends FocusTrap {
  /** Whether the FocusTrap is enabled. */
  get enabled() {
    return this._enabled;
  }
  set enabled(value) {
    this._enabled = value;
    if (this._enabled) {
      this._focusTrapManager.register(this);
    } else {
      this._focusTrapManager.deregister(this);
    }
  }
  constructor(_element, _checker, _ngZone, _document, _focusTrapManager, _inertStrategy, config) {
    super(_element, _checker, _ngZone, _document, config.defer);
    this._focusTrapManager = _focusTrapManager;
    this._inertStrategy = _inertStrategy;
    this._focusTrapManager.register(this);
  }
  /** Notifies the FocusTrapManager that this FocusTrap will be destroyed. */
  destroy() {
    this._focusTrapManager.deregister(this);
    super.destroy();
  }
  /** @docs-private Implemented as part of ManagedFocusTrap. */
  _enable() {
    this._inertStrategy.preventFocus(this);
    this.toggleAnchors(true);
  }
  /** @docs-private Implemented as part of ManagedFocusTrap. */
  _disable() {
    this._inertStrategy.allowFocus(this);
    this.toggleAnchors(false);
  }
};
var FOCUS_TRAP_INERT_STRATEGY = new InjectionToken("FOCUS_TRAP_INERT_STRATEGY");
var EventListenerFocusTrapInertStrategy = class {
  constructor() {
    this._listener = null;
  }
  /** Adds a document event listener that keeps focus inside the FocusTrap. */
  preventFocus(focusTrap) {
    if (this._listener) {
      focusTrap._document.removeEventListener("focus", this._listener, true);
    }
    this._listener = (e) => this._trapFocus(focusTrap, e);
    focusTrap._ngZone.runOutsideAngular(() => {
      focusTrap._document.addEventListener("focus", this._listener, true);
    });
  }
  /** Removes the event listener added in preventFocus. */
  allowFocus(focusTrap) {
    if (!this._listener) {
      return;
    }
    focusTrap._document.removeEventListener("focus", this._listener, true);
    this._listener = null;
  }
  /**
   * Refocuses the first element in the FocusTrap if the focus event target was outside
   * the FocusTrap.
   *
   * This is an event listener callback. The event listener is added in runOutsideAngular,
   * so all this code runs outside Angular as well.
   */
  _trapFocus(focusTrap, event) {
    const target = event.target;
    const focusTrapRoot = focusTrap._element;
    if (target && !focusTrapRoot.contains(target) && !target.closest?.("div.cdk-overlay-pane")) {
      setTimeout(() => {
        if (focusTrap.enabled && !focusTrapRoot.contains(focusTrap._document.activeElement)) {
          focusTrap.focusFirstTabbableElement();
        }
      });
    }
  }
};
var _FocusTrapManager = class _FocusTrapManager {
  constructor() {
    this._focusTrapStack = [];
  }
  /**
   * Disables the FocusTrap at the top of the stack, and then pushes
   * the new FocusTrap onto the stack.
   */
  register(focusTrap) {
    this._focusTrapStack = this._focusTrapStack.filter((ft) => ft !== focusTrap);
    let stack = this._focusTrapStack;
    if (stack.length) {
      stack[stack.length - 1]._disable();
    }
    stack.push(focusTrap);
    focusTrap._enable();
  }
  /**
   * Removes the FocusTrap from the stack, and activates the
   * FocusTrap that is the new top of the stack.
   */
  deregister(focusTrap) {
    focusTrap._disable();
    const stack = this._focusTrapStack;
    const i = stack.indexOf(focusTrap);
    if (i !== -1) {
      stack.splice(i, 1);
      if (stack.length) {
        stack[stack.length - 1]._enable();
      }
    }
  }
};
_FocusTrapManager.\u0275fac = function FocusTrapManager_Factory(t) {
  return new (t || _FocusTrapManager)();
};
_FocusTrapManager.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _FocusTrapManager,
  factory: _FocusTrapManager.\u0275fac,
  providedIn: "root"
});
var FocusTrapManager = _FocusTrapManager;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FocusTrapManager, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _ConfigurableFocusTrapFactory = class _ConfigurableFocusTrapFactory {
  constructor(_checker, _ngZone, _focusTrapManager, _document, _inertStrategy) {
    this._checker = _checker;
    this._ngZone = _ngZone;
    this._focusTrapManager = _focusTrapManager;
    this._document = _document;
    this._inertStrategy = _inertStrategy || new EventListenerFocusTrapInertStrategy();
  }
  create(element, config = {
    defer: false
  }) {
    let configObject;
    if (typeof config === "boolean") {
      configObject = {
        defer: config
      };
    } else {
      configObject = config;
    }
    return new ConfigurableFocusTrap(element, this._checker, this._ngZone, this._document, this._focusTrapManager, this._inertStrategy, configObject);
  }
};
_ConfigurableFocusTrapFactory.\u0275fac = function ConfigurableFocusTrapFactory_Factory(t) {
  return new (t || _ConfigurableFocusTrapFactory)(\u0275\u0275inject(InteractivityChecker), \u0275\u0275inject(NgZone), \u0275\u0275inject(FocusTrapManager), \u0275\u0275inject(DOCUMENT), \u0275\u0275inject(FOCUS_TRAP_INERT_STRATEGY, 8));
};
_ConfigurableFocusTrapFactory.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _ConfigurableFocusTrapFactory,
  factory: _ConfigurableFocusTrapFactory.\u0275fac,
  providedIn: "root"
});
var ConfigurableFocusTrapFactory = _ConfigurableFocusTrapFactory;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfigurableFocusTrapFactory, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: InteractivityChecker
  }, {
    type: NgZone
  }, {
    type: FocusTrapManager
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [FOCUS_TRAP_INERT_STRATEGY]
    }]
  }], null);
})();
function isFakeMousedownFromScreenReader(event) {
  return event.buttons === 0 || event.detail === 0;
}
function isFakeTouchstartFromScreenReader(event) {
  const touch = event.touches && event.touches[0] || event.changedTouches && event.changedTouches[0];
  return !!touch && touch.identifier === -1 && (touch.radiusX == null || touch.radiusX === 1) && (touch.radiusY == null || touch.radiusY === 1);
}
var INPUT_MODALITY_DETECTOR_OPTIONS = new InjectionToken("cdk-input-modality-detector-options");
var INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS = {
  ignoreKeys: [ALT, CONTROL, MAC_META, META, SHIFT]
};
var TOUCH_BUFFER_MS = 650;
var modalityEventListenerOptions = normalizePassiveListenerOptions({
  passive: true,
  capture: true
});
var _InputModalityDetector = class _InputModalityDetector {
  /** The most recently detected input modality. */
  get mostRecentModality() {
    return this._modality.value;
  }
  constructor(_platform, ngZone, document2, options) {
    this._platform = _platform;
    this._mostRecentTarget = null;
    this._modality = new BehaviorSubject(null);
    this._lastTouchMs = 0;
    this._onKeydown = (event) => {
      if (this._options?.ignoreKeys?.some((keyCode) => keyCode === event.keyCode)) {
        return;
      }
      this._modality.next("keyboard");
      this._mostRecentTarget = _getEventTarget(event);
    };
    this._onMousedown = (event) => {
      if (Date.now() - this._lastTouchMs < TOUCH_BUFFER_MS) {
        return;
      }
      this._modality.next(isFakeMousedownFromScreenReader(event) ? "keyboard" : "mouse");
      this._mostRecentTarget = _getEventTarget(event);
    };
    this._onTouchstart = (event) => {
      if (isFakeTouchstartFromScreenReader(event)) {
        this._modality.next("keyboard");
        return;
      }
      this._lastTouchMs = Date.now();
      this._modality.next("touch");
      this._mostRecentTarget = _getEventTarget(event);
    };
    this._options = __spreadValues(__spreadValues({}, INPUT_MODALITY_DETECTOR_DEFAULT_OPTIONS), options);
    this.modalityDetected = this._modality.pipe(skip(1));
    this.modalityChanged = this.modalityDetected.pipe(distinctUntilChanged());
    if (_platform.isBrowser) {
      ngZone.runOutsideAngular(() => {
        document2.addEventListener("keydown", this._onKeydown, modalityEventListenerOptions);
        document2.addEventListener("mousedown", this._onMousedown, modalityEventListenerOptions);
        document2.addEventListener("touchstart", this._onTouchstart, modalityEventListenerOptions);
      });
    }
  }
  ngOnDestroy() {
    this._modality.complete();
    if (this._platform.isBrowser) {
      document.removeEventListener("keydown", this._onKeydown, modalityEventListenerOptions);
      document.removeEventListener("mousedown", this._onMousedown, modalityEventListenerOptions);
      document.removeEventListener("touchstart", this._onTouchstart, modalityEventListenerOptions);
    }
  }
};
_InputModalityDetector.\u0275fac = function InputModalityDetector_Factory(t) {
  return new (t || _InputModalityDetector)(\u0275\u0275inject(Platform), \u0275\u0275inject(NgZone), \u0275\u0275inject(DOCUMENT), \u0275\u0275inject(INPUT_MODALITY_DETECTOR_OPTIONS, 8));
};
_InputModalityDetector.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _InputModalityDetector,
  factory: _InputModalityDetector.\u0275fac,
  providedIn: "root"
});
var InputModalityDetector = _InputModalityDetector;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InputModalityDetector, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Platform
  }, {
    type: NgZone
  }, {
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [INPUT_MODALITY_DETECTOR_OPTIONS]
    }]
  }], null);
})();
var LIVE_ANNOUNCER_ELEMENT_TOKEN = new InjectionToken("liveAnnouncerElement", {
  providedIn: "root",
  factory: LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY
});
function LIVE_ANNOUNCER_ELEMENT_TOKEN_FACTORY() {
  return null;
}
var LIVE_ANNOUNCER_DEFAULT_OPTIONS = new InjectionToken("LIVE_ANNOUNCER_DEFAULT_OPTIONS");
var uniqueIds = 0;
var _LiveAnnouncer = class _LiveAnnouncer {
  constructor(elementToken, _ngZone, _document, _defaultOptions) {
    this._ngZone = _ngZone;
    this._defaultOptions = _defaultOptions;
    this._document = _document;
    this._liveElement = elementToken || this._createLiveElement();
  }
  announce(message, ...args) {
    const defaultOptions = this._defaultOptions;
    let politeness;
    let duration;
    if (args.length === 1 && typeof args[0] === "number") {
      duration = args[0];
    } else {
      [politeness, duration] = args;
    }
    this.clear();
    clearTimeout(this._previousTimeout);
    if (!politeness) {
      politeness = defaultOptions && defaultOptions.politeness ? defaultOptions.politeness : "polite";
    }
    if (duration == null && defaultOptions) {
      duration = defaultOptions.duration;
    }
    this._liveElement.setAttribute("aria-live", politeness);
    if (this._liveElement.id) {
      this._exposeAnnouncerToModals(this._liveElement.id);
    }
    return this._ngZone.runOutsideAngular(() => {
      if (!this._currentPromise) {
        this._currentPromise = new Promise((resolve) => this._currentResolve = resolve);
      }
      clearTimeout(this._previousTimeout);
      this._previousTimeout = setTimeout(() => {
        this._liveElement.textContent = message;
        if (typeof duration === "number") {
          this._previousTimeout = setTimeout(() => this.clear(), duration);
        }
        this._currentResolve?.();
        this._currentPromise = this._currentResolve = void 0;
      }, 100);
      return this._currentPromise;
    });
  }
  /**
   * Clears the current text from the announcer element. Can be used to prevent
   * screen readers from reading the text out again while the user is going
   * through the page landmarks.
   */
  clear() {
    if (this._liveElement) {
      this._liveElement.textContent = "";
    }
  }
  ngOnDestroy() {
    clearTimeout(this._previousTimeout);
    this._liveElement?.remove();
    this._liveElement = null;
    this._currentResolve?.();
    this._currentPromise = this._currentResolve = void 0;
  }
  _createLiveElement() {
    const elementClass = "cdk-live-announcer-element";
    const previousElements = this._document.getElementsByClassName(elementClass);
    const liveEl = this._document.createElement("div");
    for (let i = 0; i < previousElements.length; i++) {
      previousElements[i].remove();
    }
    liveEl.classList.add(elementClass);
    liveEl.classList.add("cdk-visually-hidden");
    liveEl.setAttribute("aria-atomic", "true");
    liveEl.setAttribute("aria-live", "polite");
    liveEl.id = `cdk-live-announcer-${uniqueIds++}`;
    this._document.body.appendChild(liveEl);
    return liveEl;
  }
  /**
   * Some browsers won't expose the accessibility node of the live announcer element if there is an
   * `aria-modal` and the live announcer is outside of it. This method works around the issue by
   * pointing the `aria-owns` of all modals to the live announcer element.
   */
  _exposeAnnouncerToModals(id) {
    const modals = this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');
    for (let i = 0; i < modals.length; i++) {
      const modal = modals[i];
      const ariaOwns = modal.getAttribute("aria-owns");
      if (!ariaOwns) {
        modal.setAttribute("aria-owns", id);
      } else if (ariaOwns.indexOf(id) === -1) {
        modal.setAttribute("aria-owns", ariaOwns + " " + id);
      }
    }
  }
};
_LiveAnnouncer.\u0275fac = function LiveAnnouncer_Factory(t) {
  return new (t || _LiveAnnouncer)(\u0275\u0275inject(LIVE_ANNOUNCER_ELEMENT_TOKEN, 8), \u0275\u0275inject(NgZone), \u0275\u0275inject(DOCUMENT), \u0275\u0275inject(LIVE_ANNOUNCER_DEFAULT_OPTIONS, 8));
};
_LiveAnnouncer.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _LiveAnnouncer,
  factory: _LiveAnnouncer.\u0275fac,
  providedIn: "root"
});
var LiveAnnouncer = _LiveAnnouncer;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LiveAnnouncer, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [LIVE_ANNOUNCER_ELEMENT_TOKEN]
    }]
  }, {
    type: NgZone
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [LIVE_ANNOUNCER_DEFAULT_OPTIONS]
    }]
  }], null);
})();
var _CdkAriaLive = class _CdkAriaLive {
  /** The aria-live politeness level to use when announcing messages. */
  get politeness() {
    return this._politeness;
  }
  set politeness(value) {
    this._politeness = value === "off" || value === "assertive" ? value : "polite";
    if (this._politeness === "off") {
      if (this._subscription) {
        this._subscription.unsubscribe();
        this._subscription = null;
      }
    } else if (!this._subscription) {
      this._subscription = this._ngZone.runOutsideAngular(() => {
        return this._contentObserver.observe(this._elementRef).subscribe(() => {
          const elementText = this._elementRef.nativeElement.textContent;
          if (elementText !== this._previousAnnouncedText) {
            this._liveAnnouncer.announce(elementText, this._politeness, this.duration);
            this._previousAnnouncedText = elementText;
          }
        });
      });
    }
  }
  constructor(_elementRef, _liveAnnouncer, _contentObserver, _ngZone) {
    this._elementRef = _elementRef;
    this._liveAnnouncer = _liveAnnouncer;
    this._contentObserver = _contentObserver;
    this._ngZone = _ngZone;
    this._politeness = "polite";
  }
  ngOnDestroy() {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }
};
_CdkAriaLive.\u0275fac = function CdkAriaLive_Factory(t) {
  return new (t || _CdkAriaLive)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(LiveAnnouncer), \u0275\u0275directiveInject(ContentObserver), \u0275\u0275directiveInject(NgZone));
};
_CdkAriaLive.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _CdkAriaLive,
  selectors: [["", "cdkAriaLive", ""]],
  inputs: {
    politeness: [InputFlags.None, "cdkAriaLive", "politeness"],
    duration: [InputFlags.None, "cdkAriaLiveDuration", "duration"]
  },
  exportAs: ["cdkAriaLive"],
  standalone: true
});
var CdkAriaLive = _CdkAriaLive;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkAriaLive, [{
    type: Directive,
    args: [{
      selector: "[cdkAriaLive]",
      exportAs: "cdkAriaLive",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: LiveAnnouncer
  }, {
    type: ContentObserver
  }, {
    type: NgZone
  }], {
    politeness: [{
      type: Input,
      args: ["cdkAriaLive"]
    }],
    duration: [{
      type: Input,
      args: ["cdkAriaLiveDuration"]
    }]
  });
})();
var FocusMonitorDetectionMode;
(function(FocusMonitorDetectionMode2) {
  FocusMonitorDetectionMode2[FocusMonitorDetectionMode2["IMMEDIATE"] = 0] = "IMMEDIATE";
  FocusMonitorDetectionMode2[FocusMonitorDetectionMode2["EVENTUAL"] = 1] = "EVENTUAL";
})(FocusMonitorDetectionMode || (FocusMonitorDetectionMode = {}));
var FOCUS_MONITOR_DEFAULT_OPTIONS = new InjectionToken("cdk-focus-monitor-default-options");
var captureEventListenerOptions = normalizePassiveListenerOptions({
  passive: true,
  capture: true
});
var _FocusMonitor = class _FocusMonitor {
  constructor(_ngZone, _platform, _inputModalityDetector, document2, options) {
    this._ngZone = _ngZone;
    this._platform = _platform;
    this._inputModalityDetector = _inputModalityDetector;
    this._origin = null;
    this._windowFocused = false;
    this._originFromTouchInteraction = false;
    this._elementInfo = /* @__PURE__ */ new Map();
    this._monitoredElementCount = 0;
    this._rootNodeFocusListenerCount = /* @__PURE__ */ new Map();
    this._windowFocusListener = () => {
      this._windowFocused = true;
      this._windowFocusTimeoutId = window.setTimeout(() => this._windowFocused = false);
    };
    this._stopInputModalityDetector = new Subject();
    this._rootNodeFocusAndBlurListener = (event) => {
      const target = _getEventTarget(event);
      for (let element = target; element; element = element.parentElement) {
        if (event.type === "focus") {
          this._onFocus(event, element);
        } else {
          this._onBlur(event, element);
        }
      }
    };
    this._document = document2;
    this._detectionMode = options?.detectionMode || FocusMonitorDetectionMode.IMMEDIATE;
  }
  monitor(element, checkChildren = false) {
    const nativeElement = coerceElement(element);
    if (!this._platform.isBrowser || nativeElement.nodeType !== 1) {
      return of();
    }
    const rootNode = _getShadowRoot(nativeElement) || this._getDocument();
    const cachedInfo = this._elementInfo.get(nativeElement);
    if (cachedInfo) {
      if (checkChildren) {
        cachedInfo.checkChildren = true;
      }
      return cachedInfo.subject;
    }
    const info = {
      checkChildren,
      subject: new Subject(),
      rootNode
    };
    this._elementInfo.set(nativeElement, info);
    this._registerGlobalListeners(info);
    return info.subject;
  }
  stopMonitoring(element) {
    const nativeElement = coerceElement(element);
    const elementInfo = this._elementInfo.get(nativeElement);
    if (elementInfo) {
      elementInfo.subject.complete();
      this._setClasses(nativeElement);
      this._elementInfo.delete(nativeElement);
      this._removeGlobalListeners(elementInfo);
    }
  }
  focusVia(element, origin, options) {
    const nativeElement = coerceElement(element);
    const focusedElement = this._getDocument().activeElement;
    if (nativeElement === focusedElement) {
      this._getClosestElementsInfo(nativeElement).forEach(([currentElement, info]) => this._originChanged(currentElement, origin, info));
    } else {
      this._setOrigin(origin);
      if (typeof nativeElement.focus === "function") {
        nativeElement.focus(options);
      }
    }
  }
  ngOnDestroy() {
    this._elementInfo.forEach((_info, element) => this.stopMonitoring(element));
  }
  /** Access injected document if available or fallback to global document reference */
  _getDocument() {
    return this._document || document;
  }
  /** Use defaultView of injected document if available or fallback to global window reference */
  _getWindow() {
    const doc = this._getDocument();
    return doc.defaultView || window;
  }
  _getFocusOrigin(focusEventTarget) {
    if (this._origin) {
      if (this._originFromTouchInteraction) {
        return this._shouldBeAttributedToTouch(focusEventTarget) ? "touch" : "program";
      } else {
        return this._origin;
      }
    }
    if (this._windowFocused && this._lastFocusOrigin) {
      return this._lastFocusOrigin;
    }
    if (focusEventTarget && this._isLastInteractionFromInputLabel(focusEventTarget)) {
      return "mouse";
    }
    return "program";
  }
  /**
   * Returns whether the focus event should be attributed to touch. Recall that in IMMEDIATE mode, a
   * touch origin isn't immediately reset at the next tick (see _setOrigin). This means that when we
   * handle a focus event following a touch interaction, we need to determine whether (1) the focus
   * event was directly caused by the touch interaction or (2) the focus event was caused by a
   * subsequent programmatic focus call triggered by the touch interaction.
   * @param focusEventTarget The target of the focus event under examination.
   */
  _shouldBeAttributedToTouch(focusEventTarget) {
    return this._detectionMode === FocusMonitorDetectionMode.EVENTUAL || !!focusEventTarget?.contains(this._inputModalityDetector._mostRecentTarget);
  }
  /**
   * Sets the focus classes on the element based on the given focus origin.
   * @param element The element to update the classes on.
   * @param origin The focus origin.
   */
  _setClasses(element, origin) {
    element.classList.toggle("cdk-focused", !!origin);
    element.classList.toggle("cdk-touch-focused", origin === "touch");
    element.classList.toggle("cdk-keyboard-focused", origin === "keyboard");
    element.classList.toggle("cdk-mouse-focused", origin === "mouse");
    element.classList.toggle("cdk-program-focused", origin === "program");
  }
  /**
   * Updates the focus origin. If we're using immediate detection mode, we schedule an async
   * function to clear the origin at the end of a timeout. The duration of the timeout depends on
   * the origin being set.
   * @param origin The origin to set.
   * @param isFromInteraction Whether we are setting the origin from an interaction event.
   */
  _setOrigin(origin, isFromInteraction = false) {
    this._ngZone.runOutsideAngular(() => {
      this._origin = origin;
      this._originFromTouchInteraction = origin === "touch" && isFromInteraction;
      if (this._detectionMode === FocusMonitorDetectionMode.IMMEDIATE) {
        clearTimeout(this._originTimeoutId);
        const ms = this._originFromTouchInteraction ? TOUCH_BUFFER_MS : 1;
        this._originTimeoutId = setTimeout(() => this._origin = null, ms);
      }
    });
  }
  /**
   * Handles focus events on a registered element.
   * @param event The focus event.
   * @param element The monitored element.
   */
  _onFocus(event, element) {
    const elementInfo = this._elementInfo.get(element);
    const focusEventTarget = _getEventTarget(event);
    if (!elementInfo || !elementInfo.checkChildren && element !== focusEventTarget) {
      return;
    }
    this._originChanged(element, this._getFocusOrigin(focusEventTarget), elementInfo);
  }
  /**
   * Handles blur events on a registered element.
   * @param event The blur event.
   * @param element The monitored element.
   */
  _onBlur(event, element) {
    const elementInfo = this._elementInfo.get(element);
    if (!elementInfo || elementInfo.checkChildren && event.relatedTarget instanceof Node && element.contains(event.relatedTarget)) {
      return;
    }
    this._setClasses(element);
    this._emitOrigin(elementInfo, null);
  }
  _emitOrigin(info, origin) {
    if (info.subject.observers.length) {
      this._ngZone.run(() => info.subject.next(origin));
    }
  }
  _registerGlobalListeners(elementInfo) {
    if (!this._platform.isBrowser) {
      return;
    }
    const rootNode = elementInfo.rootNode;
    const rootNodeFocusListeners = this._rootNodeFocusListenerCount.get(rootNode) || 0;
    if (!rootNodeFocusListeners) {
      this._ngZone.runOutsideAngular(() => {
        rootNode.addEventListener("focus", this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
        rootNode.addEventListener("blur", this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
      });
    }
    this._rootNodeFocusListenerCount.set(rootNode, rootNodeFocusListeners + 1);
    if (++this._monitoredElementCount === 1) {
      this._ngZone.runOutsideAngular(() => {
        const window2 = this._getWindow();
        window2.addEventListener("focus", this._windowFocusListener);
      });
      this._inputModalityDetector.modalityDetected.pipe(takeUntil(this._stopInputModalityDetector)).subscribe((modality) => {
        this._setOrigin(
          modality,
          true
          /* isFromInteraction */
        );
      });
    }
  }
  _removeGlobalListeners(elementInfo) {
    const rootNode = elementInfo.rootNode;
    if (this._rootNodeFocusListenerCount.has(rootNode)) {
      const rootNodeFocusListeners = this._rootNodeFocusListenerCount.get(rootNode);
      if (rootNodeFocusListeners > 1) {
        this._rootNodeFocusListenerCount.set(rootNode, rootNodeFocusListeners - 1);
      } else {
        rootNode.removeEventListener("focus", this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
        rootNode.removeEventListener("blur", this._rootNodeFocusAndBlurListener, captureEventListenerOptions);
        this._rootNodeFocusListenerCount.delete(rootNode);
      }
    }
    if (!--this._monitoredElementCount) {
      const window2 = this._getWindow();
      window2.removeEventListener("focus", this._windowFocusListener);
      this._stopInputModalityDetector.next();
      clearTimeout(this._windowFocusTimeoutId);
      clearTimeout(this._originTimeoutId);
    }
  }
  /** Updates all the state on an element once its focus origin has changed. */
  _originChanged(element, origin, elementInfo) {
    this._setClasses(element, origin);
    this._emitOrigin(elementInfo, origin);
    this._lastFocusOrigin = origin;
  }
  /**
   * Collects the `MonitoredElementInfo` of a particular element and
   * all of its ancestors that have enabled `checkChildren`.
   * @param element Element from which to start the search.
   */
  _getClosestElementsInfo(element) {
    const results = [];
    this._elementInfo.forEach((info, currentElement) => {
      if (currentElement === element || info.checkChildren && currentElement.contains(element)) {
        results.push([currentElement, info]);
      }
    });
    return results;
  }
  /**
   * Returns whether an interaction is likely to have come from the user clicking the `label` of
   * an `input` or `textarea` in order to focus it.
   * @param focusEventTarget Target currently receiving focus.
   */
  _isLastInteractionFromInputLabel(focusEventTarget) {
    const {
      _mostRecentTarget: mostRecentTarget,
      mostRecentModality
    } = this._inputModalityDetector;
    if (mostRecentModality !== "mouse" || !mostRecentTarget || mostRecentTarget === focusEventTarget || focusEventTarget.nodeName !== "INPUT" && focusEventTarget.nodeName !== "TEXTAREA" || focusEventTarget.disabled) {
      return false;
    }
    const labels = focusEventTarget.labels;
    if (labels) {
      for (let i = 0; i < labels.length; i++) {
        if (labels[i].contains(mostRecentTarget)) {
          return true;
        }
      }
    }
    return false;
  }
};
_FocusMonitor.\u0275fac = function FocusMonitor_Factory(t) {
  return new (t || _FocusMonitor)(\u0275\u0275inject(NgZone), \u0275\u0275inject(Platform), \u0275\u0275inject(InputModalityDetector), \u0275\u0275inject(DOCUMENT, 8), \u0275\u0275inject(FOCUS_MONITOR_DEFAULT_OPTIONS, 8));
};
_FocusMonitor.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _FocusMonitor,
  factory: _FocusMonitor.\u0275fac,
  providedIn: "root"
});
var FocusMonitor = _FocusMonitor;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FocusMonitor, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: NgZone
  }, {
    type: Platform
  }, {
    type: InputModalityDetector
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [FOCUS_MONITOR_DEFAULT_OPTIONS]
    }]
  }], null);
})();
var _CdkMonitorFocus = class _CdkMonitorFocus {
  constructor(_elementRef, _focusMonitor) {
    this._elementRef = _elementRef;
    this._focusMonitor = _focusMonitor;
    this._focusOrigin = null;
    this.cdkFocusChange = new EventEmitter();
  }
  get focusOrigin() {
    return this._focusOrigin;
  }
  ngAfterViewInit() {
    const element = this._elementRef.nativeElement;
    this._monitorSubscription = this._focusMonitor.monitor(element, element.nodeType === 1 && element.hasAttribute("cdkMonitorSubtreeFocus")).subscribe((origin) => {
      this._focusOrigin = origin;
      this.cdkFocusChange.emit(origin);
    });
  }
  ngOnDestroy() {
    this._focusMonitor.stopMonitoring(this._elementRef);
    if (this._monitorSubscription) {
      this._monitorSubscription.unsubscribe();
    }
  }
};
_CdkMonitorFocus.\u0275fac = function CdkMonitorFocus_Factory(t) {
  return new (t || _CdkMonitorFocus)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(FocusMonitor));
};
_CdkMonitorFocus.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _CdkMonitorFocus,
  selectors: [["", "cdkMonitorElementFocus", ""], ["", "cdkMonitorSubtreeFocus", ""]],
  outputs: {
    cdkFocusChange: "cdkFocusChange"
  },
  exportAs: ["cdkMonitorFocus"],
  standalone: true
});
var CdkMonitorFocus = _CdkMonitorFocus;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkMonitorFocus, [{
    type: Directive,
    args: [{
      selector: "[cdkMonitorElementFocus], [cdkMonitorSubtreeFocus]",
      exportAs: "cdkMonitorFocus",
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: FocusMonitor
  }], {
    cdkFocusChange: [{
      type: Output
    }]
  });
})();
var HighContrastMode;
(function(HighContrastMode2) {
  HighContrastMode2[HighContrastMode2["NONE"] = 0] = "NONE";
  HighContrastMode2[HighContrastMode2["BLACK_ON_WHITE"] = 1] = "BLACK_ON_WHITE";
  HighContrastMode2[HighContrastMode2["WHITE_ON_BLACK"] = 2] = "WHITE_ON_BLACK";
})(HighContrastMode || (HighContrastMode = {}));
var BLACK_ON_WHITE_CSS_CLASS = "cdk-high-contrast-black-on-white";
var WHITE_ON_BLACK_CSS_CLASS = "cdk-high-contrast-white-on-black";
var HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS = "cdk-high-contrast-active";
var _HighContrastModeDetector = class _HighContrastModeDetector {
  constructor(_platform, document2) {
    this._platform = _platform;
    this._document = document2;
    this._breakpointSubscription = inject(BreakpointObserver).observe("(forced-colors: active)").subscribe(() => {
      if (this._hasCheckedHighContrastMode) {
        this._hasCheckedHighContrastMode = false;
        this._applyBodyHighContrastModeCssClasses();
      }
    });
  }
  /** Gets the current high-contrast-mode for the page. */
  getHighContrastMode() {
    if (!this._platform.isBrowser) {
      return HighContrastMode.NONE;
    }
    const testElement = this._document.createElement("div");
    testElement.style.backgroundColor = "rgb(1,2,3)";
    testElement.style.position = "absolute";
    this._document.body.appendChild(testElement);
    const documentWindow = this._document.defaultView || window;
    const computedStyle = documentWindow && documentWindow.getComputedStyle ? documentWindow.getComputedStyle(testElement) : null;
    const computedColor = (computedStyle && computedStyle.backgroundColor || "").replace(/ /g, "");
    testElement.remove();
    switch (computedColor) {
      case "rgb(0,0,0)":
      case "rgb(45,50,54)":
      case "rgb(32,32,32)":
        return HighContrastMode.WHITE_ON_BLACK;
      case "rgb(255,255,255)":
      case "rgb(255,250,239)":
        return HighContrastMode.BLACK_ON_WHITE;
    }
    return HighContrastMode.NONE;
  }
  ngOnDestroy() {
    this._breakpointSubscription.unsubscribe();
  }
  /** Applies CSS classes indicating high-contrast mode to document body (browser-only). */
  _applyBodyHighContrastModeCssClasses() {
    if (!this._hasCheckedHighContrastMode && this._platform.isBrowser && this._document.body) {
      const bodyClasses = this._document.body.classList;
      bodyClasses.remove(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS, BLACK_ON_WHITE_CSS_CLASS, WHITE_ON_BLACK_CSS_CLASS);
      this._hasCheckedHighContrastMode = true;
      const mode = this.getHighContrastMode();
      if (mode === HighContrastMode.BLACK_ON_WHITE) {
        bodyClasses.add(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS, BLACK_ON_WHITE_CSS_CLASS);
      } else if (mode === HighContrastMode.WHITE_ON_BLACK) {
        bodyClasses.add(HIGH_CONTRAST_MODE_ACTIVE_CSS_CLASS, WHITE_ON_BLACK_CSS_CLASS);
      }
    }
  }
};
_HighContrastModeDetector.\u0275fac = function HighContrastModeDetector_Factory(t) {
  return new (t || _HighContrastModeDetector)(\u0275\u0275inject(Platform), \u0275\u0275inject(DOCUMENT));
};
_HighContrastModeDetector.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _HighContrastModeDetector,
  factory: _HighContrastModeDetector.\u0275fac,
  providedIn: "root"
});
var HighContrastModeDetector = _HighContrastModeDetector;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HighContrastModeDetector, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: Platform
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
var _A11yModule = class _A11yModule {
  constructor(highContrastModeDetector) {
    highContrastModeDetector._applyBodyHighContrastModeCssClasses();
  }
};
_A11yModule.\u0275fac = function A11yModule_Factory(t) {
  return new (t || _A11yModule)(\u0275\u0275inject(HighContrastModeDetector));
};
_A11yModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _A11yModule
});
_A11yModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [ObserversModule]
});
var A11yModule = _A11yModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(A11yModule, [{
    type: NgModule,
    args: [{
      imports: [ObserversModule, CdkAriaLive, CdkTrapFocus, CdkMonitorFocus],
      exports: [CdkAriaLive, CdkTrapFocus, CdkMonitorFocus]
    }]
  }], () => [{
    type: HighContrastModeDetector
  }], null);
})();

// node_modules/@angular/cdk/fesm2022/bidi.mjs
var DIR_DOCUMENT = new InjectionToken("cdk-dir-doc", {
  providedIn: "root",
  factory: DIR_DOCUMENT_FACTORY
});
function DIR_DOCUMENT_FACTORY() {
  return inject(DOCUMENT);
}
var RTL_LOCALE_PATTERN = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
function _resolveDirectionality(rawValue) {
  const value = rawValue?.toLowerCase() || "";
  if (value === "auto" && typeof navigator !== "undefined" && navigator?.language) {
    return RTL_LOCALE_PATTERN.test(navigator.language) ? "rtl" : "ltr";
  }
  return value === "rtl" ? "rtl" : "ltr";
}
var _Directionality = class _Directionality {
  constructor(_document) {
    this.value = "ltr";
    this.change = new EventEmitter();
    if (_document) {
      const bodyDir = _document.body ? _document.body.dir : null;
      const htmlDir = _document.documentElement ? _document.documentElement.dir : null;
      this.value = _resolveDirectionality(bodyDir || htmlDir || "ltr");
    }
  }
  ngOnDestroy() {
    this.change.complete();
  }
};
_Directionality.\u0275fac = function Directionality_Factory(t) {
  return new (t || _Directionality)(\u0275\u0275inject(DIR_DOCUMENT, 8));
};
_Directionality.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _Directionality,
  factory: _Directionality.\u0275fac,
  providedIn: "root"
});
var Directionality = _Directionality;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Directionality, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [DIR_DOCUMENT]
    }]
  }], null);
})();
var _Dir = class _Dir {
  constructor() {
    this._dir = "ltr";
    this._isInitialized = false;
    this.change = new EventEmitter();
  }
  /** @docs-private */
  get dir() {
    return this._dir;
  }
  set dir(value) {
    const previousValue = this._dir;
    this._dir = _resolveDirectionality(value);
    this._rawDir = value;
    if (previousValue !== this._dir && this._isInitialized) {
      this.change.emit(this._dir);
    }
  }
  /** Current layout direction of the element. */
  get value() {
    return this.dir;
  }
  /** Initialize once default value has been set. */
  ngAfterContentInit() {
    this._isInitialized = true;
  }
  ngOnDestroy() {
    this.change.complete();
  }
};
_Dir.\u0275fac = function Dir_Factory(t) {
  return new (t || _Dir)();
};
_Dir.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _Dir,
  selectors: [["", "dir", ""]],
  hostVars: 1,
  hostBindings: function Dir_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("dir", ctx._rawDir);
    }
  },
  inputs: {
    dir: "dir"
  },
  outputs: {
    change: "dirChange"
  },
  exportAs: ["dir"],
  standalone: true,
  features: [\u0275\u0275ProvidersFeature([{
    provide: Directionality,
    useExisting: _Dir
  }])]
});
var Dir = _Dir;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Dir, [{
    type: Directive,
    args: [{
      selector: "[dir]",
      providers: [{
        provide: Directionality,
        useExisting: Dir
      }],
      host: {
        "[attr.dir]": "_rawDir"
      },
      exportAs: "dir",
      standalone: true
    }]
  }], null, {
    change: [{
      type: Output,
      args: ["dirChange"]
    }],
    dir: [{
      type: Input
    }]
  });
})();
var _BidiModule = class _BidiModule {
};
_BidiModule.\u0275fac = function BidiModule_Factory(t) {
  return new (t || _BidiModule)();
};
_BidiModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _BidiModule
});
_BidiModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
var BidiModule = _BidiModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BidiModule, [{
    type: NgModule,
    args: [{
      imports: [Dir],
      exports: [Dir]
    }]
  }], null, null);
})();

// node_modules/@angular/cdk/fesm2022/cdk.mjs
var VERSION = new Version("17.3.10");

// node_modules/@angular/material/fesm2022/core.mjs
var _c02 = ["*", [["mat-option"], ["ng-container"]]];
var _c12 = ["*", "mat-option, ng-container"];
var _c22 = ["text"];
var _c32 = [[["mat-icon"]], "*"];
var _c42 = ["mat-icon", "*"];
function MatOption_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-pseudo-checkbox", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r0.disabled)("state", ctx_r0.selected ? "checked" : "unchecked");
  }
}
function MatOption_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-pseudo-checkbox", 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r0.disabled);
  }
}
function MatOption_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", ctx_r0.group.label, ")");
  }
}
var _c52 = ["mat-internal-form-field", ""];
var _c62 = ["*"];
var VERSION2 = new Version("17.3.10");
var _AnimationCurves = class _AnimationCurves {
};
_AnimationCurves.STANDARD_CURVE = "cubic-bezier(0.4,0.0,0.2,1)";
_AnimationCurves.DECELERATION_CURVE = "cubic-bezier(0.0,0.0,0.2,1)";
_AnimationCurves.ACCELERATION_CURVE = "cubic-bezier(0.4,0.0,1,1)";
_AnimationCurves.SHARP_CURVE = "cubic-bezier(0.4,0.0,0.6,1)";
var AnimationCurves = _AnimationCurves;
var _AnimationDurations = class _AnimationDurations {
};
_AnimationDurations.COMPLEX = "375ms";
_AnimationDurations.ENTERING = "225ms";
_AnimationDurations.EXITING = "195ms";
var AnimationDurations = _AnimationDurations;
function MATERIAL_SANITY_CHECKS_FACTORY() {
  return true;
}
var MATERIAL_SANITY_CHECKS = new InjectionToken("mat-sanity-checks", {
  providedIn: "root",
  factory: MATERIAL_SANITY_CHECKS_FACTORY
});
var _MatCommonModule = class _MatCommonModule {
  constructor(highContrastModeDetector, _sanityChecks, _document) {
    this._sanityChecks = _sanityChecks;
    this._document = _document;
    this._hasDoneGlobalChecks = false;
    highContrastModeDetector._applyBodyHighContrastModeCssClasses();
    if (!this._hasDoneGlobalChecks) {
      this._hasDoneGlobalChecks = true;
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        const platform = inject(Platform, {
          optional: true
        });
        if (this._checkIsEnabled("doctype")) {
          _checkDoctypeIsDefined(this._document);
        }
        if (this._checkIsEnabled("theme")) {
          _checkThemeIsPresent(this._document, !!platform?.isBrowser);
        }
        if (this._checkIsEnabled("version")) {
          _checkCdkVersionMatch();
        }
      }
    }
  }
  /** Gets whether a specific sanity check is enabled. */
  _checkIsEnabled(name) {
    if (_isTestEnvironment()) {
      return false;
    }
    if (typeof this._sanityChecks === "boolean") {
      return this._sanityChecks;
    }
    return !!this._sanityChecks[name];
  }
};
_MatCommonModule.\u0275fac = function MatCommonModule_Factory(t) {
  return new (t || _MatCommonModule)(\u0275\u0275inject(HighContrastModeDetector), \u0275\u0275inject(MATERIAL_SANITY_CHECKS, 8), \u0275\u0275inject(DOCUMENT));
};
_MatCommonModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _MatCommonModule
});
_MatCommonModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [BidiModule, BidiModule]
});
var MatCommonModule = _MatCommonModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCommonModule, [{
    type: NgModule,
    args: [{
      imports: [BidiModule],
      exports: [BidiModule]
    }]
  }], () => [{
    type: HighContrastModeDetector
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MATERIAL_SANITY_CHECKS]
    }]
  }, {
    type: Document,
    decorators: [{
      type: Inject,
      args: [DOCUMENT]
    }]
  }], null);
})();
function _checkDoctypeIsDefined(doc) {
  if (!doc.doctype) {
    console.warn("Current document does not have a doctype. This may cause some Angular Material components not to behave as expected.");
  }
}
function _checkThemeIsPresent(doc, isBrowser) {
  if (!doc.body || !isBrowser) {
    return;
  }
  const testElement = doc.createElement("div");
  testElement.classList.add("mat-theme-loaded-marker");
  doc.body.appendChild(testElement);
  const computedStyle = getComputedStyle(testElement);
  if (computedStyle && computedStyle.display !== "none") {
    console.warn("Could not find Angular Material core theme. Most Material components may not work as expected. For more info refer to the theming guide: https://material.angular.io/guide/theming");
  }
  testElement.remove();
}
function _checkCdkVersionMatch() {
  if (VERSION2.full !== VERSION.full) {
    console.warn("The Angular Material version (" + VERSION2.full + ") does not match the Angular CDK version (" + VERSION.full + ").\nPlease ensure the versions of these two packages exactly match.");
  }
}
var MAT_DATE_LOCALE = new InjectionToken("MAT_DATE_LOCALE", {
  providedIn: "root",
  factory: MAT_DATE_LOCALE_FACTORY
});
function MAT_DATE_LOCALE_FACTORY() {
  return inject(LOCALE_ID);
}
var DateAdapter = class {
  constructor() {
    this._localeChanges = new Subject();
    this.localeChanges = this._localeChanges;
  }
  /**
   * Given a potential date object, returns that same date object if it is
   * a valid date, or `null` if it's not a valid date.
   * @param obj The object to check.
   * @returns A date or `null`.
   */
  getValidDateOrNull(obj) {
    return this.isDateInstance(obj) && this.isValid(obj) ? obj : null;
  }
  /**
   * Attempts to deserialize a value to a valid date object. This is different from parsing in that
   * deserialize should only accept non-ambiguous, locale-independent formats (e.g. a ISO 8601
   * string). The default implementation does not allow any deserialization, it simply checks that
   * the given value is already a valid date object or null. The `<mat-datepicker>` will call this
   * method on all of its `@Input()` properties that accept dates. It is therefore possible to
   * support passing values from your backend directly to these properties by overriding this method
   * to also deserialize the format used by your backend.
   * @param value The value to be deserialized into a date object.
   * @returns The deserialized date object, either a valid date, null if the value can be
   *     deserialized into a null date (e.g. the empty string), or an invalid date.
   */
  deserialize(value) {
    if (value == null || this.isDateInstance(value) && this.isValid(value)) {
      return value;
    }
    return this.invalid();
  }
  /**
   * Sets the locale used for all dates.
   * @param locale The new locale.
   */
  setLocale(locale) {
    this.locale = locale;
    this._localeChanges.next();
  }
  /**
   * Compares two dates.
   * @param first The first date to compare.
   * @param second The second date to compare.
   * @returns 0 if the dates are equal, a number less than 0 if the first date is earlier,
   *     a number greater than 0 if the first date is later.
   */
  compareDate(first2, second) {
    return this.getYear(first2) - this.getYear(second) || this.getMonth(first2) - this.getMonth(second) || this.getDate(first2) - this.getDate(second);
  }
  /**
   * Checks if two dates are equal.
   * @param first The first date to check.
   * @param second The second date to check.
   * @returns Whether the two dates are equal.
   *     Null dates are considered equal to other null dates.
   */
  sameDate(first2, second) {
    if (first2 && second) {
      let firstValid = this.isValid(first2);
      let secondValid = this.isValid(second);
      if (firstValid && secondValid) {
        return !this.compareDate(first2, second);
      }
      return firstValid == secondValid;
    }
    return first2 == second;
  }
  /**
   * Clamp the given date between min and max dates.
   * @param date The date to clamp.
   * @param min The minimum value to allow. If null or omitted no min is enforced.
   * @param max The maximum value to allow. If null or omitted no max is enforced.
   * @returns `min` if `date` is less than `min`, `max` if date is greater than `max`,
   *     otherwise `date`.
   */
  clampDate(date, min, max) {
    if (min && this.compareDate(date, min) < 0) {
      return min;
    }
    if (max && this.compareDate(date, max) > 0) {
      return max;
    }
    return date;
  }
};
var MAT_DATE_FORMATS = new InjectionToken("mat-date-formats");
var ISO_8601_REGEX = /^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/;
function range(length, valueFunction) {
  const valuesArray = Array(length);
  for (let i = 0; i < length; i++) {
    valuesArray[i] = valueFunction(i);
  }
  return valuesArray;
}
var _NativeDateAdapter = class _NativeDateAdapter extends DateAdapter {
  constructor(matDateLocale) {
    super();
    this.useUtcForDisplay = false;
    this._matDateLocale = inject(MAT_DATE_LOCALE, {
      optional: true
    });
    if (matDateLocale !== void 0) {
      this._matDateLocale = matDateLocale;
    }
    super.setLocale(this._matDateLocale);
  }
  getYear(date) {
    return date.getFullYear();
  }
  getMonth(date) {
    return date.getMonth();
  }
  getDate(date) {
    return date.getDate();
  }
  getDayOfWeek(date) {
    return date.getDay();
  }
  getMonthNames(style2) {
    const dtf = new Intl.DateTimeFormat(this.locale, {
      month: style2,
      timeZone: "utc"
    });
    return range(12, (i) => this._format(dtf, new Date(2017, i, 1)));
  }
  getDateNames() {
    const dtf = new Intl.DateTimeFormat(this.locale, {
      day: "numeric",
      timeZone: "utc"
    });
    return range(31, (i) => this._format(dtf, new Date(2017, 0, i + 1)));
  }
  getDayOfWeekNames(style2) {
    const dtf = new Intl.DateTimeFormat(this.locale, {
      weekday: style2,
      timeZone: "utc"
    });
    return range(7, (i) => this._format(dtf, new Date(2017, 0, i + 1)));
  }
  getYearName(date) {
    const dtf = new Intl.DateTimeFormat(this.locale, {
      year: "numeric",
      timeZone: "utc"
    });
    return this._format(dtf, date);
  }
  getFirstDayOfWeek() {
    return 0;
  }
  getNumDaysInMonth(date) {
    return this.getDate(this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + 1, 0));
  }
  clone(date) {
    return new Date(date.getTime());
  }
  createDate(year, month, date) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      if (month < 0 || month > 11) {
        throw Error(`Invalid month index "${month}". Month index has to be between 0 and 11.`);
      }
      if (date < 1) {
        throw Error(`Invalid date "${date}". Date has to be greater than 0.`);
      }
    }
    let result = this._createDateWithOverflow(year, month, date);
    if (result.getMonth() != month && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error(`Invalid date "${date}" for month with index "${month}".`);
    }
    return result;
  }
  today() {
    return /* @__PURE__ */ new Date();
  }
  parse(value, parseFormat) {
    if (typeof value == "number") {
      return new Date(value);
    }
    return value ? new Date(Date.parse(value)) : null;
  }
  format(date, displayFormat) {
    if (!this.isValid(date)) {
      throw Error("NativeDateAdapter: Cannot format invalid date.");
    }
    const dtf = new Intl.DateTimeFormat(this.locale, __spreadProps(__spreadValues({}, displayFormat), {
      timeZone: "utc"
    }));
    return this._format(dtf, date);
  }
  addCalendarYears(date, years) {
    return this.addCalendarMonths(date, years * 12);
  }
  addCalendarMonths(date, months) {
    let newDate = this._createDateWithOverflow(this.getYear(date), this.getMonth(date) + months, this.getDate(date));
    if (this.getMonth(newDate) != ((this.getMonth(date) + months) % 12 + 12) % 12) {
      newDate = this._createDateWithOverflow(this.getYear(newDate), this.getMonth(newDate), 0);
    }
    return newDate;
  }
  addCalendarDays(date, days) {
    return this._createDateWithOverflow(this.getYear(date), this.getMonth(date), this.getDate(date) + days);
  }
  toIso8601(date) {
    return [date.getUTCFullYear(), this._2digit(date.getUTCMonth() + 1), this._2digit(date.getUTCDate())].join("-");
  }
  /**
   * Returns the given value if given a valid Date or null. Deserializes valid ISO 8601 strings
   * (https://www.ietf.org/rfc/rfc3339.txt) into valid Dates and empty string into null. Returns an
   * invalid date for all other values.
   */
  deserialize(value) {
    if (typeof value === "string") {
      if (!value) {
        return null;
      }
      if (ISO_8601_REGEX.test(value)) {
        let date = new Date(value);
        if (this.isValid(date)) {
          return date;
        }
      }
    }
    return super.deserialize(value);
  }
  isDateInstance(obj) {
    return obj instanceof Date;
  }
  isValid(date) {
    return !isNaN(date.getTime());
  }
  invalid() {
    return /* @__PURE__ */ new Date(NaN);
  }
  /** Creates a date but allows the month and date to overflow. */
  _createDateWithOverflow(year, month, date) {
    const d = /* @__PURE__ */ new Date();
    d.setFullYear(year, month, date);
    d.setHours(0, 0, 0, 0);
    return d;
  }
  /**
   * Pads a number to make it two digits.
   * @param n The number to pad.
   * @returns The padded number.
   */
  _2digit(n) {
    return ("00" + n).slice(-2);
  }
  /**
   * When converting Date object to string, javascript built-in functions may return wrong
   * results because it applies its internal DST rules. The DST rules around the world change
   * very frequently, and the current valid rule is not always valid in previous years though.
   * We work around this problem building a new Date object which has its internal UTC
   * representation with the local date and time.
   * @param dtf Intl.DateTimeFormat object, containing the desired string format. It must have
   *    timeZone set to 'utc' to work fine.
   * @param date Date from which we want to get the string representation according to dtf
   * @returns A Date object with its UTC representation based on the passed in date info
   */
  _format(dtf, date) {
    const d = /* @__PURE__ */ new Date();
    d.setUTCFullYear(date.getFullYear(), date.getMonth(), date.getDate());
    d.setUTCHours(date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds());
    return dtf.format(d);
  }
};
_NativeDateAdapter.\u0275fac = function NativeDateAdapter_Factory(t) {
  return new (t || _NativeDateAdapter)(\u0275\u0275inject(MAT_DATE_LOCALE, 8));
};
_NativeDateAdapter.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _NativeDateAdapter,
  factory: _NativeDateAdapter.\u0275fac
});
var NativeDateAdapter = _NativeDateAdapter;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NativeDateAdapter, [{
    type: Injectable
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_DATE_LOCALE]
    }]
  }], null);
})();
var MAT_NATIVE_DATE_FORMATS = {
  parse: {
    dateInput: null
  },
  display: {
    dateInput: {
      year: "numeric",
      month: "numeric",
      day: "numeric"
    },
    monthYearLabel: {
      year: "numeric",
      month: "short"
    },
    dateA11yLabel: {
      year: "numeric",
      month: "long",
      day: "numeric"
    },
    monthYearA11yLabel: {
      year: "numeric",
      month: "long"
    }
  }
};
var _NativeDateModule = class _NativeDateModule {
};
_NativeDateModule.\u0275fac = function NativeDateModule_Factory(t) {
  return new (t || _NativeDateModule)();
};
_NativeDateModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _NativeDateModule
});
_NativeDateModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [{
    provide: DateAdapter,
    useClass: NativeDateAdapter
  }]
});
var NativeDateModule = _NativeDateModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NativeDateModule, [{
    type: NgModule,
    args: [{
      providers: [{
        provide: DateAdapter,
        useClass: NativeDateAdapter
      }]
    }]
  }], null, null);
})();
var _MatNativeDateModule = class _MatNativeDateModule {
};
_MatNativeDateModule.\u0275fac = function MatNativeDateModule_Factory(t) {
  return new (t || _MatNativeDateModule)();
};
_MatNativeDateModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _MatNativeDateModule
});
_MatNativeDateModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  providers: [provideNativeDateAdapter()]
});
var MatNativeDateModule = _MatNativeDateModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatNativeDateModule, [{
    type: NgModule,
    args: [{
      providers: [provideNativeDateAdapter()]
    }]
  }], null, null);
})();
function provideNativeDateAdapter(formats = MAT_NATIVE_DATE_FORMATS) {
  return [{
    provide: DateAdapter,
    useClass: NativeDateAdapter
  }, {
    provide: MAT_DATE_FORMATS,
    useValue: formats
  }];
}
var _ShowOnDirtyErrorStateMatcher = class _ShowOnDirtyErrorStateMatcher {
  isErrorState(control, form) {
    return !!(control && control.invalid && (control.dirty || form && form.submitted));
  }
};
_ShowOnDirtyErrorStateMatcher.\u0275fac = function ShowOnDirtyErrorStateMatcher_Factory(t) {
  return new (t || _ShowOnDirtyErrorStateMatcher)();
};
_ShowOnDirtyErrorStateMatcher.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _ShowOnDirtyErrorStateMatcher,
  factory: _ShowOnDirtyErrorStateMatcher.\u0275fac
});
var ShowOnDirtyErrorStateMatcher = _ShowOnDirtyErrorStateMatcher;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShowOnDirtyErrorStateMatcher, [{
    type: Injectable
  }], null, null);
})();
var _ErrorStateMatcher = class _ErrorStateMatcher {
  isErrorState(control, form) {
    return !!(control && control.invalid && (control.touched || form && form.submitted));
  }
};
_ErrorStateMatcher.\u0275fac = function ErrorStateMatcher_Factory(t) {
  return new (t || _ErrorStateMatcher)();
};
_ErrorStateMatcher.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _ErrorStateMatcher,
  factory: _ErrorStateMatcher.\u0275fac,
  providedIn: "root"
});
var ErrorStateMatcher = _ErrorStateMatcher;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ErrorStateMatcher, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var _MatLine = class _MatLine {
};
_MatLine.\u0275fac = function MatLine_Factory(t) {
  return new (t || _MatLine)();
};
_MatLine.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MatLine,
  selectors: [["", "mat-line", ""], ["", "matLine", ""]],
  hostAttrs: [1, "mat-line"],
  standalone: true
});
var MatLine = _MatLine;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatLine, [{
    type: Directive,
    args: [{
      selector: "[mat-line], [matLine]",
      host: {
        "class": "mat-line"
      },
      standalone: true
    }]
  }], null, null);
})();
var _MatLineModule = class _MatLineModule {
};
_MatLineModule.\u0275fac = function MatLineModule_Factory(t) {
  return new (t || _MatLineModule)();
};
_MatLineModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _MatLineModule
});
_MatLineModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [MatCommonModule, MatCommonModule]
});
var MatLineModule = _MatLineModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatLineModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, MatLine],
      exports: [MatLine, MatCommonModule]
    }]
  }], null, null);
})();
var RippleState;
(function(RippleState2) {
  RippleState2[RippleState2["FADING_IN"] = 0] = "FADING_IN";
  RippleState2[RippleState2["VISIBLE"] = 1] = "VISIBLE";
  RippleState2[RippleState2["FADING_OUT"] = 2] = "FADING_OUT";
  RippleState2[RippleState2["HIDDEN"] = 3] = "HIDDEN";
})(RippleState || (RippleState = {}));
var RippleRef = class {
  constructor(_renderer, element, config, _animationForciblyDisabledThroughCss = false) {
    this._renderer = _renderer;
    this.element = element;
    this.config = config;
    this._animationForciblyDisabledThroughCss = _animationForciblyDisabledThroughCss;
    this.state = RippleState.HIDDEN;
  }
  /** Fades out the ripple element. */
  fadeOut() {
    this._renderer.fadeOutRipple(this);
  }
};
var passiveCapturingEventOptions$1 = normalizePassiveListenerOptions({
  passive: true,
  capture: true
});
var RippleEventManager = class {
  constructor() {
    this._events = /* @__PURE__ */ new Map();
    this._delegateEventHandler = (event) => {
      const target = _getEventTarget(event);
      if (target) {
        this._events.get(event.type)?.forEach((handlers, element) => {
          if (element === target || element.contains(target)) {
            handlers.forEach((handler) => handler.handleEvent(event));
          }
        });
      }
    };
  }
  /** Adds an event handler. */
  addHandler(ngZone, name, element, handler) {
    const handlersForEvent = this._events.get(name);
    if (handlersForEvent) {
      const handlersForElement = handlersForEvent.get(element);
      if (handlersForElement) {
        handlersForElement.add(handler);
      } else {
        handlersForEvent.set(element, /* @__PURE__ */ new Set([handler]));
      }
    } else {
      this._events.set(name, /* @__PURE__ */ new Map([[element, /* @__PURE__ */ new Set([handler])]]));
      ngZone.runOutsideAngular(() => {
        document.addEventListener(name, this._delegateEventHandler, passiveCapturingEventOptions$1);
      });
    }
  }
  /** Removes an event handler. */
  removeHandler(name, element, handler) {
    const handlersForEvent = this._events.get(name);
    if (!handlersForEvent) {
      return;
    }
    const handlersForElement = handlersForEvent.get(element);
    if (!handlersForElement) {
      return;
    }
    handlersForElement.delete(handler);
    if (handlersForElement.size === 0) {
      handlersForEvent.delete(element);
    }
    if (handlersForEvent.size === 0) {
      this._events.delete(name);
      document.removeEventListener(name, this._delegateEventHandler, passiveCapturingEventOptions$1);
    }
  }
};
var defaultRippleAnimationConfig = {
  enterDuration: 225,
  exitDuration: 150
};
var ignoreMouseEventsTimeout = 800;
var passiveCapturingEventOptions = normalizePassiveListenerOptions({
  passive: true,
  capture: true
});
var pointerDownEvents = ["mousedown", "touchstart"];
var pointerUpEvents = ["mouseup", "mouseleave", "touchend", "touchcancel"];
var _RippleRenderer = class _RippleRenderer {
  constructor(_target, _ngZone, elementOrElementRef, _platform) {
    this._target = _target;
    this._ngZone = _ngZone;
    this._platform = _platform;
    this._isPointerDown = false;
    this._activeRipples = /* @__PURE__ */ new Map();
    this._pointerUpEventsRegistered = false;
    if (_platform.isBrowser) {
      this._containerElement = coerceElement(elementOrElementRef);
    }
  }
  /**
   * Fades in a ripple at the given coordinates.
   * @param x Coordinate within the element, along the X axis at which to start the ripple.
   * @param y Coordinate within the element, along the Y axis at which to start the ripple.
   * @param config Extra ripple options.
   */
  fadeInRipple(x, y, config = {}) {
    const containerRect = this._containerRect = this._containerRect || this._containerElement.getBoundingClientRect();
    const animationConfig = __spreadValues(__spreadValues({}, defaultRippleAnimationConfig), config.animation);
    if (config.centered) {
      x = containerRect.left + containerRect.width / 2;
      y = containerRect.top + containerRect.height / 2;
    }
    const radius = config.radius || distanceToFurthestCorner(x, y, containerRect);
    const offsetX = x - containerRect.left;
    const offsetY = y - containerRect.top;
    const enterDuration = animationConfig.enterDuration;
    const ripple = document.createElement("div");
    ripple.classList.add("mat-ripple-element");
    ripple.style.left = `${offsetX - radius}px`;
    ripple.style.top = `${offsetY - radius}px`;
    ripple.style.height = `${radius * 2}px`;
    ripple.style.width = `${radius * 2}px`;
    if (config.color != null) {
      ripple.style.backgroundColor = config.color;
    }
    ripple.style.transitionDuration = `${enterDuration}ms`;
    this._containerElement.appendChild(ripple);
    const computedStyles = window.getComputedStyle(ripple);
    const userTransitionProperty = computedStyles.transitionProperty;
    const userTransitionDuration = computedStyles.transitionDuration;
    const animationForciblyDisabledThroughCss = userTransitionProperty === "none" || // Note: The canonical unit for serialized CSS `<time>` properties is seconds. Additionally
    // some browsers expand the duration for every property (in our case `opacity` and `transform`).
    userTransitionDuration === "0s" || userTransitionDuration === "0s, 0s" || // If the container is 0x0, it's likely `display: none`.
    containerRect.width === 0 && containerRect.height === 0;
    const rippleRef = new RippleRef(this, ripple, config, animationForciblyDisabledThroughCss);
    ripple.style.transform = "scale3d(1, 1, 1)";
    rippleRef.state = RippleState.FADING_IN;
    if (!config.persistent) {
      this._mostRecentTransientRipple = rippleRef;
    }
    let eventListeners = null;
    if (!animationForciblyDisabledThroughCss && (enterDuration || animationConfig.exitDuration)) {
      this._ngZone.runOutsideAngular(() => {
        const onTransitionEnd = () => this._finishRippleTransition(rippleRef);
        const onTransitionCancel = () => this._destroyRipple(rippleRef);
        ripple.addEventListener("transitionend", onTransitionEnd);
        ripple.addEventListener("transitioncancel", onTransitionCancel);
        eventListeners = {
          onTransitionEnd,
          onTransitionCancel
        };
      });
    }
    this._activeRipples.set(rippleRef, eventListeners);
    if (animationForciblyDisabledThroughCss || !enterDuration) {
      this._finishRippleTransition(rippleRef);
    }
    return rippleRef;
  }
  /** Fades out a ripple reference. */
  fadeOutRipple(rippleRef) {
    if (rippleRef.state === RippleState.FADING_OUT || rippleRef.state === RippleState.HIDDEN) {
      return;
    }
    const rippleEl = rippleRef.element;
    const animationConfig = __spreadValues(__spreadValues({}, defaultRippleAnimationConfig), rippleRef.config.animation);
    rippleEl.style.transitionDuration = `${animationConfig.exitDuration}ms`;
    rippleEl.style.opacity = "0";
    rippleRef.state = RippleState.FADING_OUT;
    if (rippleRef._animationForciblyDisabledThroughCss || !animationConfig.exitDuration) {
      this._finishRippleTransition(rippleRef);
    }
  }
  /** Fades out all currently active ripples. */
  fadeOutAll() {
    this._getActiveRipples().forEach((ripple) => ripple.fadeOut());
  }
  /** Fades out all currently active non-persistent ripples. */
  fadeOutAllNonPersistent() {
    this._getActiveRipples().forEach((ripple) => {
      if (!ripple.config.persistent) {
        ripple.fadeOut();
      }
    });
  }
  /** Sets up the trigger event listeners */
  setupTriggerEvents(elementOrElementRef) {
    const element = coerceElement(elementOrElementRef);
    if (!this._platform.isBrowser || !element || element === this._triggerElement) {
      return;
    }
    this._removeTriggerEvents();
    this._triggerElement = element;
    pointerDownEvents.forEach((type) => {
      _RippleRenderer._eventManager.addHandler(this._ngZone, type, element, this);
    });
  }
  /**
   * Handles all registered events.
   * @docs-private
   */
  handleEvent(event) {
    if (event.type === "mousedown") {
      this._onMousedown(event);
    } else if (event.type === "touchstart") {
      this._onTouchStart(event);
    } else {
      this._onPointerUp();
    }
    if (!this._pointerUpEventsRegistered) {
      this._ngZone.runOutsideAngular(() => {
        pointerUpEvents.forEach((type) => {
          this._triggerElement.addEventListener(type, this, passiveCapturingEventOptions);
        });
      });
      this._pointerUpEventsRegistered = true;
    }
  }
  /** Method that will be called if the fade-in or fade-in transition completed. */
  _finishRippleTransition(rippleRef) {
    if (rippleRef.state === RippleState.FADING_IN) {
      this._startFadeOutTransition(rippleRef);
    } else if (rippleRef.state === RippleState.FADING_OUT) {
      this._destroyRipple(rippleRef);
    }
  }
  /**
   * Starts the fade-out transition of the given ripple if it's not persistent and the pointer
   * is not held down anymore.
   */
  _startFadeOutTransition(rippleRef) {
    const isMostRecentTransientRipple = rippleRef === this._mostRecentTransientRipple;
    const {
      persistent
    } = rippleRef.config;
    rippleRef.state = RippleState.VISIBLE;
    if (!persistent && (!isMostRecentTransientRipple || !this._isPointerDown)) {
      rippleRef.fadeOut();
    }
  }
  /** Destroys the given ripple by removing it from the DOM and updating its state. */
  _destroyRipple(rippleRef) {
    const eventListeners = this._activeRipples.get(rippleRef) ?? null;
    this._activeRipples.delete(rippleRef);
    if (!this._activeRipples.size) {
      this._containerRect = null;
    }
    if (rippleRef === this._mostRecentTransientRipple) {
      this._mostRecentTransientRipple = null;
    }
    rippleRef.state = RippleState.HIDDEN;
    if (eventListeners !== null) {
      rippleRef.element.removeEventListener("transitionend", eventListeners.onTransitionEnd);
      rippleRef.element.removeEventListener("transitioncancel", eventListeners.onTransitionCancel);
    }
    rippleRef.element.remove();
  }
  /** Function being called whenever the trigger is being pressed using mouse. */
  _onMousedown(event) {
    const isFakeMousedown = isFakeMousedownFromScreenReader(event);
    const isSyntheticEvent = this._lastTouchStartEvent && Date.now() < this._lastTouchStartEvent + ignoreMouseEventsTimeout;
    if (!this._target.rippleDisabled && !isFakeMousedown && !isSyntheticEvent) {
      this._isPointerDown = true;
      this.fadeInRipple(event.clientX, event.clientY, this._target.rippleConfig);
    }
  }
  /** Function being called whenever the trigger is being pressed using touch. */
  _onTouchStart(event) {
    if (!this._target.rippleDisabled && !isFakeTouchstartFromScreenReader(event)) {
      this._lastTouchStartEvent = Date.now();
      this._isPointerDown = true;
      const touches = event.changedTouches;
      if (touches) {
        for (let i = 0; i < touches.length; i++) {
          this.fadeInRipple(touches[i].clientX, touches[i].clientY, this._target.rippleConfig);
        }
      }
    }
  }
  /** Function being called whenever the trigger is being released. */
  _onPointerUp() {
    if (!this._isPointerDown) {
      return;
    }
    this._isPointerDown = false;
    this._getActiveRipples().forEach((ripple) => {
      const isVisible = ripple.state === RippleState.VISIBLE || ripple.config.terminateOnPointerUp && ripple.state === RippleState.FADING_IN;
      if (!ripple.config.persistent && isVisible) {
        ripple.fadeOut();
      }
    });
  }
  _getActiveRipples() {
    return Array.from(this._activeRipples.keys());
  }
  /** Removes previously registered event listeners from the trigger element. */
  _removeTriggerEvents() {
    const trigger2 = this._triggerElement;
    if (trigger2) {
      pointerDownEvents.forEach((type) => _RippleRenderer._eventManager.removeHandler(type, trigger2, this));
      if (this._pointerUpEventsRegistered) {
        pointerUpEvents.forEach((type) => trigger2.removeEventListener(type, this, passiveCapturingEventOptions));
        this._pointerUpEventsRegistered = false;
      }
    }
  }
};
_RippleRenderer._eventManager = new RippleEventManager();
var RippleRenderer = _RippleRenderer;
function distanceToFurthestCorner(x, y, rect) {
  const distX = Math.max(Math.abs(x - rect.left), Math.abs(x - rect.right));
  const distY = Math.max(Math.abs(y - rect.top), Math.abs(y - rect.bottom));
  return Math.sqrt(distX * distX + distY * distY);
}
var MAT_RIPPLE_GLOBAL_OPTIONS = new InjectionToken("mat-ripple-global-options");
var _MatRipple = class _MatRipple {
  /**
   * Whether click events will not trigger the ripple. Ripples can be still launched manually
   * by using the `launch()` method.
   */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    if (value) {
      this.fadeOutAllNonPersistent();
    }
    this._disabled = value;
    this._setupTriggerEventsIfEnabled();
  }
  /**
   * The element that triggers the ripple when click events are received.
   * Defaults to the directive's host element.
   */
  get trigger() {
    return this._trigger || this._elementRef.nativeElement;
  }
  set trigger(trigger2) {
    this._trigger = trigger2;
    this._setupTriggerEventsIfEnabled();
  }
  constructor(_elementRef, ngZone, platform, globalOptions, _animationMode) {
    this._elementRef = _elementRef;
    this._animationMode = _animationMode;
    this.radius = 0;
    this._disabled = false;
    this._isInitialized = false;
    this._globalOptions = globalOptions || {};
    this._rippleRenderer = new RippleRenderer(this, ngZone, _elementRef, platform);
  }
  ngOnInit() {
    this._isInitialized = true;
    this._setupTriggerEventsIfEnabled();
  }
  ngOnDestroy() {
    this._rippleRenderer._removeTriggerEvents();
  }
  /** Fades out all currently showing ripple elements. */
  fadeOutAll() {
    this._rippleRenderer.fadeOutAll();
  }
  /** Fades out all currently showing non-persistent ripple elements. */
  fadeOutAllNonPersistent() {
    this._rippleRenderer.fadeOutAllNonPersistent();
  }
  /**
   * Ripple configuration from the directive's input values.
   * @docs-private Implemented as part of RippleTarget
   */
  get rippleConfig() {
    return {
      centered: this.centered,
      radius: this.radius,
      color: this.color,
      animation: __spreadValues(__spreadValues(__spreadValues({}, this._globalOptions.animation), this._animationMode === "NoopAnimations" ? {
        enterDuration: 0,
        exitDuration: 0
      } : {}), this.animation),
      terminateOnPointerUp: this._globalOptions.terminateOnPointerUp
    };
  }
  /**
   * Whether ripples on pointer-down are disabled or not.
   * @docs-private Implemented as part of RippleTarget
   */
  get rippleDisabled() {
    return this.disabled || !!this._globalOptions.disabled;
  }
  /** Sets up the trigger event listeners if ripples are enabled. */
  _setupTriggerEventsIfEnabled() {
    if (!this.disabled && this._isInitialized) {
      this._rippleRenderer.setupTriggerEvents(this.trigger);
    }
  }
  /** Launches a manual ripple at the specified coordinated or just by the ripple config. */
  launch(configOrX, y = 0, config) {
    if (typeof configOrX === "number") {
      return this._rippleRenderer.fadeInRipple(configOrX, y, __spreadValues(__spreadValues({}, this.rippleConfig), config));
    } else {
      return this._rippleRenderer.fadeInRipple(0, 0, __spreadValues(__spreadValues({}, this.rippleConfig), configOrX));
    }
  }
};
_MatRipple.\u0275fac = function MatRipple_Factory(t) {
  return new (t || _MatRipple)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(Platform), \u0275\u0275directiveInject(MAT_RIPPLE_GLOBAL_OPTIONS, 8), \u0275\u0275directiveInject(ANIMATION_MODULE_TYPE, 8));
};
_MatRipple.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
  type: _MatRipple,
  selectors: [["", "mat-ripple", ""], ["", "matRipple", ""]],
  hostAttrs: [1, "mat-ripple"],
  hostVars: 2,
  hostBindings: function MatRipple_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("mat-ripple-unbounded", ctx.unbounded);
    }
  },
  inputs: {
    color: [InputFlags.None, "matRippleColor", "color"],
    unbounded: [InputFlags.None, "matRippleUnbounded", "unbounded"],
    centered: [InputFlags.None, "matRippleCentered", "centered"],
    radius: [InputFlags.None, "matRippleRadius", "radius"],
    animation: [InputFlags.None, "matRippleAnimation", "animation"],
    disabled: [InputFlags.None, "matRippleDisabled", "disabled"],
    trigger: [InputFlags.None, "matRippleTrigger", "trigger"]
  },
  exportAs: ["matRipple"],
  standalone: true
});
var MatRipple = _MatRipple;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatRipple, [{
    type: Directive,
    args: [{
      selector: "[mat-ripple], [matRipple]",
      exportAs: "matRipple",
      host: {
        "class": "mat-ripple",
        "[class.mat-ripple-unbounded]": "unbounded"
      },
      standalone: true
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: NgZone
  }, {
    type: Platform
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_RIPPLE_GLOBAL_OPTIONS]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ANIMATION_MODULE_TYPE]
    }]
  }], {
    color: [{
      type: Input,
      args: ["matRippleColor"]
    }],
    unbounded: [{
      type: Input,
      args: ["matRippleUnbounded"]
    }],
    centered: [{
      type: Input,
      args: ["matRippleCentered"]
    }],
    radius: [{
      type: Input,
      args: ["matRippleRadius"]
    }],
    animation: [{
      type: Input,
      args: ["matRippleAnimation"]
    }],
    disabled: [{
      type: Input,
      args: ["matRippleDisabled"]
    }],
    trigger: [{
      type: Input,
      args: ["matRippleTrigger"]
    }]
  });
})();
var _MatRippleModule = class _MatRippleModule {
};
_MatRippleModule.\u0275fac = function MatRippleModule_Factory(t) {
  return new (t || _MatRippleModule)();
};
_MatRippleModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _MatRippleModule
});
_MatRippleModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [MatCommonModule, MatCommonModule]
});
var MatRippleModule = _MatRippleModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatRippleModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, MatRipple],
      exports: [MatRipple, MatCommonModule]
    }]
  }], null, null);
})();
var _MatPseudoCheckbox = class _MatPseudoCheckbox {
  constructor(_animationMode) {
    this._animationMode = _animationMode;
    this.state = "unchecked";
    this.disabled = false;
    this.appearance = "full";
  }
};
_MatPseudoCheckbox.\u0275fac = function MatPseudoCheckbox_Factory(t) {
  return new (t || _MatPseudoCheckbox)(\u0275\u0275directiveInject(ANIMATION_MODULE_TYPE, 8));
};
_MatPseudoCheckbox.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _MatPseudoCheckbox,
  selectors: [["mat-pseudo-checkbox"]],
  hostAttrs: [1, "mat-pseudo-checkbox"],
  hostVars: 12,
  hostBindings: function MatPseudoCheckbox_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("mat-pseudo-checkbox-indeterminate", ctx.state === "indeterminate")("mat-pseudo-checkbox-checked", ctx.state === "checked")("mat-pseudo-checkbox-disabled", ctx.disabled)("mat-pseudo-checkbox-minimal", ctx.appearance === "minimal")("mat-pseudo-checkbox-full", ctx.appearance === "full")("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
    }
  },
  inputs: {
    state: "state",
    disabled: "disabled",
    appearance: "appearance"
  },
  standalone: true,
  features: [\u0275\u0275StandaloneFeature],
  decls: 0,
  vars: 0,
  template: function MatPseudoCheckbox_Template(rf, ctx) {
  },
  styles: ['.mat-pseudo-checkbox{border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1),background-color 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:"";border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox._mat-animation-noopable{transition:none !important;animation:none !important}.mat-pseudo-checkbox._mat-animation-noopable::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{left:1px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{left:1px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after,.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after{color:var(--mat-minimal-pseudo-checkbox-selected-checkmark-color)}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after,.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after{color:var(--mat-minimal-pseudo-checkbox-disabled-selected-checkmark-color)}.mat-pseudo-checkbox-full{border-color:var(--mat-full-pseudo-checkbox-unselected-icon-color);border-width:2px;border-style:solid}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled{border-color:var(--mat-full-pseudo-checkbox-disabled-unselected-icon-color)}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate{background-color:var(--mat-full-pseudo-checkbox-selected-icon-color);border-color:rgba(0,0,0,0)}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after{color:var(--mat-full-pseudo-checkbox-selected-checkmark-color)}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled{background-color:var(--mat-full-pseudo-checkbox-disabled-selected-icon-color)}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after{color:var(--mat-full-pseudo-checkbox-disabled-selected-checkmark-color)}.mat-pseudo-checkbox{width:18px;height:18px}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after{width:14px;height:6px;transform-origin:center;top:-4.2426406871px;left:0;bottom:0;right:0;margin:auto}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after{top:8px;width:16px}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after{width:10px;height:4px;transform-origin:center;top:-2.8284271247px;left:0;bottom:0;right:0;margin:auto}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after{top:6px;width:12px}'],
  encapsulation: 2,
  changeDetection: 0
});
var MatPseudoCheckbox = _MatPseudoCheckbox;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatPseudoCheckbox, [{
    type: Component,
    args: [{
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      selector: "mat-pseudo-checkbox",
      template: "",
      host: {
        "class": "mat-pseudo-checkbox",
        "[class.mat-pseudo-checkbox-indeterminate]": 'state === "indeterminate"',
        "[class.mat-pseudo-checkbox-checked]": 'state === "checked"',
        "[class.mat-pseudo-checkbox-disabled]": "disabled",
        "[class.mat-pseudo-checkbox-minimal]": 'appearance === "minimal"',
        "[class.mat-pseudo-checkbox-full]": 'appearance === "full"',
        "[class._mat-animation-noopable]": '_animationMode === "NoopAnimations"'
      },
      standalone: true,
      styles: ['.mat-pseudo-checkbox{border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1),background-color 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:"";border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox._mat-animation-noopable{transition:none !important;animation:none !important}.mat-pseudo-checkbox._mat-animation-noopable::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{left:1px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{left:1px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after,.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after{color:var(--mat-minimal-pseudo-checkbox-selected-checkmark-color)}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after,.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after{color:var(--mat-minimal-pseudo-checkbox-disabled-selected-checkmark-color)}.mat-pseudo-checkbox-full{border-color:var(--mat-full-pseudo-checkbox-unselected-icon-color);border-width:2px;border-style:solid}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled{border-color:var(--mat-full-pseudo-checkbox-disabled-unselected-icon-color)}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate{background-color:var(--mat-full-pseudo-checkbox-selected-icon-color);border-color:rgba(0,0,0,0)}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after{color:var(--mat-full-pseudo-checkbox-selected-checkmark-color)}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled{background-color:var(--mat-full-pseudo-checkbox-disabled-selected-icon-color)}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after{color:var(--mat-full-pseudo-checkbox-disabled-selected-checkmark-color)}.mat-pseudo-checkbox{width:18px;height:18px}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after{width:14px;height:6px;transform-origin:center;top:-4.2426406871px;left:0;bottom:0;right:0;margin:auto}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after{top:8px;width:16px}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after{width:10px;height:4px;transform-origin:center;top:-2.8284271247px;left:0;bottom:0;right:0;margin:auto}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after{top:6px;width:12px}']
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [ANIMATION_MODULE_TYPE]
    }]
  }], {
    state: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    appearance: [{
      type: Input
    }]
  });
})();
var _MatPseudoCheckboxModule = class _MatPseudoCheckboxModule {
};
_MatPseudoCheckboxModule.\u0275fac = function MatPseudoCheckboxModule_Factory(t) {
  return new (t || _MatPseudoCheckboxModule)();
};
_MatPseudoCheckboxModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _MatPseudoCheckboxModule
});
_MatPseudoCheckboxModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [MatCommonModule]
});
var MatPseudoCheckboxModule = _MatPseudoCheckboxModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatPseudoCheckboxModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, MatPseudoCheckbox],
      exports: [MatPseudoCheckbox]
    }]
  }], null, null);
})();
var MAT_OPTION_PARENT_COMPONENT = new InjectionToken("MAT_OPTION_PARENT_COMPONENT");
var _uniqueOptgroupIdCounter = 0;
var MAT_OPTGROUP = new InjectionToken("MatOptgroup");
var _MatOptgroup = class _MatOptgroup {
  constructor(parent) {
    this.disabled = false;
    this._labelId = `mat-optgroup-label-${_uniqueOptgroupIdCounter++}`;
    this._inert = parent?.inertGroups ?? false;
  }
};
_MatOptgroup.\u0275fac = function MatOptgroup_Factory(t) {
  return new (t || _MatOptgroup)(\u0275\u0275directiveInject(MAT_OPTION_PARENT_COMPONENT, 8));
};
_MatOptgroup.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _MatOptgroup,
  selectors: [["mat-optgroup"]],
  hostAttrs: [1, "mat-mdc-optgroup"],
  hostVars: 3,
  hostBindings: function MatOptgroup_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("role", ctx._inert ? null : "group")("aria-disabled", ctx._inert ? null : ctx.disabled.toString())("aria-labelledby", ctx._inert ? null : ctx._labelId);
    }
  },
  inputs: {
    label: "label",
    disabled: [InputFlags.HasDecoratorInputTransform, "disabled", "disabled", booleanAttribute]
  },
  exportAs: ["matOptgroup"],
  standalone: true,
  features: [\u0275\u0275ProvidersFeature([{
    provide: MAT_OPTGROUP,
    useExisting: _MatOptgroup
  }]), \u0275\u0275InputTransformsFeature, \u0275\u0275StandaloneFeature],
  ngContentSelectors: _c12,
  decls: 5,
  vars: 4,
  consts: [["role", "presentation", 1, "mat-mdc-optgroup-label", 3, "id"], [1, "mdc-list-item__primary-text"]],
  template: function MatOptgroup_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef(_c02);
      \u0275\u0275elementStart(0, "span", 0)(1, "span", 1);
      \u0275\u0275text(2);
      \u0275\u0275projection(3);
      \u0275\u0275elementEnd()();
      \u0275\u0275projection(4, 1);
    }
    if (rf & 2) {
      \u0275\u0275classProp("mdc-list-item--disabled", ctx.disabled);
      \u0275\u0275property("id", ctx._labelId);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("", ctx.label, " ");
    }
  },
  styles: [".mat-mdc-optgroup{color:var(--mat-optgroup-label-text-color);font-family:var(--mat-optgroup-label-text-font);line-height:var(--mat-optgroup-label-text-line-height);font-size:var(--mat-optgroup-label-text-size);letter-spacing:var(--mat-optgroup-label-text-tracking);font-weight:var(--mat-optgroup-label-text-weight)}.mat-mdc-optgroup-label{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:16px;padding-right:16px;min-height:48px}.mat-mdc-optgroup-label:focus{outline:none}[dir=rtl] .mat-mdc-optgroup-label,.mat-mdc-optgroup-label[dir=rtl]{padding-left:16px;padding-right:16px}.mat-mdc-optgroup-label.mdc-list-item--disabled{opacity:.38}.mat-mdc-optgroup-label .mdc-list-item__primary-text{font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;font-family:inherit;text-decoration:inherit;text-transform:inherit;white-space:normal}"],
  encapsulation: 2,
  changeDetection: 0
});
var MatOptgroup = _MatOptgroup;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatOptgroup, [{
    type: Component,
    args: [{
      selector: "mat-optgroup",
      exportAs: "matOptgroup",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "class": "mat-mdc-optgroup",
        "[attr.role]": '_inert ? null : "group"',
        "[attr.aria-disabled]": "_inert ? null : disabled.toString()",
        "[attr.aria-labelledby]": "_inert ? null : _labelId"
      },
      providers: [{
        provide: MAT_OPTGROUP,
        useExisting: MatOptgroup
      }],
      standalone: true,
      template: '<span\n  class="mat-mdc-optgroup-label"\n  role="presentation"\n  [class.mdc-list-item--disabled]="disabled"\n  [id]="_labelId">\n  <span class="mdc-list-item__primary-text">{{ label }} <ng-content></ng-content></span>\n</span>\n\n<ng-content select="mat-option, ng-container"></ng-content>\n',
      styles: [".mat-mdc-optgroup{color:var(--mat-optgroup-label-text-color);font-family:var(--mat-optgroup-label-text-font);line-height:var(--mat-optgroup-label-text-line-height);font-size:var(--mat-optgroup-label-text-size);letter-spacing:var(--mat-optgroup-label-text-tracking);font-weight:var(--mat-optgroup-label-text-weight)}.mat-mdc-optgroup-label{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:16px;padding-right:16px;min-height:48px}.mat-mdc-optgroup-label:focus{outline:none}[dir=rtl] .mat-mdc-optgroup-label,.mat-mdc-optgroup-label[dir=rtl]{padding-left:16px;padding-right:16px}.mat-mdc-optgroup-label.mdc-list-item--disabled{opacity:.38}.mat-mdc-optgroup-label .mdc-list-item__primary-text{font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;font-family:inherit;text-decoration:inherit;text-transform:inherit;white-space:normal}"]
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [MAT_OPTION_PARENT_COMPONENT]
    }, {
      type: Optional
    }]
  }], {
    label: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var _uniqueIdCounter = 0;
var MatOptionSelectionChange = class {
  constructor(source, isUserInput = false) {
    this.source = source;
    this.isUserInput = isUserInput;
  }
};
var _MatOption = class _MatOption {
  /** Whether the wrapping component is in multiple selection mode. */
  get multiple() {
    return this._parent && this._parent.multiple;
  }
  /** Whether or not the option is currently selected. */
  get selected() {
    return this._selected;
  }
  /** Whether the option is disabled. */
  get disabled() {
    return this.group && this.group.disabled || this._disabled;
  }
  set disabled(value) {
    this._disabled = value;
  }
  /** Whether ripples for the option are disabled. */
  get disableRipple() {
    return !!(this._parent && this._parent.disableRipple);
  }
  /** Whether to display checkmark for single-selection. */
  get hideSingleSelectionIndicator() {
    return !!(this._parent && this._parent.hideSingleSelectionIndicator);
  }
  constructor(_element, _changeDetectorRef, _parent, group) {
    this._element = _element;
    this._changeDetectorRef = _changeDetectorRef;
    this._parent = _parent;
    this.group = group;
    this._selected = false;
    this._active = false;
    this._disabled = false;
    this._mostRecentViewValue = "";
    this.id = `mat-option-${_uniqueIdCounter++}`;
    this.onSelectionChange = new EventEmitter();
    this._stateChanges = new Subject();
  }
  /**
   * Whether or not the option is currently active and ready to be selected.
   * An active option displays styles as if it is focused, but the
   * focus is actually retained somewhere else. This comes in handy
   * for components like autocomplete where focus must remain on the input.
   */
  get active() {
    return this._active;
  }
  /**
   * The displayed value of the option. It is necessary to show the selected option in the
   * select's trigger.
   */
  get viewValue() {
    return (this._text?.nativeElement.textContent || "").trim();
  }
  /** Selects the option. */
  select(emitEvent = true) {
    if (!this._selected) {
      this._selected = true;
      this._changeDetectorRef.markForCheck();
      if (emitEvent) {
        this._emitSelectionChangeEvent();
      }
    }
  }
  /** Deselects the option. */
  deselect(emitEvent = true) {
    if (this._selected) {
      this._selected = false;
      this._changeDetectorRef.markForCheck();
      if (emitEvent) {
        this._emitSelectionChangeEvent();
      }
    }
  }
  /** Sets focus onto this option. */
  focus(_origin, options) {
    const element = this._getHostElement();
    if (typeof element.focus === "function") {
      element.focus(options);
    }
  }
  /**
   * This method sets display styles on the option to make it appear
   * active. This is used by the ActiveDescendantKeyManager so key
   * events will display the proper options as active on arrow key events.
   */
  setActiveStyles() {
    if (!this._active) {
      this._active = true;
      this._changeDetectorRef.markForCheck();
    }
  }
  /**
   * This method removes display styles on the option that made it appear
   * active. This is used by the ActiveDescendantKeyManager so key
   * events will display the proper options as active on arrow key events.
   */
  setInactiveStyles() {
    if (this._active) {
      this._active = false;
      this._changeDetectorRef.markForCheck();
    }
  }
  /** Gets the label to be used when determining whether the option should be focused. */
  getLabel() {
    return this.viewValue;
  }
  /** Ensures the option is selected when activated from the keyboard. */
  _handleKeydown(event) {
    if ((event.keyCode === ENTER || event.keyCode === SPACE) && !hasModifierKey(event)) {
      this._selectViaInteraction();
      event.preventDefault();
    }
  }
  /**
   * `Selects the option while indicating the selection came from the user. Used to
   * determine if the select's view -> model callback should be invoked.`
   */
  _selectViaInteraction() {
    if (!this.disabled) {
      this._selected = this.multiple ? !this._selected : true;
      this._changeDetectorRef.markForCheck();
      this._emitSelectionChangeEvent(true);
    }
  }
  /** Returns the correct tabindex for the option depending on disabled state. */
  // This method is only used by `MatLegacyOption`. Keeping it here to avoid breaking the types.
  // That's because `MatLegacyOption` use `MatOption` type in a few places such as
  // `MatOptionSelectionChange`. It is safe to delete this when `MatLegacyOption` is deleted.
  _getTabIndex() {
    return this.disabled ? "-1" : "0";
  }
  /** Gets the host DOM element. */
  _getHostElement() {
    return this._element.nativeElement;
  }
  ngAfterViewChecked() {
    if (this._selected) {
      const viewValue = this.viewValue;
      if (viewValue !== this._mostRecentViewValue) {
        if (this._mostRecentViewValue) {
          this._stateChanges.next();
        }
        this._mostRecentViewValue = viewValue;
      }
    }
  }
  ngOnDestroy() {
    this._stateChanges.complete();
  }
  /** Emits the selection change event. */
  _emitSelectionChangeEvent(isUserInput = false) {
    this.onSelectionChange.emit(new MatOptionSelectionChange(this, isUserInput));
  }
};
_MatOption.\u0275fac = function MatOption_Factory(t) {
  return new (t || _MatOption)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(MAT_OPTION_PARENT_COMPONENT, 8), \u0275\u0275directiveInject(MAT_OPTGROUP, 8));
};
_MatOption.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _MatOption,
  selectors: [["mat-option"]],
  viewQuery: function MatOption_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c22, 7);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._text = _t.first);
    }
  },
  hostAttrs: ["role", "option", 1, "mat-mdc-option", "mdc-list-item"],
  hostVars: 11,
  hostBindings: function MatOption_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("click", function MatOption_click_HostBindingHandler() {
        return ctx._selectViaInteraction();
      })("keydown", function MatOption_keydown_HostBindingHandler($event) {
        return ctx._handleKeydown($event);
      });
    }
    if (rf & 2) {
      \u0275\u0275hostProperty("id", ctx.id);
      \u0275\u0275attribute("aria-selected", ctx.selected)("aria-disabled", ctx.disabled.toString());
      \u0275\u0275classProp("mdc-list-item--selected", ctx.selected)("mat-mdc-option-multiple", ctx.multiple)("mat-mdc-option-active", ctx.active)("mdc-list-item--disabled", ctx.disabled);
    }
  },
  inputs: {
    value: "value",
    id: "id",
    disabled: [InputFlags.HasDecoratorInputTransform, "disabled", "disabled", booleanAttribute]
  },
  outputs: {
    onSelectionChange: "onSelectionChange"
  },
  exportAs: ["matOption"],
  standalone: true,
  features: [\u0275\u0275InputTransformsFeature, \u0275\u0275StandaloneFeature],
  ngContentSelectors: _c42,
  decls: 8,
  vars: 5,
  consts: [["text", ""], ["aria-hidden", "true", 1, "mat-mdc-option-pseudo-checkbox", 3, "disabled", "state"], [1, "mdc-list-item__primary-text"], ["state", "checked", "aria-hidden", "true", "appearance", "minimal", 1, "mat-mdc-option-pseudo-checkbox", 3, "disabled"], [1, "cdk-visually-hidden"], ["aria-hidden", "true", "mat-ripple", "", 1, "mat-mdc-option-ripple", "mat-mdc-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled"]],
  template: function MatOption_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef(_c32);
      \u0275\u0275template(0, MatOption_Conditional_0_Template, 1, 2, "mat-pseudo-checkbox", 1);
      \u0275\u0275projection(1);
      \u0275\u0275elementStart(2, "span", 2, 0);
      \u0275\u0275projection(4, 1);
      \u0275\u0275elementEnd();
      \u0275\u0275template(5, MatOption_Conditional_5_Template, 1, 1, "mat-pseudo-checkbox", 3)(6, MatOption_Conditional_6_Template, 2, 1, "span", 4);
      \u0275\u0275element(7, "div", 5);
    }
    if (rf & 2) {
      \u0275\u0275conditional(0, ctx.multiple ? 0 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(5, !ctx.multiple && ctx.selected && !ctx.hideSingleSelectionIndicator ? 5 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(6, ctx.group && ctx.group._inert ? 6 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("matRippleTrigger", ctx._getHostElement())("matRippleDisabled", ctx.disabled || ctx.disableRipple);
    }
  },
  dependencies: [MatPseudoCheckbox, MatRipple],
  styles: ['.mat-mdc-option{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:16px;padding-right:16px;-webkit-user-select:none;user-select:none;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;cursor:pointer;-webkit-tap-highlight-color:rgba(0,0,0,0);color:var(--mat-option-label-text-color);font-family:var(--mat-option-label-text-font);line-height:var(--mat-option-label-text-line-height);font-size:var(--mat-option-label-text-size);letter-spacing:var(--mat-option-label-text-tracking);font-weight:var(--mat-option-label-text-weight);min-height:48px}.mat-mdc-option:focus{outline:none}[dir=rtl] .mat-mdc-option,.mat-mdc-option[dir=rtl]{padding-left:16px;padding-right:16px}.mat-mdc-option:hover:not(.mdc-list-item--disabled){background-color:var(--mat-option-hover-state-layer-color)}.mat-mdc-option:focus.mdc-list-item,.mat-mdc-option.mat-mdc-option-active.mdc-list-item{background-color:var(--mat-option-focus-state-layer-color)}.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled) .mdc-list-item__primary-text{color:var(--mat-option-selected-state-label-text-color)}.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-multiple){background-color:var(--mat-option-selected-state-layer-color)}.mat-mdc-option.mdc-list-item{align-items:center;background:rgba(0,0,0,0)}.mat-mdc-option.mdc-list-item--disabled{cursor:default;pointer-events:none}.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox,.mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text,.mat-mdc-option.mdc-list-item--disabled>mat-icon{opacity:.38}.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple){padding-left:32px}[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple){padding-left:16px;padding-right:32px}.mat-mdc-option .mat-icon,.mat-mdc-option .mat-pseudo-checkbox-full{margin-right:16px;flex-shrink:0}[dir=rtl] .mat-mdc-option .mat-icon,[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full{margin-right:0;margin-left:16px}.mat-mdc-option .mat-pseudo-checkbox-minimal{margin-left:16px;flex-shrink:0}[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal{margin-right:16px;margin-left:0}.mat-mdc-option .mat-mdc-option-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-mdc-option .mdc-list-item__primary-text{white-space:normal;font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;font-family:inherit;text-decoration:inherit;text-transform:inherit;margin-right:auto}[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text{margin-right:0;margin-left:auto}.cdk-high-contrast-active .mat-mdc-option.mdc-list-item--selected:not(.mat-mdc-option-multiple)::after{content:"";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}[dir=rtl] .cdk-high-contrast-active .mat-mdc-option.mdc-list-item--selected:not(.mat-mdc-option-multiple)::after{right:auto;left:16px}.mat-mdc-option-multiple{--mdc-list-list-item-selected-container-color:var(--mdc-list-list-item-container-color, transparent)}.mat-mdc-option-active .mat-mdc-focus-indicator::before{content:""}'],
  encapsulation: 2,
  changeDetection: 0
});
var MatOption = _MatOption;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatOption, [{
    type: Component,
    args: [{
      selector: "mat-option",
      exportAs: "matOption",
      host: {
        "role": "option",
        "[class.mdc-list-item--selected]": "selected",
        "[class.mat-mdc-option-multiple]": "multiple",
        "[class.mat-mdc-option-active]": "active",
        "[class.mdc-list-item--disabled]": "disabled",
        "[id]": "id",
        // Set aria-selected to false for non-selected items and true for selected items. Conform to
        // [WAI ARIA Listbox authoring practices guide](
        //  https://www.w3.org/WAI/ARIA/apg/patterns/listbox/), "If any options are selected, each
        // selected option has either aria-selected or aria-checked  set to true. All options that are
        // selectable but not selected have either aria-selected or aria-checked set to false." Align
        // aria-selected implementation of Chips and List components.
        //
        // Set `aria-selected="false"` on not-selected listbox options to fix VoiceOver announcing
        // every option as "selected" (#21491).
        "[attr.aria-selected]": "selected",
        "[attr.aria-disabled]": "disabled.toString()",
        "(click)": "_selectViaInteraction()",
        "(keydown)": "_handleKeydown($event)",
        "class": "mat-mdc-option mdc-list-item"
      },
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      imports: [MatPseudoCheckbox, MatRipple],
      template: `<!-- Set aria-hidden="true" to this DOM node and other decorative nodes in this file. This might
 be contributing to issue where sometimes VoiceOver focuses on a TextNode in the a11y tree instead
 of the Option node (#23202). Most assistive technology will generally ignore non-role,
 non-text-content elements. Adding aria-hidden seems to make VoiceOver behave more consistently. -->
@if (multiple) {
    <mat-pseudo-checkbox
        class="mat-mdc-option-pseudo-checkbox"
        [disabled]="disabled"
        [state]="selected ? 'checked' : 'unchecked'"
        aria-hidden="true"></mat-pseudo-checkbox>
}

<ng-content select="mat-icon"></ng-content>

<span class="mdc-list-item__primary-text" #text><ng-content></ng-content></span>

<!-- Render checkmark at the end for single-selection. -->
@if (!multiple && selected && !hideSingleSelectionIndicator) {
    <mat-pseudo-checkbox
        class="mat-mdc-option-pseudo-checkbox"
        [disabled]="disabled"
        state="checked"
        aria-hidden="true"
        appearance="minimal"></mat-pseudo-checkbox>
}

<!-- See a11y notes inside optgroup.ts for context behind this element. -->
@if (group && group._inert) {
    <span class="cdk-visually-hidden">({{ group.label }})</span>
}

<div class="mat-mdc-option-ripple mat-mdc-focus-indicator" aria-hidden="true" mat-ripple
     [matRippleTrigger]="_getHostElement()" [matRippleDisabled]="disabled || disableRipple">
</div>
`,
      styles: ['.mat-mdc-option{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:16px;padding-right:16px;-webkit-user-select:none;user-select:none;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;cursor:pointer;-webkit-tap-highlight-color:rgba(0,0,0,0);color:var(--mat-option-label-text-color);font-family:var(--mat-option-label-text-font);line-height:var(--mat-option-label-text-line-height);font-size:var(--mat-option-label-text-size);letter-spacing:var(--mat-option-label-text-tracking);font-weight:var(--mat-option-label-text-weight);min-height:48px}.mat-mdc-option:focus{outline:none}[dir=rtl] .mat-mdc-option,.mat-mdc-option[dir=rtl]{padding-left:16px;padding-right:16px}.mat-mdc-option:hover:not(.mdc-list-item--disabled){background-color:var(--mat-option-hover-state-layer-color)}.mat-mdc-option:focus.mdc-list-item,.mat-mdc-option.mat-mdc-option-active.mdc-list-item{background-color:var(--mat-option-focus-state-layer-color)}.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled) .mdc-list-item__primary-text{color:var(--mat-option-selected-state-label-text-color)}.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-multiple){background-color:var(--mat-option-selected-state-layer-color)}.mat-mdc-option.mdc-list-item{align-items:center;background:rgba(0,0,0,0)}.mat-mdc-option.mdc-list-item--disabled{cursor:default;pointer-events:none}.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox,.mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text,.mat-mdc-option.mdc-list-item--disabled>mat-icon{opacity:.38}.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple){padding-left:32px}[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple){padding-left:16px;padding-right:32px}.mat-mdc-option .mat-icon,.mat-mdc-option .mat-pseudo-checkbox-full{margin-right:16px;flex-shrink:0}[dir=rtl] .mat-mdc-option .mat-icon,[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full{margin-right:0;margin-left:16px}.mat-mdc-option .mat-pseudo-checkbox-minimal{margin-left:16px;flex-shrink:0}[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal{margin-right:16px;margin-left:0}.mat-mdc-option .mat-mdc-option-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-mdc-option .mdc-list-item__primary-text{white-space:normal;font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;font-family:inherit;text-decoration:inherit;text-transform:inherit;margin-right:auto}[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text{margin-right:0;margin-left:auto}.cdk-high-contrast-active .mat-mdc-option.mdc-list-item--selected:not(.mat-mdc-option-multiple)::after{content:"";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}[dir=rtl] .cdk-high-contrast-active .mat-mdc-option.mdc-list-item--selected:not(.mat-mdc-option-multiple)::after{right:auto;left:16px}.mat-mdc-option-multiple{--mdc-list-list-item-selected-container-color:var(--mdc-list-list-item-container-color, transparent)}.mat-mdc-option-active .mat-mdc-focus-indicator::before{content:""}']
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_OPTION_PARENT_COMPONENT]
    }]
  }, {
    type: MatOptgroup,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_OPTGROUP]
    }]
  }], {
    value: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onSelectionChange: [{
      type: Output
    }],
    _text: [{
      type: ViewChild,
      args: ["text", {
        static: true
      }]
    }]
  });
})();
var _MatOptionModule = class _MatOptionModule {
};
_MatOptionModule.\u0275fac = function MatOptionModule_Factory(t) {
  return new (t || _MatOptionModule)();
};
_MatOptionModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _MatOptionModule
});
_MatOptionModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [MatRippleModule, MatCommonModule, MatPseudoCheckboxModule]
});
var MatOptionModule = _MatOptionModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatOptionModule, [{
    type: NgModule,
    args: [{
      imports: [MatRippleModule, MatCommonModule, MatPseudoCheckboxModule, MatOption, MatOptgroup],
      exports: [MatOption, MatOptgroup]
    }]
  }], null, null);
})();
var eventListenerOptions = {
  capture: true
};
var rippleInteractionEvents = ["focus", "click", "mouseenter", "touchstart"];
var matRippleUninitialized = "mat-ripple-loader-uninitialized";
var matRippleClassName = "mat-ripple-loader-class-name";
var matRippleCentered = "mat-ripple-loader-centered";
var matRippleDisabled = "mat-ripple-loader-disabled";
var _MatRippleLoader = class _MatRippleLoader {
  constructor() {
    this._document = inject(DOCUMENT, {
      optional: true
    });
    this._animationMode = inject(ANIMATION_MODULE_TYPE, {
      optional: true
    });
    this._globalRippleOptions = inject(MAT_RIPPLE_GLOBAL_OPTIONS, {
      optional: true
    });
    this._platform = inject(Platform);
    this._ngZone = inject(NgZone);
    this._hosts = /* @__PURE__ */ new Map();
    this._onInteraction = (event) => {
      if (!(event.target instanceof HTMLElement)) {
        return;
      }
      const eventTarget = event.target;
      const element = eventTarget.closest(`[${matRippleUninitialized}]`);
      if (element) {
        this._createRipple(element);
      }
    };
    this._ngZone.runOutsideAngular(() => {
      for (const event of rippleInteractionEvents) {
        this._document?.addEventListener(event, this._onInteraction, eventListenerOptions);
      }
    });
  }
  ngOnDestroy() {
    const hosts = this._hosts.keys();
    for (const host of hosts) {
      this.destroyRipple(host);
    }
    for (const event of rippleInteractionEvents) {
      this._document?.removeEventListener(event, this._onInteraction, eventListenerOptions);
    }
  }
  /**
   * Configures the ripple that will be rendered by the ripple loader.
   *
   * Stores the given information about how the ripple should be configured on the host
   * element so that it can later be retrived & used when the ripple is actually created.
   */
  configureRipple(host, config) {
    host.setAttribute(matRippleUninitialized, "");
    if (config.className || !host.hasAttribute(matRippleClassName)) {
      host.setAttribute(matRippleClassName, config.className || "");
    }
    if (config.centered) {
      host.setAttribute(matRippleCentered, "");
    }
    if (config.disabled) {
      host.setAttribute(matRippleDisabled, "");
    }
  }
  /** Returns the ripple instance for the given host element. */
  getRipple(host) {
    const ripple = this._hosts.get(host);
    return ripple || this._createRipple(host);
  }
  /** Sets the disabled state on the ripple instance corresponding to the given host element. */
  setDisabled(host, disabled) {
    const ripple = this._hosts.get(host);
    if (ripple) {
      ripple.disabled = disabled;
      return;
    }
    if (disabled) {
      host.setAttribute(matRippleDisabled, "");
    } else {
      host.removeAttribute(matRippleDisabled);
    }
  }
  /** Creates a MatRipple and appends it to the given element. */
  _createRipple(host) {
    if (!this._document) {
      return;
    }
    const existingRipple = this._hosts.get(host);
    if (existingRipple) {
      return existingRipple;
    }
    host.querySelector(".mat-ripple")?.remove();
    const rippleEl = this._document.createElement("span");
    rippleEl.classList.add("mat-ripple", host.getAttribute(matRippleClassName));
    host.append(rippleEl);
    const ripple = new MatRipple(new ElementRef(rippleEl), this._ngZone, this._platform, this._globalRippleOptions ? this._globalRippleOptions : void 0, this._animationMode ? this._animationMode : void 0);
    ripple._isInitialized = true;
    ripple.trigger = host;
    ripple.centered = host.hasAttribute(matRippleCentered);
    ripple.disabled = host.hasAttribute(matRippleDisabled);
    this.attachRipple(host, ripple);
    return ripple;
  }
  attachRipple(host, ripple) {
    host.removeAttribute(matRippleUninitialized);
    this._hosts.set(host, ripple);
  }
  destroyRipple(host) {
    const ripple = this._hosts.get(host);
    if (ripple) {
      ripple.ngOnDestroy();
      this._hosts.delete(host);
    }
  }
};
_MatRippleLoader.\u0275fac = function MatRippleLoader_Factory(t) {
  return new (t || _MatRippleLoader)();
};
_MatRippleLoader.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _MatRippleLoader,
  factory: _MatRippleLoader.\u0275fac,
  providedIn: "root"
});
var MatRippleLoader = _MatRippleLoader;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatRippleLoader, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var __MatInternalFormField = class __MatInternalFormField {
};
__MatInternalFormField.\u0275fac = function _MatInternalFormField_Factory(t) {
  return new (t || __MatInternalFormField)();
};
__MatInternalFormField.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: __MatInternalFormField,
  selectors: [["div", "mat-internal-form-field", ""]],
  hostAttrs: [1, "mdc-form-field", "mat-internal-form-field"],
  hostVars: 2,
  hostBindings: function _MatInternalFormField_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("mdc-form-field--align-end", ctx.labelPosition === "before");
    }
  },
  inputs: {
    labelPosition: "labelPosition"
  },
  standalone: true,
  features: [\u0275\u0275StandaloneFeature],
  attrs: _c52,
  ngContentSelectors: _c62,
  decls: 1,
  vars: 0,
  template: function _MatInternalFormField_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  styles: [".mdc-form-field{display:inline-flex;align-items:center;vertical-align:middle}.mdc-form-field[hidden]{display:none}.mdc-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{margin-left:auto;margin-right:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{padding-left:0;padding-right:4px}.mdc-form-field--nowrap>label{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{margin-left:0;margin-right:auto}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{padding-left:4px;padding-right:0}.mdc-form-field--space-between{justify-content:space-between}.mdc-form-field--space-between>label{margin:0}[dir=rtl] .mdc-form-field--space-between>label,.mdc-form-field--space-between>label[dir=rtl]{margin:0}.mdc-form-field{font-family:var(--mdc-form-field-label-text-font);line-height:var(--mdc-form-field-label-text-line-height);font-size:var(--mdc-form-field-label-text-size);font-weight:var(--mdc-form-field-label-text-weight);letter-spacing:var(--mdc-form-field-label-text-tracking);color:var(--mdc-form-field-label-text-color)}.mat-internal-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased}"],
  encapsulation: 2,
  changeDetection: 0
});
var _MatInternalFormField = __MatInternalFormField;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(_MatInternalFormField, [{
    type: Component,
    args: [{
      selector: "div[mat-internal-form-field]",
      standalone: true,
      template: "<ng-content></ng-content>",
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "class": "mdc-form-field mat-internal-form-field",
        "[class.mdc-form-field--align-end]": 'labelPosition === "before"'
      },
      styles: [".mdc-form-field{display:inline-flex;align-items:center;vertical-align:middle}.mdc-form-field[hidden]{display:none}.mdc-form-field>label{margin-left:0;margin-right:auto;padding-left:4px;padding-right:0;order:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{margin-left:auto;margin-right:0}[dir=rtl] .mdc-form-field>label,.mdc-form-field>label[dir=rtl]{padding-left:0;padding-right:4px}.mdc-form-field--nowrap>label{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.mdc-form-field--align-end>label{margin-left:auto;margin-right:0;padding-left:0;padding-right:4px;order:-1}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{margin-left:0;margin-right:auto}[dir=rtl] .mdc-form-field--align-end>label,.mdc-form-field--align-end>label[dir=rtl]{padding-left:4px;padding-right:0}.mdc-form-field--space-between{justify-content:space-between}.mdc-form-field--space-between>label{margin:0}[dir=rtl] .mdc-form-field--space-between>label,.mdc-form-field--space-between>label[dir=rtl]{margin:0}.mdc-form-field{font-family:var(--mdc-form-field-label-text-font);line-height:var(--mdc-form-field-label-text-line-height);font-size:var(--mdc-form-field-label-text-size);font-weight:var(--mdc-form-field-label-text-weight);letter-spacing:var(--mdc-form-field-label-text-tracking);color:var(--mdc-form-field-label-text-color)}.mat-internal-form-field{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased}"]
    }]
  }], null, {
    labelPosition: [{
      type: Input,
      args: [{
        required: true
      }]
    }]
  });
})();

// node_modules/@angular/material/fesm2022/icon.mjs
var _c03 = ["*"];
var policy;
function getPolicy() {
  if (policy === void 0) {
    policy = null;
    if (typeof window !== "undefined") {
      const ttWindow = window;
      if (ttWindow.trustedTypes !== void 0) {
        policy = ttWindow.trustedTypes.createPolicy("angular#components", {
          createHTML: (s) => s
        });
      }
    }
  }
  return policy;
}
function trustedHTMLFromString(html) {
  return getPolicy()?.createHTML(html) || html;
}
function getMatIconNameNotFoundError(iconName) {
  return Error(`Unable to find icon with the name "${iconName}"`);
}
function getMatIconNoHttpProviderError() {
  return Error("Could not find HttpClient provider for use with Angular Material icons. Please include the HttpClientModule from @angular/common/http in your app imports.");
}
function getMatIconFailedToSanitizeUrlError(url) {
  return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${url}".`);
}
function getMatIconFailedToSanitizeLiteralError(literal) {
  return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${literal}".`);
}
var SvgIconConfig = class {
  constructor(url, svgText, options) {
    this.url = url;
    this.svgText = svgText;
    this.options = options;
  }
};
var _MatIconRegistry = class _MatIconRegistry {
  constructor(_httpClient, _sanitizer, document2, _errorHandler) {
    this._httpClient = _httpClient;
    this._sanitizer = _sanitizer;
    this._errorHandler = _errorHandler;
    this._svgIconConfigs = /* @__PURE__ */ new Map();
    this._iconSetConfigs = /* @__PURE__ */ new Map();
    this._cachedIconsByUrl = /* @__PURE__ */ new Map();
    this._inProgressUrlFetches = /* @__PURE__ */ new Map();
    this._fontCssClassesByAlias = /* @__PURE__ */ new Map();
    this._resolvers = [];
    this._defaultFontSetClass = ["material-icons", "mat-ligature-font"];
    this._document = document2;
  }
  /**
   * Registers an icon by URL in the default namespace.
   * @param iconName Name under which the icon should be registered.
   * @param url
   */
  addSvgIcon(iconName, url, options) {
    return this.addSvgIconInNamespace("", iconName, url, options);
  }
  /**
   * Registers an icon using an HTML string in the default namespace.
   * @param iconName Name under which the icon should be registered.
   * @param literal SVG source of the icon.
   */
  addSvgIconLiteral(iconName, literal, options) {
    return this.addSvgIconLiteralInNamespace("", iconName, literal, options);
  }
  /**
   * Registers an icon by URL in the specified namespace.
   * @param namespace Namespace in which the icon should be registered.
   * @param iconName Name under which the icon should be registered.
   * @param url
   */
  addSvgIconInNamespace(namespace, iconName, url, options) {
    return this._addSvgIconConfig(namespace, iconName, new SvgIconConfig(url, null, options));
  }
  /**
   * Registers an icon resolver function with the registry. The function will be invoked with the
   * name and namespace of an icon when the registry tries to resolve the URL from which to fetch
   * the icon. The resolver is expected to return a `SafeResourceUrl` that points to the icon,
   * an object with the icon URL and icon options, or `null` if the icon is not supported. Resolvers
   * will be invoked in the order in which they have been registered.
   * @param resolver Resolver function to be registered.
   */
  addSvgIconResolver(resolver) {
    this._resolvers.push(resolver);
    return this;
  }
  /**
   * Registers an icon using an HTML string in the specified namespace.
   * @param namespace Namespace in which the icon should be registered.
   * @param iconName Name under which the icon should be registered.
   * @param literal SVG source of the icon.
   */
  addSvgIconLiteralInNamespace(namespace, iconName, literal, options) {
    const cleanLiteral = this._sanitizer.sanitize(SecurityContext.HTML, literal);
    if (!cleanLiteral) {
      throw getMatIconFailedToSanitizeLiteralError(literal);
    }
    const trustedLiteral = trustedHTMLFromString(cleanLiteral);
    return this._addSvgIconConfig(namespace, iconName, new SvgIconConfig("", trustedLiteral, options));
  }
  /**
   * Registers an icon set by URL in the default namespace.
   * @param url
   */
  addSvgIconSet(url, options) {
    return this.addSvgIconSetInNamespace("", url, options);
  }
  /**
   * Registers an icon set using an HTML string in the default namespace.
   * @param literal SVG source of the icon set.
   */
  addSvgIconSetLiteral(literal, options) {
    return this.addSvgIconSetLiteralInNamespace("", literal, options);
  }
  /**
   * Registers an icon set by URL in the specified namespace.
   * @param namespace Namespace in which to register the icon set.
   * @param url
   */
  addSvgIconSetInNamespace(namespace, url, options) {
    return this._addSvgIconSetConfig(namespace, new SvgIconConfig(url, null, options));
  }
  /**
   * Registers an icon set using an HTML string in the specified namespace.
   * @param namespace Namespace in which to register the icon set.
   * @param literal SVG source of the icon set.
   */
  addSvgIconSetLiteralInNamespace(namespace, literal, options) {
    const cleanLiteral = this._sanitizer.sanitize(SecurityContext.HTML, literal);
    if (!cleanLiteral) {
      throw getMatIconFailedToSanitizeLiteralError(literal);
    }
    const trustedLiteral = trustedHTMLFromString(cleanLiteral);
    return this._addSvgIconSetConfig(namespace, new SvgIconConfig("", trustedLiteral, options));
  }
  /**
   * Defines an alias for CSS class names to be used for icon fonts. Creating an matIcon
   * component with the alias as the fontSet input will cause the class name to be applied
   * to the `<mat-icon>` element.
   *
   * If the registered font is a ligature font, then don't forget to also include the special
   * class `mat-ligature-font` to allow the usage via attribute. So register like this:
   *
   * ```ts
   * iconRegistry.registerFontClassAlias('f1', 'font1 mat-ligature-font');
   * ```
   *
   * And use like this:
   *
   * ```html
   * <mat-icon fontSet="f1" fontIcon="home"></mat-icon>
   * ```
   *
   * @param alias Alias for the font.
   * @param classNames Class names override to be used instead of the alias.
   */
  registerFontClassAlias(alias, classNames = alias) {
    this._fontCssClassesByAlias.set(alias, classNames);
    return this;
  }
  /**
   * Returns the CSS class name associated with the alias by a previous call to
   * registerFontClassAlias. If no CSS class has been associated, returns the alias unmodified.
   */
  classNameForFontAlias(alias) {
    return this._fontCssClassesByAlias.get(alias) || alias;
  }
  /**
   * Sets the CSS classes to be used for icon fonts when an `<mat-icon>` component does not
   * have a fontSet input value, and is not loading an icon by name or URL.
   */
  setDefaultFontSetClass(...classNames) {
    this._defaultFontSetClass = classNames;
    return this;
  }
  /**
   * Returns the CSS classes to be used for icon fonts when an `<mat-icon>` component does not
   * have a fontSet input value, and is not loading an icon by name or URL.
   */
  getDefaultFontSetClass() {
    return this._defaultFontSetClass;
  }
  /**
   * Returns an Observable that produces the icon (as an `<svg>` DOM element) from the given URL.
   * The response from the URL may be cached so this will not always cause an HTTP request, but
   * the produced element will always be a new copy of the originally fetched icon. (That is,
   * it will not contain any modifications made to elements previously returned).
   *
   * @param safeUrl URL from which to fetch the SVG icon.
   */
  getSvgIconFromUrl(safeUrl) {
    const url = this._sanitizer.sanitize(SecurityContext.RESOURCE_URL, safeUrl);
    if (!url) {
      throw getMatIconFailedToSanitizeUrlError(safeUrl);
    }
    const cachedIcon = this._cachedIconsByUrl.get(url);
    if (cachedIcon) {
      return of(cloneSvg(cachedIcon));
    }
    return this._loadSvgIconFromConfig(new SvgIconConfig(safeUrl, null)).pipe(tap((svg) => this._cachedIconsByUrl.set(url, svg)), map((svg) => cloneSvg(svg)));
  }
  /**
   * Returns an Observable that produces the icon (as an `<svg>` DOM element) with the given name
   * and namespace. The icon must have been previously registered with addIcon or addIconSet;
   * if not, the Observable will throw an error.
   *
   * @param name Name of the icon to be retrieved.
   * @param namespace Namespace in which to look for the icon.
   */
  getNamedSvgIcon(name, namespace = "") {
    const key = iconKey(namespace, name);
    let config = this._svgIconConfigs.get(key);
    if (config) {
      return this._getSvgFromConfig(config);
    }
    config = this._getIconConfigFromResolvers(namespace, name);
    if (config) {
      this._svgIconConfigs.set(key, config);
      return this._getSvgFromConfig(config);
    }
    const iconSetConfigs = this._iconSetConfigs.get(namespace);
    if (iconSetConfigs) {
      return this._getSvgFromIconSetConfigs(name, iconSetConfigs);
    }
    return throwError(getMatIconNameNotFoundError(key));
  }
  ngOnDestroy() {
    this._resolvers = [];
    this._svgIconConfigs.clear();
    this._iconSetConfigs.clear();
    this._cachedIconsByUrl.clear();
  }
  /**
   * Returns the cached icon for a SvgIconConfig if available, or fetches it from its URL if not.
   */
  _getSvgFromConfig(config) {
    if (config.svgText) {
      return of(cloneSvg(this._svgElementFromConfig(config)));
    } else {
      return this._loadSvgIconFromConfig(config).pipe(map((svg) => cloneSvg(svg)));
    }
  }
  /**
   * Attempts to find an icon with the specified name in any of the SVG icon sets.
   * First searches the available cached icons for a nested element with a matching name, and
   * if found copies the element to a new `<svg>` element. If not found, fetches all icon sets
   * that have not been cached, and searches again after all fetches are completed.
   * The returned Observable produces the SVG element if possible, and throws
   * an error if no icon with the specified name can be found.
   */
  _getSvgFromIconSetConfigs(name, iconSetConfigs) {
    const namedIcon = this._extractIconWithNameFromAnySet(name, iconSetConfigs);
    if (namedIcon) {
      return of(namedIcon);
    }
    const iconSetFetchRequests = iconSetConfigs.filter((iconSetConfig) => !iconSetConfig.svgText).map((iconSetConfig) => {
      return this._loadSvgIconSetFromConfig(iconSetConfig).pipe(catchError((err) => {
        const url = this._sanitizer.sanitize(SecurityContext.RESOURCE_URL, iconSetConfig.url);
        const errorMessage = `Loading icon set URL: ${url} failed: ${err.message}`;
        this._errorHandler.handleError(new Error(errorMessage));
        return of(null);
      }));
    });
    return forkJoin(iconSetFetchRequests).pipe(map(() => {
      const foundIcon = this._extractIconWithNameFromAnySet(name, iconSetConfigs);
      if (!foundIcon) {
        throw getMatIconNameNotFoundError(name);
      }
      return foundIcon;
    }));
  }
  /**
   * Searches the cached SVG elements for the given icon sets for a nested icon element whose "id"
   * tag matches the specified name. If found, copies the nested element to a new SVG element and
   * returns it. Returns null if no matching element is found.
   */
  _extractIconWithNameFromAnySet(iconName, iconSetConfigs) {
    for (let i = iconSetConfigs.length - 1; i >= 0; i--) {
      const config = iconSetConfigs[i];
      if (config.svgText && config.svgText.toString().indexOf(iconName) > -1) {
        const svg = this._svgElementFromConfig(config);
        const foundIcon = this._extractSvgIconFromSet(svg, iconName, config.options);
        if (foundIcon) {
          return foundIcon;
        }
      }
    }
    return null;
  }
  /**
   * Loads the content of the icon URL specified in the SvgIconConfig and creates an SVG element
   * from it.
   */
  _loadSvgIconFromConfig(config) {
    return this._fetchIcon(config).pipe(tap((svgText) => config.svgText = svgText), map(() => this._svgElementFromConfig(config)));
  }
  /**
   * Loads the content of the icon set URL specified in the
   * SvgIconConfig and attaches it to the config.
   */
  _loadSvgIconSetFromConfig(config) {
    if (config.svgText) {
      return of(null);
    }
    return this._fetchIcon(config).pipe(tap((svgText) => config.svgText = svgText));
  }
  /**
   * Searches the cached element of the given SvgIconConfig for a nested icon element whose "id"
   * tag matches the specified name. If found, copies the nested element to a new SVG element and
   * returns it. Returns null if no matching element is found.
   */
  _extractSvgIconFromSet(iconSet, iconName, options) {
    const iconSource = iconSet.querySelector(`[id="${iconName}"]`);
    if (!iconSource) {
      return null;
    }
    const iconElement = iconSource.cloneNode(true);
    iconElement.removeAttribute("id");
    if (iconElement.nodeName.toLowerCase() === "svg") {
      return this._setSvgAttributes(iconElement, options);
    }
    if (iconElement.nodeName.toLowerCase() === "symbol") {
      return this._setSvgAttributes(this._toSvgElement(iconElement), options);
    }
    const svg = this._svgElementFromString(trustedHTMLFromString("<svg></svg>"));
    svg.appendChild(iconElement);
    return this._setSvgAttributes(svg, options);
  }
  /**
   * Creates a DOM element from the given SVG string.
   */
  _svgElementFromString(str) {
    const div = this._document.createElement("DIV");
    div.innerHTML = str;
    const svg = div.querySelector("svg");
    if (!svg) {
      throw Error("<svg> tag not found");
    }
    return svg;
  }
  /**
   * Converts an element into an SVG node by cloning all of its children.
   */
  _toSvgElement(element) {
    const svg = this._svgElementFromString(trustedHTMLFromString("<svg></svg>"));
    const attributes = element.attributes;
    for (let i = 0; i < attributes.length; i++) {
      const {
        name,
        value
      } = attributes[i];
      if (name !== "id") {
        svg.setAttribute(name, value);
      }
    }
    for (let i = 0; i < element.childNodes.length; i++) {
      if (element.childNodes[i].nodeType === this._document.ELEMENT_NODE) {
        svg.appendChild(element.childNodes[i].cloneNode(true));
      }
    }
    return svg;
  }
  /**
   * Sets the default attributes for an SVG element to be used as an icon.
   */
  _setSvgAttributes(svg, options) {
    svg.setAttribute("fit", "");
    svg.setAttribute("height", "100%");
    svg.setAttribute("width", "100%");
    svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
    svg.setAttribute("focusable", "false");
    if (options && options.viewBox) {
      svg.setAttribute("viewBox", options.viewBox);
    }
    return svg;
  }
  /**
   * Returns an Observable which produces the string contents of the given icon. Results may be
   * cached, so future calls with the same URL may not cause another HTTP request.
   */
  _fetchIcon(iconConfig) {
    const {
      url: safeUrl,
      options
    } = iconConfig;
    const withCredentials = options?.withCredentials ?? false;
    if (!this._httpClient) {
      throw getMatIconNoHttpProviderError();
    }
    if (safeUrl == null) {
      throw Error(`Cannot fetch icon from URL "${safeUrl}".`);
    }
    const url = this._sanitizer.sanitize(SecurityContext.RESOURCE_URL, safeUrl);
    if (!url) {
      throw getMatIconFailedToSanitizeUrlError(safeUrl);
    }
    const inProgressFetch = this._inProgressUrlFetches.get(url);
    if (inProgressFetch) {
      return inProgressFetch;
    }
    const req = this._httpClient.get(url, {
      responseType: "text",
      withCredentials
    }).pipe(map((svg) => {
      return trustedHTMLFromString(svg);
    }), finalize(() => this._inProgressUrlFetches.delete(url)), share());
    this._inProgressUrlFetches.set(url, req);
    return req;
  }
  /**
   * Registers an icon config by name in the specified namespace.
   * @param namespace Namespace in which to register the icon config.
   * @param iconName Name under which to register the config.
   * @param config Config to be registered.
   */
  _addSvgIconConfig(namespace, iconName, config) {
    this._svgIconConfigs.set(iconKey(namespace, iconName), config);
    return this;
  }
  /**
   * Registers an icon set config in the specified namespace.
   * @param namespace Namespace in which to register the icon config.
   * @param config Config to be registered.
   */
  _addSvgIconSetConfig(namespace, config) {
    const configNamespace = this._iconSetConfigs.get(namespace);
    if (configNamespace) {
      configNamespace.push(config);
    } else {
      this._iconSetConfigs.set(namespace, [config]);
    }
    return this;
  }
  /** Parses a config's text into an SVG element. */
  _svgElementFromConfig(config) {
    if (!config.svgElement) {
      const svg = this._svgElementFromString(config.svgText);
      this._setSvgAttributes(svg, config.options);
      config.svgElement = svg;
    }
    return config.svgElement;
  }
  /** Tries to create an icon config through the registered resolver functions. */
  _getIconConfigFromResolvers(namespace, name) {
    for (let i = 0; i < this._resolvers.length; i++) {
      const result = this._resolvers[i](name, namespace);
      if (result) {
        return isSafeUrlWithOptions(result) ? new SvgIconConfig(result.url, null, result.options) : new SvgIconConfig(result, null);
      }
    }
    return void 0;
  }
};
_MatIconRegistry.\u0275fac = function MatIconRegistry_Factory(t) {
  return new (t || _MatIconRegistry)(\u0275\u0275inject(HttpClient, 8), \u0275\u0275inject(DomSanitizer), \u0275\u0275inject(DOCUMENT, 8), \u0275\u0275inject(ErrorHandler));
};
_MatIconRegistry.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
  token: _MatIconRegistry,
  factory: _MatIconRegistry.\u0275fac,
  providedIn: "root"
});
var MatIconRegistry = _MatIconRegistry;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatIconRegistry, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{
    type: HttpClient,
    decorators: [{
      type: Optional
    }]
  }, {
    type: DomSanitizer
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [DOCUMENT]
    }]
  }, {
    type: ErrorHandler
  }], null);
})();
function ICON_REGISTRY_PROVIDER_FACTORY(parentRegistry, httpClient, sanitizer, errorHandler, document2) {
  return parentRegistry || new MatIconRegistry(httpClient, sanitizer, document2, errorHandler);
}
var ICON_REGISTRY_PROVIDER = {
  // If there is already an MatIconRegistry available, use that. Otherwise, provide a new one.
  provide: MatIconRegistry,
  deps: [[new Optional(), new SkipSelf(), MatIconRegistry], [new Optional(), HttpClient], DomSanitizer, ErrorHandler, [new Optional(), DOCUMENT]],
  useFactory: ICON_REGISTRY_PROVIDER_FACTORY
};
function cloneSvg(svg) {
  return svg.cloneNode(true);
}
function iconKey(namespace, name) {
  return namespace + ":" + name;
}
function isSafeUrlWithOptions(value) {
  return !!(value.url && value.options);
}
var MAT_ICON_DEFAULT_OPTIONS = new InjectionToken("MAT_ICON_DEFAULT_OPTIONS");
var MAT_ICON_LOCATION = new InjectionToken("mat-icon-location", {
  providedIn: "root",
  factory: MAT_ICON_LOCATION_FACTORY
});
function MAT_ICON_LOCATION_FACTORY() {
  const _document = inject(DOCUMENT);
  const _location = _document ? _document.location : null;
  return {
    // Note that this needs to be a function, rather than a property, because Angular
    // will only resolve it once, but we want the current path on each call.
    getPathname: () => _location ? _location.pathname + _location.search : ""
  };
}
var funcIriAttributes = ["clip-path", "color-profile", "src", "cursor", "fill", "filter", "marker", "marker-start", "marker-mid", "marker-end", "mask", "stroke"];
var funcIriAttributeSelector = funcIriAttributes.map((attr) => `[${attr}]`).join(", ");
var funcIriPattern = /^url\(['"]?#(.*?)['"]?\)$/;
var _MatIcon = class _MatIcon {
  /** Theme palette color of the icon. */
  get color() {
    return this._color || this._defaultColor;
  }
  set color(value) {
    this._color = value;
  }
  /** Name of the icon in the SVG icon set. */
  get svgIcon() {
    return this._svgIcon;
  }
  set svgIcon(value) {
    if (value !== this._svgIcon) {
      if (value) {
        this._updateSvgIcon(value);
      } else if (this._svgIcon) {
        this._clearSvgElement();
      }
      this._svgIcon = value;
    }
  }
  /** Font set that the icon is a part of. */
  get fontSet() {
    return this._fontSet;
  }
  set fontSet(value) {
    const newValue = this._cleanupFontValue(value);
    if (newValue !== this._fontSet) {
      this._fontSet = newValue;
      this._updateFontIconClasses();
    }
  }
  /** Name of an icon within a font set. */
  get fontIcon() {
    return this._fontIcon;
  }
  set fontIcon(value) {
    const newValue = this._cleanupFontValue(value);
    if (newValue !== this._fontIcon) {
      this._fontIcon = newValue;
      this._updateFontIconClasses();
    }
  }
  constructor(_elementRef, _iconRegistry, ariaHidden, _location, _errorHandler, defaults) {
    this._elementRef = _elementRef;
    this._iconRegistry = _iconRegistry;
    this._location = _location;
    this._errorHandler = _errorHandler;
    this.inline = false;
    this._previousFontSetClass = [];
    this._currentIconFetch = Subscription.EMPTY;
    if (defaults) {
      if (defaults.color) {
        this.color = this._defaultColor = defaults.color;
      }
      if (defaults.fontSet) {
        this.fontSet = defaults.fontSet;
      }
    }
    if (!ariaHidden) {
      _elementRef.nativeElement.setAttribute("aria-hidden", "true");
    }
  }
  /**
   * Splits an svgIcon binding value into its icon set and icon name components.
   * Returns a 2-element array of [(icon set), (icon name)].
   * The separator for the two fields is ':'. If there is no separator, an empty
   * string is returned for the icon set and the entire value is returned for
   * the icon name. If the argument is falsy, returns an array of two empty strings.
   * Throws an error if the name contains two or more ':' separators.
   * Examples:
   *   `'social:cake' -> ['social', 'cake']
   *   'penguin' -> ['', 'penguin']
   *   null -> ['', '']
   *   'a:b:c' -> (throws Error)`
   */
  _splitIconName(iconName) {
    if (!iconName) {
      return ["", ""];
    }
    const parts = iconName.split(":");
    switch (parts.length) {
      case 1:
        return ["", parts[0]];
      case 2:
        return parts;
      default:
        throw Error(`Invalid icon name: "${iconName}"`);
    }
  }
  ngOnInit() {
    this._updateFontIconClasses();
  }
  ngAfterViewChecked() {
    const cachedElements = this._elementsWithExternalReferences;
    if (cachedElements && cachedElements.size) {
      const newPath = this._location.getPathname();
      if (newPath !== this._previousPath) {
        this._previousPath = newPath;
        this._prependPathToReferences(newPath);
      }
    }
  }
  ngOnDestroy() {
    this._currentIconFetch.unsubscribe();
    if (this._elementsWithExternalReferences) {
      this._elementsWithExternalReferences.clear();
    }
  }
  _usingFontIcon() {
    return !this.svgIcon;
  }
  _setSvgElement(svg) {
    this._clearSvgElement();
    const path = this._location.getPathname();
    this._previousPath = path;
    this._cacheChildrenWithExternalReferences(svg);
    this._prependPathToReferences(path);
    this._elementRef.nativeElement.appendChild(svg);
  }
  _clearSvgElement() {
    const layoutElement = this._elementRef.nativeElement;
    let childCount = layoutElement.childNodes.length;
    if (this._elementsWithExternalReferences) {
      this._elementsWithExternalReferences.clear();
    }
    while (childCount--) {
      const child = layoutElement.childNodes[childCount];
      if (child.nodeType !== 1 || child.nodeName.toLowerCase() === "svg") {
        child.remove();
      }
    }
  }
  _updateFontIconClasses() {
    if (!this._usingFontIcon()) {
      return;
    }
    const elem = this._elementRef.nativeElement;
    const fontSetClasses = (this.fontSet ? this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/) : this._iconRegistry.getDefaultFontSetClass()).filter((className) => className.length > 0);
    this._previousFontSetClass.forEach((className) => elem.classList.remove(className));
    fontSetClasses.forEach((className) => elem.classList.add(className));
    this._previousFontSetClass = fontSetClasses;
    if (this.fontIcon !== this._previousFontIconClass && !fontSetClasses.includes("mat-ligature-font")) {
      if (this._previousFontIconClass) {
        elem.classList.remove(this._previousFontIconClass);
      }
      if (this.fontIcon) {
        elem.classList.add(this.fontIcon);
      }
      this._previousFontIconClass = this.fontIcon;
    }
  }
  /**
   * Cleans up a value to be used as a fontIcon or fontSet.
   * Since the value ends up being assigned as a CSS class, we
   * have to trim the value and omit space-separated values.
   */
  _cleanupFontValue(value) {
    return typeof value === "string" ? value.trim().split(" ")[0] : value;
  }
  /**
   * Prepends the current path to all elements that have an attribute pointing to a `FuncIRI`
   * reference. This is required because WebKit browsers require references to be prefixed with
   * the current path, if the page has a `base` tag.
   */
  _prependPathToReferences(path) {
    const elements = this._elementsWithExternalReferences;
    if (elements) {
      elements.forEach((attrs, element) => {
        attrs.forEach((attr) => {
          element.setAttribute(attr.name, `url('${path}#${attr.value}')`);
        });
      });
    }
  }
  /**
   * Caches the children of an SVG element that have `url()`
   * references that we need to prefix with the current path.
   */
  _cacheChildrenWithExternalReferences(element) {
    const elementsWithFuncIri = element.querySelectorAll(funcIriAttributeSelector);
    const elements = this._elementsWithExternalReferences = this._elementsWithExternalReferences || /* @__PURE__ */ new Map();
    for (let i = 0; i < elementsWithFuncIri.length; i++) {
      funcIriAttributes.forEach((attr) => {
        const elementWithReference = elementsWithFuncIri[i];
        const value = elementWithReference.getAttribute(attr);
        const match = value ? value.match(funcIriPattern) : null;
        if (match) {
          let attributes = elements.get(elementWithReference);
          if (!attributes) {
            attributes = [];
            elements.set(elementWithReference, attributes);
          }
          attributes.push({
            name: attr,
            value: match[1]
          });
        }
      });
    }
  }
  /** Sets a new SVG icon with a particular name. */
  _updateSvgIcon(rawName) {
    this._svgNamespace = null;
    this._svgName = null;
    this._currentIconFetch.unsubscribe();
    if (rawName) {
      const [namespace, iconName] = this._splitIconName(rawName);
      if (namespace) {
        this._svgNamespace = namespace;
      }
      if (iconName) {
        this._svgName = iconName;
      }
      this._currentIconFetch = this._iconRegistry.getNamedSvgIcon(iconName, namespace).pipe(take(1)).subscribe((svg) => this._setSvgElement(svg), (err) => {
        const errorMessage = `Error retrieving icon ${namespace}:${iconName}! ${err.message}`;
        this._errorHandler.handleError(new Error(errorMessage));
      });
    }
  }
};
_MatIcon.\u0275fac = function MatIcon_Factory(t) {
  return new (t || _MatIcon)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(MatIconRegistry), \u0275\u0275injectAttribute("aria-hidden"), \u0275\u0275directiveInject(MAT_ICON_LOCATION), \u0275\u0275directiveInject(ErrorHandler), \u0275\u0275directiveInject(MAT_ICON_DEFAULT_OPTIONS, 8));
};
_MatIcon.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
  type: _MatIcon,
  selectors: [["mat-icon"]],
  hostAttrs: ["role", "img", 1, "mat-icon", "notranslate"],
  hostVars: 10,
  hostBindings: function MatIcon_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275attribute("data-mat-icon-type", ctx._usingFontIcon() ? "font" : "svg")("data-mat-icon-name", ctx._svgName || ctx.fontIcon)("data-mat-icon-namespace", ctx._svgNamespace || ctx.fontSet)("fontIcon", ctx._usingFontIcon() ? ctx.fontIcon : null);
      \u0275\u0275classMap(ctx.color ? "mat-" + ctx.color : "");
      \u0275\u0275classProp("mat-icon-inline", ctx.inline)("mat-icon-no-color", ctx.color !== "primary" && ctx.color !== "accent" && ctx.color !== "warn");
    }
  },
  inputs: {
    color: "color",
    inline: [InputFlags.HasDecoratorInputTransform, "inline", "inline", booleanAttribute],
    svgIcon: "svgIcon",
    fontSet: "fontSet",
    fontIcon: "fontIcon"
  },
  exportAs: ["matIcon"],
  standalone: true,
  features: [\u0275\u0275InputTransformsFeature, \u0275\u0275StandaloneFeature],
  ngContentSelectors: _c03,
  decls: 1,
  vars: 0,
  template: function MatIcon_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275projectionDef();
      \u0275\u0275projection(0);
    }
  },
  styles: ["mat-icon,mat-icon.mat-primary,mat-icon.mat-accent,mat-icon.mat-warn{color:var(--mat-icon-color)}.mat-icon{-webkit-user-select:none;user-select:none;background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px;overflow:hidden}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}.mat-icon.mat-ligature-font[fontIcon]::before{content:attr(fontIcon)}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}"],
  encapsulation: 2,
  changeDetection: 0
});
var MatIcon = _MatIcon;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatIcon, [{
    type: Component,
    args: [{
      template: "<ng-content></ng-content>",
      selector: "mat-icon",
      exportAs: "matIcon",
      host: {
        "role": "img",
        "class": "mat-icon notranslate",
        "[class]": 'color ? "mat-" + color : ""',
        "[attr.data-mat-icon-type]": '_usingFontIcon() ? "font" : "svg"',
        "[attr.data-mat-icon-name]": "_svgName || fontIcon",
        "[attr.data-mat-icon-namespace]": "_svgNamespace || fontSet",
        "[attr.fontIcon]": "_usingFontIcon() ? fontIcon : null",
        "[class.mat-icon-inline]": "inline",
        "[class.mat-icon-no-color]": 'color !== "primary" && color !== "accent" && color !== "warn"'
      },
      encapsulation: ViewEncapsulation$1.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      standalone: true,
      styles: ["mat-icon,mat-icon.mat-primary,mat-icon.mat-accent,mat-icon.mat-warn{color:var(--mat-icon-color)}.mat-icon{-webkit-user-select:none;user-select:none;background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px;overflow:hidden}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}.mat-icon.mat-ligature-font[fontIcon]::before{content:attr(fontIcon)}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}"]
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: MatIconRegistry
  }, {
    type: void 0,
    decorators: [{
      type: Attribute,
      args: ["aria-hidden"]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [MAT_ICON_LOCATION]
    }]
  }, {
    type: ErrorHandler
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_ICON_DEFAULT_OPTIONS]
    }]
  }], {
    color: [{
      type: Input
    }],
    inline: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    svgIcon: [{
      type: Input
    }],
    fontSet: [{
      type: Input
    }],
    fontIcon: [{
      type: Input
    }]
  });
})();
var _MatIconModule = class _MatIconModule {
};
_MatIconModule.\u0275fac = function MatIconModule_Factory(t) {
  return new (t || _MatIconModule)();
};
_MatIconModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
  type: _MatIconModule
});
_MatIconModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
  imports: [MatCommonModule, MatCommonModule]
});
var MatIconModule = _MatIconModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatIconModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, MatIcon],
      exports: [MatIcon, MatCommonModule]
    }]
  }], null, null);
})();

// src/app/app.module.ts
var _AppModule = class _AppModule {
};
_AppModule.\u0275fac = function AppModule_Factory(t) {
  return new (t || _AppModule)();
};
_AppModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AppModule, bootstrap: [AppComponent] });
_AppModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ providers: [
  provideClientHydration(),
  provideAnimationsAsync()
], imports: [
  BrowserModule,
  AppRoutingModule,
  MatIconModule,
  CarouselModule
] });
var AppModule = _AppModule;

// src/app/app.module.server.ts
var _AppServerModule = class _AppServerModule {
};
_AppServerModule.\u0275fac = function AppServerModule_Factory(t) {
  return new (t || _AppServerModule)();
};
_AppServerModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AppServerModule, bootstrap: [AppComponent] });
_AppServerModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  AppModule,
  ServerModule
] });
var AppServerModule = _AppServerModule;

export {
  AppServerModule
};
/*! Bundled license information:

@angular/platform-browser/fesm2022/animations/async.mjs:
  (**
   * @license Angular v17.3.12
   * (c) 2010-2024 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=chunk-3JA4MTMK.mjs.map
