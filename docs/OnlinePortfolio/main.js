(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _experiences_experiences_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./experiences/experiences.component */ "./src/app/experiences/experiences.component.ts");
/* harmony import */ var _certifications_certifications_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./certifications/certifications.component */ "./src/app/certifications/certifications.component.ts");
/* harmony import */ var _publications_publications_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./publications/publications.component */ "./src/app/publications/publications.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _projects_project_project_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./projects/project/project.component */ "./src/app/projects/project/project.component.ts");









var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'experience', component: _experiences_experiences_component__WEBPACK_IMPORTED_MODULE_4__["ExperiencesComponent"] },
    { path: 'certification', component: _certifications_certifications_component__WEBPACK_IMPORTED_MODULE_5__["CertificationsComponent"] },
    { path: 'publication', component: _publications_publications_component__WEBPACK_IMPORTED_MODULE_6__["PublicationsComponent"] },
    { path: 'project', component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsComponent"] },
    { path: 'project/:id', component: _projects_project_project_component__WEBPACK_IMPORTED_MODULE_8__["ProjectComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fixed {\r\n  position: fixed;\r\n  z-index: 100;\r\n  left: 20px;\r\n  top: 20px;\r\n}\r\n.menu-open {\r\n  position: fixed;\r\n  z-index: 99;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background-color: #00000077;\r\n}\r\nnav {\r\n  --duration: 0.5s;\r\n  --easing: ease-in-out;\r\n  position: relative;\r\n  width: 220px;\r\n}\r\nnav ol {\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  width: 220px;\r\n}\r\nnav li:first-child {\r\n  border-top: 1px solid rgb(var(--gray));\r\n}\r\nnav li {\r\n  margin: -4px 0 0 0;\r\n  background: #fff;\r\n  -ms-transform-origin: top left;\r\n      transform-origin: top left;\r\n  transition: transform var(--duration) var(--easing), color var(--duration) var(--easing), background var(--duration) var(--easing);\r\n  transition-delay: var(--delay-out);\r\n  border-radius: 4px;\r\n  padding: 1em 1.52em;\r\n  border-left: 1px solid rgb(var(--gray));\r\n  border-right: 1px solid rgb(var(--gray));\r\n}\r\nnav li:last-child {\r\n  border-bottom: 1px solid rgb(var(--gray));\r\n}\r\nnav a {\r\n  display: block;\r\n  text-decoration: none;\r\n}\r\nnav li:hover {\r\n  background: #efefef;\r\n}\r\nnav header {\r\n  font-weight: 600;\r\n  display: block;\r\n  background: rgba(var(--third), 0.5);\r\n  -ms-transform-origin: top left;\r\n      transform-origin: top left;\r\n  transition: transform var(--duration) var(--easing), color var(--duration) var(--easing), background var(--duration) var(--easing);\r\n  transition-delay: var(--delay-out);\r\n  border-radius: 4px;\r\n  padding: 1em 1.52em;\r\n  width: 220px;\r\n}\r\nnav header span {\r\n  border: none;\r\n  background: transparent;\r\n  font-size: 1.5em;\r\n  padding: 0;\r\n  cursor: pointer;\r\n  line-height: 1;\r\n  float: right;\r\n}\r\nnav .toggle button {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  border: none;\r\n  padding: calc(1em + 3px);\r\n  width: 100%;\r\n  -ms-transform-origin: top left;\r\n      transform-origin: top left;\r\n  transition: transform var(--duration) var(--easing);\r\n  transition-delay: calc(var(--duration) + (0.1s * (var(--count) / 2)));\r\n  cursor: pointer;\r\n  outline: none;\r\n  background: #cdcdcd;\r\n  opacity: 0;\r\n}\r\nnav.closed {\r\n  height: calc(3em + 3px);\r\n  width: calc(3em + 3px);\r\n  transition-delay: calc(var(--count) * 0.1s);\r\n}\r\nnav.closed li,\r\nnav.closed header {\r\n  -ms-transform: translateY(calc(var(--top) * -1)) scaleY(0.1) scaleX(0.2);\r\n      transform: translateY(calc(var(--top) * -1)) scaleY(0.1) scaleX(0.2);\r\n  transition-delay: var(--delay-in);\r\n  color: transparent;\r\n  background: #000;\r\n}\r\nnav.closed .toggle button {\r\n  transition-delay: 0s;\r\n  /* transform: scaleY(0.7) scaleX(0.2); */\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLFVBQVU7RUFDVixTQUFTO0FBQ1g7QUFDQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsU0FBUztFQUNULFVBQVU7RUFDVixZQUFZO0FBQ2Q7QUFDQTtFQUNFLHNDQUFzQztBQUN4QztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQiw4QkFBMEI7TUFBMUIsMEJBQTBCO0VBQzFCLGtJQUFrSTtFQUNsSSxrQ0FBa0M7RUFDbEMsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQix1Q0FBdUM7RUFDdkMsd0NBQXdDO0FBQzFDO0FBQ0E7RUFDRSx5Q0FBeUM7QUFDM0M7QUFDQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxtQ0FBbUM7RUFDbkMsOEJBQTBCO01BQTFCLDBCQUEwQjtFQUMxQixrSUFBa0k7RUFDbEksa0NBQWtDO0VBQ2xDLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsZUFBZTtFQUNmLGNBQWM7RUFDZCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsV0FBVztFQUNYLDhCQUEwQjtNQUExQiwwQkFBMEI7RUFDMUIsbURBQW1EO0VBQ25ELHFFQUFxRTtFQUNyRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixVQUFVO0FBQ1o7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsMkNBQTJDO0FBQzdDO0FBRUE7O0VBRUUsd0VBQW9FO01BQXBFLG9FQUFvRTtFQUNwRSxpQ0FBaUM7RUFDakMsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLHdDQUF3QztBQUMxQyIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpeGVkIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogMTAwO1xyXG4gIGxlZnQ6IDIwcHg7XHJcbiAgdG9wOiAyMHB4O1xyXG59XHJcbi5tZW51LW9wZW4ge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiA5OTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDc3O1xyXG59XHJcbm5hdiB7XHJcbiAgLS1kdXJhdGlvbjogMC41cztcclxuICAtLWVhc2luZzogZWFzZS1pbi1vdXQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAyMjBweDtcclxufVxyXG5uYXYgb2wge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICB3aWR0aDogMjIwcHg7XHJcbn1cclxubmF2IGxpOmZpcnN0LWNoaWxkIHtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKHZhcigtLWdyYXkpKTtcclxufVxyXG5uYXYgbGkge1xyXG4gIG1hcmdpbjogLTRweCAwIDAgMDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSB2YXIoLS1kdXJhdGlvbikgdmFyKC0tZWFzaW5nKSwgY29sb3IgdmFyKC0tZHVyYXRpb24pIHZhcigtLWVhc2luZyksIGJhY2tncm91bmQgdmFyKC0tZHVyYXRpb24pIHZhcigtLWVhc2luZyk7XHJcbiAgdHJhbnNpdGlvbi1kZWxheTogdmFyKC0tZGVsYXktb3V0KTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgcGFkZGluZzogMWVtIDEuNTJlbTtcclxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYih2YXIoLS1ncmF5KSk7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiKHZhcigtLWdyYXkpKTtcclxufVxyXG5uYXYgbGk6bGFzdC1jaGlsZCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYih2YXIoLS1ncmF5KSk7XHJcbn1cclxubmF2IGEge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5uYXYgbGk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNlZmVmZWY7XHJcbn1cclxuXHJcbm5hdiBoZWFkZXIge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYmFja2dyb3VuZDogcmdiYSh2YXIoLS10aGlyZCksIDAuNSk7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIHZhcigtLWR1cmF0aW9uKSB2YXIoLS1lYXNpbmcpLCBjb2xvciB2YXIoLS1kdXJhdGlvbikgdmFyKC0tZWFzaW5nKSwgYmFja2dyb3VuZCB2YXIoLS1kdXJhdGlvbikgdmFyKC0tZWFzaW5nKTtcclxuICB0cmFuc2l0aW9uLWRlbGF5OiB2YXIoLS1kZWxheS1vdXQpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBwYWRkaW5nOiAxZW0gMS41MmVtO1xyXG4gIHdpZHRoOiAyMjBweDtcclxufVxyXG5uYXYgaGVhZGVyIHNwYW4ge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBmb250LXNpemU6IDEuNWVtO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5uYXYgLnRvZ2dsZSBidXR0b24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZzogY2FsYygxZW0gKyAzcHgpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSB2YXIoLS1kdXJhdGlvbikgdmFyKC0tZWFzaW5nKTtcclxuICB0cmFuc2l0aW9uLWRlbGF5OiBjYWxjKHZhcigtLWR1cmF0aW9uKSArICgwLjFzICogKHZhcigtLWNvdW50KSAvIDIpKSk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogI2NkY2RjZDtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG5uYXYuY2xvc2VkIHtcclxuICBoZWlnaHQ6IGNhbGMoM2VtICsgM3B4KTtcclxuICB3aWR0aDogY2FsYygzZW0gKyAzcHgpO1xyXG4gIHRyYW5zaXRpb24tZGVsYXk6IGNhbGModmFyKC0tY291bnQpICogMC4xcyk7XHJcbn1cclxuXHJcbm5hdi5jbG9zZWQgbGksXHJcbm5hdi5jbG9zZWQgaGVhZGVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoY2FsYyh2YXIoLS10b3ApICogLTEpKSBzY2FsZVkoMC4xKSBzY2FsZVgoMC4yKTtcclxuICB0cmFuc2l0aW9uLWRlbGF5OiB2YXIoLS1kZWxheS1pbik7XHJcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJhY2tncm91bmQ6ICMwMDA7XHJcbn1cclxubmF2LmNsb3NlZCAudG9nZ2xlIGJ1dHRvbiB7XHJcbiAgdHJhbnNpdGlvbi1kZWxheTogMHM7XHJcbiAgLyogdHJhbnNmb3JtOiBzY2FsZVkoMC43KSBzY2FsZVgoMC4yKTsgKi9cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fixed\">\r\n  <nav class=\"menu\">\r\n    <header>Menu <span>x</span></header>\r\n    <ol>\r\n      <li class=\"menu-item\"><a routerLink=\"/\" (click)=\"toggle()\">Home</a></li>\r\n      <li class=\"menu-item\">\r\n        <a routerLink=\"/experience\" (click)=\"toggle()\">Experience</a>\r\n      </li>\r\n      <li class=\"menu-item\">\r\n        <a routerLink=\"/project\" (click)=\"toggle()\">Projects</a>\r\n      </li>\r\n      <li class=\"menu-item\">\r\n        <a routerLink=\"/publication\" (click)=\"toggle()\">Publications</a>\r\n      </li>\r\n      <li class=\"menu-item\">\r\n        <a routerLink=\"/certification\" (click)=\"toggle()\">Certifications</a>\r\n      </li>\r\n    </ol>\r\n    <div class=\"toggle\">\r\n      <button aria-label=\"Toggle menu\" (click)=\"toggle()\">Toggle</button>\r\n    </div>\r\n  </nav>\r\n</div>\r\n<div class=\"menu-overlay\" (click)=\"toggle()\"></div>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);



var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        this.els = jquery__WEBPACK_IMPORTED_MODULE_2__('.menu li, .menu header');
        this.count = this.els.length;
        var groupLength = Math.ceil(this.count / 3);
        var groupNumber = 0;
        var i = 1;
        jquery__WEBPACK_IMPORTED_MODULE_2__('.menu').css('--count', this.count + '');
        this.els.each(function (j) {
            if (i > groupLength) {
                groupNumber++;
                i = 1;
            }
            jquery__WEBPACK_IMPORTED_MODULE_2__(this).attr('data-group', groupNumber);
            i++;
        });
        this.toggle();
    };
    AppComponent.prototype.toggle = function () {
        var _this = this;
        var count = this.count;
        this.els.each(function (j) {
            jquery__WEBPACK_IMPORTED_MODULE_2__(this).css('--top', jquery__WEBPACK_IMPORTED_MODULE_2__(this)[0].getBoundingClientRect().top + jquery__WEBPACK_IMPORTED_MODULE_2__(this).attr('data-group') * -15 - 20 + 'px');
            jquery__WEBPACK_IMPORTED_MODULE_2__(this).css('--delay-in', j * 0.1 + 's');
            jquery__WEBPACK_IMPORTED_MODULE_2__(this).css('--delay-out', (count - j) * 0.1 + 's');
        });
        if (jquery__WEBPACK_IMPORTED_MODULE_2__('.menu').hasClass('closed')) {
            jquery__WEBPACK_IMPORTED_MODULE_2__('.menu').removeClass('closed');
            jquery__WEBPACK_IMPORTED_MODULE_2__('.menu-overlay').addClass('menu-open');
            jquery__WEBPACK_IMPORTED_MODULE_2__('.menu').css('overflow', 'visible');
            // since background changes when we open and close the menu
            // and also when we hover
            // and the delay of hover depends on --delay-out
            // so we have to handle --delay-out accordingly
            setTimeout(function () {
                _this.els.each(function (j) {
                    jquery__WEBPACK_IMPORTED_MODULE_2__(this).css('--delay-out', '0s');
                });
            }, count * 200);
        }
        else {
            jquery__WEBPACK_IMPORTED_MODULE_2__('.menu').addClass('closed');
            jquery__WEBPACK_IMPORTED_MODULE_2__('.menu-overlay').removeClass('menu-open');
            // there is a need to set overflow to hidden so that
            // the menu does not interfere with rest of UI
            setTimeout(function () {
                jquery__WEBPACK_IMPORTED_MODULE_2__('.menu').css('overflow', 'hidden');
            }, count * 200);
        }
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var ng_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-keyboard-shortcuts */ "./node_modules/ng-keyboard-shortcuts/fesm5/ng-keyboard-shortcuts.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _home_front_front_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/front/front.component */ "./src/app/home/front/front.component.ts");
/* harmony import */ var _home_back_back_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/back/back.component */ "./src/app/home/back/back.component.ts");
/* harmony import */ var _experiences_experiences_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./experiences/experiences.component */ "./src/app/experiences/experiences.component.ts");
/* harmony import */ var _certifications_certifications_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./certifications/certifications.component */ "./src/app/certifications/certifications.component.ts");
/* harmony import */ var _publications_publications_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./publications/publications.component */ "./src/app/publications/publications.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _projects_project_project_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./projects/project/project.component */ "./src/app/projects/project/project.component.ts");
/* harmony import */ var _projects_projects_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./projects/projects.service */ "./src/app/projects/projects.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _home_front_front_component__WEBPACK_IMPORTED_MODULE_9__["FrontComponent"],
                _home_back_back_component__WEBPACK_IMPORTED_MODULE_10__["BackComponent"],
                _experiences_experiences_component__WEBPACK_IMPORTED_MODULE_11__["ExperiencesComponent"],
                _certifications_certifications_component__WEBPACK_IMPORTED_MODULE_12__["CertificationsComponent"],
                _publications_publications_component__WEBPACK_IMPORTED_MODULE_13__["PublicationsComponent"],
                _projects_projects_component__WEBPACK_IMPORTED_MODULE_14__["ProjectsComponent"],
                _projects_project_project_component__WEBPACK_IMPORTED_MODULE_15__["ProjectComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_4__["AngularFontAwesomeModule"],
                ng_keyboard_shortcuts__WEBPACK_IMPORTED_MODULE_5__["KeyboardShortcutsModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"]
            ],
            providers: [_services_firebase_service__WEBPACK_IMPORTED_MODULE_6__["FirebaseService"], _projects_projects_service__WEBPACK_IMPORTED_MODULE_16__["ProjectsService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/certifications/certifications.component.css":
/*!*************************************************************!*\
  !*** ./src/app/certifications/certifications.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n  background-image: linear-gradient(0deg, rgba(var(--third), 0.5) 1%, transparent 2%),\r\n    linear-gradient(90deg, rgba(var(--third), 0.5) 1%, transparent 2%);\r\n  background-size: 30px 30px;\r\n  min-height: 100vh;\r\n  padding: 1em 15%;\r\n}\r\n\r\nheader {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-pack: justify;\r\n      justify-content: space-between;\r\n  -ms-flex-align: center;\r\n      align-items: center;\r\n}\r\n\r\nheader a {\r\n  display: block;\r\n  border: 1px solid rgb(var(--gray));\r\n  padding: 8px 10px 5px 10px;\r\n  border-radius: 3px;\r\n  background: white;\r\n  box-shadow: 1px 1px 3px rgb(var(--gray)), -1px 1px 5px rgb(var(--gray));\r\n  text-decoration: none;\r\n}\r\n\r\nh2 {\r\n  color: rgb(var(--third));\r\n}\r\n\r\nh3 {\r\n  font-size: 1.5rem;\r\n  color: rgb(var(--first));\r\n}\r\n\r\n.ui.items > .item {\r\n  background: white;\r\n  border: 1px solid rgb(var(--gray));\r\n  padding-bottom: 0.5em;\r\n}\r\n\r\n.ui.items > .item > .content {\r\n  padding-left: 1em;\r\n  padding-right: 1em;\r\n}\r\n\r\n.ui.items > .item {\r\n  border-radius: 5px;\r\n}\r\n\r\n@media only screen and (max-width: 767px) {\r\n  .container {\r\n    padding: 3em 5%;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2VydGlmaWNhdGlvbnMvY2VydGlmaWNhdGlvbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO3NFQUNvRTtFQUNwRSwwQkFBMEI7RUFDMUIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHNCQUE4QjtNQUE5Qiw4QkFBOEI7RUFDOUIsc0JBQW1CO01BQW5CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQ0FBa0M7RUFDbEMsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsdUVBQXVFO0VBQ3ZFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0NBQWtDO0VBQ2xDLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NlcnRpZmljYXRpb25zL2NlcnRpZmljYXRpb25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSh2YXIoLS10aGlyZCksIDAuNSkgMSUsIHRyYW5zcGFyZW50IDIlKSxcclxuICAgIGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSh2YXIoLS10aGlyZCksIDAuNSkgMSUsIHRyYW5zcGFyZW50IDIlKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDMwcHggMzBweDtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBwYWRkaW5nOiAxZW0gMTUlO1xyXG59XHJcblxyXG5oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbmhlYWRlciBhIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IodmFyKC0tZ3JheSkpO1xyXG4gIHBhZGRpbmc6IDhweCAxMHB4IDVweCAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCByZ2IodmFyKC0tZ3JheSkpLCAtMXB4IDFweCA1cHggcmdiKHZhcigtLWdyYXkpKTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmgyIHtcclxuICBjb2xvcjogcmdiKHZhcigtLXRoaXJkKSk7XHJcbn1cclxuXHJcbmgzIHtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBjb2xvcjogcmdiKHZhcigtLWZpcnN0KSk7XHJcbn1cclxuXHJcbi51aS5pdGVtcyA+IC5pdGVtIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IodmFyKC0tZ3JheSkpO1xyXG4gIHBhZGRpbmctYm90dG9tOiAwLjVlbTtcclxufVxyXG5cclxuLnVpLml0ZW1zID4gLml0ZW0gPiAuY29udGVudCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxZW07XHJcbiAgcGFkZGluZy1yaWdodDogMWVtO1xyXG59XHJcblxyXG4udWkuaXRlbXMgPiAuaXRlbSB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAzZW0gNSU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/certifications/certifications.component.html":
/*!**************************************************************!*\
  !*** ./src/app/certifications/certifications.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <header>\r\n    <h2>Certifications</h2>\r\n    <a routerLink=\"/\"><fa name=\"arrow-left\"></fa> &nbsp;<span>Back</span></a>\r\n  </header>\r\n\r\n  <div class=\"ui unstackable items\">\r\n    <div class=\"item\" *ngFor=\"let item of data\">\r\n      <div class=\"content\">\r\n        <h3>{{ item.name }}</h3>\r\n        <div class=\"meta\">\r\n          <div>Issued on: {{ item.issued }}</div>\r\n        </div>\r\n        <div class=\"description\">\r\n          <p>By: {{ item.company }}</p>\r\n          <p *ngIf=\"item.link\"><a [href]=\"item.link\" target=\"_blank\">See Certificate</a></p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/certifications/certifications.component.ts":
/*!************************************************************!*\
  !*** ./src/app/certifications/certifications.component.ts ***!
  \************************************************************/
/*! exports provided: CertificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertificationsComponent", function() { return CertificationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");



var CertificationsComponent = /** @class */ (function () {
    function CertificationsComponent(fbService) {
        var _this = this;
        this.fbService = fbService;
        this.subscription = this.fbService.getData('/certifications').subscribe(function (data) {
            _this.data = data;
            console.log(_this.data);
        });
    }
    CertificationsComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    CertificationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-certifications',
            template: __webpack_require__(/*! ./certifications.component.html */ "./src/app/certifications/certifications.component.html"),
            styles: [__webpack_require__(/*! ./certifications.component.css */ "./src/app/certifications/certifications.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"]])
    ], CertificationsComponent);
    return CertificationsComponent;
}());



