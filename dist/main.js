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
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _pages_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/sign-in/sign-in.component */ "./src/app/pages/sign-in/sign-in.component.ts");
/* harmony import */ var _components_cuisines_addcuisines_addcuisines_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/cuisines/addcuisines/addcuisines.component */ "./src/app/components/cuisines/addcuisines/addcuisines.component.ts");
/* harmony import */ var _components_cuisines_view_cuisines_view_cuisines_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/cuisines/view-cuisines/view-cuisines.component */ "./src/app/components/cuisines/view-cuisines/view-cuisines.component.ts");
/* harmony import */ var _components_cuisines_editcuisines_editcuisines_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/cuisines/editcuisines/editcuisines.component */ "./src/app/components/cuisines/editcuisines/editcuisines.component.ts");
/* harmony import */ var _components_dresses_add_dress_add_dress_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/dresses/add-dress/add-dress.component */ "./src/app/components/dresses/add-dress/add-dress.component.ts");
/* harmony import */ var _components_dresses_view_dresses_view_dresses_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/dresses/view-dresses/view-dresses.component */ "./src/app/components/dresses/view-dresses/view-dresses.component.ts");
/* harmony import */ var _components_dresses_editdress_editdress_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/dresses/editdress/editdress.component */ "./src/app/components/dresses/editdress/editdress.component.ts");
/* harmony import */ var _components_views_addviews_addviewscomponent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/views/addviews/addviewscomponent */ "./src/app/components/views/addviews/addviewscomponent.ts");
/* harmony import */ var _components_views_editview_editviews_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/views/editview/editviews.component */ "./src/app/components/views/editview/editviews.component.ts");
/* harmony import */ var _components_views_viewattractions_viewattractions_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/views/viewattractions/viewattractions.component */ "./src/app/components/views/viewattractions/viewattractions.component.ts");
/* harmony import */ var _components_create_admin_create_admin_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/create-admin/create-admin.component */ "./src/app/components/create-admin/create-admin.component.ts");
/* harmony import */ var _components_view_admins_view_admins_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/view-admins/view-admins.component */ "./src/app/components/view-admins/view-admins.component.ts");
/* harmony import */ var _components_reviews_reviews_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/reviews/reviews.component */ "./src/app/components/reviews/reviews.component.ts");
/* harmony import */ var _components_hotels_add_hotel_add_hotel_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/hotels/add-hotel/add-hotel.component */ "./src/app/components/hotels/add-hotel/add-hotel.component.ts");
/* harmony import */ var _components_hotels_view_hotel_view_hotel_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/hotels/view-hotel/view-hotel.component */ "./src/app/components/hotels/view-hotel/view-hotel.component.ts");
/* harmony import */ var _components_hotels_edit_hotel_edithotel_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/hotels/edit-hotel/edithotel.component */ "./src/app/components/hotels/edit-hotel/edithotel.component.ts");
/* harmony import */ var _components_manage_bookings_manage_bookings_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/manage-bookings/manage-bookings.component */ "./src/app/components/manage-bookings/manage-bookings.component.ts");





















