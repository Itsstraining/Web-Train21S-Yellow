(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Pages-intro-intro-module"],{

/***/ "F7/f":
/*!*****************************************************!*\
  !*** ./src/app/Pages/intro/intro-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: IntroRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroRoutingModule", function() { return IntroRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _intro_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./intro.component */ "qfWl");





const routes = [{ path: '', component: _intro_component__WEBPACK_IMPORTED_MODULE_2__["IntroComponent"] }];
class IntroRoutingModule {
}
IntroRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: IntroRoutingModule });
IntroRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function IntroRoutingModule_Factory(t) { return new (t || IntroRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](IntroRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IntroRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "oMpX":
/*!*********************************************!*\
  !*** ./src/app/Pages/intro/intro.module.ts ***!
  \*********************************************/
/*! exports provided: IntroModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroModule", function() { return IntroModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _intro_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./intro-routing.module */ "F7/f");
/* harmony import */ var _intro_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./intro.component */ "qfWl");





class IntroModule {
}
IntroModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: IntroModule });
IntroModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function IntroModule_Factory(t) { return new (t || IntroModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _intro_routing_module__WEBPACK_IMPORTED_MODULE_2__["IntroRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](IntroModule, { declarations: [_intro_component__WEBPACK_IMPORTED_MODULE_3__["IntroComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _intro_routing_module__WEBPACK_IMPORTED_MODULE_2__["IntroRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IntroModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_intro_component__WEBPACK_IMPORTED_MODULE_3__["IntroComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _intro_routing_module__WEBPACK_IMPORTED_MODULE_2__["IntroRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "qfWl":
/*!************************************************!*\
  !*** ./src/app/Pages/intro/intro.component.ts ***!
  \************************************************/
/*! exports provided: IntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroComponent", function() { return IntroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class IntroComponent {
    constructor() { }
    ngOnInit() {
    }
}
IntroComponent.ɵfac = function IntroComponent_Factory(t) { return new (t || IntroComponent)(); };
IntroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IntroComponent, selectors: [["app-intro"]], decls: 11, vars: 1, consts: [[1, "intro", 2, "background", "url('../../../assets/img/banner.jpg')"], [1, "row"], [1, "column"], ["id", "a-1", 3, "routerLink"], ["id", "a-2"], ["id", "a-3"]], template: function IntroComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "CelHub.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Excel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Word");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "PowerPoint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/Home");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".intro[_ngcontent-%COMP%] {\n  height: 700px;\n  border-radius: 10px;\n  opacity: 80%;\n  display: flex;\n  justify-content: center;\n}\n\n.row[_ngcontent-%COMP%] {\n  content: \"\";\n  display: flex;\n  flex-direction: row;\n}\n\n.intro[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 110pt;\n}\n\n.column[_ngcontent-%COMP%] {\n  content: \"\";\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n#a-1[_ngcontent-%COMP%] {\n  background-color: #4FA16B;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-decoration: none;\n  color: black;\n  margin-bottom: 10px;\n  width: 40%;\n  height: 7%;\n  border-radius: 10px;\n  border-width: 1px;\n  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);\n}\n\n#a-1[_ngcontent-%COMP%]:hover {\n  background-color: white;\n  color: black;\n  box-shadow: 0px 4px 8px 0px black;\n}\n\n#a-2[_ngcontent-%COMP%] {\n  background-color: #437ACD;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-decoration: none;\n  color: black;\n  margin-bottom: 10px;\n  width: 40%;\n  height: 7%;\n  border-radius: 10px;\n  border-width: 1px;\n  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);\n}\n\n#a-2[_ngcontent-%COMP%]:hover {\n  background-color: white;\n  color: black;\n  box-shadow: 0px 4px 8px 0px black;\n}\n\n#a-3[_ngcontent-%COMP%] {\n  background-color: #C45A3B;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-decoration: none;\n  color: black;\n  margin-bottom: 10px;\n  width: 40%;\n  height: 7%;\n  border-radius: 10px;\n  border-width: 1px;\n  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.2);\n}\n\n#a-3[_ngcontent-%COMP%]:hover {\n  background-color: white;\n  color: black;\n  box-shadow: 0px 4px 8px 0px black;\n}\n\n\n\n@media screen and (max-width: 600px) {\n  .column[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUGFnZXMvaW50cm8vaW50cm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBQUo7O0FBR0E7RUFFSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBREo7O0FBS0E7RUFFSSxnQkFBQTtBQUhKOztBQU1BO0VBRUksV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFKSjs7QUFPQTtFQUVJLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsOENBQUE7QUFMSjs7QUFRQTtFQUVJLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGlDQUFBO0FBTko7O0FBU0E7RUFFSSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLDhDQUFBO0FBUEo7O0FBVUE7RUFFSSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxpQ0FBQTtBQVJKOztBQVdBO0VBRUkseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSw4Q0FBQTtBQVRKOztBQVlBO0VBRUksdUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUNBQUE7QUFWSjs7QUFnQkEseUdBQUE7O0FBQ0E7RUFDSTtJQUNFLFdBQUE7RUFiSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvUGFnZXMvaW50cm8vaW50cm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW50cm9cbntcbiAgICBoZWlnaHQ6IDcwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgb3BhY2l0eTogODAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5yb3dcbntcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuXG4uaW50cm8gaDFcbntcbiAgICBmb250LXNpemU6IDExMHB0O1xufVxuXG4uY29sdW1uXG57XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI2EtMVxue1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0RkExNkI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBoZWlnaHQ6IDclO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuI2EtMTpob3Zlclxue1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDhweCAwcHggcmdiYSgwLCAwLCAwLCAxKTtcbn1cblxuI2EtMlxue1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MzdBQ0Q7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBoZWlnaHQ6IDclO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuI2EtMjpob3Zlclxue1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDhweCAwcHggcmdiYSgwLCAwLCAwLCAxKTtcbn1cblxuI2EtM1xue1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNDNDVBM0I7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBoZWlnaHQ6IDclO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuI2EtMzpob3Zlclxue1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDhweCAwcHggcmdiYSgwLCAwLCAwLCAxKTtcbn1cblxuXG5cblxuLyogUmVzcG9uc2l2ZSBsYXlvdXQgLSBtYWtlcyB0aGUgdGhyZWUgY29sdW1ucyBzdGFjayBvbiB0b3Agb2YgZWFjaCBvdGhlciBpbnN0ZWFkIG9mIG5leHQgdG8gZWFjaCBvdGhlciAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo2MDBweCkge1xuICAgIC5jb2x1bW4ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IntroComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-intro',
                templateUrl: './intro.component.html',
                styleUrls: ['./intro.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=Pages-intro-intro-module.js.map