/***/ }),

/***/ "./src/app/experiences/experiences.component.css":
/*!*******************************************************!*\
  !*** ./src/app/experiences/experiences.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n  background-image: linear-gradient(0deg, rgba(var(--third), 0.5) 1%, transparent 2%),\r\n    linear-gradient(90deg, rgba(var(--third), 0.5) 1%, transparent 2%);\r\n  background-size: 30px 30px;\r\n  min-height: 100vh;\r\n  padding: 1em 15%;\r\n}\r\n\r\nheader {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-pack: justify;\r\n      justify-content: space-between;\r\n  -ms-flex-align: center;\r\n      align-items: center;\r\n}\r\n\r\nheader a {\r\n  display: block;\r\n  border: 1px solid rgb(var(--gray));\r\n  padding: 8px 10px 5px 10px;\r\n  border-radius: 3px;\r\n  background: white;\r\n  box-shadow: 1px 1px 3px rgb(var(--gray)), -1px 1px 5px rgb(var(--gray));\r\n  text-decoration: none;\r\n}\r\n\r\nh2 {\r\n  color: rgb(var(--third));\r\n}\r\n\r\nh3 {\r\n  font-size: 1.5rem;\r\n  color: rgb(var(--first));\r\n}\r\n\r\n.ui.items > .item {\r\n  background: white;\r\n  border: 1px solid rgb(var(--gray));\r\n  padding-bottom: 0.5em;\r\n}\r\n\r\n.ui.items > .item > .content.left-padding {\r\n  padding-left: 1em;\r\n}\r\n\r\n.ui.items > .item > .content {\r\n  padding-right: 1em;\r\n}\r\n\r\n.ui.items > .item {\r\n  border-radius: 5px;\r\n}\r\n\r\n.ui.items > .item > .image > img {\r\n  border-radius: 5px 0 5px 0;\r\n}\r\n\r\n.location {\r\n  padding-bottom: 0.4em;\r\n}\r\n\r\n.ui.blue.label {\r\n  background-color: rgb(var(--first)) !important;\r\n  border-color: rgb(var(--first)) !important;\r\n  color: #fff !important;\r\n}\r\n\r\n.ui.orange.label {\r\n  background-color: rgb(var(--third)) !important;\r\n  border-color: rgb(var(--third)) !important;\r\n  color: #fff !important;\r\n}\r\n\r\n.label {\r\n  margin-bottom: 0.4em;\r\n}\r\n\r\nli {\r\n  word-wrap: break-word;\r\n}\r\n\r\n@media only screen and (max-width: 767px) {\r\n  .container {\r\n    padding: 3em 5%;\r\n  }\r\n  .ui.unstackable.items > .item > .image,\r\n  .ui.unstackable.items > .item > .image > img {\r\n    width: 80px !important;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhwZXJpZW5jZXMvZXhwZXJpZW5jZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO3NFQUNvRTtFQUNwRSwwQkFBMEI7RUFDMUIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHNCQUE4QjtNQUE5Qiw4QkFBOEI7RUFDOUIsc0JBQW1CO01BQW5CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQ0FBa0M7RUFDbEMsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsdUVBQXVFO0VBQ3ZFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0NBQWtDO0VBQ2xDLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLDhDQUE4QztFQUM5QywwQ0FBMEM7RUFDMUMsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsOENBQThDO0VBQzlDLDBDQUEwQztFQUMxQyxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7RUFDQTs7SUFFRSxzQkFBc0I7RUFDeEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2V4cGVyaWVuY2VzL2V4cGVyaWVuY2VzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSh2YXIoLS10aGlyZCksIDAuNSkgMSUsIHRyYW5zcGFyZW50IDIlKSxcclxuICAgIGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSh2YXIoLS10aGlyZCksIDAuNSkgMSUsIHRyYW5zcGFyZW50IDIlKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDMwcHggMzBweDtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBwYWRkaW5nOiAxZW0gMTUlO1xyXG59XHJcblxyXG5oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbmhlYWRlciBhIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IodmFyKC0tZ3JheSkpO1xyXG4gIHBhZGRpbmc6IDhweCAxMHB4IDVweCAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCByZ2IodmFyKC0tZ3JheSkpLCAtMXB4IDFweCA1cHggcmdiKHZhcigtLWdyYXkpKTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmgyIHtcclxuICBjb2xvcjogcmdiKHZhcigtLXRoaXJkKSk7XHJcbn1cclxuXHJcbmgzIHtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBjb2xvcjogcmdiKHZhcigtLWZpcnN0KSk7XHJcbn1cclxuXHJcbi51aS5pdGVtcyA+IC5pdGVtIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IodmFyKC0tZ3JheSkpO1xyXG4gIHBhZGRpbmctYm90dG9tOiAwLjVlbTtcclxufVxyXG5cclxuLnVpLml0ZW1zID4gLml0ZW0gPiAuY29udGVudC5sZWZ0LXBhZGRpbmcge1xyXG4gIHBhZGRpbmctbGVmdDogMWVtO1xyXG59XHJcblxyXG4udWkuaXRlbXMgPiAuaXRlbSA+IC5jb250ZW50IHtcclxuICBwYWRkaW5nLXJpZ2h0OiAxZW07XHJcbn1cclxuXHJcbi51aS5pdGVtcyA+IC5pdGVtIHtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi51aS5pdGVtcyA+IC5pdGVtID4gLmltYWdlID4gaW1nIHtcclxuICBib3JkZXItcmFkaXVzOiA1cHggMCA1cHggMDtcclxufVxyXG5cclxuLmxvY2F0aW9uIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMC40ZW07XHJcbn1cclxuXHJcbi51aS5ibHVlLmxhYmVsIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IodmFyKC0tZmlyc3QpKSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1jb2xvcjogcmdiKHZhcigtLWZpcnN0KSkgIWltcG9ydGFudDtcclxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udWkub3JhbmdlLmxhYmVsIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IodmFyKC0tdGhpcmQpKSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1jb2xvcjogcmdiKHZhcigtLXRoaXJkKSkgIWltcG9ydGFudDtcclxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubGFiZWwge1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNGVtO1xyXG59XHJcblxyXG5saSB7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAzZW0gNSU7XHJcbiAgfVxyXG4gIC51aS51bnN0YWNrYWJsZS5pdGVtcyA+IC5pdGVtID4gLmltYWdlLFxyXG4gIC51aS51bnN0YWNrYWJsZS5pdGVtcyA+IC5pdGVtID4gLmltYWdlID4gaW1nIHtcclxuICAgIHdpZHRoOiA4MHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/experiences/experiences.component.html":
/*!********************************************************!*\
  !*** ./src/app/experiences/experiences.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <header>\r\n    <h2>Experience</h2>\r\n    <a routerLink=\"/\"><fa name=\"arrow-left\"></fa> &nbsp;<span>Back</span></a>\r\n  </header>\r\n\r\n  <div class=\"ui unstackable items\">\r\n    <div class=\"item\" *ngFor=\"let item of data\">\r\n      <div class=\"ui tiny image\" *ngIf=\"item.img\">\r\n        <img [src]=\"item.img\" />\r\n      </div>\r\n      <div class=\"content\" [ngClass]=\"{ 'left-padding': !item.img }\">\r\n        <h3>{{ item.company }} - {{ item.profile }}</h3>\r\n        <div class=\"meta\">\r\n          <div *ngIf=\"item.location\" class=\"location\">{{ item.location }}</div>\r\n          <div>{{ item.duration }}</div>\r\n        </div>\r\n        <div class=\"description\">\r\n          <ul>\r\n            <li *ngFor=\"let desc of item.description\" [innerHTML]=\"desc\"></li>\r\n          </ul>\r\n          <p>Worked on:</p>\r\n          <div>\r\n            <span class=\"ui blue label\" *ngFor=\"let technology of item.technologies\">{{ technology }}</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/experiences/experiences.component.ts":
/*!******************************************************!*\
  !*** ./src/app/experiences/experiences.component.ts ***!
  \******************************************************/