var routes = [
    {
        path: 'signin', component: _pages_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_4__["SignInComponent"]
    },
    {
        path: 'add-cuisine', component: _components_cuisines_addcuisines_addcuisines_component__WEBPACK_IMPORTED_MODULE_5__["AddcuisinesComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: 'view-cuisines', component: _components_cuisines_view_cuisines_view_cuisines_component__WEBPACK_IMPORTED_MODULE_6__["ViewCuisinesComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: 'edit-cuisine/:id', component: _components_cuisines_editcuisines_editcuisines_component__WEBPACK_IMPORTED_MODULE_7__["EditCuisinesComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: 'add-dress', component: _components_dresses_add_dress_add_dress_component__WEBPACK_IMPORTED_MODULE_8__["AddDressComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: 'view-dresses', component: _components_dresses_view_dresses_view_dresses_component__WEBPACK_IMPORTED_MODULE_9__["ViewDressComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: 'edit-dress/:id', component: _components_dresses_editdress_editdress_component__WEBPACK_IMPORTED_MODULE_10__["EditDressComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: 'add-attraction', component: _components_views_addviews_addviewscomponent__WEBPACK_IMPORTED_MODULE_11__["AddviewsComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: 'view-attractions', component: _components_views_viewattractions_viewattractions_component__WEBPACK_IMPORTED_MODULE_13__["ViewAttractionsComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: 'edit-attractions/:id', component: _components_views_editview_editviews_component__WEBPACK_IMPORTED_MODULE_12__["EditViewComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: 'create-admin', component: _components_create_admin_create_admin_component__WEBPACK_IMPORTED_MODULE_14__["CreateAdminComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: 'view-admins', component: _components_view_admins_view_admins_component__WEBPACK_IMPORTED_MODULE_15__["ViewAdminsComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: 'reviews', component: _components_reviews_reviews_component__WEBPACK_IMPORTED_MODULE_16__["ReviewsComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: '', component: _components_cuisines_view_cuisines_view_cuisines_component__WEBPACK_IMPORTED_MODULE_6__["ViewCuisinesComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: 'add-hotel', component: _components_hotels_add_hotel_add_hotel_component__WEBPACK_IMPORTED_MODULE_17__["AddHotelComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: 'view-hotels', component: _components_hotels_view_hotel_view_hotel_component__WEBPACK_IMPORTED_MODULE_18__["ViewHotelComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: 'edit-hotel/:id', component: _components_hotels_edit_hotel_edithotel_component__WEBPACK_IMPORTED_MODULE_19__["EditHotelComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
    {
        path: 'manage-bookings', component: _components_manage_bookings_manage_bookings_component__WEBPACK_IMPORTED_MODULE_20__["ManageBookingsComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
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

module.exports = ".noOutline{\n    outline: none !important;\n}\n.mb-2{\n    margin-bottom: 10px;\n}\n.w-100{\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm9PdXRsaW5le1xuICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbn1cbi5tYi0ye1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4udy0xMDB7XG4gICAgd2lkdGg6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"this.Auth.isLoggedin\">\n        <mat-drawer-container class=\"w-100\">\n                <mat-drawer mode=\"side\" opened style=\"width: 20%; position: fixed; left: 0; bottom: 0; padding: 15px;\"\n                        class=\"bg-light p-2\">\n                        <div style=\"padding: 25px;\">\n                                <img src='./assets/images/Logo.png' width=\"100%\" />\n                        </div>\n                        <!-- <button mat-raised-button class=\"w-100 mb-2\">\n                        View Statistics\n                </button> -->\n                        <mat-expansion-panel class=\"mb-2\">\n                                <mat-expansion-panel-header>\n                                        <mat-panel-title>\n                                                Posts\n                                        </mat-panel-title>\n                                </mat-expansion-panel-header>\n\n                                <button mat-stroked-button class=\"w-100 mb-2\" routerLink='view-cuisines'>\n                                        Cuisines\n                                </button>\n                                <button mat-stroked-button class=\"w-100 mb-2\" routerLink='view-dresses'>\n                                        Dress\n                                </button>\n                                <button mat-stroked-button class=\"w-100 mb-2\" routerLink='view-attractions'>\n                                        Views\n                                </button>\n                        </mat-expansion-panel>\n                        <mat-expansion-panel class=\"mb-2\">\n                                <mat-expansion-panel-header>\n                                        <mat-panel-title>\n                                                Admin\n                                        </mat-panel-title>\n                                </mat-expansion-panel-header>\n                                <button mat-stroked-button class=\"w-100 mb-2\" routerLink='create-admin'>\n                                        Create Admin\n                                </button>\n                                <button mat-stroked-button class=\"w-100 mb-2\" routerLink='view-admins'>\n                                        View Admins\n                                </button>\n                        </mat-expansion-panel>\n                        <mat-expansion-panel class=\"mb-2\">\n                                <mat-expansion-panel-header>\n                                        <mat-panel-title>\n                                                Hotels\n                                        </mat-panel-title>\n                                </mat-expansion-panel-header>\n                                <button mat-stroked-button class=\"w-100 mb-2\" routerLink='view-hotels'>\n                                        Hotels list\n                                </button>\n                                <button mat-stroked-button class=\"w-100 mb-2\" routerLink='manage-bookings'>\n                                        Hotel bookings\n                                </button>\n                        </mat-expansion-panel>\n                        <button mat-raised-button class=\"w-100 mb-2\" routerLink='reviews'>\n                                Reviews\n                        </button>\n                </mat-drawer>\n                <mat-drawer-content class=\"bg-white p-4\">\n                        <mat-toolbar>\n                                <mat-toolbar-row>\n                                        <div style=\"text-align: right; width: 100%;\">\n                                                <button mat-button style=\"color: red;\" (click)=\"signOut()\">\n                                                        Sign Out\n                                                </button>\n                                        </div>\n                                </mat-toolbar-row>\n                        </mat-toolbar>\n                        <router-outlet></router-outlet>\n                </mat-drawer-content>\n        </mat-drawer-container>\n</ng-container>\n<ng-container *ngIf=\"!this.Auth.isLoggedin\">\n        <app-sign-in></app-sign-in>\n</ng-container>"

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
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(Auth) {
        this.Auth = Auth;
        this.title = 'client-side';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.signOut = function () {
        this.Auth.logout();
        console.log(this.Auth.isLoggedin);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./material-module */ "./src/app/material-module.ts");
/* harmony import */ var _components_cuisines_addcuisines_addcuisines_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/cuisines/addcuisines/addcuisines.component */ "./src/app/components/cuisines/addcuisines/addcuisines.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _pages_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/sign-in/sign-in.component */ "./src/app/pages/sign-in/sign-in.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_token_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/token.interceptor */ "./src/app/services/token.interceptor.ts");
/* harmony import */ var _components_cuisines_view_cuisines_view_cuisines_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/cuisines/view-cuisines/view-cuisines.component */ "./src/app/components/cuisines/view-cuisines/view-cuisines.component.ts");
/* harmony import */ var _components_cuisines_editcuisines_editcuisines_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/cuisines/editcuisines/editcuisines.component */ "./src/app/components/cuisines/editcuisines/editcuisines.component.ts");
/* harmony import */ var _components_posts_addpost_addpost_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/posts/addpost/addpost.component */ "./src/app/components/posts/addpost/addpost.component.ts");
/* harmony import */ var _components_posts_editpost_editpost_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/posts/editpost/editpost.component */ "./src/app/components/posts/editpost/editpost.component.ts");
/* harmony import */ var _components_posts_viewposts_viewposts_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/posts/viewposts/viewposts.component */ "./src/app/components/posts/viewposts/viewposts.component.ts");
/* harmony import */ var _components_posts_postcard_postcard_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/posts/postcard/postcard.component */ "./src/app/components/posts/postcard/postcard.component.ts");
/* harmony import */ var _services_url_refine_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/url-refine.service */ "./src/app/services/url-refine.service.ts");
/* harmony import */ var _components_dresses_add_dress_add_dress_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/dresses/add-dress/add-dress.component */ "./src/app/components/dresses/add-dress/add-dress.component.ts");
/* harmony import */ var _components_dresses_editdress_editdress_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/dresses/editdress/editdress.component */ "./src/app/components/dresses/editdress/editdress.component.ts");
/* harmony import */ var _components_dresses_view_dresses_view_dresses_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/dresses/view-dresses/view-dresses.component */ "./src/app/components/dresses/view-dresses/view-dresses.component.ts");
/* harmony import */ var _components_views_addviews_addviewscomponent__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/views/addviews/addviewscomponent */ "./src/app/components/views/addviews/addviewscomponent.ts");
/* harmony import */ var _components_views_editview_editviews_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/views/editview/editviews.component */ "./src/app/components/views/editview/editviews.component.ts");
/* harmony import */ var _components_views_viewattractions_viewattractions_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/views/viewattractions/viewattractions.component */ "./src/app/components/views/viewattractions/viewattractions.component.ts");
/* harmony import */ var _components_create_admin_create_admin_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/create-admin/create-admin.component */ "./src/app/components/create-admin/create-admin.component.ts");
/* harmony import */ var _components_view_admins_view_admins_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/view-admins/view-admins.component */ "./src/app/components/view-admins/view-admins.component.ts");
/* harmony import */ var _components_reviews_reviews_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/reviews/reviews.component */ "./src/app/components/reviews/reviews.component.ts");
/* harmony import */ var _components_hotels_add_hotel_add_hotel_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/hotels/add-hotel/add-hotel.component */ "./src/app/components/hotels/add-hotel/add-hotel.component.ts");
/* harmony import */ var _components_hotels_view_hotel_view_hotel_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/hotels/view-hotel/view-hotel.component */ "./src/app/components/hotels/view-hotel/view-hotel.component.ts");
/* harmony import */ var _components_hotels_edit_hotel_edithotel_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/hotels/edit-hotel/edithotel.component */ "./src/app/components/hotels/edit-hotel/edithotel.component.ts");
/* harmony import */ var _components_manage_bookings_manage_bookings_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/manage-bookings/manage-bookings.component */ "./src/app/components/manage-bookings/manage-bookings.component.ts");

































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_cuisines_addcuisines_addcuisines_component__WEBPACK_IMPORTED_MODULE_8__["AddcuisinesComponent"],
                _pages_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_10__["SignInComponent"],
                _components_cuisines_view_cuisines_view_cuisines_component__WEBPACK_IMPORTED_MODULE_13__["ViewCuisinesComponent"],
                _components_cuisines_editcuisines_editcuisines_component__WEBPACK_IMPORTED_MODULE_14__["EditCuisinesComponent"],
                _components_dresses_add_dress_add_dress_component__WEBPACK_IMPORTED_MODULE_20__["AddDressComponent"],
                _components_dresses_editdress_editdress_component__WEBPACK_IMPORTED_MODULE_21__["EditDressComponent"],
                _components_dresses_view_dresses_view_dresses_component__WEBPACK_IMPORTED_MODULE_22__["ViewDressComponent"],
                _components_posts_addpost_addpost_component__WEBPACK_IMPORTED_MODULE_15__["AddpostComponent"],
                _components_posts_editpost_editpost_component__WEBPACK_IMPORTED_MODULE_16__["EditpostComponent"],
                _components_posts_viewposts_viewposts_component__WEBPACK_IMPORTED_MODULE_17__["ViewpostsComponent"],
                _components_posts_postcard_postcard_component__WEBPACK_IMPORTED_MODULE_18__["PostcardComponent"],
                _components_views_addviews_addviewscomponent__WEBPACK_IMPORTED_MODULE_23__["AddviewsComponent"],
                _components_views_editview_editviews_component__WEBPACK_IMPORTED_MODULE_24__["EditViewComponent"],
                _components_views_viewattractions_viewattractions_component__WEBPACK_IMPORTED_MODULE_25__["ViewAttractionsComponent"],
                _components_create_admin_create_admin_component__WEBPACK_IMPORTED_MODULE_26__["CreateAdminComponent"],
                _components_view_admins_view_admins_component__WEBPACK_IMPORTED_MODULE_27__["ViewAdminsComponent"],
                _components_reviews_reviews_component__WEBPACK_IMPORTED_MODULE_28__["ReviewsComponent"],
                _components_hotels_add_hotel_add_hotel_component__WEBPACK_IMPORTED_MODULE_29__["AddHotelComponent"],
                _components_hotels_edit_hotel_edithotel_component__WEBPACK_IMPORTED_MODULE_31__["EditHotelComponent"],
                _components_hotels_view_hotel_view_hotel_component__WEBPACK_IMPORTED_MODULE_30__["ViewHotelComponent"],
                _components_manage_bookings_manage_bookings_component__WEBPACK_IMPORTED_MODULE_32__["ManageBookingsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"]
            ],
            providers: [
                _services_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"],
                _services_url_refine_service__WEBPACK_IMPORTED_MODULE_19__["UrlRefineService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _services_token_interceptor__WEBPACK_IMPORTED_MODULE_12__["TokenInterceptor"],
                    multi: true
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/create-admin/create-admin.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/create-admin/create-admin.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3JlYXRlLWFkbWluL2NyZWF0ZS1hZG1pbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/create-admin/create-admin.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/create-admin/create-admin.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin: 50px;\">\n  <mat-card>\n    <h1 class=\"mat-display-1\">Create Admin</h1>\n    <p>\n      Add credentials for new admin\n    </p>\n    <form class=\"form\" #form=\"ngForm\" (ngSubmit)=\"onSubmit(form)\">\n      <mat-form-field>\n        <input matInput required type=\"text\" minlength=\"0\" maxlength=\"300\" ngModel name=\"Name\" #Name='ngModel'\n          placeholder=\"Name\" />\n      </mat-form-field>\n      <br>\n      <mat-form-field>\n        <input matInput required type=\"email\" minlength=\"0\" maxlength=\"300\" ngModel name=\"Email\" #Email='ngModel'\n          placeholder=\"Email\"  pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" />\n      </mat-form-field>\n      <br>\n      <mat-form-field>\n        <input matInput required type=\"password\" minlength=\"0\" maxlength=\"300\" ngModel name=\"Password\" #Password='ngModel'\n          placeholder=\"Password\" />\n      </mat-form-field>\n      <br>\n      <mat-checkbox ngModel name=\"Super\">\n        Super Admin\n      </mat-checkbox>\n      <br>\n      <button [disabled]=\"!Name.valid || !Email.valid ||  !Password.valid\" mat-raised-button\n      color=\"primary\" style=\"margin-top: 10px;\">\n        Submit\n      </button>\n    </form>\n  </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/components/create-admin/create-admin.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/create-admin/create-admin.component.ts ***!
  \*******************************************************************/
/*! exports provided: CreateAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateAdminComponent", function() { return CreateAdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");




var CreateAdminComponent = /** @class */ (function () {
    function CreateAdminComponent(http, _snackBar) {
        this.http = http;
        this._snackBar = _snackBar;
    }
    CreateAdminComponent.prototype.openSnackBar = function (message, action) {
        this._snackBar.open(message, action, {
            duration: 5000,
        });
    };
    CreateAdminComponent.prototype.ngOnInit = function () {
    };
    CreateAdminComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.http.post('/api/admin', {
            name: form.value.Name,
            email: form.value.Email,
            password: form.value.Password,
            authorizationLevel: form.value.Super ? 1 : 5
        }).subscribe(function (obj) {
            console.log(obj);
            if (obj) {
                _this.openSnackBar('Admin Created', 'Close');
            }
        }, function (err) {
            console.log(err.error.Reason);
            var msg = err.error.Reason;
            _this.openSnackBar(msg, 'Close');
        });
    };
    CreateAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-create-admin',
            template: __webpack_require__(/*! ./create-admin.component.html */ "./src/app/components/create-admin/create-admin.component.html"),
            styles: [__webpack_require__(/*! ./create-admin.component.css */ "./src/app/components/create-admin/create-admin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], CreateAdminComponent);
    return CreateAdminComponent;
}());



/***/ }),

/***/ "./src/app/components/cuisines/addcuisines/addcuisines.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/components/cuisines/addcuisines/addcuisines.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=\"file\"] {\n    display: none;\n}\n.custom-file-upload {\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jdWlzaW5lcy9hZGRjdWlzaW5lcy9hZGRjdWlzaW5lcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3Vpc2luZXMvYWRkY3Vpc2luZXMvYWRkY3Vpc2luZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0W3R5cGU9XCJmaWxlXCJdIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuLmN1c3RvbS1maWxlLXVwbG9hZCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/cuisines/addcuisines/addcuisines.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/components/cuisines/addcuisines/addcuisines.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin: 50px;\">\n    <mat-card>\n        <h1 class=\"mat-display-1\" style=\"margin: 15px;\">Add Cuisine</h1>\n        <div style=\"margin: 15px;\">\n            <app-addpost variant='cuisine'></app-addpost>\n        </div>\n    </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/components/cuisines/addcuisines/addcuisines.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/cuisines/addcuisines/addcuisines.component.ts ***!
  \**************************************************************************/
/*! exports provided: AddcuisinesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddcuisinesComponent", function() { return AddcuisinesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_url_refine_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/url-refine.service */ "./src/app/services/url-refine.service.ts");



