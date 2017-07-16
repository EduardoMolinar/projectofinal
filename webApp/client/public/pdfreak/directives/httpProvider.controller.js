pdf.service('serviceInvoker', ["$http", function($http) {
"use strict"
  var vm = this;

  vm.set = function( type, url, data) {
    return $http({
       method : type,
        url : url,
        data: data,
        // headers: {
        //   'Content-Type':'application/json'
        // }
      });

  }

  vm.fileAdder = function(url, wrapper) {
    var fd = new FormData();
    fd.append('name', wrapper.name);
    fd.append('description', wrapper.description);
    fd.append('pdf', wrapper.pdf);
    fd.append('user', wrapper.user);
    return $http.post(url, fd, {
        transformRequest: angular.identity,
        headers: {'Content-Type': undefined}
    });

  }

}]);