/*! exports provided: ExperiencesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperiencesComponent", function() { return ExperiencesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");



var ExperiencesComponent = /** @class */ (function () {
    function ExperiencesComponent(fbService) {
        var _this = this;
        this.fbService = fbService;
        this.subscription = this.fbService.getData('/experience').subscribe(function (data) {
            _this.data = data;
            console.log(_this.data);
        });
    }
    ExperiencesComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ExperiencesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-experiences',
            template: __webpack_require__(/*! ./experiences.component.html */ "./src/app/experiences/experiences.component.html"),
            styles: [__webpack_require__(/*! ./experiences.component.css */ "./src/app/experiences/experiences.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"]])
    ], ExperiencesComponent);
    return ExperiencesComponent;
}());



/***/ }),

/***/ "./src/app/home/back/back.component.css":
/*!**********************************************!*\
  !*** ./src/app/home/back/back.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\r\n  color: rgb(var(--third));\r\n}\r\n\r\n.center {\r\n  text-align: center;\r\n}\r\n\r\nbutton {\r\n  padding: 10px;\r\n  padding-top: 13px;\r\n  border: 2px solid var(--black);\r\n  border-radius: 4px;\r\n  transition: 0.5s ease-in-out;\r\n  cursor: pointer;\r\n}\r\n\r\nbutton:hover {\r\n  border-radius: 25px;\r\n}\r\n\r\n.container {\r\n  background-image: linear-gradient(0deg, rgba(var(--third), 0.5) 1%, transparent 2%),\r\n    linear-gradient(90deg, rgba(var(--third), 0.5) 1%, transparent 2%);\r\n  background-size: 30px 30px;\r\n  min-height: 100vh;\r\n  padding: 1em 5%;\r\n\r\n  --timing: 265ms;\r\n}\r\n\r\n.sections {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n  -ms-flex-pack: center;\r\n      justify-content: center;\r\n  margin: 4vh 0;\r\n}\r\n\r\n.sections a {\r\n  text-decoration: none;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.about-me {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.sections div {\r\n  background: rgb(var(--first));\r\n  /* flex-grow: 1; */\r\n  text-align: center;\r\n  margin: 10px;\r\n  padding: 30px 0;\r\n  width: 200px;\r\n  border-radius: 5px;\r\n  font-weight: 600;\r\n  color: var(--white);\r\n}\r\n\r\n.wrapper,\r\n.icons,\r\n.container {\r\n  box-sizing: border-box;\r\n}\r\n\r\n.wrapper {\r\n  text-align: center;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  /* height: 75vh; */\r\n  -ms-flex-pack: center;\r\n      justify-content: center;\r\n  -ms-flex-align: center;\r\n      align-items: center;\r\n}\r\n\r\n.icons {\r\n  padding: 0;\r\n  list-style: none;\r\n  --icon-width: 4.5rem;\r\n}\r\n\r\n.icons li {\r\n  display: inline-block;\r\n  margin: 1rem;\r\n  position: relative;\r\n}\r\n\r\n.icons li a {\r\n  font-size: 2.2rem;\r\n}\r\n\r\n.icons fa {\r\n  display: block;\r\n  width: var(--icon-width);\r\n  color: var(--white);\r\n  position: absolute;\r\n  top: 1.15rem;\r\n  text-align: center;\r\n  transition: all var(--timing) ease-out;\r\n}\r\n\r\n.icons a {\r\n  display: inline-block;\r\n}\r\n\r\n.icons a::before {\r\n  content: '';\r\n  -ms-transform: scale(1);\r\n      transform: scale(1);\r\n  width: var(--icon-width);\r\n  height: var(--icon-width);\r\n  border-radius: 100%;\r\n  display: block;\r\n  background: rgb(var(--first));\r\n  transition: all ease-out var(--timing);\r\n}\r\n\r\n.icons a:hover::before {\r\n  -ms-transform: scale(0);\r\n      transform: scale(0);\r\n  transition: all ease-out var(--timing);\r\n}\r\n\r\n.icons a:hover fa {\r\n  -ms-transform: scale(2);\r\n      transform: scale(2);\r\n  color: rgb(var(--first));\r\n}\r\n\r\n@media (orientation: portrait) {\r\n  .about-me {\r\n    font-size: 1.2rem;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9iYWNrL2JhY2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsOEJBQThCO0VBQzlCLGtCQUFrQjtFQUNsQiw0QkFBNEI7RUFDNUIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFO3NFQUNvRTtFQUNwRSwwQkFBMEI7RUFDMUIsaUJBQWlCO0VBQ2pCLGVBQWU7O0VBRWYsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLG1CQUFlO01BQWYsZUFBZTtFQUNmLHFCQUF1QjtNQUF2Qix1QkFBdUI7RUFDdkIsYUFBYTtBQUNmOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0VBQ2YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBOzs7RUFHRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsb0JBQWE7RUFBYixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHFCQUF1QjtNQUF2Qix1QkFBdUI7RUFDdkIsc0JBQW1CO01BQW5CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsd0JBQXdCO0VBQ3hCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsdUJBQW1CO01BQW5CLG1CQUFtQjtFQUNuQix3QkFBd0I7RUFDeEIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsNkJBQTZCO0VBQzdCLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLHVCQUFtQjtNQUFuQixtQkFBbUI7RUFDbkIsc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsdUJBQW1CO01BQW5CLG1CQUFtQjtFQUNuQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9iYWNrL2JhY2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgyIHtcclxuICBjb2xvcjogcmdiKHZhcigtLXRoaXJkKSk7XHJcbn1cclxuXHJcbi5jZW50ZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAxM3B4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJsYWNrKTtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgdHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmJ1dHRvbjpob3ZlciB7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEodmFyKC0tdGhpcmQpLCAwLjUpIDElLCB0cmFuc3BhcmVudCAyJSksXHJcbiAgICBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEodmFyKC0tdGhpcmQpLCAwLjUpIDElLCB0cmFuc3BhcmVudCAyJSk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAzMHB4IDMwcHg7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgcGFkZGluZzogMWVtIDUlO1xyXG5cclxuICAtLXRpbWluZzogMjY1bXM7XHJcbn1cclxuXHJcbi5zZWN0aW9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luOiA0dmggMDtcclxufVxyXG5cclxuLnNlY3Rpb25zIGEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG5cclxuLmFib3V0LW1lIHtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG5cclxuLnNlY3Rpb25zIGRpdiB7XHJcbiAgYmFja2dyb3VuZDogcmdiKHZhcigtLWZpcnN0KSk7XHJcbiAgLyogZmxleC1ncm93OiAxOyAqL1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgcGFkZGluZzogMzBweCAwO1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xyXG59XHJcblxyXG4ud3JhcHBlcixcclxuLmljb25zLFxyXG4uY29udGFpbmVyIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4ud3JhcHBlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLyogaGVpZ2h0OiA3NXZoOyAqL1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pY29ucyB7XHJcbiAgcGFkZGluZzogMDtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIC0taWNvbi13aWR0aDogNC41cmVtO1xyXG59XHJcblxyXG4uaWNvbnMgbGkge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW46IDFyZW07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uaWNvbnMgbGkgYSB7XHJcbiAgZm9udC1zaXplOiAyLjJyZW07XHJcbn1cclxuXHJcbi5pY29ucyBmYSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IHZhcigtLWljb24td2lkdGgpO1xyXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMS4xNXJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIHZhcigtLXRpbWluZykgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbi5pY29ucyBhIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5pY29ucyBhOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgd2lkdGg6IHZhcigtLWljb24td2lkdGgpO1xyXG4gIGhlaWdodDogdmFyKC0taWNvbi13aWR0aCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBiYWNrZ3JvdW5kOiByZ2IodmFyKC0tZmlyc3QpKTtcclxuICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1vdXQgdmFyKC0tdGltaW5nKTtcclxufVxyXG5cclxuLmljb25zIGE6aG92ZXI6OmJlZm9yZSB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1vdXQgdmFyKC0tdGltaW5nKTtcclxufVxyXG5cclxuLmljb25zIGE6aG92ZXIgZmEge1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMik7XHJcbiAgY29sb3I6IHJnYih2YXIoLS1maXJzdCkpO1xyXG59XHJcblxyXG5AbWVkaWEgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xyXG4gIC5hYm91dC1tZSB7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/home/back/back.component.html":
/*!***********************************************!*\
  !*** ./src/app/home/back/back.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"center\"><button (click)=\"flip()\">Flip back {{checkMobile() ? \"\" : \"(Ctrl + M)\"}}</button></div>\r\n\r\n  <div class=\"center about-me\">\r\n    <h2>Hello. Thank you for checking on my site.</h2>\r\n    <p>\r\n      I am a <u>front-end developer</u> at <u>EY-GDS, Gurugram, India</u>. I work on Angular and Sharepoint here. I joined EY in November\r\n      2018. I have learnt a lot since then and I am still learning.\r\n    </p>\r\n    <p>\r\n      I have completed my B.Tech. in Electronics and Communication Engineering (ECE) from Bharati Vidyapeeth's College of Engineering, New\r\n      Delhi in 2018.\r\n    </p>\r\n    <p>\r\n      I have mentored 50+ students and professionals. I have participated as a mentor in\r\n      <a href=\"https://www.gssoc.tech/\" target=\"_blank\">GSSoC'19 (GirlScript Summer of Code)</a>. I have taught Java, Python, C and Data\r\n      Structures online through various mediums like WhatsApp, TeamViewer, Skype etc. Other than coding, I also love to paint and sketch.\r\n      Please scroll down to find different apps/sites where we can connect.\r\n    </p>\r\n\r\n    <p>\r\n      To see the previous version of my portfolio, please click on this link:\r\n      <a href=\"https://sakshishreya.github.io/portfolio-2018/\">sakshishreya.github.io/portfolio-2018</a>.\r\n    </p>\r\n  </div>\r\n\r\n  <h2 class=\"center\">Feel free to navigate:</h2>\r\n  <div class=\"sections\">\r\n    <a routerLink=\"/experience\"><div>Experience</div></a>\r\n    <a routerLink=\"/project\"><div>Projects</div></a>\r\n    <a routerLink=\"/publication\"><div>Publications</div></a>\r\n    <a routerLink=\"/certification\"><div>Certifications</div></a>\r\n  </div>\r\n\r\n  <div>\r\n    <h2 class=\"center\">Let's talk:</h2>\r\n    <div class=\"wrapper\">\r\n      <ul class=\"icons\">\r\n        <li>\r\n          <a href=\"mailto:shreyasakshi96@gmail.com\" target=\"_blank\"><fa name=\"envelope\"></fa></a>\r\n        </li>\r\n        <li>\r\n          <a href=\"https://twitter.com/shreyasakshi96\" target=\"_blank\"><fa name=\"twitter\"></fa></a>\r\n        </li>\r\n        <li>\r\n          <a href=\"https://www.linkedin.com/in/sakshishreya/\" target=\"_blank\"><fa name=\"linkedin\"></fa></a>\r\n        </li>\r\n        <li>\r\n          <a href=\"https://join.skype.com/invite/CfgOOPMXxRjo\" target=\"_blank\"><fa name=\"skype\"></fa></a>\r\n        </li>\r\n        <li>\r\n          <a href=\"https://t.me/SakshiShreya\" target=\"_blank\"><fa name=\"telegram\"></fa></a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n\r\n  <div>\r\n    <h2 class=\"center\">Other links:</h2>\r\n    <div class=\"wrapper\">\r\n      <ul class=\"icons\">\r\n        <li>\r\n          <a href=\"https://www.youtube.com/sakshishreya\" target=\"_blank\"><fa name=\"youtube\"></fa></a>\r\n        </li>\r\n        <li>\r\n          <a href=\"https://github.com/SakshiShreya\" target=\"_blank\"><fa name=\"github\"></fa></a>\r\n        </li>\r\n        <li>\r\n          <a href=\"https://codepen.io/shreyasakshi96/\" target=\"_blank\"><fa name=\"codepen\"></fa></a>\r\n        </li>\r\n        <li>\r\n          <a href=\"https://www.freecodecamp.org/shreyasakshi\" target=\"_blank\"><fa name=\"free-code-camp\"></fa></a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/back/back.component.ts":
/*!*********************************************!*\
  !*** ./src/app/home/back/back.component.ts ***!
  \*********************************************/
/*! exports provided: BackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackComponent", function() { return BackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/firebase.service */ "./src/app/services/firebase.service.ts");



var BackComponent = /** @class */ (function () {
    function BackComponent(fbService) {
        this.fbService = fbService;
        this.flipped = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    BackComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fbService.getData('/').subscribe(function (data) {
            _this.data = data;
            console.log(data);
        });
    };
    BackComponent.prototype.flip = function () {
        this.flipped.emit();
    };
    BackComponent.prototype.checkMobile = function () {
        var check = false;
        (function (a) {
            if (
            // tslint:disable-next-line: max-line-length
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) ||
                // tslint:disable-next-line: max-line-length
                /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) {
                check = true;
            }
        })(navigator.userAgent || navigator.vendor);
        return check;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BackComponent.prototype, "flipped", void 0);
    BackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-back',
            template: __webpack_require__(/*! ./back.component.html */ "./src/app/home/back/back.component.html"),
            styles: [__webpack_require__(/*! ./back.component.css */ "./src/app/home/back/back.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"]])
    ], BackComponent);
    return BackComponent;
}());