var AddcuisinesComponent = /** @class */ (function () {
    function AddcuisinesComponent(refineurl) {
        this.refineurl = refineurl;
    }
    AddcuisinesComponent.prototype.ngOnInit = function () {
    };
    AddcuisinesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addcuisines',
            template: __webpack_require__(/*! ./addcuisines.component.html */ "./src/app/components/cuisines/addcuisines/addcuisines.component.html"),
            styles: [__webpack_require__(/*! ./addcuisines.component.css */ "./src/app/components/cuisines/addcuisines/addcuisines.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_url_refine_service__WEBPACK_IMPORTED_MODULE_2__["UrlRefineService"]])
    ], AddcuisinesComponent);
    return AddcuisinesComponent;
}());



/***/ }),

/***/ "./src/app/components/cuisines/editcuisines/editcuisines.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/components/cuisines/editcuisines/editcuisines.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3Vpc2luZXMvZWRpdGN1aXNpbmVzL2VkaXRjdWlzaW5lcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/cuisines/editcuisines/editcuisines.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/components/cuisines/editcuisines/editcuisines.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin: 50px;\">\n    <mat-card>\n        <h1 class=\"mat-display-1\" style=\"margin: 15px;\">Edit Cuisine</h1>\n        <div style=\"margin: 15px;\" >\n            <app-editpost variant='cuisine' id={{this.id}}></app-editpost>\n        </div>\n    </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/components/cuisines/editcuisines/editcuisines.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/cuisines/editcuisines/editcuisines.component.ts ***!
  \****************************************************************************/
/*! exports provided: EditCuisinesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCuisinesComponent", function() { return EditCuisinesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var EditCuisinesComponent = /** @class */ (function () {
    function EditCuisinesComponent(_DomSanitizationService, http, router, route) {
        this._DomSanitizationService = _DomSanitizationService;
        this.http = http;
        this.router = router;
        this.route = route;
    }
    EditCuisinesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = params.id;
            console.log(params);
        });
    };
    EditCuisinesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editcuisines',
            template: __webpack_require__(/*! ./editcuisines.component.html */ "./src/app/components/cuisines/editcuisines/editcuisines.component.html"),
            styles: [__webpack_require__(/*! ./editcuisines.component.css */ "./src/app/components/cuisines/editcuisines/editcuisines.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], EditCuisinesComponent);
    return EditCuisinesComponent;
}());



/***/ }),

/***/ "./src/app/components/cuisines/view-cuisines/view-cuisines.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/components/cuisines/view-cuisines/view-cuisines.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY3Vpc2luZXMvdmlldy1jdWlzaW5lcy92aWV3LWN1aXNpbmVzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/cuisines/view-cuisines/view-cuisines.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/cuisines/view-cuisines/view-cuisines.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin: 50px;\">\n    <mat-card>\n        <h1 class=\"mat-display-1\" style=\"margin: 15px;\">Cuisines</h1>\n        <app-viewposts variant='cuisine'></app-viewposts>\n    </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/components/cuisines/view-cuisines/view-cuisines.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/cuisines/view-cuisines/view-cuisines.component.ts ***!
  \******************************************************************************/
/*! exports provided: ViewCuisinesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewCuisinesComponent", function() { return ViewCuisinesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ViewCuisinesComponent = /** @class */ (function () {
    function ViewCuisinesComponent(http) {
        this.http = http;
        this.posts = null;
    }
    ViewCuisinesComponent.prototype.ngOnInit = function () {
    };
    ViewCuisinesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-cuisines',
            template: __webpack_require__(/*! ./view-cuisines.component.html */ "./src/app/components/cuisines/view-cuisines/view-cuisines.component.html"),
            styles: [__webpack_require__(/*! ./view-cuisines.component.css */ "./src/app/components/cuisines/view-cuisines/view-cuisines.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ViewCuisinesComponent);
    return ViewCuisinesComponent;
}());



/***/ }),

/***/ "./src/app/components/dresses/add-dress/add-dress.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/dresses/add-dress/add-dress.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZHJlc3Nlcy9hZGQtZHJlc3MvYWRkLWRyZXNzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/dresses/add-dress/add-dress.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/dresses/add-dress/add-dress.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin: 50px;\">\n    <mat-card>\n        <h1 class=\"mat-display-1\" style=\"margin: 15px;\">Add Dress</h1>\n        <div style=\"margin: 15px;\">\n            <app-addpost variant='dress'></app-addpost>\n        </div>\n    </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/components/dresses/add-dress/add-dress.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/dresses/add-dress/add-dress.component.ts ***!
  \*********************************************************************/
/*! exports provided: AddDressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDressComponent", function() { return AddDressComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AddDressComponent = /** @class */ (function () {
    function AddDressComponent() {
    }
    AddDressComponent.prototype.ngOnInit = function () {
    };
    AddDressComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-dress',
            template: __webpack_require__(/*! ./add-dress.component.html */ "./src/app/components/dresses/add-dress/add-dress.component.html"),
            styles: [__webpack_require__(/*! ./add-dress.component.css */ "./src/app/components/dresses/add-dress/add-dress.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AddDressComponent);
    return AddDressComponent;
}());



/***/ }),

/***/ "./src/app/components/dresses/editdress/editdress.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/dresses/editdress/editdress.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZHJlc3Nlcy9lZGl0ZHJlc3MvZWRpdGRyZXNzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/dresses/editdress/editdress.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/dresses/editdress/editdress.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin: 50px;\">\n    <mat-card>\n        <h1 class=\"mat-display-1\" style=\"margin: 15px;\">Edit Dress</h1>\n        <div style=\"margin: 15px;\" >\n            <app-editpost variant='dress' id={{this.id}}></app-editpost>\n        </div>\n    </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/components/dresses/editdress/editdress.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/dresses/editdress/editdress.component.ts ***!
  \*********************************************************************/
/*! exports provided: EditDressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDressComponent", function() { return EditDressComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var EditDressComponent = /** @class */ (function () {
    function EditDressComponent(route) {
        this.route = route;
    }
    EditDressComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = params.id;
            console.log(params);
        });
    };
    EditDressComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editdress',
            template: __webpack_require__(/*! ./editdress.component.html */ "./src/app/components/dresses/editdress/editdress.component.html"),
            styles: [__webpack_require__(/*! ./editdress.component.css */ "./src/app/components/dresses/editdress/editdress.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], EditDressComponent);
    return EditDressComponent;
}());



/***/ }),

/***/ "./src/app/components/dresses/view-dresses/view-dresses.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/dresses/view-dresses/view-dresses.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZHJlc3Nlcy92aWV3LWRyZXNzZXMvdmlldy1kcmVzc2VzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/dresses/view-dresses/view-dresses.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/dresses/view-dresses/view-dresses.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin: 50px;\">\n    <mat-card>\n        <h1 class=\"mat-display-1\" style=\"margin: 15px;\">Dresses</h1>\n        <app-viewposts variant='dress'></app-viewposts>\n    </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/components/dresses/view-dresses/view-dresses.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/dresses/view-dresses/view-dresses.component.ts ***!
  \***************************************************************************/
/*! exports provided: ViewDressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewDressComponent", function() { return ViewDressComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ViewDressComponent = /** @class */ (function () {
    function ViewDressComponent(http) {
        this.http = http;
        this.posts = null;
    }
    ViewDressComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('api/posts/dresses').subscribe(function (obj) {
            console.log("from obj " + obj);
            console.log(obj);
            _this.posts = obj;
        }, function (err) {
            console.log(err);
        });
    };
    ViewDressComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-dresses',
            template: __webpack_require__(/*! ./view-dresses.component.html */ "./src/app/components/dresses/view-dresses/view-dresses.component.html"),
            styles: [__webpack_require__(/*! ./view-dresses.component.css */ "./src/app/components/dresses/view-dresses/view-dresses.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ViewDressComponent);
    return ViewDressComponent;
}());



/***/ }),

/***/ "./src/app/components/hotels/add-hotel/add-hotel.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/components/hotels/add-hotel/add-hotel.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG90ZWxzL2FkZC1ob3RlbC9hZGQtaG90ZWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/hotels/add-hotel/add-hotel.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/components/hotels/add-hotel/add-hotel.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin: 50px;\">\n    <mat-card>\n        <h1 class=\"mat-display-1\" style=\"margin: 15px;\">Add New Hotel</h1>\n        <div style=\"margin: 15px;\">\n            <app-addpost variant='hotel'></app-addpost>\n        </div>\n    </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/components/hotels/add-hotel/add-hotel.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/hotels/add-hotel/add-hotel.component.ts ***!
  \********************************************************************/
/*! exports provided: AddHotelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddHotelComponent", function() { return AddHotelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AddHotelComponent = /** @class */ (function () {
    function AddHotelComponent() {
    }
    AddHotelComponent.prototype.ngOnInit = function () {
    };
    AddHotelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-hotel',
            template: __webpack_require__(/*! ./add-hotel.component.html */ "./src/app/components/hotels/add-hotel/add-hotel.component.html"),
            styles: [__webpack_require__(/*! ./add-hotel.component.css */ "./src/app/components/hotels/add-hotel/add-hotel.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AddHotelComponent);
    return AddHotelComponent;
}());



/***/ }),

