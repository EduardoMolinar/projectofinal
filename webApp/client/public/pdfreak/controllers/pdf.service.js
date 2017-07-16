pdf.service('pdfService', [ 'serviceInvoker', function(serviceInvoker) {
  var vm = this;
  var BASE_URL = "http://localhost:8000/";

  vm.getAllPdf = function() {
    return serviceInvoker.set("GET", BASE_URL + "getAllPdf/" + "?format=json");
  }

  vm.createDocument = function(wrapper) {
    return serviceInvoker.fileAdder(BASE_URL + "newPdf/", wrapper);
  }

  vm.editPdf = function(id, editWrapper) {
    console.log(editWrapper);
    return serviceInvoker.set("PUT", BASE_URL + "getPdf/"+ id + "/", editWrapper);
  }
}]);