/***/ }),

/***/ "./src/app/home/front/front.component.css":
/*!************************************************!*\
  !*** ./src/app/home/front/front.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n  height: 100vh;\r\n  padding: 0 3%;\r\n\tbox-sizing: border-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-ms-flex-direction: column;\r\n\t    flex-direction: column;\r\n\t-ms-flex-align: center;\r\n\t    align-items: center;\r\n\t-ms-flex-pack: distribute;\r\n\t    justify-content: space-around;\r\n}\r\n\r\n.center {\r\n\ttext-align: center;\r\n}\r\n\r\n.my-pic {\r\n\theight: 40vmin;\r\n\twidth: 40vmin;\r\n\tmax-width: 250px;\r\n\tmax-height: 250px;\r\n\tborder-radius: 50%;\r\n\tborder: 1vmin solid rgb(var(--third));\r\n}\r\n\r\nheader {\r\n\tpadding: 2vh 0;\r\n}\r\n\r\n.name {\r\n\tcolor: rgb(var(--third));\r\n\ttext-align: center;\r\n}\r\n\r\nbutton {\r\n\tpadding: 10px;\r\n\tborder: none;\r\n\tborder-radius: 4px;\r\n\tbackground-color: var(--black);\r\n\ttransition: 0.5s ease-in-out;\r\n\tcolor: rgb(var(--third));\r\n}\r\n\r\nfa[name=\"arrow-down\"] {\r\n\t-ms-transform: rotate(-90deg);\r\n\t    transform: rotate(-90deg);\r\n\tdisplay: inline-block;\r\n\ttransition: 0.5s ease-in-out;\r\n}\r\n\r\nbutton:hover {\r\n\tborder-radius: 25px;\r\n}\r\n\r\nbutton:hover fa {\r\n\t-ms-transform: rotate(0);\r\n\t    transform: rotate(0);\r\n}\r\n\r\n.ctrlM {\r\n\tborder-bottom: 2px solid rgb(var(--third));\r\n\ttext-align: center;\r\n\tpadding-top: 10px;\r\n\tfont-weight: 600;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9mcm9udC9mcm9udC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7Q0FDZCxzQkFBc0I7Q0FDdEIsb0JBQWE7Q0FBYixhQUFhO0NBQ2IsMEJBQXNCO0tBQXRCLHNCQUFzQjtDQUN0QixzQkFBbUI7S0FBbkIsbUJBQW1CO0NBQ25CLHlCQUE2QjtLQUE3Qiw2QkFBNkI7QUFDOUI7O0FBRUE7Q0FDQyxrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxjQUFjO0NBQ2QsYUFBYTtDQUNiLGdCQUFnQjtDQUNoQixpQkFBaUI7Q0FDakIsa0JBQWtCO0NBQ2xCLHFDQUFxQztBQUN0Qzs7QUFFQTtDQUNDLGNBQWM7QUFDZjs7QUFFQTtDQUNDLHdCQUF3QjtDQUN4QixrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQiw4QkFBOEI7Q0FDOUIsNEJBQTRCO0NBQzVCLHdCQUF3QjtBQUN6Qjs7QUFFQTtDQUNDLDZCQUF5QjtLQUF6Qix5QkFBeUI7Q0FDekIscUJBQXFCO0NBQ3JCLDRCQUE0QjtBQUM3Qjs7QUFFQTtDQUNDLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLHdCQUFvQjtLQUFwQixvQkFBb0I7QUFDckI7O0FBRUE7Q0FDQywwQ0FBMEM7Q0FDMUMsa0JBQWtCO0NBQ2xCLGlCQUFpQjtDQUNqQixnQkFBZ0I7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2Zyb250L2Zyb250LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHBhZGRpbmc6IDAgMyU7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG5cclxuLmNlbnRlciB7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubXktcGljIHtcclxuXHRoZWlnaHQ6IDQwdm1pbjtcclxuXHR3aWR0aDogNDB2bWluO1xyXG5cdG1heC13aWR0aDogMjUwcHg7XHJcblx0bWF4LWhlaWdodDogMjUwcHg7XHJcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdGJvcmRlcjogMXZtaW4gc29saWQgcmdiKHZhcigtLXRoaXJkKSk7XHJcbn1cclxuXHJcbmhlYWRlciB7XHJcblx0cGFkZGluZzogMnZoIDA7XHJcbn1cclxuXHJcbi5uYW1lIHtcclxuXHRjb2xvcjogcmdiKHZhcigtLXRoaXJkKSk7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG5cdHBhZGRpbmc6IDEwcHg7XHJcblx0Ym9yZGVyOiBub25lO1xyXG5cdGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibGFjayk7XHJcblx0dHJhbnNpdGlvbjogMC41cyBlYXNlLWluLW91dDtcclxuXHRjb2xvcjogcmdiKHZhcigtLXRoaXJkKSk7XHJcbn1cclxuXHJcbmZhW25hbWU9XCJhcnJvdy1kb3duXCJdIHtcclxuXHR0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpO1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHR0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG5idXR0b246aG92ZXIge1xyXG5cdGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbn1cclxuXHJcbmJ1dHRvbjpob3ZlciBmYSB7XHJcblx0dHJhbnNmb3JtOiByb3RhdGUoMCk7XHJcbn1cclxuXHJcbi5jdHJsTSB7XHJcblx0Ym9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHJnYih2YXIoLS10aGlyZCkpO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRwYWRkaW5nLXRvcDogMTBweDtcclxuXHRmb250LXdlaWdodDogNjAwO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/home/front/front.component.html":
/*!*************************************************!*\
  !*** ./src/app/home/front/front.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"center\">\r\n    <img src=\"assets/Sakshi-Headshot.jpg\" class=\"my-pic\" />\r\n    <header>\r\n      <h1>Hello, I'm <span class=\"name\">Sakshi Shreya</span>.</h1>\r\n      <h1>I am a front-end developer.</h1>\r\n    </header>\r\n  </div>\r\n\r\n  <div>\r\n    <button (click)=\"flip()\">About me &nbsp;<fa name=\"arrow-down\"></fa></button>\r\n    <div *ngIf=\"!checkMobile()\" class=\"ctrlM\">(Ctrl + M)</div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/front/front.component.ts":
/*!***********************************************!*\
  !*** ./src/app/home/front/front.component.ts ***!
  \***********************************************/