/***/ "./src/app/components/hotels/edit-hotel/edithotel.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/hotels/edit-hotel/edithotel.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG90ZWxzL2VkaXQtaG90ZWwvZWRpdGhvdGVsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/hotels/edit-hotel/edithotel.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/hotels/edit-hotel/edithotel.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin: 50px;\">\n    <mat-card>\n        <h1 class=\"mat-display-1\" style=\"margin: 15px;\">Edit Hotel</h1>\n        <div style=\"margin: 15px;\" >\n            <app-editpost variant='hotel' id={{this.id}}></app-editpost>\n        </div>\n    </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/components/hotels/edit-hotel/edithotel.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/hotels/edit-hotel/edithotel.component.ts ***!
  \*********************************************************************/
/*! exports provided: EditHotelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditHotelComponent", function() { return EditHotelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var EditHotelComponent = /** @class */ (function () {
    function EditHotelComponent(route) {
        this.route = route;
    }
    EditHotelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = params.id;
            console.log(params);
        });
    };
    EditHotelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-hotel',
            template: __webpack_require__(/*! ./edithotel.component.html */ "./src/app/components/hotels/edit-hotel/edithotel.component.html"),
            styles: [__webpack_require__(/*! ./edithotel.component.css */ "./src/app/components/hotels/edit-hotel/edithotel.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], EditHotelComponent);
    return EditHotelComponent;
}());



/***/ }),

/***/ "./src/app/components/hotels/view-hotel/view-hotel.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/components/hotels/view-hotel/view-hotel.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG90ZWxzL3ZpZXctaG90ZWwvdmlldy1ob3RlbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/hotels/view-hotel/view-hotel.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/hotels/view-hotel/view-hotel.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin: 50px;\">\n    <mat-card>\n        <h1 class=\"mat-display-1\" style=\"margin: 15px;\">Hotel</h1>\n        <app-viewposts variant='hotel'></app-viewposts>\n    </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/components/hotels/view-hotel/view-hotel.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/hotels/view-hotel/view-hotel.component.ts ***!
  \**********************************************************************/
/*! exports provided: ViewHotelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewHotelComponent", function() { return ViewHotelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ViewHotelComponent = /** @class */ (function () {
    function ViewHotelComponent(http) {
        this.http = http;
        this.posts = null;
    }
    ViewHotelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('api/posts/dresses').subscribe(function (obj) {
            console.log("from obj " + obj);
            console.log(obj);
            _this.posts = obj;
        }, function (err) {
            console.log(err);
        });
    };
    ViewHotelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-hotel',
            template: __webpack_require__(/*! ./view-hotel.component.html */ "./src/app/components/hotels/view-hotel/view-hotel.component.html"),
            styles: [__webpack_require__(/*! ./view-hotel.component.css */ "./src/app/components/hotels/view-hotel/view-hotel.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ViewHotelComponent);
    return ViewHotelComponent;
}());



/***/ }),

/***/ "./src/app/components/manage-bookings/manage-bookings.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/manage-bookings/manage-bookings.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFuYWdlLWJvb2tpbmdzL21hbmFnZS1ib29raW5ncy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/manage-bookings/manage-bookings.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/manage-bookings/manage-bookings.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin: 50px;\">\n  <mat-card>\n    <h1 class=\"mat-display-1\">\n      Manage hotel works\n    </h1>\n    <ng-container *ngFor=\"let item of data;\">\n      <mat-card style=\"margin-bottom: 10px;\">\n        <mat-grid-list cols=\"6\" rowHeight='220px'>\n          <mat-grid-tile [colspan]=\"2\">\n            <div>\n              <strong>\n                Client Details\n              </strong>\n              <p>\n                Name : {{item.userId.name}}\n              </p>\n              <p>\n                Email : {{item.userId.email}}\n              </p>\n              <p>\n                Phone Number : {{item.phoneNumber}}\n              </p>\n            </div>\n          </mat-grid-tile>\n          <mat-grid-tile [colspan]=\"2\">\n            <div>\n              <strong>\n                Booking Details\n              </strong>\n              <p>\n                Hotel Name : {{item.hotelId.title}}\n              </p>\n              <p>\n                Adults : {{item.Adults}}\n              </p>\n              <p>\n                Children : {{item.Children}}\n              </p>\n              <p>\n                Booking from :\n                {{item.bookingDate.from.day}}-{{item.bookingDate.from.month}}-{{item.bookingDate.from.year}}\n                until : {{item.bookingDate.until.day}}-{{item.bookingDate.until.month}}-{{item.bookingDate.until.year}}\n              </p>\n            </div>\n          </mat-grid-tile>\n          <mat-grid-tile [colspan]=\"2\">\n            <div>\n              <mat-form-field>\n                <mat-select [(value)]=item.Status (selectionChange)='updateStatus($event.value,item._id)'>\n                  <mat-option value=\"Pending\">Pending</mat-option>\n                  <mat-option value=\"Approved\">Approved</mat-option>\n                  <mat-option value=\"Denied\">Denied</mat-option>\n                </mat-select>\n              </mat-form-field>\n            </div>\n          </mat-grid-tile>\n        </mat-grid-list>\n      </mat-card>\n    </ng-container>\n  </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/components/manage-bookings/manage-bookings.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/manage-bookings/manage-bookings.component.ts ***!
  \*************************************************************************/
/*! exports provided: ManageBookingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageBookingsComponent", function() { return ManageBookingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");




var ManageBookingsComponent = /** @class */ (function () {
    function ManageBookingsComponent(http, _snackBar) {
        this.http = http;
        this._snackBar = _snackBar;
        this.data = [];
    }
    ManageBookingsComponent.prototype.openSnackBar = function (message, action) {
        this._snackBar.open(message, action, {
            duration: 5000,
        });
    };
    ManageBookingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/api/posts/book/hotel').subscribe(function (obj) {
            console.log(obj);
            _this.data = obj;
        }, function (err) {
            console.log(err);
        });
    };
    ManageBookingsComponent.prototype.updateStatus = function (value, id) {
        var _this = this;
        this.http.post('/api/posts/book/hotel/update', {
            id: id,
            Status: value
        }).subscribe(function (obj) {
            _this.openSnackBar('Status Updated', 'Close');
            _this.ngOnInit();
        }, function (err) {
            console.log(err);
        });
    };
    ManageBookingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manage-bookings',
            template: __webpack_require__(/*! ./manage-bookings.component.html */ "./src/app/components/manage-bookings/manage-bookings.component.html"),
            styles: [__webpack_require__(/*! ./manage-bookings.component.css */ "./src/app/components/manage-bookings/manage-bookings.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], ManageBookingsComponent);
    return ManageBookingsComponent;
}());



/***/ }),

/***/ "./src/app/components/posts/addpost/addpost.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/posts/addpost/addpost.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=\"file\"] {\n    display: none;\n}\n.custom-file-upload {\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3N0cy9hZGRwb3N0L2FkZHBvc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Bvc3RzL2FkZHBvc3QvYWRkcG9zdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXRbdHlwZT1cImZpbGVcIl0ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG4uY3VzdG9tLWZpbGUtdXBsb2FkIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/posts/addpost/addpost.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/posts/addpost/addpost.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n    <form class=\"form\" #form=\"ngForm\" (ngSubmit)=\"onSubmit(form)\">\n        <mat-form-field>\n            <input matInput required minlength=\"0\" maxlength=\"300\" ngModel name=\"Title\" type=\"text\" #Title='ngModel'\n                placeholder=\"Title\" />\n        </mat-form-field>\n        <br>\n        <mat-form-field style=\"width: 100%;\">\n            <textarea rows=\"4\" matInput required minlength=\"0\" maxlength=\"3000\" ngModel name=\"Description\" type=\"text\"\n                #Description='ngModel' placeholder=\"Description\">\n              </textarea>\n        </mat-form-field>\n\n        <!-- start of ingrediants -->\n        <ng-container *ngIf='variant == \"cuisine\"'>\n            <br />\n            <h3>\n                Ingrediants\n            </h3>\n            <ng-container *ngFor='let item of ingrediantsCount'>\n                <span style=\"margin-right: 10px;\">\n                    <mat-form-field>\n                        <input matInput required type=\"text\" ngModel name='ingrediant_{{item}}'\n                            placeholder=\"Ingrediant\" />\n                    </mat-form-field>\n                </span>\n                <mat-form-field>\n                    <input matInput required type=\"text\" ngModel name='quantity_{{item}}' placeholder=\"Quantity\" />\n                </mat-form-field>\n                <br/>\n            </ng-container>\n            <br />\n            <button mat-raised-button color=\"primary\" type=\"button\" (click)='addIngrediant()'\n                style=\"margin-bottom: 10px;\">\n                Add Ingrediant\n            </button>\n            <mat-divider></mat-divider>\n        </ng-container>\n\n        <!-- end of recipy ingrediants -->\n        <br />\n\n        <ng-container *ngIf='variant == \"view\"'>\n            <span style=\"margin-right: 10px;\">\n                <mat-form-field>\n                    <input matInput required minlength=\"0\" maxlength=\"300\" ngModel name=\"Longitude\" type=\"text\"\n                        #Longitude='ngModel' placeholder=\"Longitude\" />\n                </mat-form-field>\n            </span>\n            <mat-form-field>\n                <input matInput required minlength=\"0\" maxlength=\"300\" ngModel name=\"Latitude\" type=\"text\"\n                    #Latitude='ngModel' placeholder=\"Latitude\" />\n            </mat-form-field>\n        </ng-container>\n        <br />\n\n        <ng-container *ngIf='variant == \"hotel\"'>\n            <div>\n                Price range\n            </div>\n            <span style=\"margin-right: 10px;\">\n                <mat-form-field>\n                    <input matInput required ngModel name=\"Min\" type=\"number\"\n                        #Min='ngModel' placeholder=\"Min\" />\n                </mat-form-field>\n            </span>\n            <mat-form-field>\n                <input matInput required ngModel name=\"Max\" type=\"number\"\n                    #Max='ngModel' placeholder=\"Max\" />\n            </mat-form-field>\n            <br />\n            <mat-form-field>\n                <input matInput required ngModel name=\"Rank\" type=\"number\"\n                    #Rank='ngModel' placeholder=\"Rank\" />\n            </mat-form-field>\n        </ng-container>\n\n\n        <mat-divider></mat-divider>\n        <br />\n        <img [src]=\"_DomSanitizationService.bypassSecurityTrustUrl(image.link)\" *ngFor=\"let image of images\"\n            style=\"max-width: 100px; margin : 10px;\" />\n\n        <ng-container *ngIf=\"imagesuploadcomplete == true \">\n            <div style=\"margin-bottom: 10px;\">\n                Attach Images:<br />\n                <label class=\"custom-file-upload\">\n                    <input type='file' (change)=\"onSelectFile($event)\">\n                    <div class=\"text-center custom-file-upload\">\n\n                        <i class=\"material-icons\">\n                            attach_file\n                        </i>\n                    </div>\n                </label>\n            </div>\n        </ng-container>\n        <ng-container *ngIf=\"imagesuploadcomplete == false\">\n            <div class=\"text-center\">\n                <mat-spinner diameter=14>\n                </mat-spinner>\n            </div>\n        </ng-container>\n        <mat-divider></mat-divider>\n        <button [disabled]=\"!Title.valid || !Description.valid ||  !imagesuploadcomplete || !form.valid\" mat-raised-button\n            color=\"primary\" style=\"margin-top: 10px;\">\n            Post\n        </button>\n    </form>\n\n</mat-card>"

