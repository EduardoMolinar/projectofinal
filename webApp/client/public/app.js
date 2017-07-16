'use strict';

var pdf = angular.module("pdf", ['ngTouch','ngAnimate', 'ui.bootstrap',
  'ngToast']);

angular
    .module('pdFreakApp', [
        'appRoutes',
        'pdf'
    ]);