/*! exports provided: FrontComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrontComponent", function() { return FrontComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FrontComponent = /** @class */ (function () {
    function FrontComponent() {
        this.flipped = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    FrontComponent.prototype.ngOnInit = function () { };
    FrontComponent.prototype.flip = function () {
        this.flipped.emit();
    };
    FrontComponent.prototype.checkMobile = function () {
        var check = false;
        (function (a) {
            if (
            // tslint:disable-next-line: max-line-length
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) ||
                // tslint:disable-next-line: max-line-length
                /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) {
                check = true;
            }
        })(navigator.userAgent || navigator.vendor);
        return check;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FrontComponent.prototype, "flipped", void 0);
    FrontComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-front',
            template: __webpack_require__(/*! ./front.component.html */ "./src/app/home/front/front.component.html"),
            styles: [__webpack_require__(/*! ./front.component.css */ "./src/app/home/front/front.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FrontComponent);
    return FrontComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".base {\r\n  perspective: 2000px;\r\n  background: rgb(var(--third));\r\n  overflow: hidden;\r\n}\r\n\r\napp-front {\r\n  display: block;\r\n  -ms-transform-origin: bottom;\r\n      transform-origin: bottom;\r\n  background: rgb(var(--first));\r\n}\r\n\r\napp-back {\r\n  display: block;\r\n  -ms-transform-origin: top;\r\n      transform-origin: top;\r\n  background: var(--white);\r\n}\r\n\r\napp-front.open {\r\n  -webkit-animation: flipFrontOpen 1s linear;\r\n          animation: flipFrontOpen 1s linear;\r\n  -webkit-animation-fill-mode: forwards;\r\n          animation-fill-mode: forwards;\r\n}\r\n\r\napp-front.close {\r\n  -webkit-animation: flipFrontClose 1s linear;\r\n          animation: flipFrontClose 1s linear;\r\n  -webkit-animation-fill-mode: forwards;\r\n          animation-fill-mode: forwards;\r\n}\r\n\r\napp-back.open {\r\n  -webkit-animation: flipContentOpen 1s linear;\r\n          animation: flipContentOpen 1s linear;\r\n  -webkit-animation-fill-mode: forwards;\r\n          animation-fill-mode: forwards;\r\n}\r\n\r\napp-back.close {\r\n  -webkit-animation: flipContentClose 1s linear;\r\n          animation: flipContentClose 1s linear;\r\n  -webkit-animation-fill-mode: forwards;\r\n          animation-fill-mode: forwards;\r\n}\r\n\r\n@-webkit-keyframes flipFrontOpen {\r\n  from {\r\n    transform: rotateX(90deg);\r\n    margin-top: -100vh;\r\n  }\r\n  to {\r\n    transform: rotateX(0deg);\r\n    margin-top: 0vh;\r\n  }\r\n}\r\n\r\n@keyframes flipFrontOpen {\r\n  from {\r\n    transform: rotateX(90deg);\r\n    margin-top: -100vh;\r\n  }\r\n  to {\r\n    transform: rotateX(0deg);\r\n    margin-top: 0vh;\r\n  }\r\n}\r\n\r\n@-webkit-keyframes flipFrontClose {\r\n  from {\r\n    transform: rotateX(0deg);\r\n    margin-top: 0vh;\r\n  }\r\n  to {\r\n    transform: rotateX(90deg);\r\n    margin-top: -100vh;\r\n  }\r\n}\r\n\r\n@keyframes flipFrontClose {\r\n  from {\r\n    transform: rotateX(0deg);\r\n    margin-top: 0vh;\r\n  }\r\n  to {\r\n    transform: rotateX(90deg);\r\n    margin-top: -100vh;\r\n  }\r\n}\r\n\r\n@-webkit-keyframes flipContentOpen {\r\n  0% {\r\n    transform: rotateX(-90deg);\r\n    margin-bottom: -100vh;\r\n    opacity: 0;\r\n    visibility: hidden;\r\n  }\r\n  10% {\r\n    opacity: 0;\r\n    visibility: visible;\r\n  }\r\n  30% {\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    transform: rotateX(0deg);\r\n    margin-bottom: 0vh;\r\n    opacity: 1;\r\n    visibility: visible;\r\n  }\r\n}\r\n\r\n@keyframes flipContentOpen {\r\n  0% {\r\n    transform: rotateX(-90deg);\r\n    margin-bottom: -100vh;\r\n    opacity: 0;\r\n    visibility: hidden;\r\n  }\r\n  10% {\r\n    opacity: 0;\r\n    visibility: visible;\r\n  }\r\n  30% {\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    transform: rotateX(0deg);\r\n    margin-bottom: 0vh;\r\n    opacity: 1;\r\n    visibility: visible;\r\n  }\r\n}\r\n\r\n@-webkit-keyframes flipContentClose {\r\n  0% {\r\n    transform: rotateX(0deg);\r\n    margin-bottom: 0vh;\r\n    opacity: 1;\r\n    visibility: visible;\r\n  }\r\n  70% {\r\n    opacity: 1;\r\n    visibility: visible;\r\n  }\r\n  90% {\r\n    opacity: 0;\r\n    visibility: hidden;\r\n  }\r\n  100% {\r\n    transform: rotateX(-90deg);\r\n    margin-bottom: -100vh;\r\n    opacity: 0;\r\n    visibility: hidden;\r\n  }\r\n}\r\n\r\n@keyframes flipContentClose {\r\n  0% {\r\n    transform: rotateX(0deg);\r\n    margin-bottom: 0vh;\r\n    opacity: 1;\r\n    visibility: visible;\r\n  }\r\n  70% {\r\n    opacity: 1;\r\n    visibility: visible;\r\n  }\r\n  90% {\r\n    opacity: 0;\r\n    visibility: hidden;\r\n  }\r\n  100% {\r\n    transform: rotateX(-90deg);\r\n    margin-bottom: -100vh;\r\n    opacity: 0;\r\n    visibility: hidden;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCw0QkFBd0I7TUFBeEIsd0JBQXdCO0VBQ3hCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCx5QkFBcUI7TUFBckIscUJBQXFCO0VBQ3JCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLDBDQUFrQztVQUFsQyxrQ0FBa0M7RUFDbEMscUNBQTZCO1VBQTdCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLDJDQUFtQztVQUFuQyxtQ0FBbUM7RUFDbkMscUNBQTZCO1VBQTdCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLDRDQUFvQztVQUFwQyxvQ0FBb0M7RUFDcEMscUNBQTZCO1VBQTdCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLDZDQUFxQztVQUFyQyxxQ0FBcUM7RUFDckMscUNBQTZCO1VBQTdCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFO0lBQ0UseUJBQXlCO0lBQ3pCLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0Usd0JBQXdCO0lBQ3hCLGVBQWU7RUFDakI7QUFDRjs7QUFUQTtFQUNFO0lBQ0UseUJBQXlCO0lBQ3pCLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0Usd0JBQXdCO0lBQ3hCLGVBQWU7RUFDakI7QUFDRjs7QUFDQTtFQUNFO0lBQ0Usd0JBQXdCO0lBQ3hCLGVBQWU7RUFDakI7RUFDQTtJQUNFLHlCQUF5QjtJQUN6QixrQkFBa0I7RUFDcEI7QUFDRjs7QUFUQTtFQUNFO0lBQ0Usd0JBQXdCO0lBQ3hCLGVBQWU7RUFDakI7RUFDQTtJQUNFLHlCQUF5QjtJQUN6QixrQkFBa0I7RUFDcEI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsMEJBQTBCO0lBQzFCLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1Ysa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLG1CQUFtQjtFQUNyQjtBQUNGOztBQXBCQTtFQUNFO0lBQ0UsMEJBQTBCO0lBQzFCLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1Ysa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLG1CQUFtQjtFQUNyQjtBQUNGOztBQUNBO0VBQ0U7SUFDRSx3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixtQkFBbUI7RUFDckI7RUFDQTtJQUNFLFVBQVU7SUFDVixtQkFBbUI7RUFDckI7RUFDQTtJQUNFLFVBQVU7SUFDVixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLDBCQUEwQjtJQUMxQixxQkFBcUI7SUFDckIsVUFBVTtJQUNWLGtCQUFrQjtFQUNwQjtBQUNGOztBQXJCQTtFQUNFO0lBQ0Usd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxVQUFVO0lBQ1Ysa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSwwQkFBMEI7SUFDMUIscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixrQkFBa0I7RUFDcEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhc2Uge1xyXG4gIHBlcnNwZWN0aXZlOiAyMDAwcHg7XHJcbiAgYmFja2dyb3VuZDogcmdiKHZhcigtLXRoaXJkKSk7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuYXBwLWZyb250IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b207XHJcbiAgYmFja2dyb3VuZDogcmdiKHZhcigtLWZpcnN0KSk7XHJcbn1cclxuXHJcbmFwcC1iYWNrIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3A7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xyXG59XHJcblxyXG5hcHAtZnJvbnQub3BlbiB7XHJcbiAgYW5pbWF0aW9uOiBmbGlwRnJvbnRPcGVuIDFzIGxpbmVhcjtcclxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcclxufVxyXG5cclxuYXBwLWZyb250LmNsb3NlIHtcclxuICBhbmltYXRpb246IGZsaXBGcm9udENsb3NlIDFzIGxpbmVhcjtcclxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcclxufVxyXG5cclxuYXBwLWJhY2sub3BlbiB7XHJcbiAgYW5pbWF0aW9uOiBmbGlwQ29udGVudE9wZW4gMXMgbGluZWFyO1xyXG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xyXG59XHJcblxyXG5hcHAtYmFjay5jbG9zZSB7XHJcbiAgYW5pbWF0aW9uOiBmbGlwQ29udGVudENsb3NlIDFzIGxpbmVhcjtcclxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcclxufVxyXG5cclxuQGtleWZyYW1lcyBmbGlwRnJvbnRPcGVuIHtcclxuICBmcm9tIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWCg5MGRlZyk7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTAwdmg7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcclxuICAgIG1hcmdpbi10b3A6IDB2aDtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBmbGlwRnJvbnRDbG9zZSB7XHJcbiAgZnJvbSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XHJcbiAgICBtYXJnaW4tdG9wOiAwdmg7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWCg5MGRlZyk7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTAwdmg7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZsaXBDb250ZW50T3BlbiB7XHJcbiAgMCUge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKC05MGRlZyk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtMTAwdmg7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIH1cclxuICAxMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgfVxyXG4gIDMwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcclxuICAgIG1hcmdpbi1ib3R0b206IDB2aDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIH1cclxufVxyXG5Aa2V5ZnJhbWVzIGZsaXBDb250ZW50Q2xvc2Uge1xyXG4gIDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcclxuICAgIG1hcmdpbi1ib3R0b206IDB2aDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIH1cclxuICA3MCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgfVxyXG4gIDkwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWCgtOTBkZWcpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTEwMHZoO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"base\">\r\n  <app-front (flipped)=\"flipped()\"></app-front>\r\n  <app-back (flipped)=\"flipped()\"></app-back>\r\n  <ng-keyboard-shortcuts [shortcuts]=\"shortcuts\"></ng-keyboard-shortcuts>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.isCover = true;
        this.shortcuts = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var base = document.querySelector('.base');
        base.style.height = '100vh';
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.shortcuts.push({
            key: ['ctrl + m'],
            label: 'Help',
            description: 'Leiond',
            command: function (e) { return _this.flipped(); },
            preventDefault: true
        });
    };
    HomeComponent.prototype.flipped = function () {
        this.isCover = !this.isCover;
        var base = document.querySelector('.base');
        var appFront = document.querySelector('app-front');
        var appBack = document.querySelector('app-back');
        if (this.isCover) {
            appFront.classList.add('open');
            appFront.classList.remove('close');
            appBack.classList.remove('open');
            appBack.classList.add('close');
            base.style.height = '100vh';
        }
        else {
            appFront.classList.add('close');
            appFront.classList.remove('open');
            appBack.classList.remove('close');
            appBack.classList.add('open');
            setTimeout(function () {
                base.style.height = 'auto';
            }, 1000);
        }
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/projects/project/project.component.css":
/*!********************************************************!*\
  !*** ./src/app/projects/project/project.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n  background-image: linear-gradient(0deg, rgba(var(--third), 0.5) 1%, transparent 2%),\r\n    linear-gradient(90deg, rgba(var(--third), 0.5) 1%, transparent 2%);\r\n  background-size: 30px 30px;\r\n  min-height: 100vh;\r\n  padding: 2em 15%;\r\n}\r\n\r\nheader {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-pack: justify;\r\n      justify-content: space-between;\r\n  -ms-flex-align: start;\r\n      align-items: flex-start;\r\n}\r\n\r\nheader a {\r\n  display: block;\r\n  border: 1px solid rgb(var(--gray));\r\n  padding: 8px 10px 5px 10px;\r\n  border-radius: 3px;\r\n  background: white;\r\n  box-shadow: 1px 1px 3px rgb(var(--gray)), -1px 1px 5px rgb(var(--gray));\r\n  text-decoration: none;\r\n}\r\n\r\n.content {\r\n  background: white;\r\n  padding: 1em;\r\n  border: 1px solid rgb(var(--gray));\r\n  border-radius: 5px;\r\n}\r\n\r\nh2 {\r\n  color: rgb(var(--third));\r\n  padding-top: 0;\r\n}\r\n\r\nh3 {\r\n  font-size: 1.5rem;\r\n  color: rgb(var(--first));\r\n}\r\n\r\n.date {\r\n  color: rgba(0, 0, 0, 0.6);\r\n  padding-bottom: 1em;\r\n}\r\n\r\n.project-link {\r\n  font-size: 1.2em;\r\n}\r\n\r\nli {\r\n  line-height: 1.5;\r\n}\r\n\r\n@media only screen and (max-width: 767px) {\r\n  .container {\r\n    padding: 4em 5%;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvcHJvamVjdC9wcm9qZWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtzRUFDb0U7RUFDcEUsMEJBQTBCO0VBQzFCLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYixzQkFBOEI7TUFBOUIsOEJBQThCO0VBQzlCLHFCQUF1QjtNQUF2Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0NBQWtDO0VBQ2xDLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHVFQUF1RTtFQUN2RSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGtDQUFrQztFQUNsQyxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0cy9wcm9qZWN0L3Byb2plY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKHZhcigtLXRoaXJkKSwgMC41KSAxJSwgdHJhbnNwYXJlbnQgMiUpLFxyXG4gICAgbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKHZhcigtLXRoaXJkKSwgMC41KSAxJSwgdHJhbnNwYXJlbnQgMiUpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMzBweCAzMHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIHBhZGRpbmc6IDJlbSAxNSU7XHJcbn1cclxuXHJcbmhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbn1cclxuXHJcbmhlYWRlciBhIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IodmFyKC0tZ3JheSkpO1xyXG4gIHBhZGRpbmc6IDhweCAxMHB4IDVweCAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCByZ2IodmFyKC0tZ3JheSkpLCAtMXB4IDFweCA1cHggcmdiKHZhcigtLWdyYXkpKTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAxZW07XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKHZhcigtLWdyYXkpKTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbmgyIHtcclxuICBjb2xvcjogcmdiKHZhcigtLXRoaXJkKSk7XHJcbiAgcGFkZGluZy10b3A6IDA7XHJcbn1cclxuXHJcbmgzIHtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBjb2xvcjogcmdiKHZhcigtLWZpcnN0KSk7XHJcbn1cclxuXHJcbi5kYXRlIHtcclxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxZW07XHJcbn1cclxuXHJcbi5wcm9qZWN0LWxpbmsge1xyXG4gIGZvbnQtc2l6ZTogMS4yZW07XHJcbn1cclxuXHJcbmxpIHtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiA0ZW0gNSU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/projects/project/project.component.html":
/*!*********************************************************!*\
  !*** ./src/app/projects/project/project.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"project\">\r\n  <div class=\"content\">\r\n    <header>\r\n      <h2>{{ project.name }}</h2>\r\n      <a routerLink=\"/project\"><fa name=\"arrow-left\"></fa> &nbsp;<span>Back</span></a>\r\n    </header>\r\n\r\n    <div class=\"date\">\r\n      {{ project.date }}\r\n    </div>\r\n    <div>\r\n      <p *ngFor=\"let desc of project.description\">{{ desc }}</p>\r\n      <p *ngIf=\"project.link\"><a [href]=\"project.link\" target=\"_blank\" class=\"project-link\">See Project</a></p>\r\n    </div>\r\n    <div class=\"technologies\">\r\n      <h3>Technologies/tools used:</h3>\r\n      <ul>\r\n        <li *ngFor=\"let tech of project.technologies\">{{ tech }}</li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/projects/project/project.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/projects/project/project.component.ts ***!
  \*******************************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _projects_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../projects.service */ "./src/app/projects/projects.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var ProjectComponent = /** @class */ (function () {
    function ProjectComponent(fbService, projService, route) {
        this.fbService = fbService;
        this.projService = projService;
        this.route = route;
    }
    ProjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.projectName = this.route.snapshot.params.id;
        console.log(this.projectName);
        if (!this.projService.Data) {
            console.log(this.subscription);
            this.subscription = this.fbService.getData('/projects').subscribe(function (data) {
                _this.data = data;
                data.forEach(function (element) {
                    var url = element.name.replace(/\s/g, '-');
                    url = url.replace(/[^a-z\d-]/gi, '');
                    element.url = url;
                });
                console.log(_this.data);
                _this.projService.Data = _this.data;
                _this.func();
            });
        }
        else {
            this.data = this.projService.Data;
            this.func();
        }
    };
    ProjectComponent.prototype.func = function () {
        var _this = this;
        this.project = this.data.find(function (element) { return element.url === _this.projectName; });
        console.log(this.project);
    };
    ProjectComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    ProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project',
            template: __webpack_require__(/*! ./project.component.html */ "./src/app/projects/project/project.component.html"),
            styles: [__webpack_require__(/*! ./project.component.css */ "./src/app/projects/project/project.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"], _projects_service__WEBPACK_IMPORTED_MODULE_3__["ProjectsService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], ProjectComponent);
    return ProjectComponent;
}());



/***/ }),

/***/ "./src/app/projects/projects.component.css":
/*!*************************************************!*\
  !*** ./src/app/projects/projects.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n  background-image: linear-gradient(0deg, rgba(var(--third), 0.5) 1%, transparent 2%),\r\n    linear-gradient(90deg, rgba(var(--third), 0.5) 1%, transparent 2%);\r\n  background-size: 30px 30px;\r\n  min-height: 100vh;\r\n  padding: 1em 15%;\r\n}\r\n\r\nheader {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-pack: justify;\r\n      justify-content: space-between;\r\n  -ms-flex-align: center;\r\n      align-items: center;\r\n}\r\n\r\nheader a {\r\n  display: block;\r\n  border: 1px solid rgb(var(--gray));\r\n  padding: 8px 10px 5px 10px;\r\n  border-radius: 3px;\r\n  background: white;\r\n  box-shadow: 1px 1px 3px rgb(var(--gray)), -1px 1px 5px rgb(var(--gray));\r\n  text-decoration: none;\r\n}\r\n\r\nh2 {\r\n  color: rgb(var(--third));\r\n}\r\n\r\nh3 {\r\n  font-size: 1.5rem;\r\n  color: rgb(var(--first));\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n}\r\n\r\n.ui.items > .item {\r\n  background: white;\r\n  border: 1px solid rgb(var(--gray));\r\n  padding-bottom: 0.5em;\r\n}\r\n\r\n.ui.items > .item > .content {\r\n  padding-right: 1em;\r\n  padding-left: 1em;\r\n}\r\n\r\n.ui.items > .item {\r\n  border-radius: 5px;\r\n}\r\n\r\n@media only screen and (max-width: 767px) {\r\n  .container {\r\n    padding: 3em 5%;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO3NFQUNvRTtFQUNwRSwwQkFBMEI7RUFDMUIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHNCQUE4QjtNQUE5Qiw4QkFBOEI7RUFDOUIsc0JBQW1CO01BQW5CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQ0FBa0M7RUFDbEMsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsdUVBQXVFO0VBQ3ZFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0NBQWtDO0VBQ2xDLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSh2YXIoLS10aGlyZCksIDAuNSkgMSUsIHRyYW5zcGFyZW50IDIlKSxcclxuICAgIGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSh2YXIoLS10aGlyZCksIDAuNSkgMSUsIHRyYW5zcGFyZW50IDIlKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDMwcHggMzBweDtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBwYWRkaW5nOiAxZW0gMTUlO1xyXG59XHJcblxyXG5oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbmhlYWRlciBhIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IodmFyKC0tZ3JheSkpO1xyXG4gIHBhZGRpbmc6IDhweCAxMHB4IDVweCAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3gtc2hhZG93OiAxcHggMXB4IDNweCByZ2IodmFyKC0tZ3JheSkpLCAtMXB4IDFweCA1cHggcmdiKHZhcigtLWdyYXkpKTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmgyIHtcclxuICBjb2xvcjogcmdiKHZhcigtLXRoaXJkKSk7XHJcbn1cclxuXHJcbmgzIHtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBjb2xvcjogcmdiKHZhcigtLWZpcnN0KSk7XHJcbn1cclxuXHJcbmEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLnVpLml0ZW1zID4gLml0ZW0ge1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYih2YXIoLS1ncmF5KSk7XHJcbiAgcGFkZGluZy1ib3R0b206IDAuNWVtO1xyXG59XHJcblxyXG4udWkuaXRlbXMgPiAuaXRlbSA+IC5jb250ZW50IHtcclxuICBwYWRkaW5nLXJpZ2h0OiAxZW07XHJcbiAgcGFkZGluZy1sZWZ0OiAxZW07XHJcbn1cclxuXHJcbi51aS5pdGVtcyA+IC5pdGVtIHtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDNlbSA1JTtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/projects/projects.component.html":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <header>\r\n    <h2>Projects</h2>\r\n    <a routerLink=\"/\"><fa name=\"arrow-left\"></fa> &nbsp;<span>Back</span></a>\r\n  </header>\r\n\r\n  <p>Click on projects to find out more.</p>\r\n  <div class=\"ui unstackable link items\">\r\n    <a [routerLink]=\"['/project', item.url]\" *ngFor=\"let item of data\" class=\"item\">\r\n      <!-- <div class=\"item\"> -->\r\n      <div class=\"content\">\r\n        <h3>{{ item.name }}</h3>\r\n        <div class=\"meta\">\r\n          <div>{{ item.date }}</div>\r\n        </div>\r\n      </div>\r\n      <!-- </div> -->\r\n    </a>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");
/* harmony import */ var _projects_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects.service */ "./src/app/projects/projects.service.ts");