/***/ }),

/***/ "./src/app/components/posts/addpost/addpost.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/posts/addpost/addpost.component.ts ***!
  \***************************************************************/
/*! exports provided: AddpostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddpostComponent", function() { return AddpostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_url_refine_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/url-refine.service */ "./src/app/services/url-refine.service.ts");






var AddpostComponent = /** @class */ (function () {
    function AddpostComponent(_DomSanitizationService, http, router, refine) {
        this._DomSanitizationService = _DomSanitizationService;
        this.http = http;
        this.router = router;
        this.refine = refine;
        this.images = [];
        this.imageslink = [];
        this.imagesuploadcomplete = true;
        this.ingrediantsCount = [0];
        this.routerLinksForView = {
            dress: '/view-dresses',
            cuisine: '/view-cuisines',
            view: '/view-attractions',
            hotel: '/view-hotels'
        };
    }
    AddpostComponent.prototype.ngOnInit = function () {
        console.log(this.variant);
    };
    AddpostComponent.prototype.addIngrediant = function () {
        this.ingrediantsCount.push(this.ingrediantsCount.length);
    };
    AddpostComponent.prototype.onSubmit = function (data) {
        var _this = this;
        console.log(data.value);
        var Ingrediants = [];
        this.ingrediantsCount.forEach(function (element) {
            if (data.value["ingrediant_" + element] && data.value["quantity_" + element]) {
                Ingrediants.push({
                    name: data.value["ingrediant_" + element],
                    quantity: data.value["quantity_" + element]
                });
            }
        });
        var obj = {
            description: data.value.Description,
            title: data.value.Title,
            images: this.imageslink,
            ingredients: Ingrediants,
            lon: data.value.Longitude,
            lat: data.value.Latitude,
            price: {
                min: data.value.Min,
                max: data.value.Max
            },
            rank: data.value.Rank
        };
        console.log(obj);
        this.http.post(this.refine.fetchUrlforpost(this.variant), obj).subscribe(function (obj) {
            _this.router.navigateByUrl(_this.routerLinksForView[_this.variant]);
        }, function (err) {
            console.log(err);
        });
    };
    AddpostComponent.prototype.onSelectFile = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var i, reader;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(event.target.files && event.target.files[0])) return [3 /*break*/, 4];
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < event.target.files.length)) return [3 /*break*/, 4];
                        reader = new FileReader();
                        return [4 /*yield*/, reader.readAsDataURL(event.target.files[i])];
                    case 2:
                        _a.sent(); // read file as data url
                        reader.onload = function (event) {
                            _this.images.push({
                                link: reader.result.toString(),
                                showFront: false
                            });
                            _this.imagesuploadcomplete = false;
                            _this.http.post('api/posts/image', {
                                "image": reader.result.toString()
                            }, {
                                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Content-Type', 'application/json'),
                                responseType: 'text'
                            }).subscribe(function (obj) {
                                console.log("from image " + obj);
                                _this.imageslink.push({
                                    link: obj
                                });
                                _this.imagesuploadcomplete = true;
                            }, function (err) {
                                console.log(err);
                            });
                        };
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AddpostComponent.prototype, "variant", void 0);
    AddpostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addpost',
            template: __webpack_require__(/*! ./addpost.component.html */ "./src/app/components/posts/addpost/addpost.component.html"),
            styles: [__webpack_require__(/*! ./addpost.component.css */ "./src/app/components/posts/addpost/addpost.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_services_url_refine_service__WEBPACK_IMPORTED_MODULE_5__["UrlRefineService"]])
    ], AddpostComponent);
    return AddpostComponent;
}());



/***/ }),

/***/ "./src/app/components/posts/editpost/editpost.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/posts/editpost/editpost.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=\"file\"] {\n    display: none;\n}\n.custom-file-upload {\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3N0cy9lZGl0cG9zdC9lZGl0cG9zdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9zdHMvZWRpdHBvc3QvZWRpdHBvc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0W3R5cGU9XCJmaWxlXCJdIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuLmN1c3RvbS1maWxlLXVwbG9hZCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/posts/editpost/editpost.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/posts/editpost/editpost.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n    <form class=\"form\" #form=\"ngForm\" (ngSubmit)=\"onSubmit(form)\">\n        <mat-form-field>\n            <input matInput required minlength=\"0\" maxlength=\"300\" ngModel name=\"Title\" type=\"text\" #Title='ngModel'\n                placeholder=\"Title\" value={{this.title}} />\n        </mat-form-field>\n        <br>\n        <mat-form-field style=\"width: 100%;\">\n            <textarea matInput required minlength=\"0\" maxlength=\"3000\" ngModel name=\"Description\" type=\"text\"\n                #Description='ngModel' placeholder=\"Description\" value={{this.description}}>\n              </textarea>\n        </mat-form-field>\n        <br />\n        <!-- start of ingrediants -->\n        <ng-container *ngIf='variant == \"cuisine\" && isdataloaded'>\n            <br />\n            <h3>\n                Ingrediants\n            </h3>\n            <ng-container *ngFor='let item of ingrediantsCount'>\n                <span style=\"margin-right: 10px;\">\n                    <mat-form-field>\n                        <input matInput required type=\"text\" ngModel name='ingrediant_{{item}}'\n                            placeholder=\"Ingrediant\" value={{this.ingredients[item].name}} />\n                    </mat-form-field>\n                </span>\n                <mat-form-field>\n                    <input matInput required type=\"text\" ngModel name='quantity_{{item}}' placeholder=\"Quantity\" value={{this.ingredients[item].quantity}} />\n                </mat-form-field>\n                <br/>\n            </ng-container>\n            <br />\n            <button mat-raised-button color=\"primary\" type=\"button\" (click)='addIngrediant()'\n                style=\"margin-bottom: 10px;\">\n                Add Ingrediant\n            </button>\n            <mat-divider></mat-divider>\n        </ng-container>\n\n        <!-- end of recipy ingrediants -->\n        <br />\n        <ng-container *ngIf='variant == \"view\"'>\n            <span style=\"margin-right: 10px;\">\n                <mat-form-field>\n                    <input matInput required minlength=\"0\" maxlength=\"300\" ngModel name=\"Longitude\" type=\"text\"\n                        #Longitude='ngModel' placeholder=\"Longitude\" value={{this.longitude}} />\n                </mat-form-field>\n            </span>\n            <mat-form-field>\n                <input matInput required minlength=\"0\" maxlength=\"300\" ngModel name=\"Latitude\" type=\"text\"\n                    #Latitude='ngModel' placeholder=\"Latitude\" value={{this.latitude}} />\n            </mat-form-field>\n        </ng-container>\n        <br />\n        <ng-container *ngIf='variant == \"hotel\"'>\n            <div>\n                Price range\n            </div>\n            <span style=\"margin-right: 10px;\">\n                <mat-form-field>\n                    <input matInput required ngModel name=\"Min\" type=\"number\" #Min='ngModel' placeholder=\"Min\"\n                        value={{this.min}} />\n                </mat-form-field>\n            </span>\n            <mat-form-field>\n                <input matInput required ngModel name=\"Max\" type=\"number\" #Max='ngModel' placeholder=\"Max\"\n                    value={{this.max}} />\n            </mat-form-field>\n            <br />\n            <mat-form-field>\n                <input matInput required ngModel name=\"Rank\" type=\"number\" #Rank='ngModel' placeholder=\"Rank\"\n                    value={{this.rank}} />\n            </mat-form-field>\n        </ng-container>\n        <br />\n        <img [src]=\"_DomSanitizationService.bypassSecurityTrustUrl(image.link)\" *ngFor=\"let image of images\"\n            style=\"max-width: 100px; margin : 10px;\" />\n        <div>\n            Attach Images:<br />\n\n            <label class=\"custom-file-upload\">\n                <input type='file' (change)=\"onSelectFile($event)\">\n                <div class=\"text-center custom-file-upload\">\n\n                    <i class=\"material-icons\">\n                        attach_file\n                    </i>\n                </div>\n            </label>\n        </div>\n\n        <button [disabled]=\"!Title.valid || !Description.valid ||  !imagesuploadcomplete\" mat-raised-button\n            color=\"primary\">Post</button>\n    </form>\n\n</mat-card>"

