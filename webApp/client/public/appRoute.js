angular
    .module('appRoutes', ["ui.router"])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $stateProvider.state({
        name: 'pdf',
        url: '/',
        templateUrl: 'public/pdfreak/templates/home.html',
        controller: 'pdfController'
    });

    $urlRouterProvider.otherwise('/');
}]);