var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(fbService, projService) {
        var _this = this;
        this.fbService = fbService;
        this.projService = projService;
        if (!this.projService.Data) {
            this.subscription = this.fbService.getData('/projects').subscribe(function (data) {
                _this.data = data;
                data.forEach(function (element) {
                    var url = element.name.replace(/\s/g, '-');
                    url = url.replace(/[^a-z\d-]/gi, '');
                    element.url = url;
                });
                console.log(_this.data);
                _this.projService.Data = _this.data;
            });
        }
        else {
            this.data = this.projService.Data;
        }
    }
    ProjectsComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.css */ "./src/app/projects/projects.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"], _projects_service__WEBPACK_IMPORTED_MODULE_3__["ProjectsService"]])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/projects/projects.service.ts":
/*!**********************************************!*\
  !*** ./src/app/projects/projects.service.ts ***!
  \**********************************************/
/*! exports provided: ProjectsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsService", function() { return ProjectsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProjectsService = /** @class */ (function () {
    function ProjectsService() {
    }
    Object.defineProperty(ProjectsService.prototype, "Data", {
        get: function () {
            return this.data;
        },
        set: function (data) {
            this.data = data;
        },
        enumerable: true,
        configurable: true
    });
    ProjectsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProjectsService);
    return ProjectsService;
}());