/***/ }),

/***/ "./src/app/components/posts/editpost/editpost.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/posts/editpost/editpost.component.ts ***!
  \*****************************************************************/
/*! exports provided: EditpostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditpostComponent", function() { return EditpostComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_url_refine_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/url-refine.service */ "./src/app/services/url-refine.service.ts");






var EditpostComponent = /** @class */ (function () {
    function EditpostComponent(_DomSanitizationService, http, router, route, refine) {
        this._DomSanitizationService = _DomSanitizationService;
        this.http = http;
        this.router = router;
        this.route = route;
        this.refine = refine;
        this.images = [];
        this.imageslink = [];
        this.imagesuploadcomplete = true;
        this.ingrediantsCount = [];
        this.Description2 = "hvddjhdjvshdvajhdvjsavdjavh";
        this.isdataloaded = false;
    }
    EditpostComponent.prototype.addIngrediant = function () {
        this.ingrediantsCount.push(this.ingrediantsCount.length);
    };
    EditpostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get(this.refine.fetchUrlforsinglepost(this.variant) + '/' + this.id).subscribe(function (data) {
            console.log(data);
            _this.title = data.title;
            _this.description = data.description;
            _this.longitude = data.location && data.location.lon;
            _this.latitude = data.location && data.location.lat;
            _this.min = data.price && data.price.min;
            _this.max = data.price && data.price.max;
            _this.rank = data.rank;
            _this.ingredients = data.ingredients;
            data.ingredients && data.ingredients.map(function (v) { return _this.addIngrediant(); });
            _this.isdataloaded = true;
            console.log(_this.ingrediantsCount);
            console.log(_this.ingredients);
        }, function (err) {
            console.log(err);
        });
    };
    EditpostComponent.prototype.onSubmit = function (data) {
        var obj = {
            description: data.value.Description,
            title: data.value.Title,
            images: this.imageslink
        };
        this.http.put(this.refine.fetchUrlforpost(this.variant) + '/' + this.id, obj).subscribe(function (obj) {
        }, function (err) {
            console.log(err);
        });
    };
    EditpostComponent.prototype.onSelectFile = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var i, reader;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(event.target.files && event.target.files[0])) return [3 /*break*/, 4];
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < event.target.files.length)) return [3 /*break*/, 4];
                        reader = new FileReader();
                        return [4 /*yield*/, reader.readAsDataURL(event.target.files[i])];
                    case 2:
                        _a.sent(); // read file as data url
                        reader.onload = function (event) {
                            _this.images.push({
                                link: reader.result.toString(),
                                showFront: false
                            });
                            _this.imagesuploadcomplete = false;
                            _this.http.post('api/posts/image', {
                                "image": reader.result.toString()
                            }, {
                                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Content-Type', 'application/json'),
                                responseType: 'text'
                            }).subscribe(function (obj) {
                                _this.imageslink.push({
                                    link: obj
                                });
                                _this.imagesuploadcomplete = true;
                            }, function (err) {
                                console.log(err);
                            });
                        };
                        _a.label = 3;
                    case 3:
                        i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditpostComponent.prototype, "id", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditpostComponent.prototype, "variant", void 0);
    EditpostComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editpost',
            template: __webpack_require__(/*! ./editpost.component.html */ "./src/app/components/posts/editpost/editpost.component.html"),
            styles: [__webpack_require__(/*! ./editpost.component.css */ "./src/app/components/posts/editpost/editpost.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], src_app_services_url_refine_service__WEBPACK_IMPORTED_MODULE_5__["UrlRefineService"]])
    ], EditpostComponent);
    return EditpostComponent;
}());



/***/ }),

/***/ "./src/app/components/posts/postcard/postcard.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/posts/postcard/postcard.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-spinner::ng-deep circle {\n    stroke: red;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3N0cy9wb3N0Y2FyZC9wb3N0Y2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztFQUNiIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wb3N0cy9wb3N0Y2FyZC9wb3N0Y2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1zcGlubmVyOjpuZy1kZWVwIGNpcmNsZSB7XG4gICAgc3Ryb2tlOiByZWQ7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/components/posts/postcard/postcard.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/posts/postcard/postcard.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf='show'>\n  <mat-card style=\"position: relative; height: 100%;\">\n    <mat-card-header>\n      <mat-card-title style=\"overflow-wrap: break-word;\">\n        {{post.title}}\n      </mat-card-title>\n      <mat-card-subtitle>\n        Created by {{post.createdBy ? post.createdBy.name : '' }}\n      </mat-card-subtitle>\n    </mat-card-header>\n    <mat-card-content style=\"overflow-wrap: break-word; overflow: hidden; height: 100px;\">\n      <ng-container *ngIf=\"this.variant === 'hotel'\">\n        <strong>Rank</strong><span style=\"float: right;\"><strong>{{post.rank}}</strong></span>\n        <br />\n        <strong>Min price ($)</strong><span style=\"float: right;\"><strong>{{post.price.min}}</strong></span>\n        <br />\n        <strong>Max price ($)</strong><span style=\"float: right;\"><strong>{{post.price.max}}</strong></span>\n        <br />\n      </ng-container>\n      Desciption:\n      <br />\n      {{post.description}}\n\n    </mat-card-content>\n    <ng-container *ngIf=\"post.images !== null && post.images.length > 0\">\n      <img src={{post.images[0].link}} style=\"object-fit: contain; max-height: 200px;\" mat-card-image>\n    </ng-container>\n    <ng-container *ngIf=\"post.images == null || post.images.length == 0 \">\n      <img src=\"https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg\"\n        style=\"object-fit: contain; max-height: 200px;\" mat-card-image>\n    </ng-container>\n    <mat-card-actions style=\"position: absolute; bottom: 0; left: 0; padding:1rem; width: 100%; z-index: 9999;\">\n      <span style=\"float: right;\">\n        <button mat-button style=\"padding-left: 10px;\" (click)=\"Edit()\">\n          Edit\n          <i class=\"material-icons\">\n            edit\n          </i>\n        </button>\n        <button mat-button style=\"color: red; stroke: red;\" (click)=\"Delete()\">\n          <ng-container *ngIf=\"!loadingDelete\">\n            Delete\n            <i class=\"material-icons\">\n              delete\n            </i>\n          </ng-container>\n          <ng-container *ngIf=\"loadingDelete\">\n            <mat-spinner diameter=\"20\"></mat-spinner>\n          </ng-container>\n        </button>\n      </span>\n    </mat-card-actions>\n  </mat-card>\n</ng-container>"

/***/ }),

/***/ "./src/app/components/posts/postcard/postcard.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/posts/postcard/postcard.component.ts ***!
  \*****************************************************************/
/*! exports provided: PostcardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostcardComponent", function() { return PostcardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_url_refine_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/url-refine.service */ "./src/app/services/url-refine.service.ts");






var PostcardComponent = /** @class */ (function () {
    function PostcardComponent(http, _snackBar, router, refine) {
        this.http = http;
        this._snackBar = _snackBar;
        this.router = router;
        this.refine = refine;
        this.routerLinksForEdit = {
            dress: '/edit-dress',
            cuisine: '/edit-cuisine',
            view: '/edit-attractions',
            hotel: '/edit-hotel'
        };
        this.loadingDelete = false;
        this.show = true;
    }
    PostcardComponent.prototype.openSnackBar = function (message, action) {
        this._snackBar.open(message, action, {
            duration: 2000,
        });
    };
    PostcardComponent.prototype.Delete = function () {
        var _this = this;
        this.loadingDelete = true;
        this.http.delete(this.refine.fetchUrlforDelete(this.variant) + "/" + this.post._id).subscribe(function (obj) {
            _this.openSnackBar("Post Deleted", "Close");
            _this.loadingDelete = false;
            // this.show=false
        }, function (err) {
            console.log(err);
        });
        console.log(this.refine.fetchUrlforDelete(this.variant));
        console.log(this.post._id);
    };
    PostcardComponent.prototype.Edit = function () {
        this.router.navigateByUrl(this.routerLinksForEdit[this.variant] + "/" + this.post._id);
    };
    PostcardComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PostcardComponent.prototype, "post", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PostcardComponent.prototype, "variant", void 0);
    PostcardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-postcard',
            template: __webpack_require__(/*! ./postcard.component.html */ "./src/app/components/posts/postcard/postcard.component.html"),
            styles: [__webpack_require__(/*! ./postcard.component.css */ "./src/app/components/posts/postcard/postcard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_services_url_refine_service__WEBPACK_IMPORTED_MODULE_5__["UrlRefineService"]])
    ], PostcardComponent);
    return PostcardComponent;
}());



/***/ }),

/***/ "./src/app/components/posts/viewposts/viewposts.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/posts/viewposts/viewposts.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n    width: calc(100% - 70px);\n    height: calc(100% - 70px);\n  }\n  .material-icons{\n    font-size: medium;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wb3N0cy92aWV3cG9zdHMvdmlld3Bvc3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3QkFBd0I7SUFDeEIseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSxpQkFBaUI7RUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Bvc3RzL3ZpZXdwb3N0cy92aWV3cG9zdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJkIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNzBweCk7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA3MHB4KTtcbiAgfVxuICAubWF0ZXJpYWwtaWNvbnN7XG4gICAgZm9udC1zaXplOiBtZWRpdW07XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/components/posts/viewposts/viewposts.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/posts/viewposts/viewposts.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div style=\"margin-left: 15px; text-align: center; margin-top: 15px;\">\n  <button mat-stroked-button style=\"font-size: large; text-align: center; width: 100%;\" routerLink={{routerLinksForAdd[this.variant]}}\t>\n     <i class=\"material-icons\">\n         add\n         </i>\n   Add New Post\n  </button>\n </div>\n \n <mat-grid-list cols=\"3\" rowHeight=\"500px\">\n   <ng-container *ngFor=\"let post of posts\">\n     <mat-grid-tile>\n       <app-postcard variant={{this.variant}} [post]='post' style=\"height: 85%; width: 100%; margin: 15px;\"></app-postcard>\n     </mat-grid-tile>\n   </ng-container>\n </mat-grid-list>"

/***/ }),

/***/ "./src/app/components/posts/viewposts/viewposts.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/posts/viewposts/viewposts.component.ts ***!
  \*******************************************************************/
/*! exports provided: ViewpostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewpostsComponent", function() { return ViewpostsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_services_url_refine_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/url-refine.service */ "./src/app/services/url-refine.service.ts");




var ViewpostsComponent = /** @class */ (function () {
    function ViewpostsComponent(http, refine) {
        this.http = http;
        this.refine = refine;
        this.posts = null;
        this.routerLinksForAdd = {
            dress: '/add-dress',
            cuisine: '/add-cuisine',
            view: '/add-attraction',
            hotel: '/add-hotel'
        };
    }
    ViewpostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get(this.refine.fetchUrlforallView(this.variant)).subscribe(function (obj) {
            console.log("from obj " + obj);
            console.log(obj);
            _this.posts = obj;
        }, function (err) {
            console.log(err);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ViewpostsComponent.prototype, "variant", void 0);
    ViewpostsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-viewposts',
            template: __webpack_require__(/*! ./viewposts.component.html */ "./src/app/components/posts/viewposts/viewposts.component.html"),
            styles: [__webpack_require__(/*! ./viewposts.component.css */ "./src/app/components/posts/viewposts/viewposts.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], src_app_services_url_refine_service__WEBPACK_IMPORTED_MODULE_3__["UrlRefineService"]])
    ], ViewpostsComponent);
    return ViewpostsComponent;
}());



/***/ }),

/***/ "./src/app/components/reviews/reviews.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/reviews/reviews.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    width: 100%;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXZpZXdzL3Jldmlld3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7RUFDYiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmV2aWV3cy9yZXZpZXdzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgIl19 */"

/***/ }),

/***/ "./src/app/components/reviews/reviews.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/reviews/reviews.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin: 50px;\">\n  <mat-card>\n    <h1 class=\"mat-display-1\">Ratings List</h1>\n\n    <h3>\n      Total Site Rating : {{siteRating}}\n    </h3>\n\n\n    <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n      <!--- Note that these columns can be defined in any order.\n            The actual rendered columns are set as a property on the row definition\" -->\n\n      <!-- Position Column -->\n      <ng-container matColumnDef=\"position\">\n        <th mat-header-cell *matHeaderCellDef> No. </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n      </ng-container>\n\n      <!-- Name Column -->\n      <ng-container matColumnDef=\"name\">\n        <th mat-header-cell *matHeaderCellDef> Name </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n      </ng-container>\n\n      <!-- Weight Column -->\n      <ng-container matColumnDef=\"email\">\n        <th mat-header-cell *matHeaderCellDef> Email </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.email}} </td>\n      </ng-container>\n\n      <!-- Symbol Column -->\n      <ng-container matColumnDef=\"rating\">\n        <th mat-header-cell *matHeaderCellDef> Rating </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.rating}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"actions\">\n        <th mat-header-cell *matHeaderCellDef> Actions </th>\n        <td mat-cell *matCellDef=\"let element\">\n          <button mat-button (click)='onDelete(element.actions)' color='warn'>\n            Delete\n          </button>\n        </td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n  </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/components/reviews/reviews.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/reviews/reviews.component.ts ***!
  \*********************************************************/
/*! exports provided: ReviewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewsComponent", function() { return ReviewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");




var ReviewsComponent = /** @class */ (function () {
    function ReviewsComponent(http, _snackBar) {
        this.http = http;
        this._snackBar = _snackBar;
        this.displayedColumns = ['position', 'name', 'email', 'rating', 'actions'];
        this.dataSource = [];
        this.siteRating = 0;
    }
    ReviewsComponent.prototype.openSnackBar = function (message, action) {
        this._snackBar.open(message, action, {
            duration: 5000,
        });
    };
    ReviewsComponent.prototype.getSiterating = function () {
        var _this = this;
        this.http.get('/api/reviews/rating').subscribe(function (obj) {
            _this.siteRating = obj.rating.toFixed(2);
        }, function (err) {
            console.log(err);
        });
    };
    ReviewsComponent.prototype.onDelete = function (id) {
        var _this = this;
        this.http.delete("/api/reviews/" + id).subscribe(function (obj) {
            _this.openSnackBar('Deleted', 'close');
            _this.getData();
            _this.getSiterating();
        }, function (err) {
            console.log(err);
        });
    };
    ReviewsComponent.prototype.getData = function () {
        var _this = this;
        this.http.get('/api/reviews').subscribe(function (obj) {
            console.log(obj);
            var data = [];
            obj.map(function (v, i) {
                data.push({
                    position: i + 1,
                    name: v.name,
                    email: v.email,
                    rating: v.rating,
                    actions: v._id
                });
            });
            _this.dataSource = data;
        }, function (err) {
            console.log(err);
        });
    };
    ReviewsComponent.prototype.ngOnInit = function () {
        this.getData();
        this.getSiterating();
    };
    ReviewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-reviews',
            template: __webpack_require__(/*! ./reviews.component.html */ "./src/app/components/reviews/reviews.component.html"),
            styles: [__webpack_require__(/*! ./reviews.component.css */ "./src/app/components/reviews/reviews.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], ReviewsComponent);
    return ReviewsComponent;
}());



/***/ }),

/***/ "./src/app/components/view-admins/view-admins.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/view-admins/view-admins.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    width: 100%;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92aWV3LWFkbWlucy92aWV3LWFkbWlucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztFQUNiIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy92aWV3LWFkbWlucy92aWV3LWFkbWlucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/components/view-admins/view-admins.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/view-admins/view-admins.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin: 50px;\">\n  <mat-card>\n    <h1 class=\"mat-display-1\">Admins List</h1>\n    <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n      <!--- Note that these columns can be defined in any order.\n            The actual rendered columns are set as a property on the row definition\" -->\n    \n      <!-- Position Column -->\n      <ng-container matColumnDef=\"position\">\n        <th mat-header-cell *matHeaderCellDef> No. </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n      </ng-container>\n    \n      <!-- Name Column -->\n      <ng-container matColumnDef=\"name\">\n        <th mat-header-cell *matHeaderCellDef> Name </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n      </ng-container>\n    \n      <!-- Weight Column -->\n      <ng-container matColumnDef=\"email\">\n        <th mat-header-cell *matHeaderCellDef> Email </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.email}} </td>\n      </ng-container>\n    \n      <!-- Symbol Column -->\n      <ng-container matColumnDef=\"authorization\">\n        <th mat-header-cell *matHeaderCellDef> Authorization </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.authorization}} </td>\n      </ng-container>\n\n      <ng-container matColumnDef=\"actions\">\n        <th mat-header-cell *matHeaderCellDef> Actions </th>\n        <td mat-cell *matCellDef=\"let element\">\n           <button mat-button (click)='onDelete(element.actions)' color='warn' >\n             Delete\n            </button> \n          </td>\n      </ng-container>\n    \n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n    \n  </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/components/view-admins/view-admins.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/view-admins/view-admins.component.ts ***!
  \*****************************************************************/
/*! exports provided: ViewAdminsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewAdminsComponent", function() { return ViewAdminsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");




var ViewAdminsComponent = /** @class */ (function () {
    function ViewAdminsComponent(http, _snackBar) {
        this.http = http;
        this._snackBar = _snackBar;
        this.displayedColumns = ['position', 'name', 'email', 'authorization', 'actions'];
        this.dataSource = [];
    }
    ViewAdminsComponent.prototype.openSnackBar = function (message, action) {
        this._snackBar.open(message, action, {
            duration: 5000,
        });
    };
    ViewAdminsComponent.prototype.onDelete = function (id) {
        var _this = this;
        this.http.delete("/api/admin/" + id).subscribe(function (obj) {
            _this.openSnackBar('Deleted', 'close');
            _this.getData();
        }, function (err) {
            console.log(err);
        });
    };
    ViewAdminsComponent.prototype.getData = function () {
        var _this = this;
        this.http.get('/api/admin').subscribe(function (obj) {
            console.log(obj);
            var data = [];
            obj.map(function (v, i) {
                data.push({
                    position: i + 1,
                    name: v.name,
                    email: v.email,
                    authorization: v.authorization,
                    actions: v._id
                });
            });
            _this.dataSource = data;
        }, function (err) {
            console.log(err);
        });
    };
    ViewAdminsComponent.prototype.ngOnInit = function () {
        this.getData();
    };
    ViewAdminsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-view-admins',
            template: __webpack_require__(/*! ./view-admins.component.html */ "./src/app/components/view-admins/view-admins.component.html"),
            styles: [__webpack_require__(/*! ./view-admins.component.css */ "./src/app/components/view-admins/view-admins.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], ViewAdminsComponent);
    return ViewAdminsComponent;
}());



/***/ }),

/***/ "./src/app/components/views/addviews/addviews.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/views/addviews/addviews.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=\"file\"] {\n    display: none;\n}\n.custom-file-upload {\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy92aWV3cy9hZGR2aWV3cy9hZGR2aWV3cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmlld3MvYWRkdmlld3MvYWRkdmlld3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0W3R5cGU9XCJmaWxlXCJdIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuLmN1c3RvbS1maWxlLXVwbG9hZCB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/views/addviews/addviews.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/views/addviews/addviews.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin: 50px;\">\n    <mat-card>\n        <h1 class=\"mat-display-1\" style=\"margin: 15px;\">Add Attractions</h1>\n        <div style=\"margin: 15px;\">\n            <app-addpost variant='view'></app-addpost>\n        </div>\n    </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/components/views/addviews/addviewscomponent.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/views/addviews/addviewscomponent.ts ***!
  \****************************************************************/