/***/ }),

/***/ "./src/app/publications/publications.component.css":
/*!*********************************************************!*\
  !*** ./src/app/publications/publications.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n  background-image: linear-gradient(0deg, rgba(var(--third), 0.5) 1%, transparent 2%),\r\n    linear-gradient(90deg, rgba(var(--third), 0.5) 1%, transparent 2%);\r\n  background-size: 30px 30px;\r\n  min-height: 100vh;\r\n  padding: 1em 15%;\r\n}\r\n\r\nheader {\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-pack: justify;\r\n      justify-content: space-between;\r\n  -ms-flex-align: center;\r\n      align-items: center;\r\n}\r\n\r\nheader a {\r\n  display: block;\r\n  border: 1px solid rgb(var(--gray));\r\n  padding: 8px 10px 5px 10px;\r\n  border-radius: 3px;\r\n  background: white;\r\n  box-shadow: 1px 1px 3px rgb(var(--gray)), -1px 1px 5px rgb(var(--gray));\r\n  text-decoration: none;\r\n}\r\n\r\nh2 {\r\n  color: rgb(var(--third));\r\n}\r\n\r\nh3 {\r\n  font-size: 1.5rem;\r\n  color: rgb(var(--first));\r\n}\r\n\r\nh4 {\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.ui.items > .item {\r\n  background: white;\r\n  border: 1px solid rgb(var(--gray));\r\n  padding-bottom: 0.5em;\r\n}\r\n\r\n.ui.items > .item > .content {\r\n  padding-left: 1em;\r\n  padding-right: 1em;\r\n}\r\n\r\n.ui.items > .item {\r\n  border-radius: 5px;\r\n}\r\n\r\n@media only screen and (max-width: 767px) {\r\n  .container {\r\n    padding: 3em 5%;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVibGljYXRpb25zL3B1YmxpY2F0aW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7c0VBQ29FO0VBQ3BFLDBCQUEwQjtFQUMxQixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2Isc0JBQThCO01BQTlCLDhCQUE4QjtFQUM5QixzQkFBbUI7TUFBbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtDQUFrQztFQUNsQywwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQix1RUFBdUU7RUFDdkUscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQ0FBa0M7RUFDbEMscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcHVibGljYXRpb25zL3B1YmxpY2F0aW9ucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDBkZWcsIHJnYmEodmFyKC0tdGhpcmQpLCAwLjUpIDElLCB0cmFuc3BhcmVudCAyJSksXHJcbiAgICBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEodmFyKC0tdGhpcmQpLCAwLjUpIDElLCB0cmFuc3BhcmVudCAyJSk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAzMHB4IDMwcHg7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgcGFkZGluZzogMWVtIDE1JTtcclxufVxyXG5cclxuaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG5oZWFkZXIgYSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKHZhcigtLWdyYXkpKTtcclxuICBwYWRkaW5nOiA4cHggMTBweCA1cHggMTBweDtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggcmdiKHZhcigtLWdyYXkpKSwgLTFweCAxcHggNXB4IHJnYih2YXIoLS1ncmF5KSk7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgY29sb3I6IHJnYih2YXIoLS10aGlyZCkpO1xyXG59XHJcblxyXG5oMyB7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgY29sb3I6IHJnYih2YXIoLS1maXJzdCkpO1xyXG59XHJcblxyXG5oNCB7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbn1cclxuXHJcbi51aS5pdGVtcyA+IC5pdGVtIHtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IodmFyKC0tZ3JheSkpO1xyXG4gIHBhZGRpbmctYm90dG9tOiAwLjVlbTtcclxufVxyXG5cclxuLnVpLml0ZW1zID4gLml0ZW0gPiAuY29udGVudCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxZW07XHJcbiAgcGFkZGluZy1yaWdodDogMWVtO1xyXG59XHJcblxyXG4udWkuaXRlbXMgPiAuaXRlbSB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAzZW0gNSU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/publications/publications.component.html":
/*!**********************************************************!*\
  !*** ./src/app/publications/publications.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <header>\r\n    <h2>Publications</h2>\r\n    <a routerLink=\"/\"><fa name=\"arrow-left\"></fa> &nbsp;<span>Back</span></a>\r\n  </header>\r\n\r\n  <div class=\"ui unstackable items\">\r\n    <div class=\"item\" *ngFor=\"let item of data\">\r\n      <div class=\"content\">\r\n        <h3>{{ item.name }}</h3>\r\n        <div class=\"description\">\r\n          <h4>{{ item.conference }}</h4>\r\n          <span>{{ item.role }}</span>\r\n        </div>\r\n        <div class=\"meta\">\r\n          <span>{{ item.location }} &nbsp;| &nbsp;{{ item.date }}</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/publications/publications.component.ts":
/*!********************************************************!*\
  !*** ./src/app/publications/publications.component.ts ***!
  \********************************************************/