/*! exports provided: AddviewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddviewsComponent", function() { return AddviewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_url_refine_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/url-refine.service */ "./src/app/services/url-refine.service.ts");



var AddviewsComponent = /** @class */ (function () {
    function AddviewsComponent(refineurl) {
        this.refineurl = refineurl;
    }
    AddviewsComponent.prototype.ngOnInit = function () {
    };
    AddviewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addviews',
            template: __webpack_require__(/*! ./addviews.component.html */ "./src/app/components/views/addviews/addviews.component.html"),
            styles: [__webpack_require__(/*! ./addviews.component.css */ "./src/app/components/views/addviews/addviews.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_url_refine_service__WEBPACK_IMPORTED_MODULE_2__["UrlRefineService"]])
    ], AddviewsComponent);
    return AddviewsComponent;
}());



/***/ }),

/***/ "./src/app/components/views/editview/editview.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/views/editview/editview.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmlld3MvZWRpdHZpZXcvZWRpdHZpZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/views/editview/editview.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/views/editview/editview.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin: 50px;\">\n    <mat-card>\n        <h1 class=\"mat-display-1\" style=\"margin: 15px;\">Edit attractions</h1>\n        <div style=\"margin: 15px;\" >\n            <app-editpost variant='view' id={{this.id}}></app-editpost>\n        </div>\n    </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/components/views/editview/editviews.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/views/editview/editviews.component.ts ***!
  \******************************************************************/
/*! exports provided: EditViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditViewComponent", function() { return EditViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var EditViewComponent = /** @class */ (function () {
    function EditViewComponent(_DomSanitizationService, http, router, route) {
        this._DomSanitizationService = _DomSanitizationService;
        this.http = http;
        this.router = router;
        this.route = route;
    }
    EditViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = params.id;
            console.log(params);
        });
    };
    EditViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editview',
            template: __webpack_require__(/*! ./editview.component.html */ "./src/app/components/views/editview/editview.component.html"),
            styles: [__webpack_require__(/*! ./editview.component.css */ "./src/app/components/views/editview/editview.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], EditViewComponent);
    return EditViewComponent;
}());



/***/ }),

/***/ "./src/app/components/views/viewattractions/viewattractions.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/views/viewattractions/viewattractions.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdmlld3Mvdmlld2F0dHJhY3Rpb25zL3ZpZXdhdHRyYWN0aW9ucy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/views/viewattractions/viewattractions.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/views/viewattractions/viewattractions.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"margin: 50px;\">\n    <mat-card>\n        <h1 class=\"mat-display-1\" style=\"margin: 15px;\">Attractions</h1>\n        <app-viewposts variant='view'></app-viewposts>\n    </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/components/views/viewattractions/viewattractions.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/views/viewattractions/viewattractions.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ViewAttractionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewAttractionsComponent", function() { return ViewAttractionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ViewAttractionsComponent = /** @class */ (function () {
    function ViewAttractionsComponent() {
    }
    ViewAttractionsComponent.prototype.ngOnInit = function () {
    };
    ViewAttractionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-viewattractions',
            template: __webpack_require__(/*! ./viewattractions.component.html */ "./src/app/components/views/viewattractions/viewattractions.component.html"),
            styles: [__webpack_require__(/*! ./viewattractions.component.css */ "./src/app/components/views/viewattractions/viewattractions.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ViewAttractionsComponent);
    return ViewAttractionsComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        this.authenticationService.Checktoken();
        var currentUser = this.authenticationService.isLoggedin;
        if (currentUser) {
            // authorised so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/signin']
        // , { queryParams: { returnUrl: state.url }}
        );
        return false;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/material-module.ts":
/*!************************************!*\
  !*** ./src/app/material-module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm5/stepper.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm5/badge.es5.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm5/bottom-sheet.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm5/button-toggle.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm5/tree.es5.js");











































var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [
                _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"],
                _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
                _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
                _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"],
                _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"],
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());

/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */ 


/***/ }),

/***/ "./src/app/pages/sign-in/sign-in.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/sign-in/sign-in.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NpZ24taW4vc2lnbi1pbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/sign-in/sign-in.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/sign-in/sign-in.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"padding: 25px; text-align: center;\">\n  <mat-card style=\"text-align: center; max-width: fit-content; margin: auto; padding: 25px;\">\n    <div style=\"padding: 25px;\">\n      <img src='./assets/images/Logo.png' width=\"200px\" />\n    </div>\n    <mat-card-title>\n      Admin Dashboard\n    </mat-card-title>\n    <mat-card-subtitle>\n      Sign In\n    </mat-card-subtitle>\n    <form #form=\"ngForm\" (ngSubmit)=\"onSubmit(form.value)\">\n      <mat-form-field>\n        <input matInput required minlength=\"6\" maxlength=\"50\" ngModel name=\"Email\" type=\"email\" #Email='ngModel'\n          pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" placeholder=\"Email\" />\n      </mat-form-field>\n      <br>\n      <mat-form-field>\n        <input matInput required minlength=\"6\" maxlength=\"50\" ngModel name=\"Password\" type=\"password\"\n          #Password='ngModel' placeholder=\"Password\" />\n      </mat-form-field>\n      <br>\n\n      <button [disabled]=\"!Email.valid || !Password.valid\" mat-raised-button color=\"primary\">Login</button>\n      <div *ngIf=\"Wrong\" class=\"text-danger\">\n        Wrong Password / Username\n      </div>\n    </form>\n  </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/pages/sign-in/sign-in.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/sign-in/sign-in.component.ts ***!
  \****************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var SignInComponent = /** @class */ (function () {
    function SignInComponent(http, auth, router) {
        this.http = http;
        this.auth = auth;
        this.router = router;
    }
    SignInComponent.prototype.ngOnInit = function () {
        this.Wrong = false;
    };
    SignInComponent.prototype.onSubmit = function (data) {
        var _this = this;
        this.Wrong = false;
        var obj = {
            email: data.Email,
            password: data.Password
        };
        this.http.post('/api/user/login', obj).subscribe(function (obj) {
            console.log("from obj " + obj);
            console.log(obj);
            _this.auth.setData(obj);
            _this.router.navigate(['view-cuisines']);
        }, function (err) {
            _this.Wrong = true;
            console.log(err);
        });
    };
    SignInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sign-in',
            template: __webpack_require__(/*! ./sign-in.component.html */ "./src/app/pages/sign-in/sign-in.component.html"),
            styles: [__webpack_require__(/*! ./sign-in.component.css */ "./src/app/pages/sign-in/sign-in.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AuthService = /** @class */ (function () {
    function AuthService() {
        this.Checktoken();
    }
    AuthService.prototype.setData = function (data) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('me', JSON.stringify(data.user));
        this.Checktoken();
    };
    AuthService.prototype.Checktoken = function () {
        if (localStorage.getItem('token')) {
            this.isLoggedin = true;
        }
        else {
            this.isLoggedin = false;
        }
    };
    AuthService.prototype.profilepic = function () {
        var x = JSON.parse(localStorage.getItem('me'));
        return x.profilepic;
    };
    AuthService.prototype.name = function () {
        var x = JSON.parse(localStorage.getItem('me'));
        return x.fullname;
    };
    AuthService.prototype.gettoken = function () {
        return localStorage.getItem('token');
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('token');
        localStorage.removeItem('me');
        this.Checktoken();
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/token.interceptor.ts":
/*!***********************************************!*\
  !*** ./src/app/services/token.interceptor.ts ***!
  \***********************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");

// src/app/auth/token.interceptor.ts


var TokenInterceptor = /** @class */ (function () {
    function TokenInterceptor(auth) {
        this.auth = auth;
    }
    TokenInterceptor.prototype.intercept = function (request, next) {
        var x = this.auth.gettoken();
        request = request.clone({
            setHeaders: {
                Authorization: "Bearer " + x
            }
        });
        return next.handle(request);
    };
    TokenInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], TokenInterceptor);
    return TokenInterceptor;
}());



/***/ }),

/***/ "./src/app/services/url-refine.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/url-refine.service.ts ***!
  \************************************************/
/*! exports provided: UrlRefineService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlRefineService", function() { return UrlRefineService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UrlRefineService = /** @class */ (function () {
    function UrlRefineService() {
    }
    UrlRefineService.prototype.fetchUrlforpost = function (value) {
        switch (value) {
            case 'cuisine':
                return 'api/posts/cuisine';
            case 'view':
                return 'api/posts/view';
            case 'dress':
                return 'api/posts/dress';
            case 'hotel':
                return 'api/posts/hotels';
        }
    };
    UrlRefineService.prototype.fetchUrlforallView = function (value) {
        switch (value) {
            case 'cuisine':
                return 'api/posts/cuisines/1/999';
            case 'view':
                return 'api/posts/views/1/999';
            case 'dress':
                return 'api/posts/dresses/1/999';
            case 'hotel':
                return 'api/posts/hotels/1/999';
        }
    };
    UrlRefineService.prototype.fetchUrlforsinglepost = function (value) {
        switch (value) {
            case 'cuisine':
                return 'api/posts/cuisine';
            case 'view':
                return 'api/posts/view';
            case 'dress':
                return 'api/posts/dress';
            case 'hotel':
                return 'api/posts/hotel/';
        }
    };
    UrlRefineService.prototype.fetchUrlforDelete = function (value) {
        switch (value) {
            case 'cuisine':
                return 'api/posts/cuisine';
            case 'view':
                return 'api/posts/view';
            case 'dress':
                return 'api/posts/dress';
            case 'hotel':
                return 'api/posts/hotels';
        }
    };
    UrlRefineService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UrlRefineService);
    return UrlRefineService;
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/abdullah/Desktop/Custom projects/afghan larkhod/AfghanTourismBackend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map