/*! exports provided: PublicationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicationsComponent", function() { return PublicationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_firebase_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/firebase.service */ "./src/app/services/firebase.service.ts");



var PublicationsComponent = /** @class */ (function () {
    function PublicationsComponent(fbService) {
        var _this = this;
        this.fbService = fbService;
        this.subscription = this.fbService.getData('/publications').subscribe(function (data) {
            _this.data = data;
            console.log(_this.data);
        });
    }
    PublicationsComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    PublicationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-publications',
            template: __webpack_require__(/*! ./publications.component.html */ "./src/app/publications/publications.component.html"),
            styles: [__webpack_require__(/*! ./publications.component.css */ "./src/app/publications/publications.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_firebase_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseService"]])
    ], PublicationsComponent);
    return PublicationsComponent;
}());



/***/ }),

/***/ "./src/app/services/firebase.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/firebase.service.ts ***!
  \**********************************************/
/*! exports provided: FirebaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseService", function() { return FirebaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var FirebaseService = /** @class */ (function () {
    function FirebaseService(http) {
        this.http = http;
    }
    FirebaseService.prototype.getData = function (path) {
        return this.http.get("https://portfolio-dd5f6.firebaseio.com" + path + ".json");
    };
    FirebaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FirebaseService);
    return FirebaseService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\code\angular\portfolio-2019\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map